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
          { from: "/docs/api/account-updater", to: "/docs/api/account-updater/batch" },

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
          { from: "/docs/sdks/web/react/components", to: "/docs/sdks/web/web-elements/components" },
          { from: "/docs/sdks/web/react/events", to: "/docs/sdks/web/web-elements/events" },
          { from: "/docs/sdks/web/react/properties", to: "/docs/sdks/web/web-elements/components#complete-options-reference" },
          { from: "/docs/sdks/web/react/services", to: "/docs/sdks/web/web-elements/services" },
          { from: "/docs/sdks/web/web-elements/types", to: "/docs/sdks/web/web-elements/components" },
          { from: "/docs/sdks/web/web-elements/options", to: "/docs/sdks/web/web-elements/components" },
          { from: "/docs/sdks/web/web-elements/content-security-policy", to: "/docs/sdks/web/web-elements/troubleshooting#content-security-policy-csp-requirements" },
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
      // Helper function to parse import statements from MDX content
      function parseImports(mdxContent) {
        const imports = new Map();

        // Universal import regex that captures any import pattern
        const importRegex = /import\s+(?:\{[^}]*\}\s*,\s*)?(\w+)(?:\s*,\s*\{[^}]*\})?\s+from\s+["']([^"']+)["']/g;
        let match;

        while ((match = importRegex.exec(mdxContent)) !== null) {
          const [, componentName, importPath] = match;

          // Skip if it's not an MDX file
          if (!importPath.endsWith('.mdx')) {
            continue;
          }

          let resolvedPath;

          if (importPath.startsWith('@site/')) {
            // Handle @site/ imports by removing the @site/ prefix
            resolvedPath = importPath.replace('@site/', '');
          } else if (importPath.startsWith('./') || importPath.startsWith('../')) {
            // Handle relative imports - store as-is for later resolution
            resolvedPath = importPath;
          } else {
            // Handle absolute imports from node_modules or other paths
            resolvedPath = importPath;
          }

          imports.set(componentName, resolvedPath);
        }

        return imports;
      }

      // Helper function to find component usage in MDX content
      function findComponentUsage(mdxContent, componentName) {
        const usageRegex = new RegExp(`<${componentName}\\s*\\/>`, 'g');
        const usages = [];
        let match;

        while ((match = usageRegex.exec(mdxContent)) !== null) {
          usages.push({
            start: match.index,
            end: match.index + match[0].length,
            component: componentName
          });
        }

        return usages;
      }

      // Helper function to inject imported content into MDX
      function injectContent(mdxContent, usages, importedContent) {
        if (usages.length === 0) return mdxContent;

        // Sort usages by position (descending) to replace from end to start
        usages.sort((a, b) => b.start - a.start);

        let result = mdxContent;
        for (const usage of usages) {
          result = result.substring(0, usage.start) + importedContent + result.substring(usage.end);
        }

        return result;
      }

      // Helper function to render React components as LLM-friendly text
      async function renderComponentAsText(componentName, props = {}, filePath, contentDir, resolvedFiles = new Set(), depth = 0) {
        // Handle simple components that don't need import resolution
        switch (componentName) {
          case 'Enterprise':
            return '[Enterprise Feature]';

          case 'Deprecated':
            return '[Deprecated]';

          case 'Alert':
            const alertType = props.type || 'INFO';
            const alertContent = props.children || props.content || '';
            return `\n> **${alertType.toUpperCase()}**: ${alertContent}\n`;

          case 'HttpMethod':
            const method = props.method || '';
            const endpoint = props.endpoint || '';
            return `**${method}** \`${endpoint}\``;

          case 'Permission':
            const permission = props.content || props.children || '';
            return `Required Permission: \`${permission}\``;

          case 'Tabs':
          case 'TabItem':
            // For tabs, we'll just return the children content
            return props.children || '';

          // Generic component patterns
          case 'Card':
            return props.children || '[Card Component]';

          case 'Pill':
            return props.children || '[Pill Component]';

          case 'SdkCard':
            return '[SDK Information Card]';
        }

        // Only try to resolve components that look like they might be MDX content sections
        // Skip common React components like Intro, Alert, etc.
        const reactComponentNames = ['Intro', 'Alert', 'ApplicationSection', 'AuthenticateCardSection', 'SdkList', 'AuthButtons'];
        if (!reactComponentNames.includes(componentName)) {
          try {
            // Look for component imports in the current file's directory structure
            // Focus on MDX files only since we want content, not React component definitions
            const possiblePaths = [
              // Try as MDX file in src/components/docs (common pattern)
              path.join(path.dirname(contentDir), 'src', 'components', 'docs', `_${componentName.toLowerCase()}-section.mdx`),
              path.join(path.dirname(contentDir), 'src', 'components', 'docs', `_${componentName.replace(/([A-Z])/g, '-$1').toLowerCase().substring(1)}.mdx`),
              path.join(path.dirname(contentDir), 'src', 'components', 'docs', `${componentName}.mdx`),
              // Try relative to current file in sections directory
              path.join(path.dirname(filePath), 'sections', `${componentName}.mdx`),
              path.join(path.dirname(filePath), 'sections', `_${componentName.toLowerCase()}.mdx`),
              path.join(path.dirname(filePath), 'sections', `_${componentName.replace(/([A-Z])/g, '-$1').toLowerCase().substring(1)}.mdx`),
              // Try relative to current file
              path.join(path.dirname(filePath), `${componentName}.mdx`),
              path.join(path.dirname(filePath), `_${componentName.toLowerCase()}.mdx`),
              path.join(path.dirname(filePath), `_${componentName.replace(/([A-Z])/g, '-$1').toLowerCase().substring(1)}.mdx`),
            ];

            for (const possiblePath of possiblePaths) {
              try {
                const importedContent = await fs.promises.readFile(possiblePath, "utf8");

                // Recursively resolve imports in the imported content
                const fullyResolvedContent = await resolveImportsRecursively(
                  importedContent,
                  possiblePath,
                  contentDir,
                  resolvedFiles,
                  depth + 1
                );

                console.log(`LLMs plugin: Resolved component ${componentName} from ${possiblePath}`);
                return fullyResolvedContent;
              } catch (error) {
                // File doesn't exist at this path, try the next one
                continue;
              }
            }
          } catch (error) {
            console.warn(`LLMs plugin: Error resolving component ${componentName}:`, error.message);
          }
        }

        // Fallback: if we can't resolve the component, return a placeholder
        if (props.children) {
          return props.children;
        }
        // For section-like components, provide a more descriptive placeholder
        if (componentName.includes('Section') || componentName.includes('Component')) {
          return `[${componentName.replace(/([A-Z])/g, ' $1').trim()}]`;
        }
        return `[${componentName}]`;
      }

      // Helper function to parse component props from string
      function parseProps(propsString) {
        const props = {};
        if (!propsString) return props;

        // Simple prop parsing - handles basic cases
        const propRegex = /(\w+)=\{([^}]+)\}|(\w+)="([^"]*)"|(\w+)='([^']*)'/g;
        let match;

        while ((match = propRegex.exec(propsString)) !== null) {
          if (match[1] && match[2]) {
            // Handle {value} props
            const propName = match[1];
            let propValue = match[2];

            // Handle common patterns
            if (propValue.includes('Alerts.')) {
              propValue = propValue.replace('Alerts.', '').toLowerCase();
            } else if (propValue.includes('HttpMethods.')) {
              propValue = propValue.replace('HttpMethods.', '');
            }

            props[propName] = propValue;
          } else if (match[3] && match[4]) {
            // Handle "value" props
            props[match[3]] = match[4];
          } else if (match[5] && match[6]) {
            // Handle 'value' props
            props[match[5]] = match[6];
          }
        }

        return props;
      }

      // Helper function to parse and render React components
      async function renderReactComponents(mdxContent, filePath, contentDir, resolvedFiles = new Set(), depth = 0) {
        let result = mdxContent;

        // First, handle complex nested components like Tabs
        result = handleTabComponents(result);

        // Handle component references in square brackets (imported components used without JSX)
        const bracketComponentRegex = /\[(\w+(?:Section|Component)?)\]/g;
        const bracketMatches = [...result.matchAll(bracketComponentRegex)];
        for (const match of bracketMatches.reverse()) {
          const [fullMatch, componentName] = match;
          const replacement = await renderComponentAsText(componentName, {}, filePath, contentDir, resolvedFiles, depth);
          result = result.substring(0, match.index) + replacement + result.substring(match.index + fullMatch.length);
        }

        // Handle self-closing components: <ComponentName prop="value" />
        const selfClosingRegex = /<(\w+)([^>]*?)\/>/g;
        const selfClosingMatches = [...result.matchAll(selfClosingRegex)];
        for (const match of selfClosingMatches.reverse()) {
          const [fullMatch, componentName, propsString] = match;
          const props = parseProps(propsString);
          const replacement = await renderComponentAsText(componentName, props, filePath, contentDir, resolvedFiles, depth);
          result = result.substring(0, match.index) + replacement + result.substring(match.index + fullMatch.length);
        }

        // Handle components with children: <ComponentName>content</ComponentName>
        const componentWithChildrenRegex = /<(\w+)([^>]*?)>(.*?)<\/\1>/gs;
        const componentMatches = [...result.matchAll(componentWithChildrenRegex)];
        for (const match of componentMatches.reverse()) {
          const [fullMatch, componentName, propsString, children] = match;
          const props = parseProps(propsString);
          props.children = children;
          const replacement = await renderComponentAsText(componentName, props, filePath, contentDir, resolvedFiles, depth);
          result = result.substring(0, match.index) + replacement + result.substring(match.index + fullMatch.length);
        }

        return result;
      }

      // Helper function to handle Tab components specifically
      function handleTabComponents(mdxContent) {
        let result = mdxContent;

        // Handle Tabs with TabItems - extract just the content from each tab
        const tabsRegex = /<Tabs[^>]*?>(.*?)<\/Tabs>/gs;
        result = result.replace(tabsRegex, (match, tabsContent) => {
          // Extract all TabItem content
          const tabItemRegex = /<TabItem[^>]*?value="([^"]*)"[^>]*?label="([^"]*)"[^>]*?>(.*?)<\/TabItem>/gs;
          let tabSections = [];
          let tabMatch;

          while ((tabMatch = tabItemRegex.exec(tabsContent)) !== null) {
            const [, value, label, content] = tabMatch;
            tabSections.push(`\n### ${label}\n\n${content.trim()}\n`);
          }

          return tabSections.join('\n');
        });

        return result;
      }

      // Helper function to remove resolved import statements
      function removeResolvedImports(mdxContent, resolvedImports) {
        let result = mdxContent;

        // Remove import statements for resolved components
        for (const componentName of resolvedImports) {
          // Match various import statement patterns for MDX files
          const importPatterns = [
            // import ComponentName from "path.mdx";
            new RegExp(`import\\s+${componentName}\\s+from\\s+["'][^"']*\\.mdx["'];?\\s*\\n?`, 'g'),
            // import { ComponentName } from "path.mdx";
            new RegExp(`import\\s+\\{[^}]*\\b${componentName}\\b[^}]*\\}\\s+from\\s+["'][^"']*\\.mdx["'];?\\s*\\n?`, 'g'),
            // import ComponentName, { other } from "path.mdx";
            new RegExp(`import\\s+${componentName}\\s*,\\s*\\{[^}]*\\}\\s+from\\s+["'][^"']*\\.mdx["'];?\\s*\\n?`, 'g'),
          ];

          for (const pattern of importPatterns) {
            result = result.replace(pattern, '');
          }
        }

        return result;
      }

      // Helper function to remove React component imports that are being rendered as text
      function removeReactComponentImports(mdxContent) {
        let result = mdxContent;

        // Remove React component imports from @site/src/components that are being rendered as text
        // These are imports that don't end with .mdx but are still being processed by our component renderer
        const reactComponentImportPatterns = [
          // import { ComponentName } from "@site/src/components/...";
          /import\s+\{\s*[^}]*\}\s+from\s+["']@site\/src\/components\/[^"']*["'];?\s*\n?/g,
          // import { ComponentName } from "./sections/ComponentName";
          /import\s+\{\s*[^}]*\}\s+from\s+["']\.\/sections\/[^"']*["'];?\s*\n?/g,
          // import ComponentName from "@site/src/components/...";
          /import\s+\w+\s+from\s+["']@site\/src\/components\/[^"']*["'];?\s*\n?/g,
          // import ComponentName from "@theme/...";
          /import\s+\w+\s+from\s+["']@theme\/[^"']*["'];?\s*\n?/g,
          // import { ComponentName } from "@theme/...";
          /import\s+\{\s*[^}]*\}\s+from\s+["']@theme\/[^"']*["'];?\s*\n?/g,
          // import { ComponentName } from "./ComponentName";
          /import\s+\{\s*[^}]*\}\s+from\s+["']\.\/[^"']*["'];?\s*\n?/g,
        ];

        for (const pattern of reactComponentImportPatterns) {
          result = result.replace(pattern, '');
        }

        return result;
      }

      // Helper function to extract title from content
      function extractTitleFromContent(mdxContent) {
        // First try to extract title from frontmatter
        const frontmatterTitleMatch = mdxContent.match(/^---\s*\n.*?title:\s*["']?([^"'\n]+)["']?\s*\n.*?^---/ms);
        if (frontmatterTitleMatch) {
          return frontmatterTitleMatch[1].trim();
        }

        // If no frontmatter title, look for the first H1 heading
        const h1Match = mdxContent.match(/^#\s+(.+)$/m);
        if (h1Match) {
          return h1Match[1].trim();
        }

        // Return null if no title found
        return null;
      }

      // Helper function to recursively resolve imports
      async function resolveImportsRecursively(mdxContent, filePath, contentDir, resolvedFiles = new Set(), depth = 0) {
        // Prevent infinite recursion
        if (depth > 10) {
          console.warn("LLMs plugin: Maximum recursion depth reached for:", filePath);
          return mdxContent;
        }

        // Prevent circular dependencies
        if (resolvedFiles.has(filePath)) {
          console.warn("LLMs plugin: Circular dependency detected for:", filePath);
          return mdxContent;
        }

        resolvedFiles.add(filePath);

        const imports = parseImports(mdxContent);
        let resolvedContent = mdxContent;

        const resolvedImports = new Set();

        for (const [componentName, resolvedPath] of imports) {
          try {
            let importPath;

            // Handle different import path patterns dynamically
            if (resolvedPath.startsWith('./') || resolvedPath.startsWith('../')) {
              // Relative imports - resolve relative to current file
              importPath = path.resolve(path.dirname(filePath), resolvedPath);
            } else if (resolvedPath.startsWith('docs/')) {
              // @site/docs/ imports - resolve relative to docs directory
              importPath = path.join(contentDir, resolvedPath.replace('docs/', ''));
            } else {
              // All other @site/ imports - resolve relative to project root
              const projectRoot = path.dirname(contentDir);
              importPath = path.join(projectRoot, resolvedPath);
            }

            const importedContent = await fs.promises.readFile(importPath, "utf8");

            // Recursively resolve imports in the imported file
            const fullyResolvedImport = await resolveImportsRecursively(
              importedContent,
              importPath,
              contentDir,
              resolvedFiles,
              depth + 1
            );

            // Find and replace component usage
            const usages = findComponentUsage(resolvedContent, componentName);
            if (usages.length > 0) {
              resolvedContent = injectContent(resolvedContent, usages, fullyResolvedImport);
              console.log(`LLMs plugin: Resolved ${usages.length} usage(s) of ${componentName} from ${resolvedPath}`);

              // Track this import as resolved so we can remove it later
              resolvedImports.add(componentName);
            }

          } catch (error) {
            console.warn(`LLMs plugin: Failed to resolve import ${resolvedPath}:`, error.message);
          }
        }

        // Remove all resolved import statements
        resolvedContent = removeResolvedImports(resolvedContent, resolvedImports);

        // Also remove React component imports that are being rendered as text
        resolvedContent = removeReactComponentImports(resolvedContent);

        return resolvedContent;
      }

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
                let content = await fs.promises.readFile(fullPath, "utf8");

                // NEW: Resolve imports
                content = await resolveImportsRecursively(content, fullPath, contentDir);

                // NEW: Render React components as text
                content = await renderReactComponents(content, fullPath, contentDir);

                const relativePath = path.relative(contentDir, fullPath);
                mdxFiles.set(relativePath, content);
                console.log("LLMs plugin: Processed MDX file with imports:", relativePath);
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
              // Skip files that are imports/partials (start with underscore or are in certain patterns)
              const baseName = path.basename(mdxPath);
              const isImportFile = baseName.startsWith('_') ||
                mdxPath.includes('/_') ||
                mdxPath.includes('/sections/_') ||
                // Skip common import patterns
                baseName.match(/^_(test-cards|card-brands|custom-bin|ios-http-client-response|plaintext-http-client-response|raw-proxy-response|bank-details|bin-details-test-cards|card-details|cvc-ttl-info-alert|network-token-details)\.mdx$/);

              if (isImportFile) {
                console.log("LLMs plugin: Skipping import file:", mdxPath);
                continue;
              }

              // Convert the MDX path to the output path
              const relativeOutputPath = mdxPath
                .replace(/\.mdx$/, "")
                .split("/")
                .filter(Boolean);

              // If the file is named index.mdx, don't include 'index' in the output path
              const isIndexFile = relativeOutputPath[relativeOutputPath.length - 1] === "index";
              const outputPath = relativeOutputPath;

              const outputDir = isIndexFile ? path.join(outDir, "docs", ...outputPath.slice(0, -1)) : path.join(outDir, "docs", ...outputPath);
              const fileName = isIndexFile ? outputPath[outputPath.length - 2] : outputPath[outputPath.length - 1];
              const outputPathWithoutFilename = isIndexFile ? outputPath.slice(0, -2) : outputPath.slice(0, -1);
              const mdPath = path.join(outputPathWithoutFilename.join("/"), `${fileName}.md`);

              // Ensure directory exists
              await fs.promises.mkdir(outputDir, { recursive: true });

              // Write markdown file
              await fs.promises.writeFile(`${outputDir}.md`, mdxContent);

              const pathSegments = outputDir.split('/');
              if (pathSegments[pathSegments.length - 1] === pathSegments[pathSegments.length - 2]) {
                const parentPathSegments = pathSegments.slice(0, -1);
                // Write the duplicate file
                await fs.promises.writeFile(`${parentPathSegments.join("/")}.md`, mdxContent);
                console.log("LLMs plugin: Wrote duplicate file for same-name folders:", parentPathSegments.join("/"));
              }

              processedFiles++;

              // Add to links list - use the actual title from MDX frontmatter or first H1
              const docPath = "/docs/" + mdPath;

              // Extract title from frontmatter or first H1 heading
              const extractedTitle = extractTitleFromContent(mdxContent);
              const pageTitle = extractedTitle || docPath.replace('/docs/', '').replace(/\//g, ' › ');

              markdownLinks.push(`- [${pageTitle}](https://developers.basistheory.com${docPath})`);

              console.log("LLMs plugin: Wrote markdown file:", mdPath);
            } catch (error) {
              console.error("LLMs plugin: Error processing file:", error);
            }
          }

          console.log("LLMs plugin: Processed files:", processedFiles);

          try {
            // Write llm.txt with links to all markdown files
            const llmsTxt = `# ${context.siteConfig.title}\n\n## Documentation Files\n\n${markdownLinks.join("\n")}`;
            const llmsTxtPath = path.join(outDir, "llms.txt");
            console.log("LLMs plugin: Writing llms.txt to:", llmsTxtPath);
            await fs.promises.writeFile(llmsTxtPath, llmsTxt);

            // Write llm-full.txt with concatenated content
            const fullContent = Array.from(mdxFiles.values()).join("\n\n---\n\n");
            const llmsFullPath = path.join(outDir, "llms-full.txt");
            console.log("LLMs plugin: Writing llms-full.txt to:", llmsFullPath);
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
