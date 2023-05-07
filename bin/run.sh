#!/bin/bash

PROJECT_ROOT=$(cd $(dirname $0)/..; pwd)

cd ${PROJECT_ROOT}/front

export BLOG_DB=${PROJECT_ROOT}/front/db.json
pnpm build
node ${PROJECT_ROOT}/front/.output/server/index.mjs