"use client"

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote"

export function Article({ content }: { content: MDXRemoteProps }) {
    return <MDXRemote {...content} />
}
