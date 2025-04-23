// next-sitemap.config.ts

module.exports = {
  siteUrl: 'https://me.potatotraveler.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: [
    '/admin/*',
    '/private/*',
    '/api/*',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/private'],
      },
    ],
    additionalSitemaps: [
      // If you have additional sitemaps, you can add them here
      // `${process.env.SITE_URL}/server-sitemap.xml`,
    ],
  },
  // Transform function for custom URL handling if needed
  transform: async (config, path) => {
    // Custom priority for specific pages
    let priority = config.priority;
    if (path === '/') priority = 1.0;
    else if (path.startsWith('/blog/')) priority = 0.8;
    
    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
