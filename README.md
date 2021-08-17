# Benchmark via lighthouse

## Setup

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
p50 time to interactive is 198 ms
p90 time to interactive is 199 ms
-------------------

-------------------
Performance results
Number of runs: 5
URL: https://www.google.com/
p50 time to interactive is 1098.5720000000001 ms
p90 time to interactive is 1123.8755 ms
-------------------
```

