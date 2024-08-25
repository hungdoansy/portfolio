"use client"

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

const BlogLayout = ({ children, frontMatter, ogImage }: Props) => {
    const { date, updated, slug, subtitle, title, readingTime } = frontMatter
    const path = getPostURL(slug)
    const postUrl = `${siteConfig.url}${path}`

    return (
        <article className="w-full flex justify-center">
            <PageContainer className="flex flex-col gap-8">
                <Link href="/" className="w-fit flex items-center text-sm group text-secondary hover:text-accent">
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
                        className="w-4 h-4 flex-none transition-transform group-hover:-translate-x-1 mr-1"
                    >
                        <path d="m12 19-7-7 7-7" />
                        <path d="M19 12H5" />
                    </svg>
                    <span>Home</span>
                </Link>

                <h1 className="font-semibold text-4xl text-primary">{title}</h1>

                <div className="flex items-center justify-between gap-2 text-sm">
                    <span className="flex-none whitespace-nowrap">
                        {format(new Date(Date.parse(date)), "MMMM d, yyyy")} / {readingTime.text}
                    </span>

                    {updated && (
                        <span className="text-accent leading-none px-2 pt-[5px] pb-[4px] bg-emphasis rounded-sm">
                            Last updated: {format(new Date(Date.parse(updated)), "MMMM d, yyyy")}
                        </span>
                    )}
                </div>

                <div className={cn("flex flex-col gap-6")}>{children}</div>
            </PageContainer>
        </article>
    )
}

export default BlogLayout
