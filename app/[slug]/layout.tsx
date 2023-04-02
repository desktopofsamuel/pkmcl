// import { allPosts } from 'contentlayer/generated'

// export const generateMetadata = ({ params }) => {
//   const post = allPosts.filter((post) => post.postSlug === params.slug)
//   return { title: post. }
// }


export default function BlogLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode,
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>

      {children}
    </section>
  );
}