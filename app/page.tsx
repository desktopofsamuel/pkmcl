'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Heading } from '@chakra-ui/react'
import {
  allPosts,
  Post,
} from "contentlayer/generated";
import ListBlogDetail from '@/components/ListBlogDetail'

const inter = Inter({ subsets: ['latin'] })

export default function IndexPage(){
  return (
    <main className={styles.main}>
      <Heading>Hello</Heading>
      {allPosts.map((post) => (
        <ListBlogDetail key={post.postSlug} data={post}/>
      ))}
    </main>
  )
}
