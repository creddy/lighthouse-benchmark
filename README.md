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
│    0    │    'serverResponseTime'    │ '10ms'  │ '11ms'  │
│    1    │   'firstContentfulPaint'   │ '194ms' │ '196ms' │
│    2    │    'totalBlockingTime'     │  '0ms'  │  '0ms'  │
│    3    │       'interactive'        │ '194ms' │ '196ms' │
│    4    │ 'observedLastVisualChange' │ '76ms'  │ '79ms'  │
└─────────┴────────────────────────────┴─────────┴─────────┘
-------------------

-------------------
Performance results
Number of runs: 5
URL: https://www.google.com/
┌─────────┬────────────────────────────┬──────────┬──────────┐
│ (index) │           metric           │   p50    │   p90    │
├─────────┼────────────────────────────┼──────────┼──────────┤
│    0    │    'serverResponseTime'    │  '80ms'  │  '98ms'  │
│    1    │   'firstContentfulPaint'   │ '578ms'  │ '599ms'  │
│    2    │    'totalBlockingTime'     │  '24ms'  │  '34ms'  │
│    3    │       'interactive'        │ '1290ms' │ '1301ms' │
│    4    │ 'observedLastVisualChange' │ '948ms'  │ '991ms'  │
└─────────┴────────────────────────────┴──────────┴──────────┘
-------------------

-------------------
Performance results
Number of runs: 5
URL: https://www.iana.org/
┌─────────┬────────────────────────────┬──────────┬──────────┐
│ (index) │           metric           │   p50    │   p90    │
├─────────┼────────────────────────────┼──────────┼──────────┤
│    0    │    'serverResponseTime'    │  '88ms'  │ '111ms'  │
│    1    │   'firstContentfulPaint'   │ '957ms'  │ '979ms'  │
│    2    │    'totalBlockingTime'     │  '0ms'   │  '0ms'   │
│    3    │       'interactive'        │ '1400ms' │ '1518ms' │
│    4    │ 'observedLastVisualChange' │ '1138ms' │ '1246ms' │
└─────────┴────────────────────────────┴──────────┴──────────┘
-------------------
```
