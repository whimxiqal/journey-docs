---
sidebar_label: "Search API"
sidebar_position: 2
description: "Submit custom searches"
---

# The Search API

To submit search requests to Journey, you must first get the `SearchApi`:

```java
JourneyApi journey = JourneyApiProvider.get();
SearchApi searching = journey.searching();
```

From the `SearchApi`, you may submit a request for players:

```java
searching.runPlayerDestinationSearch(playerUuid, destination, SearchFlags.of(/* any desired flags */));
```

Alternatively, you may submit a request for an arbitrary [`JourneyAgent`](/docs/dev/journey-agent.md).

```java
searching.runDestinationSearch(myAgent, origin, destination, SearchFlags.of(/* any desired flags*/));
```

A request returns a `CompletionStage<SearchResult>`, on which you may set callbacks for when the search completes. These requests may safely be called asynchronously. The stage will always be completed on the main server thread.

By itself, the search doesn't start navigation for any player. Use the [Navigation API](/docs/dev/navigation-api.md) for this step.

## `SearchResult` {#search-result}

The result of a search contains just two pieces of information:

1. the successfulness of the search
2. the path itself, if the search was successful

## `SearchFlags` {#search-flags}

You may request that Journey alter the behavior of the search by passing in `SearchFlags`, which are essentially just key-value objects. Current flag types are:

1. `TIMEOUT`: How many seconds should the search take before quitting. Default is set in the [config](/docs/config.md).
2. `FLY`: Whether flight should be considered as a possible mode of transportation for those with the ability to fly. Default is set in the [config](/docs/config.md).
