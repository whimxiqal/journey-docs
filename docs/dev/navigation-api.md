---
sidebar_label: "Navigation API"
sidebar_position: 3
description: "Submit custom navigators"
---

# The Navigation API

The Navigation API should be used to register custom navigator types at the startup of the server and to generate custom navigators as needed throughout its lifetime.

Access the `NavigationApi` like the following:

```java
JourneyApi journey = JourneyApiProvider.get();
NavigationApi navigating = journey.navigating();
```

## Navigating

You may navigate in game manually with `NavigationApi#navigate` and `NavigationApi#navigatePlayer`. Usually, you would call this after a search is completed:

```java
JourneyApi journeyApi = JourneyApiProvider.get();
journeyApi.searching().runPlayerDestinationSearch(...).thenAccept(result -> {
  if (result.status() != SearchResult.Status.SUCCESS) {
    /* failure! */
    return;
  }
  journeyApi.navigating().navigatePlayer(playerUuid, result.path(), /* optional "details" */);
});
```

### `NavigatorDetails` and `NavigatorOptions`

Every `Navigator` has associated `NavigatorOptions`, as designated by the `Navigator`'s `NavigatorFactory`. In game players and API users may specify values for these "options" to alter the behavior of an individual `Navigator`. `NavigatorDetails` hold the raw information about these option values. These are then accessible within the `Navigator` via a helpful interface (`NavigatorOptionValues`).

It is recommended to use a ` NavigatorDetailsBuilder``Navigator `/`NavigatorFactory`'s associated `NavigatorDetailsBuilder`.

## Registering Custom Navigator Types {#navigator-registration}

You may register a new `Navigator` type by creating and registering a `NavigatorFactory`. A `NavigatorFactory` contains global information about its `Navigators` and contains the logic for generating them.

Let's take an example where I am building a "Siren" navigator, where players are led to their destinations by the sounds of a designated Minecraft sound that are always coming from a location just a few blocks ahead of the player.

```java title="MyPlugin.java"
@Override
public void onEnable() {
  NavigationApi navigating = ...;
  navigating.registerNavigator(NavigatorFactory.builder("MyPlugin", "siren")
    .supplier(SirenNavigator::new)
    // The conventional pattern for permissions for navigators is "journey.flag.navigator.<id>"
    .permission("journey.flag.navigator.siren")
    .build());
}
```

```java title="SirenNavigator.java"
public class SirenNavigator implements Navigator {
  JourneyAgent agent;
  NavigationProgress progress;
  NavigatorOptionValues options;

  public SirenNavigator(JourneyAgent agent, NavigationProgress progress, NavigatorOptionValues optionValues) {
    this.agent = agent;
    this.progress = progress;
    this.optionValues = optionValues;
  }

  @Override
  public void start() {
    // Schedule a task that periodically makes a sound a little bit ahead of the player
  }

  @Override
  public void stop() {
    // Cancel the scheduled task
  }

}
```

The permission is for in-game use. Only players with the permission may specify this navigator when executing a search command with the ["navigator flag"](/docs/commands.md#navigator-flag).

You may also add `NavigatorOptions` to your `NavigatorFactory`. This will allow players and users of the API to alter the behavior of their subsequently generated `Navigator`. In the case of my "siren" `Navigator`, I might want to let people specify the type of sound they want to hear:

```java title="MyPlugin.java"
private static final Set<String> ALLOWED_SOUNDS = /* Set of allowed sounds */;

@Override
public void onEnable() {
  NavigationApi navigating = ...;
  navigating.registerNavigator(NavigatorFactory.builder("MyPlugin", "siren")
    .supplier(SirenNavigator::new)
    .permission("journey.flag.navigator.siren")
    .option(NavigatorOption.stringValueBuilder("sound")
      .defaultValue("entity.villager.yes")
      .valueSuggestions(() -> /* get list of Minecraft sounds */))
      // Some sounds may be unsupported, so you can validate them here
      .validator(sound -> ALLOWED_SOUNDS.contains(sound) ? null : "Sound not allowed: " + sound)
      .permission("journey.flag.navigator.siren")
      .valuePermission(sound -> "journey.flag.navigator.siren." + sound)
      .build()
    .build());
}
```
