/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const apiLink = {
  type: "link",
  label: "API Reference",
  href: "/docs/api",
  customProps: {
    icon: {
      light: "/img/sidebar/light/terminal.svg",
      dark: "/img/sidebar/dark/terminal.svg",
    },
  },
};

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
      label: "Card Payments",
      customProps: {
        icon: {
          light: "/img/sidebar/light/card.svg",
          dark: "/img/sidebar/dark/card.svg",
        },
      },
      link: {
        type: "doc",
        id: "card-payments/index",
      },
      items: [
        "card-payments/replace-processor-iframes",
        {
          type: "doc",
          id: "guides/process/authenticate-with-3ds",
          customProps: {
            enterprise: true,
          },
        },
        {
          type: "doc",
          id: "card-payments/placeholder",
          label: "Use your own forms",
        },
        "guides/collect/receive-cards",
        {
          type: "doc",
          id: "card-payments/placeholder",
          label: "Recollect CVC",
        },
        {
          type: "html",
          value: "<hr />",
        },
        {
          type: "doc",
          id: "card-payments/placeholder",
          label: "Verify a Card",
        },
        {
          type: "doc",
          id: "card-payments/placeholder",
          label: "Charge a Card",
        },
        {
          type: "doc",
          id: "guides/process/authenticate-mit-with-3ds",
          customProps: {
            enterprise: true,
          },
        },
        {
          type: "html",
          value: "<hr />",
        },
        {
          type: "doc",
          id: "card-payments/placeholder",
          label: "Keep cards up-to-date",
        },
        {
          type: "doc",
          id: "card-payments/placeholder",
          label: "Payments routing",
        },
        {
          type: "doc",
          id: "card-payments/placeholder",
          label: "Using Network Tokens",
        },
        {
          type: "html",
          value: "<hr />",
        },
        "guides/process/extract-cards",
        "guides/process/backup-stripe-tokens",
      ],
    },
    {
      type: "category",
      label: "Bank Payments",
      customProps: {
        icon: {
          light: "/img/sidebar/light/bank.svg",
          dark: "/img/sidebar/dark/bank.svg",
        },
      },
      items: ["guides/banks/collect-bank-accounts", "guides/banks/process-bank-payments"],
    },
    {
      type: "category",
      label: "Apple Pay",
      customProps: {
        icon: {
          light: "/img/sidebar/light/apple.svg",
          dark: "/img/sidebar/dark/apple.svg",
        },
      },
      link: {
        type: "doc",
        id: "guides/apple-pay/overview",
      },
      items: [
        {
          type: "doc",
          id: "guides/apple-pay/overview",
          label: "Overview",
        },
        {
          type: "doc",
          id: "guides/apple-pay/setup",
          label: "Merchant Setup",
        },
        {
          type: "doc",
          id: "guides/apple-pay/accept",
          label: "Accept Payments",
        },
      ],
    },
    {
      type: "category",
      label: "Card Issuing",
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
      items: ["guides/collect/issue-cards", "guides/share/display-cards", "guides/collect/set-card-pin"],
    },
    {
      type: "category",
      label: "Other Data",
      customProps: {
        icon: {
          light: "/img/sidebar/light/any-data.svg",
          dark: "/img/sidebar/dark/any-data.svg",
        },
      },
      link: {
        type: "doc",
        id: "guides/any/index",
      },
      items: ["guides/collect/collect-data-from-web", "guides/collect/collect-data-with-react", "guides/collect/collect-data-with-android", "guides/collect/collect-data-with-ios", "guides/collect/collect-data-with-react-native-on-ios", "guides/collect/collect-inbound-sensitive-data", "guides/collect/customize-web-form", "guides/share/send-data-to-third-party", "guides/share/display-masked-data", "guides/share/reveal-tokenized-data", "guides/share/reveal-data-from-third-party", "guides/process/search-data", "guides/process/analyze-data", "guides/govern/control-data-access", "guides/govern/audit-data-access", "guides/govern/sessions"],
    },
    {
      type: "html",
      value: "<hr />",
    },
    {
      type: "category",
      label: "Features",
      customProps: {
        icon: {
          light: "/img/sidebar/light/features.svg",
          dark: "/img/sidebar/dark/features.svg",
        },
      },
      link: {
        type: "doc",
        id: "features/index",
      },
      items: [
        "features/account-updater",
        "features/global-data",
        "features/network-tokens",
        "features/3d-secure",
        "features/anti-fraud",
        "features/identity",
        {
          type: "category",
          label: "Single Sign-On (SSO)",
          link: {
            type: "doc",
            id: "features/sso/index",
          },
          items: [
            {
              type: "doc",
              id: "features/sso/configure-sso-with-okta",
              label: "Configure SSO with Okta",
            },
            {
              type: "doc",
              id: "features/sso/configure-sso-with-oidc",
              label: "Configure SSO with OIDC",
            },
            {
              type: "doc",
              id: "features/sso/configure-sso-with-saml",
              label: "Configure SSO with SAML",
            },
          ],
        },
      ],
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
        "concepts/token-intents",
        "concepts/access-controls",
        "concepts/what-are-containers",
        "concepts/elements",
        "concepts/what-is-the-proxy",
        "concepts/what-are-reactors",
        {
          type: "doc",
          id: "concepts/what-is-search",
          customProps: {
            enterprise: true,
          },
        },
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
      items: ["expressions/filters", "expressions/detokenization", "expressions/configuration", "expressions/proxy", "expressions/aliasing", "expressions/fingerprints", "expressions/masks", "expressions/search-indexes"],
    },
    {
      type: "category",
      label: "Migrations",
      customProps: {
        icon: {
          light: "/img/sidebar/light/migration.svg",
          dark: "/img/sidebar/dark/migration.svg",
        },
      },
      link: {
        type: "doc",
        id: "blueprints/migrations/index",
      },
      items: [
        {
          type: "doc",
          id: "blueprints/migrations/import-cards-on-file",
        },
        {
          type: "doc",
          id: "blueprints/migrations/import-from-database",
        },
        {
          type: "doc",
          id: "blueprints/migrations/migrate-off-basis-theory",
        },
      ],
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
          items: ["blueprints/cards/collect-and-process-cards", "blueprints/cards/issue-and-display-cards"],
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
      id: "guides/production-checklist",
      type: "doc",
      customProps: {
        icon: {
          light: "/img/sidebar/light/checklist-rocket.svg",
          dark: "/img/sidebar/dark/checklist-rocket.svg",
        },
      },
    },
    {
      type: "html",
      value: "<hr />",
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
      },
    },
    {
      type: "link",
      label: "Basis Theory Labs",
      href: "https://github.com/Basis-Theory-Labs",
      customProps: {
        icon: {
          light: "/img/sidebar/light/labs.svg",
          dark: "/img/sidebar/dark/labs.svg",
        },
      },
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
      items: ["api/index", "api/authentication", "api/request-correlation", "api/pagination", "api/errors", "api/ip-addresses", "api/rate-limits", "api/idempotency", "api/testing"],
    },
    {
      type: "category",
      label: "Applications",
      link: {
        type: "doc",
        id: "api/applications/applications",
      },
      items: ["api/applications/applications", "api/applications/access-rules", "api/applications/application-keys", "api/applications/permissions", "api/applications/sessions"],
    },
    "api/logs",
    {
      type: "category",
      label: "Proxies",
      link: {
        type: "doc",
        id: "api/proxies/proxies",
      },
      items: ["api/proxies/proxies", "api/proxies/ephemeral-proxy", "api/proxies/pre-configured-proxies", "api/proxies/proxy-errors"],
    },
    {
      type: "category",
      label: "Reactors",
      link: {
        type: "doc",
        id: "api/reactors/reactors",
      },
      items: ["api/reactors/reactors", "api/reactors/reactor-dependencies", "api/reactors/reactor-errors"],
    },
    {
      type: "category",
      label: "Tenants",
      link: {
        type: "doc",
        id: "api/tenants/tenants",
      },
      items: ["api/tenants/tenants", "api/tenants/tenant-members"],
    },
    {
      type: "category",
      label: "Tokens",
      link: {
        type: "doc",
        id: "api/tokens/tokens",
      },
      items: [
        "api/tokens/tokens",
        "api/tokens/token-intents",
        "api/tokens/tokenize",
        "api/tokens/detokenize",
        "api/tokens/token-types",
        "api/tokens/token-enrichments",
        {
          type: "doc",
          id: "api/tokens/search",
          customProps: {
            enterprise: true,
          },
        },
      ],
    },
    {
      type: "category",
      label: "3D Secure",
      link: {
        type: "doc",
        id: "api/3ds/sessions",
      },
      items: [
        {
          type: "doc",
          id: "api/3ds/sessions",
          customProps: {
            enterprise: true,
          },
        },
      ],
    },
    {
      type: "category",
      label: "Account Updater",
      link: {
        type: "doc",
        id: "api/account-updater/account-updater",
      },
      items: [
        {
          type: "doc",
          id: "api/account-updater/account-updater",
          customProps: {
            enterprise: true,
          },
        },
      ],
    },
    {
      type: "category",
      label: "Webhooks",
      link: {
        type: "doc",
        id: "api/webhooks/webhooks",
      },
      items: ["api/webhooks/api", "api/webhooks/eventdata"],
    },
    {
      type: "category",
      label: "Connections",
      items: [
        {
          type: "doc",
          id: "api/connections/stripe-forward",
        },
        {
          type: "doc",
          id: "api/connections/google-pay",
        },
      ],
    },
    {
      type: "category",
      label: "Enrichments",
      link: {
        type: "doc",
        id: "api/enrichments/bank-accounts",
      },
      items: [
        {
          type: "doc",
          id: "api/enrichments/bank-accounts",
          customProps: {
            enterprise: true,
          },
        },
      ],
    },
    "api/deprecations",
    {
      type: "html",
      value: "<hr />",
    },
    {
      type: "link",
      label: "Guides",
      href: "/docs",
      customProps: {
        icon: {
          light: "/img/sidebar/light/document.svg",
          dark: "/img/sidebar/dark/document.svg",
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
      },
    },
    {
      type: "link",
      label: "Basis Theory Labs",
      href: "https://github.com/Basis-Theory-Labs",
      customProps: {
        icon: {
          light: "/img/sidebar/light/labs.svg",
          dark: "/img/sidebar/dark/labs.svg",
        },
      },
    },
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
          label: "Web Elements",
          link: {
            type: "doc",
            id: "sdks/web/web-elements/index",
          },
          items: ["sdks/web/web-elements/events", "sdks/web/web-elements/lifecycle", "sdks/web/web-elements/options", "sdks/web/web-elements/services", "sdks/web/web-elements/types"],
        },
        {
          type: "category",
          label: "React Elements",
          link: {
            type: "doc",
            id: "sdks/web/react/index",
          },
          items: ["sdks/web/react/components", "sdks/web/react/events", "sdks/web/react/properties", "sdks/web/react/services"],
        },
        {
          type: "category",
          label: "Web 3DS",
          link: {
            type: "doc",
            id: "sdks/web/3ds/index",
          },
          customProps: {
            enterprise: true,
          },
          items: ["sdks/web/3ds/methods"],
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
          items: ["sdks/mobile/android/types", "sdks/mobile/android/options", "sdks/mobile/android/events", "sdks/mobile/android/services"],
        },
        {
          type: "category",
          label: "iOS Elements",
          link: {
            type: "doc",
            id: "sdks/mobile/ios/index",
          },
          items: ["sdks/mobile/ios/types", "sdks/mobile/ios/options", "sdks/mobile/ios/events", "sdks/mobile/ios/services"],
        },
        {
          type: "category",
          label: "React Native Elements",
          link: {
            type: "doc",
            id: "sdks/mobile/react-native/index",
          },
          items: ["sdks/mobile/react-native/components", "sdks/mobile/react-native/services"],
        },
        {
          type: "category",
          label: "Mobile 3DS",
          link: {
            type: "doc",
            id: "sdks/mobile/3ds/index",
          },
          customProps: {
            enterprise: true,
          },
          items: ["sdks/mobile/3ds/methods"],
        },
        {
          type: "category",
          label: "React Native 3DS",
          link: {
            type: "doc",
            id: "sdks/mobile/react-native-threeds/index",
          },
          customProps: {
            enterprise: true,
          },
          items: ["sdks/mobile/react-native-threeds/methods"],
        },
      ],
    },
    {
      type: "category",
      label: "Deprecated SDKs",
      items: [
        {
          type: "category",
          label: "JavaScript Elements",
          link: {
            type: "doc",
            id: "sdks/web/javascript/index",
          },
          items: [],
        },
      ],
    },
    {
      type: "html",
      value: "<hr />",
    },
    {
      type: "link",
      label: "Guides",
      href: "/docs",
      customProps: {
        icon: {
          light: "/img/sidebar/light/document.svg",
          dark: "/img/sidebar/dark/document.svg",
        },
      },
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
      label: "Basis Theory Labs",
      href: "https://github.com/Basis-Theory-Labs",
      customProps: {
        icon: {
          light: "/img/sidebar/light/labs.svg",
          dark: "/img/sidebar/dark/labs.svg",
        },
      },
    },
  ],
};

module.exports = sidebars;
