#!/bin/bash

if [[ "$VERCEL_ENV" == "production" ]]; then
  yarn run build:production
else
  yarn run build:preview
fi
