#!/usr/bin/env bash

rm app.* index.html vendor.*.js
npm run build
git add app.* index.html vendor.*.js
git commit -m "SEM-ISSUE - FAZ DEPLOY"