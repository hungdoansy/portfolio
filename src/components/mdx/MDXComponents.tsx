"use client"

import { MDXRemoteProps } from "next-mdx-remote"
import Image from "next/image"

import Code from "@/components/Code"
import { InlineCode } from "@/components/mdx/code"
import { ListItem } from "@/components/mdx/list"

import { Anchor, EM, H1, H2, H3, Paragraph } from "./typography"

const MDXComponents: MDXRemoteProps["components"] = {
    // Replace the default anchor tag by the Anchor component with underline set to true: this is the default link
    a: Anchor,
    em: EM,
    h1: H1,
    h2: H2,
    h3: H3,
    Image,
    code: InlineCode,
    li: ListItem,
    p: Paragraph,
    pre: Code,
}

export default MDXComponents
