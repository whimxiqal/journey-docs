---
sidebar_position: 1
description: 'Manage permission levels on your server'
---

# Permissions

Permissions in Journey are organized by purpose.

## `journey.cancel` {#journey-cancel}

> Allows the player to cancel searches and paths 

[`/journey cancel`](/docs/commands#journey-cancel)

## `journey.path.gui` {#journey-path-gui}

> Allows the subject to open the GUI (using [`/journeyto`](/docs/commands#journeyto))

## `journey.path.world.<namespace>.<key>` {#journey-path-world}

> Allows the subject to journey to the given world, where the world is a namespaced key

## `journey.path.personal` {#journey-path-personal}

> Allows the subject to list and to journey to their personal waypoints

[`/journeyto personal:...`](/docs/commands#journeyto)

[`/journey waypoint <name>`](/docs/commands#journey-waypoint)

## `journey.path.server` {#journey-path-server}

> Allows the subject to list and to journey to server waypoints

[`/journeyto server:...`](/docs/commands#journeyto)

[`/journey server waypoint <name>`](/docs/commands#journey-waypoint)

[`/journey listwaypoints`](/docs/commands#journey-listwaypoints)

## `journey.path.death` {#journey-path-death}

> Allows the subject to journey to their last known death location

[`/journeyto death`](/docs/commands#journeyto)

## `journey.path.surface` {#journey-path-surface}

> Allows the subject to journey to the surface of their current world

[`/journeyto surface`](/docs/commands#journeyto)

## `journey.path.player.entity` {#journey-path-player-entity}

> Allows the subject to journey to other players' locations

[`/journeyto player:<name>`](/docs/commands#journeyto) or just [`/journeyto <name>`](/docs/commands#journeyto)

## `journey.path.player.waypoints` {#journey-path-player-waypoints}

> Allows the subject to list and to journey to other players' personal public waypoints

[`/journeyto player:<name>:<waypoint>`](/docs/commands#journeyto)

## `journey.edit.personal` {#journey-edit-personal}

> Allows the subject to edit personal waypoints

[`/journey waypoint <name> unset`](/docs/commands#journey-waypoint-unset)

[`/journey waypoint <name> rename <name>`](/docs/commands#journey-waypoint-rename)

## `journey.edit.personal.publicity` {#journey-edit-personal-publicity}

> Allows the subject to edit the publicity of personal waypoints

> `Public` waypoints may be accessed by other players.

[`/journey waypoint <name> public (true|false)`](/docs/commands#journey-waypoint-public)

## `journey.edit.server` {#journey-edit-server}

> Allows the subject to edit server waypoints

[`/journey server waypoint <name> unset`](/docs/commands#journey-server-waypoint-unset)

[`/journey server waypoint <name> rename <name>`](/docs/commands#journey-server-waypoint-rename)

## `journey.admin.debug` {#journey-admin-debug}

> Allows the subject to enable debug mode

[`/journey admin debug [target]`](/docs/commands#journey-admin-debug)

## `journey.admin.cache` {#journey-admin-cache}

> Allows the subject to manipulate the cache, which includes saved natural portal connections and previous successful paths

[`/journey admin cache paths build`](/docs/commands#journey-admin-cache-paths-build)

[`/journey admin cache paths clear`](/docs/commands#journey-admin-cache-paths-clear)

[`/journey admin cache portals clear`](/docs/commands#journey-admin-cache-portals-clear)

## `journey.admin.reload` {#journey-admin-reload}

> Allows the subject to reload the config

[`/journey admin reload`](/docs/commands#journey-admin-reload)

## `journey.admin.info` {#journey-admin-info}

> Allows the subject to read administrator-level information, such as listing out cached nether portal connections

[`/journey admin listportals [page]`](/docs/commands#journey-admin-listportals)

## `journey.flag.timeout` {#journey-flag-timeout}

> Allows the subject to use the [timeout flag](/docs/commands#timeout-flag) on search commands

## `journey.flag.animate` {#journey-flag-animate}

> Allows the subject to use the [animate](/docs/commands#animate-flag) flag on search commands

## `journey.flag.fly` {#journey-flag-fly}

> Allows the subject to use the [fly flag](/docs/commands#fly-flag) on search commands.

## `journey.flag.door` {#journey-flag-door}

> Allows the subject to use the [door flag](/docs/commands#door-flag) on search commands

## `journey.flag.dig` {#journey-flag-dig}

> Allows the subject to use the [dig flag](/docs/commands#dig-flag) on search commands