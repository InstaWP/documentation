/// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'InstaWP Docs',
  tagline: 'WordPress Instances in less than a second!',
  url: 'https://docs.instawp.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'instawp', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'InstaWP Docs',
        logo: {
          alt: 'InstaWP Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'getting-started',
          //   position: 'left',
          //   label: 'Docs',
          // },
          {type: 'doc', docId: 'getting-started', label: 'Getting Started', position: 'left'},
          {href: 'https://www.facebook.com/groups/instawp', label: 'Community', position: 'right'},
          {
            href: 'https://instawp.com',
            label: 'InstaWP',
            position: 'right',
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
                label: 'Getting Started',
                to: '/docs/getting-started',
              },{

                label: 'Sites Started',
                to: '/docs/category/sites',
              },{

                label: 'Templates',
                to: '/docs/category/templates',
              },{

                label: 'Deployments',
                to: '/docs/category/deployments',
              }
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'InstaWP Home',
                href: 'https://instawp.com',
              },
              {
                label: 'InstaWP App',
                href: 'https://app.instawp.io',
              },
              {
                label: 'Chrome Extension',
                href: 'https://chrome.google.com/webstore/detail/instawp-launcher/nhiaohalgdfojppcongpiiemfeckmgao',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Videos',
                to: 'https://www.youtube.com/channel/UC9INSyVW2yysvwkAq-GJK6g',
              },
              {
                label: 'Support',
                href: 'https://help.expresstech.io/help/785594868',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} InstaWP, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
