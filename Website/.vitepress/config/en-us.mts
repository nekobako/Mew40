export const main = {
  lang: "en-us",
  label: "English",
  title: "Mew40",
  description: "A low-profile, unibody keyboard with a 40% ortholinear layout",
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Build Guide",
        link: "/build-guide/",
        activeMatch: "/build-guide/",
      },
      {
        text: "License",
        link: "/license/",
        activeMatch: "/license/",
      },
    ],
    sidebar: [
      {
        text: "Build Guide",
        link: "/build-guide/",
        collapsed: false,
        items: [
          {
            text: "Preparation",
            link: "/build-guide/preparation",
          },
          {
            text: "Soldering",
            link: "/build-guide/soldering",
          },
          {
            text: "Assembly",
            link: "/build-guide/assembly",
          },
          {
            text: "Firmware",
            link: "/build-guide/firmware",
          },
          {
            text: "Finishing",
            link: "/build-guide/finishing",
          },
        ],
      },
      {
        text: "License",
        link: "/license/",
        collapsed: false,
        items: [
          {
            text: "PCB",
            link: "/license/pcb",
          },
          {
            text: "Case",
            link: "/license/case",
          },
          {
            text: "Firmware",
            link: "/license/firmware",
          },
        ],
      },
    ],
  },
};

export const search = {
  translations: {
    button: {
      buttonText: "Search",
    },
    modal: {
      displayDetails: "Display details",
      resetButtonTitle: "Reset search",
      backButtonTitle: "Close search",
      noResultsText: "No results",
      footer: {
        navigateText: "Navigate",
        selectText: "Select",
        closeText: "Close",
      },
    },
  },
};
