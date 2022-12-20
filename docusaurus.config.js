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
          editUrl:
            "https://github.com/basis-theory/developers.basistheory.com/tree/master/",
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/overrides.scss"),
        },
        gtag: {
          trackingID: "GTM-M56229L",
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
          href: "/",
          target: "_self",
          //go to src/theme/Logo for the img paths
          src: "-",
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
            type: "custom-GithubButton",
            position: "right",
          },
          {
            type: "custom-ColorModeToggle",
            position: "right",
          },
          {
            type: "custom-SignInButton",
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
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["csharp", "hcl", "swift"],
      },
      colorMode: {
        defaultMode: "dark",
      },
      metadata: [
        {
          name: "description",
          content:
            "API Reference documentation for the Basis Theory API. Includes code examples for all official Basis Theory SDKs and user guides for various use cases.",
        },
        {
          property: "og:description",
          content:
            "API Reference documentation for the Basis Theory API. Includes code examples for all official Basis Theory SDKs and user guides for various use cases.",
        },
        {
          property: "og:image",
          content: "https://cdn.basistheory.com/images/seo/docs-opengraph.png",
        },
      ],
    }),

  plugins: [
    require.resolve("docusaurus-lunr-search"),
    require.resolve("docusaurus-plugin-sass"),
    // https://github.com/facebook/docusaurus/issues/8297
    // https://github.com/svg/svgo/issues/1714
    // @ts-ignore
    function svgFix() {
      return {
        name: "svg-fix",
        configureWebpack(config) {
          const svgRuleIndex = config.module.rules.findIndex((r) =>
            // @ts-ignore
            r.test.test("file.svg")
          );
          const svgrConfigIndex = config.module.rules[
            svgRuleIndex
            // @ts-ignore
          ].oneOf.findIndex((r) => {
            if (!Array.isArray(r.use) || r.use.length === 0) return false;
            return r.use[0].loader.indexOf("@svgr/webpack") !== -1;
          });
          if (svgRuleIndex === -1 || svgrConfigIndex === -1) return;

          // @ts-ignore
          config.module.rules[svgRuleIndex].oneOf[
            svgrConfigIndex
          ].use[0].options.svgoConfig.plugins[0].params.overrides.cleanupIDs = false;
        },
      };
    },
  ],
  stylesheets: ["/css/iubenda.css"],
  scripts: [
    { src: "https://cdn.iubenda.com/cs/iubenda_cs.js" },
    { src: "/scripts/iubenda.js", async: true }, 
  ],
};

module.exports = config;
