# Finishing
Secure the top and bottom cases, then customize the keymap if you like.

## Securing the Top and Bottom Cases
1. Align the USB port, then fit the bottom case into the top case.

![Securing the Top and Bottom Cases](/images/build-guide/finishing/0.png)

::: warning Caution
Take care not to pinch the FPC cable.
:::

2. Secure them with the hex-socket flat-head bolts (M3 × 8 mm).

![Securing the Top and Bottom Cases](/images/build-guide/finishing/1.png)

3. Attach rubber feet at the four corners if desired.

![Securing the Top and Bottom Cases](/images/build-guide/finishing/2.png)

## Changing the Keymap
1. Connect the Mew40 to your PC with a USB Type-C cable, open [Vial Web](https://vial.rocks/), and customize the keymap to your preference.

![Changing the Keymap](/images/build-guide/finishing/3.png)

2. Change the QMK settings if needed.

![Changing the Keymap](/images/build-guide/finishing/4.png)

::: info Information
The default keymap assigns Mod-Tap and Layer-Tap keys around the thumb cluster.  
To avoid unexpected behavior when typing these keys quickly, we recommend enabling `Hold On Other Key Press` and setting `Quick Tap Term` to 0 under `QMK Settings > Tap-Hold`.
:::
