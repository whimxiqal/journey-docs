---
sidebar_position: 3
description: 'Integrate your plugins with Journey'
---

import JourneyLogo from '/img/logo.png';
import EssentialsXLogo from '/img/essentialsx-logo.png';
import NotQuestsLogo from '/img/notquests-logo.jpg';

# Journey Integration Plugins

Servers can make full use of Journey by integrating it with other plugins. Plugin developers may use the [Journey API](/docs/category/developers) to make this possible by integrating their own plugins with Journey.

Below are some projects that integrate Journey with some popular plugins. If you are using any of the ones listed below with Journey on the same server, it is recommended that you also download and use the corresponding integration plugin to get the most out of both.

:::info
Since these plugins work with and depend on multiple other plugins, please verify that you have the right versions.
:::

## JourneyEssentials (for [EssentialsX](https://essentialsx.net/) by mdcfe)

[![JourneyEssentials Downloads](https://img.shields.io/modrinth/dt/journeyessentials?style=for-the-badge)](https://modrinth.com/plugin/journeyessentials)
[![JourneyEssentials Version](https://img.shields.io/modrinth/v/journeyessentials?style=for-the-badge)](https://modrinth.com/plugin/journeyessentials)

**[Download](https://modrinth.com/plugin/journeyessentials) |
[Source](https://github.com/whimxiqal/journey-essentials) |
[Issues](https://github.com/whimxiqal/journey-essentials/issues)**


### Version Compatibility
| Journey     | EssentialsX | JourneyEssentials |
| :---------- | :---------- | :---------------- |
| 1.0.0-1.0.2 | 2.19.7+     | 1.0.0             |
| 1.1.0+      | 2.19.7+     | 1.1.0+            |

### Usage

There is no setup required for JourneyEssentials. It will automatically register warp, home, and spawn commands within Journey's calculations.

If you would like to disallow players from navigating to a warp, home, or spawn location, then disallow the `journey.path.<essential-permission>` permission for the corresponding EssentialsX permission. 

For example, if you would like to disallow players from teleporting home, you may simply disallow `essentials.home`. However, in this case, players may still use `/jt home` to navigate home using Journey. If you would also like to disable the ability to navigate, disallow `journey.path.essentials.home`. Conversely, you may just disallow the latter and keep `essentials.home` allowed, meaning players may teleport -- but not navigate -- home.

## JourneyNotQuests (for [NotQuests](https://www.notquests.com/) by Alessio)

[![JourneyNotQuests Downloads](https://img.shields.io/modrinth/dt/journeynotquests?style=for-the-badge)](https://modrinth.com/plugin/journeynotquests)
[![JourneyNotQuests Version](https://img.shields.io/modrinth/v/journeynotquests?style=for-the-badge)](https://modrinth.com/plugin/journeynotquests)

**[Download](https://modrinth.com/plugin/journeynotquests) |
[Source](https://github.com/whimxiqal/journey-notquests) |
[Issues](https://github.com/whimxiqal/journey-notquests/issues)**

### Version Compatibility
| Journey | NotQuests | JourneyNotQuests |
| :------ | :-------- | :--------------- |
| 1.1.0+  | 5.14.0+   | 1.1.0+           |

### Usage

For each player, JourneyNotQuests automatically adds his/her quests to the Journey GUI and [`/journeyto`](/docs/commands#journeyto) command.

JourneyNotQuests additionally updates NotQuests' command and configuration scheme so you may enable Journey for any objective on any quest straight from within NotQuests. By enabling Journey on an objective, any player who starts that objective will be automatically be shown a path to their next objective, as long as there is a location set for that objective and a path could be calculated.

To enable Journey on an objective from in game:

```
/qadmin edit <quest> objectives edit <objective_id> useJourney [true|false]
```

If neither `true` nor `false` is specified, `true` is assumed.

Alternatively, in your quest file, you may add the field `useJourney: true` underneath the objective for which you would like to enable Journey.

```yml title="quests.yml"
quests:
  TheVirus:
    displayName: A Deadly Virus
    description: ...
    requirements:
      '1':
        ...
    objectives:
      '1':
        objectiveType: BreakBlocks
        specifics:
          ...
        ...
        showLocation: true
        location:
          ==: org.bukkit.Location
          world: world
          x: 40.0
          y: 66.0
          z: -138.0
          pitch: 0.0
          yaw: 0.0
        useJourney: true
```

:::info
Make sure you set a location for the objective. Otherwise, Journey will not know where to send the player. You can always turn on [debug mode](/docs/commands#journey-admin-debug) to see when Journey is calculating paths.
:::