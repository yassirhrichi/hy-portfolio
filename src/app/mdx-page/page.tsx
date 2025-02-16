export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  console.log(slug)
  const { default: Post } = await import(`@/app/mdx-page/content/${slug}.mdx`)
 
  return <Post />
}
 
export function generateStaticParams() {
  return [{ slug: 'welcome' }, { slug: 'about' }]
}
 
export const dynamicParams = false