## Introduction

Reproduction for issue https://github.com/prisma/prisma-client-js/issues/941


## Steps
1. Clone this repo and install deps
2. Run yarn start to trigger the crash

(This reproduction contains a sqlite database with some data)


## Version Information

```
Environment variables loaded from prisma/.env
@prisma/cli          : 2.14.0-dev.60
@prisma/client       : 2.14.0-dev.60
Current platform     : darwin
Query Engine         : query-engine 59cf08bf47e90cb37532900059f3328b4328237c (at node_modules/@prisma/engines/query-engine-darwin)
Migration Engine     : migration-engine-cli 59cf08bf47e90cb37532900059f3328b4328237c (at node_modules/@prisma/engines/migration-engine-darwin)
Introspection Engine : introspection-core 59cf08bf47e90cb37532900059f3328b4328237c (at node_modules/@prisma/engines/introspection-engine-darwin)
Format Binary        : prisma-fmt 59cf08bf47e90cb37532900059f3328b4328237c (at node_modules/@prisma/engines/prisma-fmt-darwin)
Studio               : 0.332.0
```
