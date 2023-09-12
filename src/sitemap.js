// Generate SiteMap

const sitemap = require('sitemap');
const hostname = 'https://www.staark.dev';

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
];

const sitemapInstance = sitemap.createSitemap({
  hostname,
  urls,
});
