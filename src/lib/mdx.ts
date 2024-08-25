"use server"

import fs from "fs"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import path from "path"
import readingTime from "reading-time"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

import { FrontMatterPost, Post } from "@/types/posts"

import { remarkMeta } from "./remark-meta.js"

const root = process.cwd()

export const getFiles = async () => {
    return fs.readdirSync(path.join(root, "contents")).filter((file) => file.endsWith(".mdx"))
}

export const getFileBySlug = async (slug: string): Promise<FrontMatterPost> => {
    // eslint-disable-next-line no-console

    const source = fs.readFileSync(path.join(root, "contents", `${slug}.mdx`), "utf8")

    const parsedFile = matter(source)

    const data = parsedFile.data
    const content = parsedFile.content

    const mdxSource = await serialize(content, {
        parseFrontmatter: false,
        mdxOptions: {
            rehypePlugins: [remarkMeta, rehypeAutolinkHeadings],
        },
    })

    const result = {
        mdxSource,
        frontMatter: {
            readingTime: readingTime(content),
            ...data,
        },
    }

    return result as unknown as FrontMatterPost
}

export const getAllFilesFrontMatter = async (): Promise<Array<Post>> => {
    const files = fs.readdirSync(path.join(root, "contents"))

    const posts = files
        .filter((file) => file.endsWith(".mdx"))
        .map((postSlug: string) => {
            const source = fs.readFileSync(path.join(root, "contents", postSlug), "utf8")
            const parsedFile = matter(source)

            return parsedFile.data as Post
        })
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

    return posts
}

export const groupPostsByYear = async () => {
    const posts = await getAllFilesFrontMatter()

    const groupedPosts = posts.reduce((group, post) => {
        const year = post.date.slice(0, 4)
        if (!group[year]) {
            group[year] = []
        }

        group[year].push(post)
        return group
    }, {} as Record<string, Post[]>)

    const years = [...Object.keys(groupedPosts)].map((key) => Number(key)).sort((a, b) => b - a)
    return years.map((year) => ({
        year,
        posts: groupedPosts[year],
    }))
}
