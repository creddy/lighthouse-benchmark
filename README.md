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
-------------------
Performance results
Number of runs: 5
URL: http://example.com/
┌─────────┬────────────────────────────┬─────────┬─────────┐
│ (index) │           metric           │   p50   │   p90   │
├─────────┼────────────────────────────┼─────────┼─────────┤
│    0    │    'serverResponseTime'    │ '11ms'  │ '12ms'  │
│    1    │   'firstContentfulPaint'   │ '193ms' │ '194ms' │
│    2    │        'speedIndex'        │ '193ms' │ '194ms' │
│    3    │       'interactive'        │ '193ms' │ '194ms' │
│    4    │    'totalBlockingTime'     │  '0ms'  │  '0ms'  │
│    5    │ 'observedLastVisualChange' │ '65ms'  │ '73ms'  │
└─────────┴────────────────────────────┴─────────┴─────────┘
-------------------

-------------------
Performance results
Number of runs: 5
URL: https://www.google.com/
┌─────────┬────────────────────────────┬─────────┬──────────┐
│ (index) │           metric           │   p50   │   p90    │
├─────────┼────────────────────────────┼─────────┼──────────┤
│    0    │    'serverResponseTime'    │ '84ms'  │ '158ms'  │
│    1    │   'firstContentfulPaint'   │ '519ms' │ '777ms'  │
│    2    │        'speedIndex'        │ '519ms' │ '819ms'  │
│    3    │       'interactive'        │ '519ms' │ '777ms'  │
│    4    │    'totalBlockingTime'     │  '0ms'  │  '0ms'   │
│    5    │ 'observedLastVisualChange' │ '906ms' │ '1199ms' │
└─────────┴────────────────────────────┴─────────┴──────────┘
-------------------

-------------------
Performance results
Number of runs: 5
URL: https://www.iana.org/
┌─────────┬────────────────────────────┬──────────┬──────────┐
│ (index) │           metric           │   p50    │   p90    │
├─────────┼────────────────────────────┼──────────┼──────────┤
│    0    │    'serverResponseTime'    │  '80ms'  │  '94ms'  │
│    1    │   'firstContentfulPaint'   │ '926ms'  │ '963ms'  │
│    2    │        'speedIndex'        │ '1084ms' │ '1137ms' │
│    3    │       'interactive'        │ '1297ms' │ '1480ms' │
│    4    │    'totalBlockingTime'     │  '0ms'   │  '0ms'   │
│    5    │ 'observedLastVisualChange' │ '1064ms' │ '1161ms' │
└─────────┴────────────────────────────┴──────────┴──────────┘
-------------------
```
