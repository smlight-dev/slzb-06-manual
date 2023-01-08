---
---

# Installation

You can use SLZB-06 either as Zigbee to Ethernet adapter or as Zigbee to USB adapter. Depending on the type you are going to use, you can connect you device.

## Connection over Ethernet

### Cable connection

- Plug in RJ45 cable to your device. 
::: tip
SLZB-06 has optoelectronic isolation, so can be connected to USB port of your PC and at the same time to Ethernet/PoE cable!
:::

### Zigbee2MQTT setup

- Follow Zigbee2MQTT set-up [official guideline](https://www.zigbee2mqtt.io/guide/configuration/adapter-settings.html).
- use the following lines in `port:` settings:
```yaml
...
serial:
  port: tcp://192.168.0.105:6638
...
```
where 
- `192.168.0.105` is an IP address of SLZB-06 in your network;
- `6638` is a port of your SLZB-06 adapter (default is **6638**, can be configured within Firmware);

## Connection over USB

### Cable connection

- Plug in type-C cable to the device.
::: tip
SLZB-06 has optoelectronic isolation, so can be connected to USB port of your PC and at the same time to Ethernet/PoE cable!
:::

::: warning
**DRIVERS for USB/UART converter**! SLZB-06 uses CP2102 as an USB/UART chip. If your system does not recognize the device, you have to install the drivers. We reccomend to use the drivers from [official web page of Silicon Labs CP210x driver page](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads)!
:::

### Zigbee2MQTT setup

- Follow Zigbee2MQTT set-up [official guideline](https://www.zigbee2mqtt.io/guide/configuration/adapter-settings.html).
- use the following lines in `port:` settings:
```yaml
...
serial:
  port: /dev/ttyUSB0
...
```
where 
- `/dev/ttyUSB0` is an ID of SLZB-06 device within your system;

## Running Zigbee2MQTT in a Docker container
Sample `docker-compose` settings that were tested sucesfully:
```yaml
version: '3'
services:
  zigbee2mqtt:
    container_name: zigbee2mqtt
    image: koenkk/zigbee2mqtt
    restart: unless-stopped
    network_mode: host
    privileged: true
    environment:
      - TZ=Europe/Kiev
    volumes:
      - /run/udev:/run/udev:ro
      - /home/pi/docker-containers/zigbee2mqtt:/app/data
```
<img src="../../images/installation/z2m-docker-screenshot.png" title="SLZB-06 Zigbee2MQTT in Docker" class="float-left" />.  

Key parameters and their definitions:
- `network_mode: host` - means that your containers has the same access as the host machine. Instead, you can map your ports 
```yaml
port:
  8080:8080
  6638:6638
```
but we reccomend to start with `network_mode: host`.
- `privileged: true` - allows your container to access your host devices, important if you are using a USB connection.
- `/home/pi/docker-containers/zigbee2mqtt` is a location of your Zigbee2MQTT configuration.yaml file.
