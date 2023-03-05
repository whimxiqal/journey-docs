---
sidebar_position: 2
---

# Commands

Journey uses the [Mantle Command Framework](https://github.com/whimxiqal/mantle) to handle command execution. As with other Mantle projects, the entire command framework is summarized in one `.gz` file, which can be found [among the source code](https://github.com/whimxiqal/journey/blob/main/common/src/main/antlr/net/whimxiqal/journey/common/Journey.g4).

All commands are split between two base commands:
1. `/journey` 
2. `/journeyto`

:::tip
Use aliases `/jo` and `/jt` instead of `/journey` and `/journeyto` to use commands more efficiently
:::

Command arguments surrounded with `<>` are required parameters. Those surrounded with `[]` are optional.

## `/journeyto [name] [flags...]` {#journeyto}

> Starts a journey to a given destination

- **Permission** - [journey.path.[...]](/docs/admin/permissions#journey-path-gui)
- **Arguments**
  - `name`: The name of the destination/waypoint. If no name is given, a GUI will open
  - [`flags...`](#search-flags)

The `name` parameter can optionally be a series of names delineated by colons. The last name refers to the actual name of the location, and all the previous names describe the context, or `scope`, in which the location is defined.

For example, if you set a personal waypoint called `myhome`, you may "journey" to `myhome` using `/journeyto personal:myhome`. To teleport to a player's location, use `/journeyto player:PlayerName`.

In most cases, if the name of a location is unique among other contexts, you may omit the `scope`. 
So, in the previous example, you may use `/journeyto myhome`, but only if there are no public waypoints or locations from other contexts called `myhome`. 
Similarly, as long as there are no waypoints with the same name as a player, you may journey to a player using just `/journeyto PlayerName`.

Scopes include:

| Scope                              | Path                             |
| ---------------------------------- | -------------------------------- |
| Your personal waypoints            | `personal:<name>`                |
| Server-wide waypoints              | `server:<name>`                  |
| Worlds                             | `world:<name>`                   |
| Player locations                   | `player:<name>`                  |
| Other player's personal waypoints  | `player:<name>:waypoints:<name>` |
| The surface, if you're underground | `surface`                        |
| Your last known death location     | `death`                          |

## `/journey cancel` {#journey-cancel}

> Cancel an ongoing search or discard a completed path

## `/journey setwaypoint <name>` {#journey-setwaypoint}

> Sets a personal waypoint

- **Permission** - [journey.edit.personal](/docs/admin/permissions#journey-edit-personal)
- **Arguments**
  - `name`: the name of your new waypoint

## `/journey listwaypoints [page]` {#journey-listwaypoints}

> Lists all your personal waypoints

- **Permission** - [journey.path.personal](/docs/admin/permissions#journey-path-personal)
- **Arguments**
  - `page`: the page, for paging across many waypoints

## `/journey waypoint <name> [flags...]` {#journey-waypoint}

> Starts a journey to a personal waypoint 

Alternatively, use `/journeyto personal:<name>`.

- **Permission** - [journey.path.personal](/docs/admin/permissions#journey-path-personal)
- **Arguments**
  - `name`: the name of your waypoint
  - [`flags...`](#search-flags)

## `/journey waypoint <name> unset` {#journey-waypoint-unset}

> Removes a personal waypoint

- **Permission** - [journey.edit.personal](/docs/admin/permissions#journey-edit-personal)
- **Arguments**
  - `name`: the name of your waypoint to remove

## `/journey waypoint <name> rename <new name>` {#journey-waypoint-rename}

> Renames a personal waypoint to something else

- **Permission** - [journey.edit.personal](/docs/admin/permissions#journey-edit-personal)
- **Arguments**
  - `name`: the name of your waypoint to change
  - `new name`: the new name of your waypoint

## `/journey waypoint <name> public [true|false]` {#journey-waypoint-public}

> Changes the publicity of a personal waypoint

If no `true` or `false` is specified, it will just toggle the publicity to the opposite state.

- **Permission** - [journey.edit.personal.publicity](/docs/admin/permissions#journey-edit-personal-publicity)
- **Arguments**
  - `name`: the name of your waypoint

## `/journey server setwaypoint <name>` {#journey-server-setwaypoint}

> Sets a server waypoint

- **Permission** - [journey.edit.server](/docs/admin/permissions#journey-edit-server)
- **Arguments**
  - `name`: the name of the waypoint

## `/journey server listwaypoints [page]` {#journey-server-listwaypoints}

> Lists all the server waypoints

- **Permission** - [journey.path.server](/docs/admin/permissions#journey-path-server)
- **Arguments**
  - `page`: the page, for paging across many waypoints

## `/journey server waypoint <name> [flags...]` {#journey-server-waypoint}

> Starts a journey to a server waypoint 

Alternatively, use `/journeyto server:<name>`.

- **Permission** - [journey.path.server](/docs/admin/permissions#journey-path-server)
- **Arguments**
  - `name`: the name of the waypoint
  - [`flags...`](#search-flags)

## `/journey server waypoint <name> unset` {#journey-sever-waypoint-unset}

> Removes a server waypoint

- **Permission** - [journey.edit.server](/docs/admin/permissions#journey-edit-server)
- **Arguments**
  - `name`: the name of the waypoint to remove

## `/journey server waypoint <name> rename <new name>` {#journey-server-waypoint-rename}

> Renames a server waypoint to something else

- **Permission** - [journey.edit.server](/docs/admin/permissions#journey-edit-server)
- **Arguments**
  - `name`: the name of the waypoint to change
  - `new name`: the new name of the waypoint

## `/journey player <player> [name]` {#journey-player}

> Starts a journey to a player or, if the name is given, to one of their public waypoints

- **Permissions**
  - [journey.path.player.entity](/docs/admin/permissions#journey-path-player-entity) (if no waypoint is specified)
  - [journey.path.player.waypoints](/docs/admin/permissions#journey-path-player-waypoints) (if a waypoint is specified)
- **Arguments**
  - `player`: the name of the online player
  - `name`: the name of the waypoint

## `/journey admin debug [target]` {#journey-admin-debug}

> Begins debug messaging, either for just the target or for everyone if no target is given

- **Permission** - [journey.admin.debug](/docs/admin/permissions#journey-admin-debug)
- **Arguments**
  - `target`: the online player who has searches from which you want to receive debug information

## `/journey admin cache paths build` {#journey-admin-cache-paths-build}

:::warning
Potentially uses a lot of space in your database!
:::

Journey caches previously calculated paths to speed up search times. This command pre-calculates many of these paths and stores them
so searches may use them instead of calculating them on the fly.

The config parameter [`storage.cache.max_cells`](/docs/admin/config#storage) lets you set how many cells (blocks) you may store in cache
before Journey will start to throw out possible cached paths in an effort to save storage space. If storage space isn't an issue and you are hitting that limit,
go ahead and raise that config value to experience faster search times.

- **Permission** - [journey.admin.cache](/docs/admin/permissions#journey-admin-cache)

## `/journey admin cache paths clear` {#journey-admin-cache-paths-clear}

Clear all stored cached paths. 

See the [`storage.cache.max_cells`](/docs/admin/config#storage) config parameter.

- **Permission** - [journey.admin.cache](/docs/admin/permissions#journey-admin-cache)

## `/journey admin cache portals clear` {#journey-admin-cache-portals-clear}

> Clears the cache of known portal connections

:::warning
You should never have to do this!
:::

Journey keeps an internal cache of all portal connections. These are added and updated as players usem, so this command is only needed if something breaks.
Use the [`admin listportals` command](#journey-admin-listportals) to see what portals currently are known to Journey.

- **Permission** - [journey.admin.cache](/docs/admin/permissions#journey-admin-cache)

## `/journey admin listportals [page]` {#journey-admin-listportals}

> List out all known Nether portal connections

Journey only knows where Nether portals are and how they are connected once someone or something goes through one.
These connections are stored and used for future calculations.

## Search Flags

Various flags may be appended to the end of a search command to change certain parameters about the search and resulting paths.
If the value of the flag is a boolean (`true` or `false`), then the presence of the flag will toggle it from the server default.
For other flags, the value must be specified after an `=` symbol.
Furthermore, flags can look like `-<flag_name>` or like `-<flag_name>=<value>`.

### Timeout Flag {#timeout-flag}

> Declares how many seconds the search will take if a solution is never found

- `-timeout=60` - 60 second timeout
- `-timeout=180` - 180 second timeout

### Animate Flag {#animate-flag}

> Deploys an animation during the search and declares how many milliseconds the search will wait between calculation steps

- `-animate=10` - 10 millisecond delay
- `-animate=50` - 50 millisecond delay
- `-animate` - animates with server default

### Fly Flag {#fly-flag}

> Decides whether to consider flying as a viable mode of transport, but only if flight is enabled

- `-fly` - toggles the consideration of flight
- `-fly=true` - considers flight during the search, but only if flight is already enabled
- `-fly=false` - does not consider flight during the search

### Door Flag {#door-flag}

> Decides whether iron doors should be considered obstructive

- `-door` - toggles the obstructivity of iron doors
- `-door=true` - considers iron doors obstructive
- `-door=false` - considers iron doors unobstructive

### Dig Flag {#dig-flag}

> Decides whether to consider digging as a viable mode of transport

In most cases, you probably only want to consider places you can get to without breaking through blocks.

- `-dig` - toggles the consideration of the digging mode
- `-dig=true` - considers digging a viable mode of transport
- `-dig=false` - does not consider digging a viable mode of transport