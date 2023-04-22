---
sidebar_position: 2
description: 'Configure Journey to work how you want'
---

# Configuration

Journey may be configured using the settings in the generated `config.yml` file. This page contains those settings and their purposes.

## Search Behavior

These settings change the way path searches behave.

| Setting                       | Type    | Description                                                          |
| :---------------------------- | :------ | :------------------------------------------------------------------- |
| `search.flag.default-timeout` | Integer | The default value of the [timeout flag](/docs/commands#timeout-flag) |
| `search.flag.default-fly`     | Boolean | The default value of the [fly flag](/docs/commands#fly-flag)         |
| `search.flag.default-door`    | Boolean | The default value of the [door flag](/docs/commands#door-flag)       |
| `search.flag.default-dig`     | Boolean | The default value of the [dig flag](/docs/commands#dig-flag)         |

## Server Optimization

These settings can be tuned to improve server optimization in exchange for performance of Journey's algorithms.

| Setting                       | Type    | Description                                                                                    |
| :---------------------------- | :------ | :--------------------------------------------------------------------------------------------- |
| `search.max-path-block-count` | Integer | The maximum number of blocks to be considered in the algorithm for a single-world path search. |
| `search.max-searches`         | Integer | The maximum number of searches allowed on the server at once                                   |


## Storage {#storage}

There are two ways of storing your data for Journey: `MySQL` and `SQLite`.

| Setting                   | Type    | Description                                                                                              |
| :------------------------ | :------ | :------------------------------------------------------------------------------------------------------- |
| `storage.auth.address`    | String  | The address of your database server, like the IP or host name                                            |
| `storage.auth.database`   | String  | The name of your database                                                                                |
| `storage.auth.username`   | String  | The username of the user of your database                                                                |
| `storage.auth.password`   | String  | The password of the user of your database                                                                |
| `storage.type`            | String  | The type of storage you want to use; Only `SQLite` is supported, with plans to support `MySQL` and more. |
| `storage.cache.max_cells` | Integer | The maximum number of cells (blocks) Journey is allowed to store as part of cached paths                 |