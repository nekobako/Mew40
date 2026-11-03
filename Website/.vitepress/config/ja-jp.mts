export const main = {
  lang: "ja-jp",
  label: "日本語",
  title: "Mew40",
  description: "40% オーソリニア配列を採用したロープロファイルの一体型キーボード",
  themeConfig: {
    nav: [
      {
        text: "ホーム",
        link: "/ja-jp/",
      },
      {
        text: "ビルドガイド",
        link: "/ja-jp/build-guide/",
        activeMatch: "/ja-jp/build-guide/",
      },
      {
        text: "ライセンス",
        link: "/ja-jp/license/",
        activeMatch: "/ja-jp/license/",
      },
    ],
    sidebar: [
      {
        text: "ビルドガイド",
        link: "/ja-jp/build-guide/",
        collapsed: false,
        items: [
          {
            text: "準備",
            link: "/ja-jp/build-guide/preparation",
          },
          {
            text: "はんだ付け",
            link: "/ja-jp/build-guide/soldering",
          },
          {
            text: "組み立て",
            link: "/ja-jp/build-guide/assembly",
          },
          {
            text: "ファームウェア",
            link: "/ja-jp/build-guide/firmware",
          },
          {
            text: "仕上げ",
            link: "/ja-jp/build-guide/finishing",
          },
        ],
      },
      {
        text: "ライセンス",
        link: "/ja-jp/license/",
        collapsed: false,
        items: [
          {
            text: "基板",
            link: "/ja-jp/license/pcb",
          },
          {
            text: "ケース",
            link: "/ja-jp/license/case",
          },
          {
            text: "ファームウェア",
            link: "/ja-jp/license/firmware",
          },
        ],
      },
    ],
  },
};

export const search = {
  translations: {
    button: {
      buttonText: "検索",
    },
    modal: {
      displayDetails: "詳細を表示",
      resetButtonTitle: "検索をリセット",
      backButtonTitle: "検索を閉じる",
      noResultsText: "結果がありません",
      footer: {
        navigateText: "移動",
        selectText: "選択",
        closeText: "閉じる",
      },
    },
  },
};
