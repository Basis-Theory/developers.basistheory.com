/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      id: "index",
      type: "doc",
      customProps: {
        icon: {
          light: "/img/sidebar/light/getting-started.svg",
          dark: "/img/sidebar/dark/getting-started.svg",
        },
      },
    },
    {
      type: "category",
      label: "Cards",
      customProps: {
        icon: {
          light: "/img/sidebar/light/card.svg",
          dark: "/img/sidebar/dark/card.svg",
        },
      },
      link: {
        type: "doc",
        id: "guides/cards/index",
      },
      items: [
        "guides/cards/collect-cards",
        "guides/cards/receive-cards",
        "guides/cards/process-card-payments",
        "guides/cards/issue-cards",
        "guides/cards/display-cards",
      ]
    },
    {
      type: "category",
      label: "Personal Information",
      customProps: {
        icon: {
          light: "/img/sidebar/light/pii.svg",
          dark: "/img/sidebar/dark/pii.svg",
        },
      },
      link: {
        type: "doc",
        id: "guides/share/index",
      },
      items: [
        "guides/collect/collect-data-from-web",
        "guides/collect/collect-data-with-react",
        "guides/collect/collect-data-with-android",
        "guides/collect/collect-data-with-ios",
        "guides/collect/collect-data-with-react-native-on-ios",
        "guides/collect/collect-inbound-sensitive-data",
        "guides/collect/customize-web-form",
      ],
    },
    {
      type: "category",
      label: "Banking Data",
      customProps: {
        icon: {
          light: "/img/sidebar/light/bank.svg",
          dark: "/img/sidebar/dark/bank.svg",
        },
      },
      link: {
        type: "doc",
        id: "guides/process/index",
      },
      items: [
        "guides/share/send-data-to-third-party",
        "guides/share/display-masked-data",
        "guides/share/reveal-tokenized-data",
        "guides/share/reveal-data-from-third-party",
      ],
    },
    {
      type: "category",
      label: "Any Data",
      customProps: {
        icon: {
          light: "/img/sidebar/light/any.svg",
          dark: "/img/sidebar/dark/any.svg",
        },
      },
      link: {
        type: "doc",
        id: "guides/govern/index",
      },
      items: [
        "guides/process/search-data",
        "guides/process/analyze-data",
        "guides/process/extract-data",
      ],
    },
    {
      type: "html",
      value: "<hr />",
    },
    {
      type: "category",
      label: "Concepts",
      customProps: {
        icon: {
          light: "/img/sidebar/light/info.svg",
          dark: "/img/sidebar/dark/info.svg",
        },
      },
      link: {
        type: "doc",
        id: "concepts/index",
      },
      items: [
        "concepts/what-are-tokens",
        "concepts/what-is-search",
        "concepts/what-are-containers",
        "concepts/access-controls",
        "concepts/what-is-the-proxy",
        "concepts/what-are-reactors",
        {
          type: "doc",
          id: "concepts/transactions",
          customProps: {
            beta: true,
          },
        },
        "concepts/elements",
        "concepts/what-are-mats",
      ],
    },
    {
      type: "category",
      label: "Expressions",
      customProps: {
        icon: {
          light: "/img/sidebar/light/expression.svg",
          dark: "/img/sidebar/dark/expression.svg",
        },
      },
      link: {
        type: "doc",
        id: "expressions/index",
      },
      items: [
        "expressions/filters",
        "expressions/detokenization",
        "expressions/aliasing",
        "expressions/fingerprints",
        "expressions/masks",
        "expressions/search-indexes",
      ],
    },
    {
      type: "link",
      label: "API Reference",
      href: "/docs/api",
      customProps: {
        icon: {
          light: "/img/sidebar/light/terminal.svg",
          dark: "/img/sidebar/dark/terminal.svg",
        },
      },
    },
    {
      type: "link",
      label: "SDKs",
      href: "/docs/sdks",
      customProps: {
        icon: {
          light: "/img/sidebar/light/cube.svg",
          dark: "/img/sidebar/dark/cube.svg",
        },
      }
    },
    {
      type: "html",
      value: "<hr />",
    },
    {
      type: "category",
      label: "Blueprints",
      customProps: {
        icon: {
          light: "/img/sidebar/light/blueprint.svg",
          dark: "/img/sidebar/dark/blueprint.svg",
        },
      },
      link: {
        type: "doc",
        id: "blueprints/index",
      },
      items: [
        {
          type: "category",
          label: "Cards",
          link: {
            type: "doc",
            id: "blueprints/cards/index",
          },
          items: [
            "blueprints/cards/collect-and-process-cards",
            "blueprints/cards/issue-and-display-cards",
          ],
        },
        {
          type: "category",
          label: "Personal Information",
          link: {
            type: "doc",
            id: "blueprints/personal-information/index",
          },
          items: ["blueprints/personal-information/query-user-data-from-api"],
        },
      ],
    },
    {
      type: "category",
      label: "Migration Guides",
      link: {
        type: "doc",
        id: "migrations/index",
      },
      items: [
        "migrations/import-from-database",
        "migrations/migrate-off-basis-theory",
      ],
    },
  ],
  api: [
    {
      type: "category",
      label: "Overview",
      collapsed: false,
      link: {
        type: "doc",
        id: "api/index",
      },
      items: [
        "api/authentication",
        "api/request-correlation",
        "api/pagination",
        "api/errors",
        "api/ip-addresses",
        "api/rate-limits",
        "api/idempotency",
        "api/testing",
      ],
    },
    {
      type: "category",
      label: "Applications",
      link: {
        type: "doc",
        id: "api/applications/applications",
      },
      items: ["api/applications/permissions", "api/applications/sessions"],
    },
    "api/logs",
    {
      type: "category",
      label: "Proxies",
      link: {
        type: "doc",
        id: "api/proxies/proxies",
      },
      items: [
        "api/proxies/ephemeral-proxy",
        "api/proxies/pre-configured-proxies",
      ],
    },
    {
      type: "category",
      label: "Reactors",
      link: {
        type: "doc",
        id: "api/reactors/reactors",
      },
      items: ["api/reactors/reactor-formulas", "api/reactors/reactor-errors"],
    },
    {
      type: "category",
      label: "Tenants",
      link: {
        type: "doc",
        id: "api/tenants/tenants",
      },
      items: ["api/tenants/tenant-members"],
    },
    {
      type: "category",
      label: "Tokens",
      link: {
        type: "doc",
        id: "api/tokens/tokens",
      },
      items: [
        "api/tokens/tokenize",
        "api/tokens/token-types",
        "api/tokens/search",
        "api/tokens/token-associations",
        {
          type: "doc",
          id: "api/tokens/transactions",
          customProps: {
            beta: true,
          },
        },
      ],
    },
    "api/deprecations",
  ],
  sdk: [
    "sdks/index",
    {
      type: "category",
      label: "Server-side SDKs",
      items: [
        {
          type: "autogenerated",
          dirName: "sdks/server-side",
        },
      ],
    },
    {
      type: "category",
      label: "Web SDKs",
      items: [
        {
          type: "doc",
          id: "sdks/web/content-security-policy",
        },
        {
          type: "category",
          label: "JavaScript Elements",
          link: {
            type: "doc",
            id: "sdks/web/javascript/index",
          },
          items: [
            "sdks/web/javascript/types",
            "sdks/web/javascript/options",
            "sdks/web/javascript/lifecycle",
            "sdks/web/javascript/events",
            "sdks/web/javascript/methods",
          ],
        },
        {
          type: "category",
          label: "React Elements",
          link: {
            type: "doc",
            id: "sdks/web/react/index",
          },
          items: [
            "sdks/web/react/components",
            "sdks/web/react/events",
            "sdks/web/react/methods",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Mobile SDKs",
      items: [
        {
          type: "category",
          label: "Android Elements",
          link: {
            type: "doc",
            id: "sdks/mobile/android/index",
          },
          items: [
            "sdks/mobile/android/types",
            "sdks/mobile/android/options",
            "sdks/mobile/android/events",
            "sdks/mobile/android/services",
          ],
        },
        {
          type: "category",
          label: "iOS Elements",
          link: {
            type: "doc",
            id: "sdks/mobile/ios/index",
          },
          items: [
            "sdks/mobile/ios/types",
            "sdks/mobile/ios/options",
            "sdks/mobile/ios/events",
            "sdks/mobile/ios/services",
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
