---
sidebar_position: 4
description: "Configure Journey to work how you want"
---

# Configuration

Journey may be configured using the settings in the generated [`config.yml`](https://github.com/whimxiqal/journey/blob/common/src/main/resources/config.yml) file. Each setting should be commented with information about its purpose and limitations.

## New Settings

Settings added in future versions will not appear on the config file and will instead resort to their default values. You must add the new setting(s) manually or delete the config file and let it regenerate upon server restart to get the latest config file version.

## Config Reload

Some setting values in the config file may be loaded onto the server using the [`/journey admin reload`](/docs/commands#journey-admin-reload) command. Some settings are not re-loadable while the server is running, though, so a server restart will be needed to observe some changes to config settings.
