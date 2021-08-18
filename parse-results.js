"use strict";

const REPORT_PERCENTILES = [50, 90];

const glob = require("glob")
const fs = require("fs");
const percentile = require("percentile");

const pages = glob.sync('.lighthouseci/lhr-*.json');

const lhciResults = {};

pages.forEach((fileName) => {
  const results = JSON.parse(fs.readFileSync(fileName));
  if (!lhciResults[results.finalUrl]) {
    lhciResults[results.finalUrl] = { interactive: [], speedIndex: [], totalBlockingTime: [], serverResponseTime: []};
  }

  lhciResults[results.finalUrl]['interactive'].push(results.audits.metrics.details.items[0].interactive);
  lhciResults[results.finalUrl]['speedIndex'].push(results.audits.metrics.details.items[0].speedIndex);
  lhciResults[results.finalUrl]['totalBlockingTime'].push(results.audits.metrics.details.items[0].totalBlockingTime);
  lhciResults[results.finalUrl]['serverResponseTime'].push(results.audits['server-response-time'].numericValue);

});

for(let url in lhciResults) {
  console.log('-------------------');
  console.log('Performance results');
  console.log('Number of runs:', lhciResults[url]['interactive'].length);
  console.log('URL:', url.replace(/\/\/.*@/, '//'));

  const metrics = [];

  Object.keys(lhciResults[url]).forEach((metric) => {
    const percentiles = percentile(REPORT_PERCENTILES, lhciResults[url][metric]);
    metrics.push({
      metric: metric,
      'p50': percentiles[0].toFixed() + 'ms',
      'p90': percentiles[1].toFixed() + 'ms'
    })
  })
  console.table(metrics);
  console.log('-------------------\n');
}


