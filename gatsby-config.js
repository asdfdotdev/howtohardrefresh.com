/**
 * @type {import('gatsby').GatsbyConfig}
 */
const url = 'https://howtohardrefresh.com'

module.exports = {
  siteMetadata: {
    title: `Hard Refresh Any Browser | How to Hard Refresh`,
    siteUrl: url,
    description: `If you need to bypass your web browser cache use these refresh shortcuts to hard refresh your browser and see your latest page updates.`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-styled-components", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "src/assets/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "src/pages/"
    },
    __key: "pages"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "src/data/"
    },
    __key: "json"
  }, {
    resolve: "gatsby-transformer-json",
    options: {
      typeName: "Json"
    }
  }, {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: url,
      sitemap: `${url}/sitemap-index.xml`,
      policy: [{userAgent: '*', allow: '/'}]
    }
  }]
};
