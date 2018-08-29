#!/usr/bin/env bash

rm app.* index.html vendor.*.js
npm run build
cp dist/* .
git add app.* index.html vendor.*.js