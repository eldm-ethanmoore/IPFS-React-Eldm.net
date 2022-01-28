require("babel-register");
 
const router = require("/workspace/src/SitemapRoutes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    return (
      new Sitemap(router)
          .build("https://www.eldm.net")
          .save("/workspace/public/sitemap.xml")
    );
}

generateSitemap();