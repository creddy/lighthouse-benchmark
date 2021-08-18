"use strict";

const REPORT_PERCENTILES = [50, 90];
const METRICS_TO_SHOW = [
  'interactive',
  'speedIndex',
  'totalBlockingTime',
  'observedDomContentLoaded'
]

const glob = require("glob")
const fs = require("fs");
const percentile = require("percentile");

const pages = glob.sync('.lighthouseci/lhr-*.json');

const lhciResults = {};

pages.forEach((fileName) => {
  const results = JSON.parse(fs.readFileSync(fileName));
  if (!lhciResults[results.finalUrl]) {
    lhciResults[results.finalUrl] = { serverResponseTime: [] };

    METRICS_TO_SHOW.forEach((metric) => {
      lhciResults[results.finalUrl][metric] = [];
    });
  }

  METRICS_TO_SHOW.forEach((metric) => {
    lhciResults[results.finalUrl][metric].push(results.audits.metrics.details.items[0][metric]);
  });

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


