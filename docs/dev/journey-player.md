---
sidebar_label: 'JourneyPlayer'
sidebar_position: 2
description: 'A player class just for Journey'
---

# `JourneyPlayer`

A `JourneyPlayer` is a Journey-specific player class that contains relevant information about an online Minecraft user. The object is essentially backed by the `Player` class of whatever mod platform Journey is running on.

Notably, you can use a `JourneyPlayer` to get a players name or UUID and check whether they have a given permission. This information is useful when constructing [`Scopes`](/docs/dev/scopes.md) and [`Tunnels`](/docs/dev/tunnels.md).