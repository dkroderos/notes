import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const user = "dkroderos";
const project = "notes";

const config: Config = {
  title: "Notes",
  tagline: "Notes",
  favicon: "img/favicon.ico",

  url: `https://${user}.github.io`,
  baseUrl: "/notes",

  organizationName: user,
  projectName: project,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "notes",
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: `https://github.com/${user}/${project}/tree/main`,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "dkroderos",
      items: [
        {
          type: "docSidebar",
          sidebarId: "default",
          position: "left",
          label: "Notes",
        },
        {
          href: `https://github.com/${user}/${project}`,
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
