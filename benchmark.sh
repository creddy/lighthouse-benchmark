#!/bin/bash
set -euxo pipefail

source .env

url_options=""

for url in "${URLS[@]}"
do
  url_options+=" --url $url"
done

lhci collect $url_options