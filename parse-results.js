"use strict";

const REPORT_PERCENTILES = [50, 90];

const glob = require("glob")
const fs = require("fs");
const percentile = require("percentile");

const pages = glob.sync('.lighthouseci/lhr-*.json');

const ttiResults = {};

pages.forEach((fileName) => {
  const results = JSON.parse(fs.readFileSync(fileName));
  if (!ttiResults[results.finalUrl]) {
    ttiResults[results.finalUrl] = [];
  }

  ttiResults[results.finalUrl].push(results.audits.interactive.numericValue);
});

for(let url in ttiResults) {
  const percentiles = percentile(REPORT_PERCENTILES, ttiResults[url]);
  console.log('-------------------');
  console.log('Performance results');
  console.log('Number of runs:', ttiResults[url].length);
  console.log('URL:', url.replace(/\/\/.*@/, '//'));
  console.log("p50 time to interactive is", percentiles[0].toFixed(), "ms", );
  console.log("p90 time to interactive is", percentiles[1].toFixed(), "ms");
  console.log('-------------------\n');
}


