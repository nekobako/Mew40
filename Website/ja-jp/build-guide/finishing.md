# 仕上げ
トップケースとボトムケースを固定し、お好みでキーマップを変更して完成です。

## トップケースとボトムケースの固定
1. USB ポートの向きを合わせてボトムケースをトップケースにはめ込みます。

![トップケースとボトムケースの固定](/images/build-guide/finishing/0.png)

::: warning 注意
FPC ケーブルを挟み込まないようご注意ください。
:::

2. 六角穴付き皿ボルト (M3 × 8 mm) で固定します。

![トップケースとボトムケースの固定](/images/build-guide/finishing/1.png)

3. 必要に応じて四隅にゴム足を貼り付けます。

![トップケースとボトムケースの固定](/images/build-guide/finishing/2.png)

## キーマップの変更
1. Mew40 を USB Type-C ケーブルで PC に接続し、[Vial Web](https://vial.rocks/) を開いてお好みでキーマップを変更します。

![キーマップの変更](/images/build-guide/finishing/3.png)

2. 必要に応じて QMK 設定を変更します。

![キーマップの変更](/images/build-guide/finishing/4.png)

::: info 情報
標準キーマップでは親指周りに Mod-Tap や Layer-Tap を割り当てています。  
これらを素早く入力しようとした際の意図しない挙動を避けるため、`QMK Settings > Tap-Hold` の `Hold On Other Key Press` をオンに、`Quick Tap Term` を 0 にすることをおすすめします。
:::
