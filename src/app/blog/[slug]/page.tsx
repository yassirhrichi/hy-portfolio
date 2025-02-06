export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post } = await import(`@/src/app/blog/content/${slug}.mdx`);
  return <Post />;
}

export async function generateStaticParams() {
  //let posts = getBlogPosts();

//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
}

export const dynamicParams = false;
