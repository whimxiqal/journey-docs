---
sidebar_label: 'Tunnels'
sidebar_position: 5
description: 'Adding custom transportation'
---

# Tunnels

A `Tunnel` is a custom connection between any two places on the server that symbolizes an [agent](/docs/dev/journey-agent.md)'s ability to travel from one end to the other. If your plugin provides players any sort of custom transportation methods, namely teleportation like custom portals or commands, you should register them. A simple registration for a Bukkit plugin that has custom teleportation commands may look like:

```java

Map<String, Location> numberOfTowns(UUID playerUuid) {
  /* gets a map of locations, keyed by its name, that a player can teleport to */
}

@Override
void onEnable() {

  // ...

  JourneyBukkitApi journeyBukkit = JourneyBukkitApiProvider.get();
  JourneyApi journey = JourneyApiProvider.get();

  journey.registerTunnels(this.getName(), agent -> numberOfTowns(agent.uuid())
    .entrySet()
    .stream()
    .collect(Collectors.toList(entry -> 
        Tunnel.builder(player.location(), journeyBukkit.toCell(entry.getValue()))
            .prompt(() -> player.audience()
                .sendMessage(Component.text("Please teleport to " + entry.getValue())))
            .permission("myplugin.teleport")
            .build())));

  // ...

}
```

:::tip
If its easier, you may make your own class that inherits from `Tunnel` directly instead of using the builder.
:::