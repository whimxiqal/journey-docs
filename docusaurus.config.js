// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Journey',
  tagline: 'A Minecraft GPS... Basically.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://journey.whimxiqal.net',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'whimxiqal', // Usually your GitHub org/user name.
  projectName: 'journey-docs', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/journey-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-HPCT9XQWT3',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      navbar: {
        title: 'Journey',
        logo: {
          alt: 'Journey Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://modrinth.com/plugin/journey',
            label: 'Download',
            position: 'left',
          },
          {
            href: 'https://github.com/whimxiqal/journey',
            label: 'Source',
            position: 'left',
          },
          {
            href: 'https://github.com/whimxiqal/journey/issues',
            label: 'Issues',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Integrations',
                to: '/docs/category/integrations',
              },
              {
                label: 'Developers',
                to: '/docs/category/developers',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/Yqh6qxNsq3',
              },
              {
                label: 'Discussions',
                href: 'https://github.com/whimxiqal/journey/discussions',
              },
              {
                label: 'Issues',
                href: 'https://github.com/whimxiqal/journey/issues',
              },
              {
                label: 'Download',
                href: 'https://modrinth.com/plugin/journey',
              },
              {
                label: 'BStats',
                href: 'https://bstats.org/plugin/bukkit/Journey/17665',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} whimxiqal`,
      },
      colorMode: {
        defaultMode: 'dark',
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'gradle'],
      },
    }),
}

module.exports = config
