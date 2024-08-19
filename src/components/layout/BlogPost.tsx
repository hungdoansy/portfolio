"use client"

import { css } from "@maximeheckel/design-system"
import { format } from "date-fns"
import Link from "next/link"
import React from "react"

import PageContainer from "@/components/layout/PageContainer"
import siteConfig from "@/configs/site"
import { getPostURL } from "@/lib/routes"
import { cn } from "@/lib/utils"
import { Post, ReadingTime } from "@/types/posts"

interface Props {
    children: React.ReactNode
    frontMatter: Post & { readingTime: ReadingTime }
    ogImage: string
}

const contentClass = css({
    padding: "var(--space-5) 0px",
    color: "var(--text-secondary)",

    h2: {
        marginTop: "2em",
    },

    h3: {
        marginTop: "1.45em",
    },

    p: {
        fontWeight: "440",
    },

    li: {
        fontWeight: "440",
    },

    section: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)",
        maxWidth: 700,
        width: "100%",
    },
})

const BlogLayout = ({ children, frontMatter, ogImage }: Props) => {
    const { date, updated, slug, subtitle, title, readingTime } = frontMatter
    const path = getPostURL(slug)
    const postUrl = `${siteConfig.url}${path}`

    return (
        <article className="w-full flex justify-center">
            <PageContainer className="flex flex-col gap-8">
                <Link href="/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                    </svg>
                    Home
                </Link>

                <h1>{title}</h1>

                <div className="flex items-center gap-2">
                    <span>
                        {format(new Date(Date.parse(date)), "MMMM d, yyyy")} / {readingTime.text}
                    </span>
                </div>

                <div className={cn("flex flex-col", contentClass())}>{children}</div>
            </PageContainer>
        </article>
    )
}

export default BlogLayout
