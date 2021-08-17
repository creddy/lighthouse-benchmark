#!/bin/bash
set -euxo pipefail

rm -rf .lighthouseci

source .env

url_options=""

for url in "${URLS[@]}"
do
  url_options+=" --url $url"
done

lhci collect $url_options