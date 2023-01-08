---
sidebarDepth: 1
next: ../bt-proxy/
---

# Multiple adaptors setup
Sometimes the system architecture requires to manage several SLZB-06 Zigbee cordinators under one instance of Home Assistant. Such cases includes but not limited:
- cover remote locations in you apartment, or different floor of basement etc;
- cover remote building like garage etc via LAN connection;
- cover remote location like summer house via Internet remote;
- if you have "unstable" end-devices and want to segregate them from the main Zigbee network;
- if you want to have a "guest" Zigbee network for testing and DIY works;

The user can connect any number of SLZB-06 coordinators to a single Home Assistance instance. 
Coordinators can work simultaneously:
- connected via USB cable;
- connected via Ethernet or WiFi in a local network (either with PoE power supply or type-C power supply);
- connected via Ethernet or WiFi in a remote network via an Internet connection (either with PoE power supply or type-C power supply).  
Possible connection scenarios and the architecture of the multi-coordinator system are shown in the figure below.  

<img src="../../images/multi-coordinator/systemarchitecture.png" title="SLZB-06 - multiple Zigbee coordinators in one Home Assistant and Zigbee2MQTT" class="float-left" />  
Number of SLZB-06 Coordinators is not limited, you can link as many as you need.  

:::  tip
Each coordinator will create a separate Zigbee network. For end-user it does not matter, as no difference for Home Assistant where the end devices are connected to. The only can be matter if you are using direct binding, so devices with direct binding have to be connected to the same network.
:::

In order to run several coordinators you have to:
- install and run several instances of Zigbee2MQTT on your server;
- make config of each Zigbee2MQTT according to your adapter settings, e.g. put IP address to this part of Zigbee2MQTT config:
```yaml
...
data_path: /config/zigbee2mqtt_1
...
mqtt:
  base_topic: zigbee2mqtt_1
...
serial:
  port: tcp://192.168.0.105:6638
...
advanced:
  pan_id: 6754
  chanel: 11
...
```
where 
- `/config/zigbee2mqtt_1` - set up unique path to each Zigbee2MQTT instance, e.g. use `/config/zigbee2mqtt_1` for Zigbee2MQTT instance #1, `/config/zigbee2mqtt_2` for Zigbee2MQTT instance #2 etc;
- `mqtt:   base_topic: zigbee2mqtt_1` - unique MQTT topic for each Zigbee2MQTT instance, e.g. `base_topic: zigbee2mqtt_1`for Zigbee2MQTT instance #1, `base_topic: zigbee2mqtt_2` for Zigbee2MQTT instance #2 etc;
- `192.168.0.105` is an IP address of SLZB-06 in your network;
- `6638` is a port of your SLZB-06 adapter (default is **6638**, can be configured within Firmware);
- `pan_id: 6754` - unique PAN ID (ID of the Zigbee network) for each Zigbee2MQTT instance, e.g. use `6754` for Zigbee2MQTT instance #1, `1234` for Zigbee2MQTT instance #2 etc; `pan_id` can be ANY 4 digits
- `chanel: 11` - Zigbee network channel. Like WiFi networks, each network performs on its own network. It is possible if Zigbee networks work on the same channel, however it is reccomended to use different channels. So put here an
Please follow [official Zigbee2MQTT](https://www.zigbee2mqtt.io/guide/configuration/zigbee-network.html#network-config) guide for more description of config settings.

:::  warning
If you are going to use remote SLZB-06 Zigbee coordinator with access through Internet, we reccomend to secure your access to remote device by any available means
:::

:::  warning
chapter to be added
:::