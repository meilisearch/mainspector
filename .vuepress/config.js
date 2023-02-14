const fs = require('fs');
const path = require('path');

const projects = fs.readdirSync(path.join(__dirname, "../specifications/text"))

module.exports = {
  title: 'Welcome to the Meilisearch specifications!',
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    prefersTheme: 'dark',
    nav: [
      { text: 'Specification', link: 'specifications/text/0000-specification-template.md' },
    ],
    sidebar: projects.map(spec => [`specifications/text/${spec}`, spec.slice(5, -3).replace(/-/g, " ").replace(/^./, spec[5].toUpperCase())]),
  },
  plugins: [
    [
      "meilisearch",
      {
        hostUrl: "https://ms-2e56dc05278b-269.lon.meilisearch.io",
        apiKey:
          '89b77682d7f02eccbf4c99ac00ddd2837cc6c03a677a826411e6f7d3e98d5e6c',
        indexUid: 'main',
        debug: false,
        enableDarkMode: 'auto'
        // "maxSuggestions": 10,
        // placeholder: 'Search as you type...'
      }
    ]
  ]
}
