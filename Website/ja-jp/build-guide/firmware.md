# ファームウェア
Mew40 のファームウェアをダウンロードして RP2040-Tiny に書き込みます。

## ファームウェアのダウンロード
1. [GitHub Releases](https://github.com/nekobako/Mew40/releases) から最新の `Firmware.zip` をダウンロードし、任意のフォルダに展開します。

![ファームウェアのダウンロード](/images/build-guide/firmware/0.png)

## ファームウェアの書き込み
1. USB ポートアダプタを USB Type-C ケーブルで PC に接続した後、`BOOT` ボタンと `RESET` ボタンを同時に押し、`RESET` ボタンを離してから `BOOT` ボタンを離します。

![ファームウェアの書き込み](/images/build-guide/firmware/1.png)

2. PC が `RPI-RP2` という名前のドライブを認識したら、展開したフォルダ内にある `nekobako_mew40_vial.uf2` をドライブ直下にコピーします。

![ファームウェアの書き込み](/images/build-guide/firmware/2.png)

::: info 情報
書き込みが終わると自動的にドライブが切断されキーボードが再起動します。
:::

::: info 情報
`nekobako_mew40_vial.uf2` は Vial 対応、`nekobako_mew40_default.uf2` は Vial 非対応です。
:::

## ファームウェアの確認
1. [Vial Web](https://vial.rocks/) を開いて `Start Vial` ボタンを押し、キーボードが正しく認識されることを確認します。

![ファームウェアの確認](/images/build-guide/firmware/3.png)
