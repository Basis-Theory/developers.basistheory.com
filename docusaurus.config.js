// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import fs from "node:fs";
import path from "node:path";

const lightCodeTheme = require("./prism-custom-themes/light");
const darkCodeTheme = require("./prism-custom-themes/dark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Basis Theory Developer Documentation",
  url: "https://developers.basistheory.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
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

  // Mermaid
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "@docusaurus/preset-classic",
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
          customCss: require.resolve("./src/css/overrides.scss"),
        },
        googleTagManager: {
          containerId: "GTM-M56229L",
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
            label: "Guides",
          },
          {
            type: "doc",
            docId: "api/index",
            position: "left",
            label: "API",
          },
          {
            type: "doc",
            docId: "sdks/index",
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
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["csharp", "hcl", "kotlin", "swift", "java", "bash", "json", "diff"],
      },
      mermaid: {
        theme: {
          light: "neutral",
          dark: "dark",
        },
        options: {
          themeVariables: {
            // Base
            fontFamily: "var(--bt-mermaid-font-family)",
            mainBkg: "rgba(150, 158, 194, 0.25)", // doesn't accept vars
            textColor: "var(--bt-mermaid-text-color)",
            // Flowchart
            nodeBorder: "var(--bt-mermaid-node-border)",
            clusterBkg: "var(--bt-mermaid-cluster-bkg)",
            clusterBorder: "var(--bt-mermaid-cluster-border)",
            titleColor: "var(--bt-mermaid-title-color)",
            // edgeLabelBackground: "var(--bt-mermaid-edge-label-background)",
            nodeTextColor: "var(--bt-mermaid-node-text-color)",
          },
        },
      },
      colorMode: {
        defaultMode: "dark",
      },
      metadata: [
        {
          name: "description",
          content: "API Reference documentation for the Basis Theory API. Includes code examples for all official Basis Theory SDKs and user guides for various use cases.",
        },
        {
          property: "og:description",
          content: "API Reference documentation for the Basis Theory API. Includes code examples for all official Basis Theory SDKs and user guides for various use cases.",
        },
        {
          property: "og:image",
          content: "/img/seo/opengraph.png",
        },
      ],
    }),

  plugins: [
    require.resolve("docusaurus-lunr-search"),
    require.resolve("docusaurus-plugin-sass"),
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          { from: "/api-reference", to: "/docs/api" },
          { from: "/elements", to: "/docs/sdks/web/javascript" },
          { from: "/expressions", to: "/docs/expressions" },
          { from: "/labs", to: "/docs" },

          { from: "/getting-started", to: "/docs" },
          { from: "/getting-started/quickstart-with-curl", to: "/docs" },
          { from: "/getting-started/quickstart-with-dotnet", to: "/docs" },
          { from: "/getting-started/quickstart-with-go", to: "/docs" },
          { from: "/getting-started/quickstart-with-java", to: "/docs" },
          { from: "/getting-started/quickstart-with-nodejs", to: "/docs" },
          { from: "/getting-started/quickstart-with-ruby", to: "/docs" },
          { from: "/getting-started/quickstart-with-python", to: "/docs" },
          { from: "/docs/api/applications/keys", to: "/docs/api/applications/application-keys" },
          { from: "/docs/api/account-updater", to: "/docs/api/account-updater/batch"},

          {
            from: "/concepts/access-controls",
            to: "/docs/concepts/access-controls",
          },
          {
            from: "/concepts/what-are-containers",
            to: "/docs/concepts/what-are-containers",
          },
          {
            from: "/concepts/what-are-mats",
            to: "/docs/concepts/what-are-mats",
          },
          {
            from: "/concepts/what-are-reactors",
            to: "/docs/concepts/what-are-reactors",
          },
          {
            from: "/concepts/what-are-tokens",
            to: "/docs/concepts/what-are-tokens",
          },
          {
            from: "/concepts/what-is-search",
            to: "/docs/concepts/what-is-search",
          },
          {
            from: "/concepts/what-is-the-proxy",
            to: "/docs/concepts/what-is-the-proxy",
          },
          {
            from: "/concepts/understanding-permissions",
            to: "/docs/concepts/access-controls",
          },

          {
            from: "/guides/collect-pii-js",
            to: "/docs/guides/collect/collect-data-from-web",
          },
          {
            from: "/guides/collect-pii-react",
            to: "/docs/guides/collect/collect-data-with-react",
          },
          {
            from: "/guides/collect-cards-with-elements-react",
            to: "/docs/guides/collect/collect-data-with-react",
          },
          {
            from: "/guides/style-elements-for-my-brand",
            to: "/docs/guides/collect/customize-web-form",
          },
          {
            from: "/guides/encrypt-us-banks-in-your-applications",
            to: "/docs/guides/collect",
          },

          {
            from: "/guides/collect-cards-with-elements",
            to: "/docs/blueprints/cards/collect-and-process-cards",
          },
          {
            from: "/guides/use-us-bank-accounts-without-touching-them",
            to: "/docs/guides/share/send-data-to-third-party",
          },
          { from: "/guides/reveal-cards-with-react/", to: "/docs" },
          {
            from: "/guides/use-token-data-in-reactors",
            to: "/docs/guides/process/analyze-data",
          },
          {
            from: "/guides/use-token-data-in-http-requests",
            to: "/docs/guides/share/send-data-to-third-party",
          },
          {
            from: "/guides/run-your-own-code-in-a-reactor",
            to: "/docs/guides/process/analyze-data",
          },
          {
            from: "/guides/collect-cards-with-proxies",
            to: "/docs/blueprints/cards/collect-and-process-cards",
          },
          {
            from: "/guides/migrating-off-basis-theory",
            to: "/docs/blueprints/migrations/migrate-off-basis-theory",
          },

          {
            from: "/blueprints/pci",
            to: "/docs/blueprints/cards/collect-and-process-cards",
          },
          {
            from: "/docs/guides/collect/collect-inbound-data-to-api",
            to: "/docs/guides/collect/collect-inbound-sensitive-data",
          },
          { from: "/docs/sdks/web/javascript/events", to: "/docs/sdks/web/web-elements/events" },
          { from: "/docs/sdks/web/javascript/lifecycle", to: "/docs/sdks/web/web-elements/lifecycle" },
          { from: "/docs/sdks/web/javascript/options", to: "/docs/sdks/web/web-elements/components" },
          { from: "/docs/sdks/web/javascript/services", to: "/docs/sdks/web/web-elements/services" },
          { from: "/docs/sdks/web/javascript/types", to: "/docs/sdks/web/web-elements/components" },
          { from: "/docs/sdks/web/react", to: "/docs/sdks/web/web-elements/?implementation=react" },
          { from: "/docs/sdks/web/web-elements/types", to: "/docs/sdks/web/web-elements/components" },
          { from: "/docs/sdks/web/web-elements/options", to: "/docs/sdks/web/web-elements/components" },
          { from: "/docs/sdks/mobile/3ds-react-native", to: "/docs/sdks/mobile/react-native-threeds" },
          { from: "/docs/sdks/mobile/3ds-react-native/methods", to: "/docs/sdks/mobile/react-native-threeds/methods" },
          { from: "/docs/api/orchestration/stripe-forward", to: "/docs/api/connections/stripe-forward" },
          { from: "/docs/api/orchestration/google-pay", to: "/docs/api/connections/google-pay" }, // do not ever remove this, Google has this link embedded in their docs - https://developers.google.com/pay/api/#participating-processors
          { from: "/docs/guides/share/process-card-payments-connections", to: "/docs/guides/share/process-card-payments" },
          { from: "/docs/guides/collect/receive-cards", to: "/docs/card-payments/receive-cards-api" },
          { from: "/docs/guides/collect/issue-cards", to: "/docs/card-issuing/issue-cards" },
          { from: "/docs/guides/share/display-cards", to: "/docs/card-issuing/display-cards" },
          { from: "/docs/guides/collect/set-card-pin", to: "/docs/card-issuing/set-card-pin" },
        ],
      },
    ],
    async function pluginLlmsTxt(context) {
      return {
        name: "llms-txt-plugin",
        loadContent: async () => {
          console.log("LLMs plugin: Starting loadContent...");
          const { siteDir } = context;
          const contentDir = path.join(siteDir, "docs");
          console.log("LLMs plugin: Content directory:", contentDir);

          /** @type {Map<string, string>} */
          const mdxFiles = new Map(); // Store file path -> content mapping

          // recursive function to get all mdx files
          const getMdxFiles = async (dir) => {
            const entries = await fs.promises.readdir(dir, { withFileTypes: true });

            for (const entry of entries) {
              const fullPath = path.join(dir, entry.name);
              if (entry.isDirectory()) {
                await getMdxFiles(fullPath);
              } else if (entry.name.endsWith(".mdx")) {
                const content = await fs.promises.readFile(fullPath, "utf8");
                const relativePath = path.relative(contentDir, fullPath);
                mdxFiles.set(relativePath, content);
                console.log("LLMs plugin: Found MDX file:", relativePath);
              }
            }
          };

          await getMdxFiles(contentDir);
          console.log("LLMs plugin: Total MDX files found:", mdxFiles.size);
          return { mdxFiles, contentDir };
        },
        postBuild: async ({ content, routes, outDir }) => {
          console.log("LLMs plugin: Starting postBuild...");
          console.log("LLMs plugin: Output directory:", outDir);

          // @ts-ignore
          const { mdxFiles, contentDir } = content;
          console.log("LLMs plugin: Retrieved MDX files:", mdxFiles?.size);

          // Create individual .md files and build links list
          const markdownLinks = [];
          let processedFiles = 0;

          // Process each MDX file
          for (const [mdxPath, mdxContent] of mdxFiles.entries()) {
            try {
              // Convert the MDX path to the output path
              const relativeOutputPath = mdxPath
                .replace(/\.mdx$/, "")
                .split("/")
                .filter(Boolean);

              // If the file is named index.mdx, don't include 'index' in the output path
              const isIndexFile = relativeOutputPath[relativeOutputPath.length - 1] === "index";
              const outputPath = isIndexFile ? relativeOutputPath.slice(0, -1) : relativeOutputPath;

              const outputDir = path.join(outDir, "docs", ...outputPath);
              const mdPath = path.join(outputDir, "content.md");

              // Ensure directory exists
              await fs.promises.mkdir(outputDir, { recursive: true });

              // Write markdown file
              await fs.promises.writeFile(mdPath, mdxContent);
              processedFiles++;

              // Add to links list - use the docs path for linking
              const docPath = "/docs/" + relativeOutputPath.join("/");
              markdownLinks.push(`- [${docPath}](${path.relative(outDir, mdPath)})`);

              console.log("LLMs plugin: Wrote markdown file:", mdPath);
            } catch (error) {
              console.error("LLMs plugin: Error processing file:", mdxPath, error);
            }
          }

          console.log("LLMs plugin: Processed files:", processedFiles);

          try {
            // Write llm.txt with links to all markdown files
            const llmsTxt = `# ${context.siteConfig.title}\n\n## Documentation Files\n\n${markdownLinks.join("\n")}`;
            const llmsTxtPath = path.join(outDir, "llm.txt");
            console.log("LLMs plugin: Writing llm.txt to:", llmsTxtPath);
            await fs.promises.writeFile(llmsTxtPath, llmsTxt);

            // Write llm-full.txt with concatenated content
            const fullContent = Array.from(mdxFiles.values()).join("\n\n---\n\n");
            const llmsFullPath = path.join(outDir, "llm-full.txt");
            console.log("LLMs plugin: Writing llm-full.txt to:", llmsFullPath);
            await fs.promises.writeFile(llmsFullPath, fullContent);

            console.log("LLMs plugin: Successfully wrote all files");
          } catch (error) {
            console.error("LLMs plugin: Error writing output files:", error);
          }
        },
      };
    },
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
        },
      };
      // @ts-ignore
      // config.module.rules[svgRuleIndex].oneOf[svgrConfigIndex].use[0].options.svgoConfig.plugins[0].params.overrides.cleanupIDs = false;
    },
  ],
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("swc-loader"),
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          target: "es2017",
        },
        module: {
          type: isServer ? "commonjs" : "es6",
        },
      },
    }),
  },
  stylesheets: ["/css/iubenda.css", "/css/kapa.css"],
  scripts: [
    { src: "/scripts/iubenda.js" },
    { src: "https://cdn.iubenda.com/cs/iubenda_cs.js" },
    {
      src: "https://widget.kapa.ai/kapa-widget.bundle.js",
      "data-website-id": "3755b5a8-e659-404c-9119-8cce3b1e87a7",
      "data-project-name": "Basis Theory",
      "data-project-color": "#45D1DB",
      "data-project-logo": "https://avatars.githubusercontent.com/u/75859349?s=280&v=4",
      async: true,
      "data-search-mode-enabled": "true", // ADD THIS LINE TO ENABLE SEARCH
      // "data-modal-override-open-class": "navbar__search" // OPTIONAL: If you want to override the default search
    },
  ],
};

module.exports = config;
