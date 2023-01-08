---
sidebarDepth: 1
next: ../flashing-and-updating/updating-cc2652p/
---

# Flashing and updating

There are two main modules in SLZB-06 that can be flashed and updated, these are:
- **ESP32**, which is responsible for all other operation of the device: connection to Ethernet and Wi-Fi, operation of additional systems such as LEDs. The current firmware of this module is available at the [official SLZB-06 Firmware repository:](https://github.com/smlight-dev/slzb-06-firmware/);
- **CC2652P**, which controls the Zigbee network. It is flashed with Z-Stack 3.x.0 firmware available at the [official Z-Stack 3.x.0 repository:](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin). 


::: tip
Both ESP32 and CC2652P modules can be updated remotelly. You do not need to have physicall access to the device. Please read the next sections for updating both chips.
:::
