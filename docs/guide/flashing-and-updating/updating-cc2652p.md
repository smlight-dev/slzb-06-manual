---
sidebarDepth: 1
next: ../flashing-and-updating/updating-esp32/
---

# Updating Zigbee CC2652P Chip
User can flash Zigbee SoC (which is Texas Instruments CC2562P) any of the tools described at [Zigbee2MQTT official web page here:](https://www.zigbee2mqtt.io/guide/adapters/#flashing-cc1352-cc2652-cc2538-based-adapters).  
There are several options for updates:
- Update over web-interface (recommended)
- Over-the-USB update
- Manual Over-the-Air (Ethernet) update
- Update with HW flasher
Below you can find detail manuals for few flashing options from those link.

## Zigbee auto update over the web-interface (recommended)  
::: tip
Update over web-interface can be done distantly without a physical access to your device!
:::  

::: warning
While updating Zigbee CC2652P via web-interface, SLZB-06 has to have access to the internet to check for the latest Zigbee firmware and be able to download it!
:::  

::: tip
Auto updated over web interface is available with the ESP32 firmware version 1.0.0-dev and later. Please refer for the [ESP32 firmware updates here](https://smlight.tech/manual/slzb-06/guide/flashing-and-updating/updating-esp32.html#updating-esp32-through-the-browser).  
:::  

1. Go to the SLZB-06's web interface.
2. Go to "System and Tools" -> tab "System tools" -> "Zigbee OTA Update" -> "Check for updates".
3. Choose available firmware and press "Flash...". Wait till untill message "Zigbee OTA update done" appear.  
  <br><img src="../../images/flashing/cc2652p/web/web-interface-ota-flashing.jpg" title="SLZB-06 Zigbee flashing over WEB" class="img-fluid" /><br>    

Process video manual could be checked here (stat at 01:00m) [Youtube SLZB-06 video review](https://youtu.be/ps-x_-CQXp0?t=60).  
<br>  

## Over-the-USB update

::: tip
Texas Instruments is a manufacturer of Zigbee SoC CC2652P which is used in SLZB-06 adapter. The most "true" method is to use official flasher although it is more complicated process.
:::

1. Download latest Zigbee firmware. SLZB-06 Adapter is based on CC2652P from Texas Instruments. Firmwares are based on Z-Stack. You can see the best one here [Koenkk Z-Stack firmware on Github](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin). Use frmware with a tag **"...other_coordinator_"**;
2. Download official Texas Instruments [Flash Programmer 2](https://www.ti.com/tool/FLASH-PROGRAMMER);
3. Install Flash Programmer 2;
4. Connect your SLZB-06 to your network and USB port;
5. Be sure, that your PC has USB drivers and SLZB-06 USB is recognized. If no, please install either [CP2102 driver](https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads) or [CH9102 driver](http://www.wch-ic.com/search?t=all&q=ch9102) depending you your hardware;
6. Change your SLZB-06 mode to Zigbee-to-USB with active `Keep network & web server` at the `General` tab of the web-interface; <br><img src="../../images/flashing/cc2652p/ti-fp2/slzb-06-usb-web-server.png" title="parameters to flash cc2652p by TI Flash Programmer" class="img-fluid" /><br>    
7. At SLZB-06 web-interface, go to the `System and Tools`, press button `Zigbee Flash Mode`; <img src="../../images/flashing/cc2652p/ti-fp2/slzb-06-usb-flash-mode.png" title="Zigbee SLZB-06 flash mode" class="img-fluid" /><br>
8. Open your Flash Programmer 2 from step 3. At the left window `Connected devices` click on `Unknown` and below at `Selected target` choose `CC2652P`; <br><img src="../../images/flashing/cc2652p/ti-fp2/fp2-target-unselected.png" title="Flash programmer 2 - to select target device" class="img-fluid" />    <br> You have to get the following:  <br><img src="../../images/flashing/cc2652p/ti-fp2/fp2-target-selected.png" title="Flash programmer 2 - target device selected" class="img-fluid" /><br>    
9. Do the following settings:
- Select firmware file under the Flash images(s) with the option `Single`;
- Make activer checkboxes `Erase` (All unprotected pages), `Program` (Entire source file), `Verify` (CRC check)
- Please very very careful, the `Disable bootloader` should remain **UNCHECKED**. Otherwise you will not be able to flash CC2652P via USB or LAN but just with external programmer; <br> You have to get the following: <br><img src="../../images/flashing/cc2652p/ti-fp2/fp2-flashing-settings.png" title="Flash programmer 2 - setting" class="img-fluid" /><br>

::: warning
Zigbee connectivity (e.g. Zigbee2MQTT or ZHA) should be disconnected. Flashing is impossible when the adapter is in *active* state.
:::  

10. Press the `Start` button (with Triangular) to Start the flashing; <br> You have to get the following: <br><img src="../../images/flashing/cc2652p/ti-fp2/fp2-start-flashing.png" title="Flash programmer 2 - start flashing" class="img-fluid" /><br>    
11. Wait until the message `Success!` is apeared at the progressbar and Status window states `Reset of target successful`. Flashing takes about 3 seconds; <br> You have to get the following: <br><img src="../../images/flashing/cc2652p/ti-fp2/fp2-finish-flashing.png" title="Flash programmer 2 - finish flashing" class="img-fluid" /><br>    
12. That is it. Flashing is done. You can use your device now with the new Zigbee firmware.  
<br>   

## Manual Over-the-Air (Ethernet) update  
::: warning
Although this method allow to flash Zigbee remotely, we do not reccomend to use it as it requires very stable Ethernet connection between PC and SLZB-06! Use CC2652P web update feature instead - it downloads firmware to the SLZB-06 first and only after that starts flashing
:::  
::: tip
Update over Ethernet can be done distantly without a physical access to your device!
:::
1. Download latest Zigbee firmware. SLZB-06 Adapter is based on CC2652P from Texas Instruments. Firmwares are based on Z-Stack. You can see the best one here [Koenkk Z-Stack firmware on Github](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin). Use frmware with a tag **"...other_coordinator_"**;
2. Download [flashing tool](https://github.com/smlight-dev/ZigStarGW-MT/releases/tag/v0.3.5) - choose the right version for your OS;
3. Connect your SLZB-06 and PC with flashing firmware to the same LAN network over ethernet (cable) connection. It is important, as becouse WiFi can have some delays - it is incompatible for flashing. Flashing should be done only through ethernet connection;
4. Open Flashing tool and make te following settings:
- put IP address and port of your SLZB-06 to the respective field in the format `192.168.1.113:6638` where **192.168.1.113** is an IP address and **6638** - port;
- click buttn `...` and select your Zigbee firmware, downloaded at stage 1;
- Put active checkboxes `Erase`, `Write`, `Verify`, and `Auto BSL`;  <br><img src="../../images/flashing/cc2652p/other/other-settings.png" title="Other flashers - settings" class="img-fluid" /><br>    
::: warning
Zigbee connectivity (e.g. Zigbee2MQTT or ZHA) should be disconnected. Flashing is impossible when the adapter is in *active* state.
:::  

5. Press `Start` button;  <br><img src="../../images/flashing/cc2652p/other/other-start.png" title="Other flashers - start flashing" class="img-fluid" /><br>
6. Wait untill the process is completed: the progress bar contains the message **"100%"** and below text **All is Ok. Restarting Zigbee**. Flashing takes about 8 minutes; <br> <img src="../../images/flashing/cc2652p/other/other-finish.png" title="Other flashers - finish flashing" class="img-fluid" /><br>    
7. That is it. Flashing is done. You can use your device now with the new Zigbee firmware.  
<br>  

## Update with HW flasher
SLZB-06 adapter contains DIY pinouts that enable users to flashe directly by J-TAG. Please note, that pin-outs are 1.27mm size, not commonly used 2.54mm size. 

