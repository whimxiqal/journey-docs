---
sidebar_label: "JourneyAgent"
sidebar_position: 4
description: "A class Journey uses to represent a movable entity, like a player"
---

# `JourneyAgent`

A `JourneyAgent` is a Journey-specific class that contains relevant information about an entity that can move through a Minecraft world. The most common example of a `JourneyAgent` is a `JourneyPlayer`, which is just Journey's representation of an online Minecraft player.

Notably, you can use a `JourneyAgent` to get its UUID and check whether they have a given permission. This information is useful when constructing [`Scopes`](/docs/dev/scopes.md) and [`Tunnels`](/docs/dev/tunnels.md).
