// Import your Client Component
import HomePage from './home-page';

import { getSortedPostsData } from '../lib/posts';

export default async function Page() {
  const allPostsData = await getSortedPostsData();
  return <HomePage allPostsData={allPostsData} />
}
