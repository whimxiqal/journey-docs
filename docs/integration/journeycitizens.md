---
sidebar_label: "JourneyCitizens"
sidebar_position: 3
description: "Integrate Journey with Citizens"
---

import CitizensLogo from '/img/citizens-logo.png';

# JourneyCitizens

Integrate Journey with [Citizens](https://wiki.citizensnpcs.co/Citizens_Wiki) by fullwall

<img src={CitizensLogo} style={{height: 150, borderRadius: 10}} />

[![JourneyCitizens Downloads](https://img.shields.io/modrinth/dt/journeycitizens?style=for-the-badge&color=D06262)](https://modrinth.com/plugin/journeycitizens)
[![JourneyCitizens Version](https://img.shields.io/modrinth/v/journeycitizens?style=for-the-badge&color=D06262)](https://modrinth.com/plugin/journeycitizens)

**[Download](https://modrinth.com/plugin/journeycitizens) |
[Source](https://github.com/whimxiqal/journey/tree/main/integrations/citizens) |
[Issues](https://github.com/whimxiqal/journey/issues)**

## Version Compatibility

| Journey | Citizens | JourneyCitizens |
| :------ | :------- | :-------------- |
| 1.2.0+  | 2.0.33+  | 1.2.0+          |

## Setup

There is no setup required for JourneyCitizens beyond optionally setting special permission configurations.

## Description

JourneyCitizens provides two main services:

1. Provides an "NPC Navigator" (id `npc`) that navigates players along paths using an NPC
1. Provides a scope for accessing NPCs around the server

### NPC Navigator

Players and users of the API may use a brand new `Navigator` with id `npc`. Rather than the default particle trail appearing, an NPC spawns and guides the player to the destination. The behavior of the `Navigator` may be altered with the following `Navigator Options`:

- `entity_type`: the NPC's entity type, e.g. `fox`
- `name`: the NPC's display name

#### Examples

Navigate to `home` by following a default NPC guide:

```
/jt home -navigator npc
```

Navigate to `home` by following a sheep called Marvin:

```
/jt home -navigator npc {entity_type:sheep,name:Marvin}
```

Navigate to `home` by following a sheep with a more complicated name (since there is a space in the name, you must put quotes around the entire argument):

```
/jt home -navigator npc {"name:Sheep Guide"}
```

### NPC Scope

A [`Scope`](/docs/dev/scopes.md) with id `npc` is introduced. Players may now navigate to NPCs around the world. Either use the GUI or type the NPC id directly in command:

```
/jt npc:0
```

## Permissions

### `journey.path.citizens`

Use the `npc` scope, i.e. navigating to an NPC using the GUI or `/jt npc:...`

### `journey.navigator.npc`

Use the `npc` navigator, i.e. `/jt home -navigator npc`
