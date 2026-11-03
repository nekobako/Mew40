# Firmware
Download the Mew40 firmware and flash it to the RP2040-Tiny.

## Downloading the Firmware
1. Download the latest `Firmware.zip` from [GitHub Releases](https://github.com/nekobako/Mew40/releases) and extract it to a folder of your choice.

![Downloading the Firmware](/images/build-guide/firmware/0.png)

## Flashing the Firmware
1. Connect the USB port adapter to your PC with a USB Type-C cable, then press and hold the `BOOT` and `RESET` buttons at the same time; release `RESET`, then release `BOOT`.

![Flashing the Firmware](/images/build-guide/firmware/1.png)

2. When your PC recognizes a drive named `RPI-RP2`, copy `nekobako_mew40_vial.uf2` from the extracted folder to the root of the drive.

![Flashing the Firmware](/images/build-guide/firmware/2.png)

::: info Information
When flashing is complete, the drive disconnects automatically and the keyboard restarts.
:::

::: info Information
`nekobako_mew40_vial.uf2` supports Vial, while `nekobako_mew40_default.uf2` does not support Vial.
:::

## Verifying the Firmware
1. Open [Vial Web](https://vial.rocks/), click the `Start Vial` button, and check that the keyboard is recognized.

![Verifying the Firmware](/images/build-guide/firmware/3.png)
