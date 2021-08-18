# Benchmark via lighthouse

## Setup

Install the dependencies

```
npm i
```

Add a `.env` file

```
cp .env.example .env
```

And modify the file for your needs. If you need basic auth add it to the URL like so:

```
URLS=( 'http://USERNAME:PASSWORD@example.com' )
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
│    0    │    'serverResponseTime'    │ '11ms'  │ '39ms'  │
│    1    │       'interactive'        │ '175ms' │ '199ms' │
│    2    │        'speedIndex'        │ '175ms' │ '199ms' │
│    3    │    'totalBlockingTime'     │  '0ms'  │  '0ms'  │
│    4    │ 'observedDomContentLoaded' │ '74ms'  │ '126ms' │
└─────────┴────────────────────────────┴─────────┴─────────┘
-------------------

-------------------
Performance results
Number of runs: 5
URL: https://www.google.com/
┌─────────┬────────────────────────────┬──────────┬──────────┐
│ (index) │           metric           │   p50    │   p90    │
├─────────┼────────────────────────────┼──────────┼──────────┤
│    0    │    'serverResponseTime'    │  '87ms'  │  '90ms'  │
│    1    │       'interactive'        │ '1056ms' │ '1128ms' │
│    2    │        'speedIndex'        │ '532ms'  │ '612ms'  │
│    3    │    'totalBlockingTime'     │  '30ms'  │  '38ms'  │
│    4    │ 'observedDomContentLoaded' │ '502ms'  │ '595ms'  │
└─────────┴────────────────────────────┴──────────┴──────────┘
-------------------

-------------------
Performance results
Number of runs: 5
URL: https://www.motorola.com/us/
┌─────────┬────────────────────────────┬──────────┬──────────┐
│ (index) │           metric           │   p50    │   p90    │
├─────────┼────────────────────────────┼──────────┼──────────┤
│    0    │    'serverResponseTime'    │  '30ms'  │ '135ms'  │
│    1    │       'interactive'        │ '6223ms' │ '6653ms' │
│    2    │        'speedIndex'        │ '3884ms' │ '5095ms' │
│    3    │    'totalBlockingTime'     │ '104ms'  │ '158ms'  │
│    4    │ 'observedDomContentLoaded' │ '431ms'  │ '1115ms' │
└─────────┴────────────────────────────┴──────────┴──────────┘
-------------------
```

