"use client"


import { allPosts, Post } from 'contentlayer/generated'
import { getMDXComponent, useLiveReload } from 'next-contentlayer/hooks'
import { Heading, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'

export const generateStaticParams = async () => allPosts.map((post) => ({ postSlug: post.postSlug }))

// export const generateMetadata = ({ params }) => {
//   const post = allPosts.filter((post) => post.postSlug === params.slug)
//   return { title: post.postTitle }
// }

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const [post] = allPosts.filter((post) => post.postSlug === params.slug)
  const Content = getMDXComponent(post.body.code)

  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <Text>{dayjs(post.date).format("MMM DD, YYYY")}</Text>
        <Heading>{post.title}</Heading>
      </div>
      <Content />
    </article>
  )
}

export default PostLayout