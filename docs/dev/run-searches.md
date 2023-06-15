---
sidebar_label: 'Running Searches'
sidebar_position: 3
description: 'You may request Journey to run a search for you'
---

# Running Custom Searches

You may submit a search request to Journey using the following methods in the `JourneyApi`:

```java
Future<SearchResult> runDestinationSearch(JourneyAgent agent, 
    Cell origin, Cell destination,
    SearchFlag<?>... flags);

Future<SearchResult> runPlayerDestinationSearch(UUID playerUuid, 
    Cell destination, boolean display, 
    SearchFlag<?>... flags);
```

The first method is for calculating a path for an arbitrary `JourneyAgent`. Here, you must specify the agent, the origin and destination of the desired path, and any extra [search flags](#search-flags).

Although `JourneyPlayer`s are a type of `JourneyAgent`, you should use the second method for calculating paths intended for a players' navigation. The origin of the calculation is automatically the current location of the player with the given UUID, and if you choose to pass `true` to the `display`, the resulting path will be displayed to the player in standard Journey fashion, thus enabling the player to navigate to the destination on their own. In this way, you may "run and done" it without needing to handle the result of the search in any way.

## `SearchResult` {#search-result}

The result of a search is currently just two pieces of information:
1. the successfulness of the search
2. the path itself, if the search was successful

More information may be provided in future API versions.

## `SearchFlags` {#search-flags}

You may request Journey alter the behavior of the search by passing in `SearchFlags`, which are essentially just key-value objects. Current flag types are:
1. `TIMEOUT`: How many seconds should the search take before quitting. Default is set in the [config](/docs/admin/config.md#search-behavior).
2. `FLY`: Whether flight should be considered as a possible mode of transportation for those with the ability to fly. Default is set in the [config](/docs/admin/config.md#search-behavior).