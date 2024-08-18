"use client"

import {
    Anchor,
    Blockquote,
    Button,
    Card,
    Details,
    EM,
    H2,
    H3,
    InlineCode,
    List,
    Pill,
    Strong,
    Text,
} from "@maximeheckel/design-system"
import Image from "next/image"

import Code from "@/components/Code"

const customComponents = {
    Card,
    CardBody: Card.Body,
}

const MDXComponents = {
    // Replace the default anchor tag by the Anchor component with underline set to true: this is the default link
    a: function A(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
        return <Anchor underline {...props} />
    },
    Anchor,
    Button,
    blockquote: Blockquote,
    Details,
    em: EM,
    h2: H2,
    h3: H3,
    Image,
    code: InlineCode,
    li: List.Item,
    ol: function OL(props: React.OlHTMLAttributes<HTMLOListElement>) {
        return <List variant="ordered" {...props} />
    },
    p: function P(props: React.HTMLAttributes<HTMLParagraphElement>) {
        return <Text as="p" {...props} />
    },
    Pill,
    pre: Code,
    strong: Strong,
    ul: function UL(props: React.HTMLAttributes<HTMLUListElement>) {
        return <List variant="unordered" {...props} />
    },
    ...customComponents,
}

export default MDXComponents
