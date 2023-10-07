---
sidebar_label: "Scopes"
sidebar_position: 4
description: "Adding custom destinations"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Scopes

A `Scope` contains information about points of interest around your Minecraft server. Each one of these places, called a `Destination`, is usually context-specific and has other information associated with it. So, in a `Scope`, you can encode the context, name, description, and permission for any number of `Destination`s.

## Structure

A `Scope` will also often have some number of `sub-Scope`s, which allow you to define all of your `Destinations` in a tree-like pattern. For example, in [JourneyEssentials](/docs/integration/journeyessentials.md), there is an [Essentials](https://essentialsx.net/) `Scope` that has `sub-Scope`s for "warps" and also for players' "homes". Each of those `sub-Scopes` contain 0 `sub-Scopes` and contain a bunch of `Destinations`.

Journey lets you register you own `Scope`, which gets placed just under the Journey-wide `Scope` "root" as a `sub-Scope`. No two `sub-Scope`s or `Destinations` may have the same ID within a `Scope`.

You can build your own `Scope` by either inheriting the `Scope` interface. Or, you can build an inline `Scope` using the `ScopeBuilder`.

Let's say you are developing a town plugin. There will be multiple towns, and each town has multiple buildings. People may only journey to buildings inside towns to which they have permission.

```java
Scope myScope = Scope.builder()
    .name(Component.text("Towns").color(NamedTextColor.BLUE))
    .description(Component.text("Journey to towns in My Plugin").color(NamedTextColor.GREEN))
    .subScopes(/* ... add scopes for each town here ... */)
    .build();
```

Register your `Scope` to Journey using the `JourneyApiProvider`:

```java
JourneyApi journey = JourneyApiProvider.get();

journey.registerScope(myScope);
```

## `VirtualMap`

`sub-Scopes` and `Destinations` must be added in a `VirtualMap`, which supplies a `Map` given a [`JourneyPlayer`](/docs/dev/journey-agent.md). The internal map is keyed by the value's identifier, and the value is either a `Scope` or a `Destination`.

The motivation for a wrapper around the map is that there may be some cases where the number of items in the map is very large and would require a good deal of time and memory to load. If this is a concern, then you may manually set the `size()` of a `VirtualMap` and leave the actual data in a `Supplier<Map<>>` to only be loaded if the `size()` is small enough to warrant it. In this way, the items in the map will be provided if requested by the user, but the full map will only be loaded and presented to the user in situations where the total set of options should be limited, like for command completion.

## "Strict"

A "strict" `Scope` is one in which the internal components must be contextualized with the `Scope` itself and the values within may never be specified when taken out of that context. Many of your `Scopes` probably should be "strict" to avoid confusion with conflicting names of `Destinations` or `sub-Scopes` that are way down the `Scope` tree. Otherwise, if a `Scope` is not "strict", then the name of its components may be named in some situations without needing the parent `Scope`'s name, as long as there aren't any name conflicts. In the case of the town plugin, you may want the town scope to be "strict" so that you need to contextualize the building names, but you may not want the overall `Scope` to be strict so that you may name each of the towns without needing to specify your plugin as the overall context.

A single `Scope` for a town using Bukkit may look like:

```java
Town myTown = /* ... your town object ... */

JourneyBukkitApi journeyBukkit = JourneyBukkitApiProvider.get();

Scope myTownScope = Scope.builder()
    .name(Component.text(myTown.name()))
    /* you don't need a description */
    .destinations(VirtualMap.of(() -> myTown.buildings()
        .stream()
        .collect(Collectors.toMap(building -> building.id(),
          building -> Destination.of(journeyBukkit.toCell(building.location()))))))
    .permission("myplugin.town." + myTown.id())  // only let people with town permissions use this scope
    .strict()  // the buildings must be contextualized under this town if anyone wants to use it
    .build()
```

You can use the `DestinationBuilder` to add a name, description, and permission to your destinations, just like with a `Scope`.

## Complete Example

Finally, your whole registration for a Bukkit plugin may look like this:

```java

int numberOfTowns() {
  /* returns number of towns quickly */
}

Collection<Town> towns() {
  /* returns all towns in your plugin */
}

@Override
void onEnable() {

  // ...

  JourneyBukkitApi journeyBukkit = JourneyBukkitApiProvider.get();

  Scope myScope = Scope.builder()
    .name(Component.text("Towns").color(NamedTextColor.BLUE))
    .description(Component.text("Journey to towns in My Plugin").color(NamedTextColor.GREEN))
    .subScopes(VirtualMap.of(() -> towns().stream()
      .collect(Collectors.toMap(town -> town.id(), town -> Scope.builder()
        .name(Component.text(myTown.name()))
        .destinations(VirtualMap.of(myTown.buildings()
            .stream()
            .collect(Collectors.toMap(building -> building.id(), building ->
              Destination.builder(journeyBukkit.toCell(building.location())
                .name(Component.text(building.name()))
                .build())))))
        .permission("myplugin.town." + myTown.id())
        .strict()
        .build()))
      .build(), numberOfTowns()))
    .build();

  JourneyApi journey = JourneyApiProvider.get();

  journey.registerScope(myScope);

  // ...

}
```

:::tip
If your `Scope` gets too complex, consider implementing the `Scope` class directly for better organization.
:::
