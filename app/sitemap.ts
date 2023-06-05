import { MetadataRoute } from 'next';
import { getSortedPostsData } from '../lib/posts';

const EXTERNAL_DATA_URL = "https://thsn.dev"

export default function sitemap(): MetadataRoute.Sitemap {
  const allPostsData = getSortedPostsData();
  const blogs = allPostsData.map(({ id, date }: any) => (
    {
      url: `${EXTERNAL_DATA_URL}/blog/${id}`,
      lastModified: date,
    }
    ))
  return [
    {
      url: 'https://thsn.dev',
      lastModified: new Date().toISOString().split('T')[0],
    },
    {
      url: 'https://thsn.dev/blog',
      lastModified: new Date().toISOString().split('T')[0],
    },
    ...blogs,
  ];
}
