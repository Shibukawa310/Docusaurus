// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DECADE-X Standard Library',
  tagline: 'Interoperability for Aerospace & Defence',
  url: 'https://Shibukawa310.github.io', // Matches your GitHub profile
  baseUrl: '/Docusaurus/', // Matches your repository name
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'DECADE-X',
      items: [
        { type: 'doc', docId: 'intro', position: 'left', label: 'Standards' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} DECADE-X Initiative.`,
    },
  },
};

module.exports = config;
