"use client"

import { Anchor, Box, Flex, Grid, H1, Pill, Text, css } from "@maximeheckel/design-system"
import { format } from "date-fns"
import Link from "next/link"
import React from "react"

import siteConfig from "@/configs/site"
import { Post, ReadingTime } from "@/types/posts"

const templateColumnsSmall = "1fr minmax(auto, 700px) 1fr"

interface WebmentionBlogDataProps {
    date: string
    postUrl: string
    subtitle?: string
}

const WebmentionBlogData = (props: WebmentionBlogDataProps) => {
    const { date, postUrl, subtitle } = props
    return (
        <>
            <time className="hidden-layout dt-published" itemProp="datepublished" dateTime={date}>
                {new Date(date).toISOString().replace("Z", "") + "+01:00"}
            </time>
            <a className="hidden-layout u-url" href={postUrl} />
            {subtitle && <p className="hidden-layout p-summary e-content">{subtitle}</p>}
        </>
    )
}

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
    const path = `/posts/${slug}/`
    const postUrl = `${siteConfig.url}${path}`

    const headerProps = {
        title,
        offsetHeight: 256,
        showProgressBarOnMobile: true,
    }

    const [ids, setIds] = React.useState<Array<{ id: string; title: string }>>([])

    React.useEffect(() => {
        /**
         * Working around some race condition quirks :) (don't judge)
         * TODO @MaximeHeckel: see if there's a better way through a remark plugin to do this
         */
        setTimeout(() => {
            const titles = document.querySelectorAll("h2")
            const idArrays = Array.prototype.slice
                .call(titles)
                .map((title) => ({ id: title.id, title: title.innerText })) as Array<{
                id: string
                title: string
            }>
            setIds(idArrays)
        }, 500)
    }, [slug])

    return (
        <article className="h-entry">
            <Grid gapX={4} templateColumns={templateColumnsSmall}>
                <Grid.Item col={2}>
                    <Flex
                        alignItems="start"
                        css={{
                            marginBottom: "var(--space-5)",
                        }}
                        direction="column"
                        gap="4"
                    >
                        <Box css={{ fontSize: "var(--font-size-1)" }}>
                            <Link href="/" legacyBehavior passHref>
                                <Anchor arrow="left" data-testid="home-link" discreet>
                                    Home
                                </Anchor>
                            </Link>
                        </Box>
                        <H1 css={{ width: "100%", textWrap: "balance" }} className="p-name" data-testid="post-title">
                            {title}
                        </H1>
                        <Box>
                            <Flex gap="3" wrap="wrap">
                                <Text as="p" size="1" variant="tertiary" weight="3" css={{ marginBottom: "0px" }}>
                                    {format(new Date(Date.parse(date)), "MMMM d, yyyy")} / {readingTime.text}
                                </Text>
                                {updated && (
                                    <Pill variant="info">
                                        Last Updated: {format(new Date(Date.parse(updated)), "MMMM d, yyyy")}
                                    </Pill>
                                )}
                                {/* <WebmentionCount target={postUrl} /> */}
                            </Flex>
                        </Box>
                    </Flex>
                </Grid.Item>
                <Grid.Item col={2}>
                    <Flex alignItems="start" direction="column" className={contentClass()} gap="6">
                        {children}
                    </Flex>
                </Grid.Item>
            </Grid>
            <WebmentionBlogData date={date} postUrl={postUrl} subtitle={subtitle} />
        </article>
    )
}

export default BlogLayout
