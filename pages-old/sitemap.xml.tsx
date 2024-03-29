import { getSortedPostsData } from '../lib/posts';

const EXTERNAL_DATA_URL = "https://thsn.dev"

function generateSiteMap(posts: any) {
  const today = new Date().toISOString().split('T')[0]
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://thsn.dev</loc>
       <lastmod>${today}</lastmod>
     </url>
     <url>
       <loc>https://thsn.dev/blog</loc>
       <lastmod>${today}</lastmod>
     </url>
     ${posts
      .map(({ id, date }: any) => {
        return `
      <url>
        <loc>${`${EXTERNAL_DATA_URL}/blog/${id}`}</loc>
        <lastmod>${date}</lastmod>
      </url>
     `;
      })
      .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: any) {
  // We make an API call to gather the URLs for our site
  const allPostsData = getSortedPostsData();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(allPostsData);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
