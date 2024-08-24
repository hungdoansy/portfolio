"use client"

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote"

import MDXComponents from "@/components/mdx/MDXComponents"

export function Article({ content }: { content: MDXRemoteProps }) {
    return <MDXRemote {...content} components={MDXComponents} />
}
