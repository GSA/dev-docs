// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Web Development @ GSA",
  tagline: "Your guide to launching compliant public websites at GSA",
  url: "https://tech.gsa.gov",
  baseUrl: "/site/hursey013/dev-docs/",
  favicon: "img/favicon.ico",
  plugins: [
    [
      "docusaurus-plugin-sass",
      {
        sassOptions: {
          includePaths: [
            "./node_modules/@uswds",
            "./node_modules/@uswds/uswds/packages",
          ],
        },
      },
    ],
  ],
  scripts: [
    {
      src: "https://unpkg.com/uswds@latest/dist/js/uswds-init.min.js",
      defer: true,
    },
    {
      src: "https://unpkg.com/uswds@latest/dist/js/uswds.min.js",
      defer: true,
    },
  ],
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/gsa/cto-website/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.scss")],
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true,
      },
      navbar: {
        hideOnScroll: true,
        title: "Web Development",
        logo: {
          alt: "GSA",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          {
            href: "https://github.com/gsa/cto-website",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
