# Benchmark via lighthouse

This project is a wrapper around [lhci](https://github.com/GoogleChrome/lighthouse-ci)

## Getting started

Add a `.env` file

```
cp .env.example .env
```

And modify the file for your needs. If you need basic auth add it to the URL like so:

```
URLS=( 'http://USERNAME:PASSWORD@example.com' )
```

## Using Docker

```
docker build -t lighthouse-bench .
docker run lighthouse-bench
```

## Without Docker

This has been tested using

```
$ node --version
v14.17.3
```

Install the dependencies

```
npm i
```

## Run

```
npm run benchmark
```

## Get your results

```
npm run results
```

```
Started at:  Thu Sep 02 2021 10:56:37 GMT-0400 (Eastern Daylight Time)
Finished at: Thu Sep 02 2021 10:58:00 GMT-0400 (Eastern Daylight Time)

-------------------
Performance results
Number of runs: 5
URL: http://example.com/
┌─────────┬────────────────────────┬─────────┬─────────┐
│ (index) │         metric         │   p50   │   p90   │
├─────────┼────────────────────────┼─────────┼─────────┤
│    0    │  'serverResponseTime'  │ '11ms'  │ '14ms'  │
│    1    │ 'firstContentfulPaint' │ '670ms' │ '723ms' │
│    2    │  'totalBlockingTime'   │  '0ms'  │  '0ms'  │
│    3    │     'interactive'      │ '670ms' │ '723ms' │
└─────────┴────────────────────────┴─────────┴─────────┘
-------------------

-------------------
Performance results
Number of runs: 5
URL: https://www.google.com/
┌─────────┬────────────────────────┬──────────┬──────────┐
│ (index) │         metric         │   p50    │   p90    │
├─────────┼────────────────────────┼──────────┼──────────┤
│    0    │  'serverResponseTime'  │  '86ms'  │  '98ms'  │
│    1    │ 'firstContentfulPaint' │ '2703ms' │ '2797ms' │
│    2    │  'totalBlockingTime'   │ '481ms'  │ '512ms'  │
│    3    │     'interactive'      │ '5719ms' │ '5859ms' │
└─────────┴────────────────────────┴──────────┴──────────┘
-------------------

-------------------
Performance results
Number of runs: 5
URL: https://www.iana.org/
┌─────────┬────────────────────────┬──────────┬──────────┐
│ (index) │         metric         │   p50    │   p90    │
├─────────┼────────────────────────┼──────────┼──────────┤
│    0    │  'serverResponseTime'  │  '22ms'  │  '24ms'  │
│    1    │ 'firstContentfulPaint' │ '1628ms' │ '1698ms' │
│    2    │  'totalBlockingTime'   │  '62ms'  │ '128ms'  │
│    3    │     'interactive'      │ '4981ms' │ '5062ms' │
└─────────┴────────────────────────┴──────────┴──────────┘
-------------------
```
