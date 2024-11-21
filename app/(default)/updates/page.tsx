{
  /*
Note: This code includes an example of how to fetch data from an external JSON file that is hosted at https://raw.githubusercontent.com/cruip/cruip-dummy/main/waitlist-posts.json. To facilitate this, we've included a lib directory in the root which contains a function that can fetch the JSON content. Additionally, we've defined the Post types in the types.d.ts file located in the root.
*/
}

import getAllPosts from "@/lib/getAllPosts";

export const metadata = {
  title: "TRAX | Updates",
  description: "A new way for artists to release music, capture fan data and earn more from their art.",
};

import PageHeader from "@/components/page-header";
import Cta from "@/components/cta-distro";
import Posts from "@/app/(default)/updates/posts";
import CTARevenue from "@/components/cta-revenue";
import UpdatesBento from "@/components/updates-bento";

export default async function Updates() {
  const postsData: Promise<Post[]> = getAllPosts();
  const posts = await postsData;

  return (
    <>
      <UpdatesBento/>
    </>
  );
}
