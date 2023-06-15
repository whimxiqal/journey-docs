---
sidebar_label: 'Getting Started'
sidebar_position: 1
description: 'Adding Journey as a dependency for your project'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Journey API

Journey has a shared "core" java API library a separate java API component for each platform that Journey runs on. 

To use the Journey API, you must download the dependency using your project's build tool: [Maven](https://maven.apache.org/) or [Gradle](https://docs.gradle.org/). The platform-specific libraries have a few helpful tools, but you may not need them because most of the API resides the shared library.

## Declaring Dependencies

![Maven Central](https://img.shields.io/maven-central/v/net.whimxiqal.journey/core-api?label=API%20Version&style=for-the-badge)

<Tabs groupId="build-tool">
  <TabItem value="gradle" label="Gradle">

```gradle
repositories {
  mavenCentral()
}

dependencies {
  implementation 'net.whimxiqal.journey:core-api:<version>[-SNAPSHOT]'
  implementation 'net.whimxiqal.journey:<platform_id>-api:<version>[-SNAPSHOT]'
}
```

  </TabItem>
  <TabItem value="maven" label="Maven">

```markdown
<dependencies>
    <dependency>
        <groupId>net.whimxiqal.journey</groupId>
        <artifactId>core-api</artifactId>
        <version>version[-SNAPSHOT]</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

  </TabItem>
</Tabs>

To use snapshots, you must add the snapshot repository:

![Sonatype Nexus (Snapshots)](https://img.shields.io/nexus/s/net.whimxiqal.journey/core-api?label=API%20Snapshot%20Version&server=https%3A%2F%2Fs01.oss.sonatype.org&style=for-the-badge)

<Tabs groupId="build-tool">
  <TabItem value="gradle" label="Gradle">

```gradle
repositories {
  maven {
    name = 'sonatype-snapshots'
    url = 'https://s01.oss.sonatype.org/content/repositories/snapshots'
  }
}
```

  </TabItem>
  <TabItem value="maven" label="Maven">

```markdown
<repositories>
    <repository>
        <id>sonatype-snapshots</id>
        <url>https://s01.oss.sonatype.org/content/repositories/snapshots</url>
    </repository>
</repositories>
```

  </TabItem>
</Tabs>

The platforms and their identifiers are below:

|              Platform | ID     |
| --------------------: | :----- |
| Bukkit (Paper/Purpur) | bukkit |

## [Kyori Adventure](https://docs.adventure.kyori.net/)

Journey uses the Kyori Aventure library. You should not need to add it manually as a dependency.
