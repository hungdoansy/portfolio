"use client"

import { Blockquote, Button, Card, Details, InlineCode, List, Pill } from "@maximeheckel/design-system"
import { MDXRemoteProps } from "next-mdx-remote"
import Image from "next/image"

import Code from "@/components/Code"

import { Anchor, EM, H1, H2, H3, Paragraph } from "./typography"

const customComponents = {
    Card,
    CardBody: Card.Body,
}

const MDXComponents: MDXRemoteProps["components"] = {
    // Replace the default anchor tag by the Anchor component with underline set to true: this is the default link
    a: Anchor,
    Button,
    blockquote: Blockquote,
    Details,
    em: EM,
    h1: H1,
    h2: H2,
    h3: H3,
    Image,
    code: InlineCode,
    li: List.Item,
    ol: function OL(props: React.OlHTMLAttributes<HTMLOListElement>) {
        return <List variant="ordered" {...props} />
    },
    p: Paragraph,
    Pill,
    pre: Code,
    // strong: Strong,
    ul: function UL(props: React.HTMLAttributes<HTMLUListElement>) {
        return <List variant="unordered" {...props} />
    },
    ...customComponents,
}

export default MDXComponents
