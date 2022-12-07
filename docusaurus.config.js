// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("./prism-custom-themes/light");
const darkCodeTheme = require("./prism-custom-themes/dark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Basis Theory Developer Docs",
  url: "https://developers.basistheory.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://cdn.basistheory.com/images/favicons/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "basis-theory", // Usually your GitHub org/user name.
  projectName: "developers.basistheory.com", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/basis-theory/developers.basistheory.com/tree/master/",
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: 'GTM-M56229L',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Basis Theory Logo",
          src: "img/bt-logo-light.svg",
          srcDark: "img/bt-logo-dark.svg",
          href: "/",
          target: "_self",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Docs",
          },
          {
            type: "doc",
            docId: "api",
            position: "left",
            label: "API",
          },
          {
            type: "doc",
            docId: "sdks",
            position: "left",
            label: "SDKs",
          },
          {
            href: "https://github.com/basis-theory",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["csharp", "go", "javascript", "python"],
      },
      metadata: [{
        name: 'description', 
        content: 'API Reference documentation for the Basis Theory API. Includes code examples for all official Basis Theory SDKs and user guides for various use cases.'
      }, {
        property: 'og:description', 
        content: 'API Reference documentation for the Basis Theory API. Includes code examples for all official Basis Theory SDKs and user guides for various use cases.'
      }, {
        property: 'og:image', 
        content: 'https://cdn.basistheory.com/images/seo/docs-opengraph.png'
      }],
    }),

    plugins: [
      [
        require.resolve("@cmfcmf/docusaurus-search-local"),
        {
          indexDocSidebarParentCategories: 1,
          indexPages: false,
        },
      ],
    ],
};

module.exports = config;
