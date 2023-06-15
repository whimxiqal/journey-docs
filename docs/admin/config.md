---
sidebar_position: 2
description: 'Configure Journey to work how you want'
---

# Configuration

Journey may be configured using the settings in the generated `config.yml` file. This page contains those settings and their purposes.

Some settings may be reloaded onto the server using the [`/journey admin reload`](/docs/commands#journey-admin-reload) command. But, if a setting is not "reload-able" as marked below, then the change may only be observed on the server with a restart.

## Search Behavior {#search-behavior}

These settings change the way path searches behave.

| Setting                       | Type    | Description                                                                  | Reload-able | Default      |
| :---------------------------- | :------ | :--------------------------------------------------------------------------- | :---------- | :----------- |
| `search.flag.default-timeout` | Integer | The default value of the [timeout flag](/docs/commands#timeout-flag)         | Yes         | 30 (seconds) |
| `search.flag.default-fly`     | Boolean | The default value of the [fly flag](/docs/commands#fly-flag)                 | Yes         | true         |
| `search.flag.default-door`    | Boolean | The default value of the [door flag](/docs/commands#door-flag)               | Yes         | true         |
| `search.flag.default-dig`     | Boolean | The default value of the [dig flag](/docs/commands#dig-flag)                 | Yes         | false        |
| `search.chunk-gen.allow`      | Boolean | Determines whether Journey is allowed to generate new chunks during a search | No          | false        |

## Server Optimization {#server-optimization}

These settings can be tuned to improve server optimization in exchange for performance of Journey's algorithms.

| Setting                       | Type    | Description                                                                                                                                                                                                                       | Reload-able | Default |
| :---------------------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- | :------ |
| `search.max-path-block-count` | Integer | The maximum number of blocks to be considered in the algorithm for a single-world path search. If searches are regularly failing, check whether it's because the searches hit this limitation and consider increasing this value. | Yes         | 100,000 |
| `search.max-searches`         | Integer | The maximum number of path searches allowed on the server at once. One search request by a player usually causes multiple path searches, so increasing this value increases the concurrent cabability of any one overall search.  | No          | 16      |


## Storage {#storage}

There are two ways of storing your data for Journey: `MySQL` and `SQLite`.

| Setting                   | Type    | Description                                                                              | Reloadable | Default |
| :------------------------ | :------ | :--------------------------------------------------------------------------------------- | :--------- | :------ |
| `storage.auth.address`    | String  | The address of your database server, like the IP or host name                            | No         | -       |
| `storage.auth.database`   | String  | The name of your database                                                                | No         | -       |
| `storage.auth.username`   | String  | The username of the user of your database                                                | No         | -       |
| `storage.auth.password`   | String  | The password of the user of your database                                                | No         | -       |
| `storage.type`            | String  | The type of storage you want to use; Can be `SQLite` or `MySQL`.                         | No         | SQLite  |
| `storage.cache.max_cells` | Integer | The maximum number of cells (blocks) Journey is allowed to store as part of cached paths | Yes        | 500,000 |