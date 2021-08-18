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
│    0    │    'serverResponseTime'    │ '10ms'  │ '10ms'  │
│    1    │       'interactive'        │ '194ms' │ '194ms' │
│    2    │        'speedIndex'        │ '194ms' │ '194ms' │
│    3    │    'totalBlockingTime'     │  '0ms'  │  '0ms'  │
│    4    │ 'observedDomContentLoaded' │ '42ms'  │ '146ms' │
└─────────┴────────────────────────────┴─────────┴─────────┘
-------------------

-------------------
Performance results
Number of runs: 5
URL: https://www.google.com/
┌─────────┬────────────────────────────┬─────────┬─────────┐
│ (index) │           metric           │   p50   │   p90   │
├─────────┼────────────────────────────┼─────────┼─────────┤
│    0    │    'serverResponseTime'    │ '168ms' │ '188ms' │
│    1    │       'interactive'        │ '563ms' │ '589ms' │
│    2    │        'speedIndex'        │ '571ms' │ '608ms' │
│    3    │    'totalBlockingTime'     │  '0ms'  │  '0ms'  │
│    4    │ 'observedDomContentLoaded' │ '600ms' │ '631ms' │
└─────────┴────────────────────────────┴─────────┴─────────┘
-------------------

-------------------
Performance results
Number of runs: 5
URL: https://www.iana.org/
┌─────────┬────────────────────────────┬──────────┬──────────┐
│ (index) │           metric           │   p50    │   p90    │
├─────────┼────────────────────────────┼──────────┼──────────┤
│    0    │    'serverResponseTime'    │  '79ms'  │  '87ms'  │
│    1    │       'interactive'        │ '1282ms' │ '1478ms' │
│    2    │        'speedIndex'        │ '1053ms' │ '1141ms' │
│    3    │    'totalBlockingTime'     │  '0ms'   │  '0ms'   │
│    4    │ 'observedDomContentLoaded' │ '660ms'  │ '716ms'  │
└─────────┴────────────────────────────┴──────────┴──────────┘
-------------------
```
