---
sidebar_position: 1
---

import PathToNetherScreenshot from '/img/screenshots/path-to-nether.png';
import GUIScreenshot from '/img/screenshots/gui.png';

# Introduction

Journey is a server-side navigation tool for Minecraft Java Edition, versions 1.17+. In game, players may submit requests to find and display the fastest paths to various destinations. These paths may traverse multiple worlds and may prompt the user to use any methods of travel available, including walking, swimming, boating, and even teleporting, either with portals or commands. In general, if it possible for a player to get to a certain destination, Journey will take them there.

With the [Journey API](/docs/category/developers), developers can add their own custom transportation mechanisms, like custom portals and teleportation commands, and their own custom location to which players may travel. [Here](/docs/category/integrations) are some in-house utility plugins that perform such integration for some of the most popular plugins used today. If you use any of those plugins, it is recommended that you use the integration plugin to enhance your experience.

## Supported Server Types

| Server Type                  | Supported?                                                     |
| :--------------------------- | :------------------------------------------------------------- |
| Bukkit (Paper, Purpur, etc)  | Yes                                                            |
| Sponge (API 8+)              | Not yet                                                        |
| Fabric                       | Not yet                                                        |
| Bukkit (CraftBukkit, Spigot) | Never ([why?](faq.md#why-are-some-server-types-not-supported)) |

## About Journey

Players submit requests to create **paths** to destinations. Journey natively supports setting custom destinations called **waypoints**. Each player may set **personal waypoints** and administrators may set **server waypoints**, which are available to all players. Other available destinations include the player's **last known death location**, **other players' locations**, and **other players' public personal waypoints**.

For example, if your Nether world is called `the_nether`, you may type the command `/jt the_nether` and Journey will present the quickest path to get there.

<img src={PathToNetherScreenshot} style={{margin: '0 10%', width: '80%', borderRadius: 10}} />

Alternatively, you may use the inventory interface with simply `/jt`.

<img src={GUIScreenshot} style={{margin: '0 10%', width: '80%', borderRadius: 10}} />
