---
sidebar_label: "JourneyEssentials"
sidebar_position: 1
description: "Integrate Journey with Essentials"
---

import EssentialsLogo from '/img/essentialsx-logo.png';

# JourneyEssentials

Integrate Journey with [EssentialsX](https://essentialsx.net/) by mdcfe

<img src={EssentialsLogo} style={{height: 150, borderRadius: 10}} />

[![JourneyEssentials Downloads](https://img.shields.io/modrinth/dt/journeyessentials?style=for-the-badge&color=D06262)](https://modrinth.com/plugin/journeyessentials)
[![JourneyEssentials Version](https://img.shields.io/modrinth/v/journeyessentials?style=for-the-badge&color=D06262)](https://modrinth.com/plugin/journeyessentials)

**[Download](https://modrinth.com/plugin/journeyessentials) |
[Source](https://github.com/whimxiqal/journey/tree/main/integrations/essentials) |
[Issues](https://github.com/whimxiqal/journey/issues)**

## Version Compatibility

| Journey     | EssentialsX | JourneyEssentials |
| :---------- | :---------- | :---------------- |
| 1.2.0+      | 2.19.7+     | 1.2.0+            |
| 1.1.0       | 2.19.7+     | 1.1.0             |
| 1.0.0-1.0.2 | 2.19.7+     | 1.0.0             |

## Setup

There is no setup required for JourneyCitizens beyond optionally setting special permission configurations.

## Description

JourneyEssentials will automatically register warp, home, and spawn commands within Journey's calculations.

## Permissions

:::tip
For an interesting social effect, if you have an SMP server, you may want to disallow teleporting to warps or homes for players but allow navigating via Journey. This way, players may still find important destinations but be incentivized to invest in transportation infrastructure around the server, like Nether highways or rail systems.
:::

### `journey.path.essentials.home`

Allow navigation to one's home(s) using commands or the GUI

### `journey.path.essentials.warp`

Allow navigation to the server's warps using commands or the GUI

### `journey.path.essentials.spawn`

Allow navigation to the server spawn for one's group
