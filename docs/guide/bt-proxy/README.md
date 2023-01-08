---
sidebarDepth: 1
next: ../faq-and-lifehacks/
---

# POE Bluetooth Proxy

SLZB-06 utilizes ESP32 chip so can be used as a [ESPHome Bluetooth proxy adapter for Home Assistant](https://esphome.github.io/bluetooth-proxies/).
<img src="../../images/bt-proxy/slzb-06-btproxy-logo.png" title="SLZB-06 - ESPHome Bluetooth proxy mode" class="float-left" />  

Limitation:
:::  warning
BTProxy can't be used as both Zigbee coordinator and Bluetooth proxy at the same time. Either Zigbee adapter OR Bluetooth proxy
:::

So with SLZB-06 you can have:
- POE ESPHome Bluetooth Proxy adapter

## How to set-up your SLZB-06 as ESPHome Bluetooth proxy
1. Generate ESPHome firmware based on the following [ESPHome BTProxy YAML configuration file](https://github.com/smlight-dev/slzb-06-esphome/blob/main/slzb-06-esphome-btproxy.yaml).
2. Flash you generated firmware to your SLZB-06's ESP32 chip following the [official manual](https://smlight.tech/manual/slzb-06/guide/flashing-and-updating/updating-esp32.html);.
3. Follow official [ESPHome BTProxy component documentation](https://esphome.io/components/bluetooth_proxy.html) for proper end-devices set-up.

:::  warning
SLZB-06 can't run both Zigbee and Bluetooth networks simultaneously, so if you are using BTPorxy, you are not able to use as Zigbee adapter
:::

