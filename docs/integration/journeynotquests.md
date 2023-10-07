---
sidebar_label: "JourneyNotQuests"
sidebar_position: 2
description: "Integrate Journey with NotQuests"
---

import NotQuestsLogo from '/img/notquests-logo.jpg';

# JourneyNotQuests

Integrate Journey with [NotQuests](https://www.notquests.com/) by Alessio

<img src={NotQuestsLogo} style={{height: 150, borderRadius: 10}} />

[![JourneyNotQuests Downloads](https://img.shields.io/modrinth/dt/journeynotquests?style=for-the-badge)](https://modrinth.com/plugin/journeynotquests)
[![JourneyNotQuests Version](https://img.shields.io/modrinth/v/journeynotquests?style=for-the-badge)](https://modrinth.com/plugin/journeynotquests)

**[Download](https://modrinth.com/plugin/journeynotquests) |
[Source](https://github.com/whimxiqal/journey/tree/main/integrations/notquests) |
[Issues](https://github.com/whimxiqal/journey/issues)**

## Version Compatibility

| Journey | NotQuests | JourneyNotQuests |
| :------ | :-------- | :--------------- |
| 1.2.0+  | 5.14.0+   | 1.2.0+           |
| 1.1.0   | 5.14.0+   | 1.1.0            |

## Setup

For each player, JourneyNotQuests automatically adds their quests to the Journey GUI and [`/journeyto`](/docs/commands#journeyto) command.

JourneyNotQuests additionally updates NotQuests' command and configuration scheme so you may enable Journey for any objective on any quest straight from within NotQuests. By enabling Journey on an objective, any player who starts that objective will automatically be navigated to their next objective, as long as there is a location set for that objective and a path could be calculated.

To enable Journey on an objective from in-game:

```
/qadmin edit <quest> objectives edit <objective_id> useJourney [true|false]
```

If neither `true` nor `false` is specified, `true` is assumed.

Alternatively, in your quest file, you may add the field `useJourney: true` underneath the objective for which you would like to enable Journey.

You may alter the behavior of the search and navigation using extra config parameters, as seen below.

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

        ## Journey Settings ##
        useJourney: true

        ## Optional Additional Journey Settings ##
        journeyFlags:  # Section to alter Journey search and navigation behavior
          fly: false  # Does not consider flight in search
          timeout: 10   # Seconds to wait before failing search
          navigation:   # Section to alter navigation once search completes
            navigator_type:  trail  # Use the "Trail" navigator (default)
            options:  # Section to specify navigation options to the chosen navigator
              completion-message:  <blue>Thank goodness you made it! <red>Stop the Virus!
              ...
```

:::info
Make sure you set a location for the objective. Otherwise, Journey will not know where to send the player. You can always turn on [debug mode](/docs/commands#journey-admin-debug) to see when Journey is calculating paths.
:::
