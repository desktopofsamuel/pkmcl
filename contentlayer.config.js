import { defineDocumentType, makeSource } from "contentlayer/source-files";
// import rehypeSlug from "rehype-slug";
// import rehypePrism from "rehype-prism-plus";
// import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";
// import remarkUnwrapImages from "remark-unwrap-images";
import kebabCase from "lodash.kebabcase";
import { parseMarkdown, parseReadTime } from "./utils";
// import toc from "@jsdevtools/rehype-toc";
// import remarkGfm from "remark-gfm";

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  // Location of Post source files (relative to `contentDirPath`)
  filePathPattern: "**/*.md",
  // At the time of writing, we also have to define the `fields`
  // option to prevent an error on generation. We'll discuss
  // this option later. For now, we'll add an empty object.
  fields: {
    title: {
      type: "string",
      required: false,
    },
    date: {
      type: "date",
      required: false,
    },
  
  slug: {
    type: "string",
    required: false,
  },
  tags: {
    type: "list",
    of: { type: "string" },
    required: true,
  },
  feature: {
    type: "boolean",
    required: false,
  },
  socialImage: {
    type: "string",
    required: false,
  },
  category: {
    type: "enum",
    required: "false",
    options: ["reflection", "Design Journal"],
    default: "Design Journal",
  },
  publish: {
    type: "boolean",
    required: false,
  },
},
computedFields: {
  postTitle: {
    type: "string",
    resolve: (post) => post.title ? post.title : post._raw.sourceFileName,
  },
  postSlug: {
    type: "string",
    resolve: (post) =>
      post.slug ? post.slug : kebabCase(post.title),
  },
  excerpt: {
    type: "string",
    resolve: (post) => parseMarkdown(post.body.raw, 155),
  },
  description: {
    type: "string",
    resolve: (post) => parseMarkdown(post.body.raw, 300),
  },
  timetoread: {
    type: "number",
    resolve: (post) => parseReadTime(post.body.raw)
  }
},
}));

export default makeSource({
  // Location of source files for all defined documentTypes
  contentDirPath: "content",
  documentTypes: [Post],
  // mdx: {
  //   remarkPlugins: [
  //     [remarkGfm],
  //     [remarkUnwrapImages], 
  //   ],
  //   rehypePlugins: [
  //     [rehypePrism],
  //     [rehypeSlug],
  //     [rehypeAutolinkHeadings],
  //     [rehypeAccessibleEmojis],
  //   ],
  // },
});
