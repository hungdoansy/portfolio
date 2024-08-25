import { format } from "date-fns"
import Link from "next/link"

import PageContainer from "@/components/layout/PageContainer"
import { Anchor, H1, H2, H3, Paragraph } from "@/components/mdx/typography"
import { EmailSVG, FileSVG, GithubSVG } from "@/components/svg"
import { Button } from "@/components/ui/button"
import { groupPostsByYear } from "@/lib/mdx"
import { getPostURL } from "@/lib/routes"

export default async function HomePage() {
    const postsByYear = await groupPostsByYear()
    return (
        <div className="w-full flex flex-col items-center">
            <PageContainer className="flex flex-col gap-6">
                <H1 className="text-4xl font-semibold">Hello 👋 I&apos;m Hùng.</H1>

                <Paragraph className="text-2xl text-secondary">
                    I&apos;m a simple & regular FrontEnd Developer. I&apos;m working remotely for{" "}
                    <Anchor href="https://www.yololab.io/">YoloLabs</Anchor>. I live with my wife and a gumsy dude in
                    Hanoi, Vietnam.
                </Paragraph>

                <Paragraph className="text-2xl text-secondary">
                    This is my blog where I share my experience from POV of a frontend developer.
                </Paragraph>

                <div className="w-full flex items-center gap-4">
                    <Button asChild>
                        <Link href="https://github.com/hungdoansy">
                            Github <GithubSVG />
                        </Link>
                    </Button>

                    <Button>
                        LinkedIn <EmailSVG />
                    </Button>
                </div>

                <ul className="hidden">
                    <li>
                        -&gt; <Link href="https://github.com/hungdoansy">Find me on GitHub</Link>
                    </li>
                    <li>
                        -&gt; <Link href="mailto:hungdoansy@gmail.com">Contact me</Link> <EmailSVG />
                    </li>
                    <li>
                        -&gt; <Link href="/cv">My CV</Link> <FileSVG />
                    </li>
                </ul>

                <div className="mt-12 flex flex-col gap-6">
                    <H2>All articles</H2>
                    <div className="flex flex-col gap-6">
                        {postsByYear.map(({ posts, year }) => {
                            return (
                                <div key={year} className="flex flex-col gap-4">
                                    <H3>{year}</H3>
                                    <div className="flex flex-col gap-2">
                                        {posts.map((post) => {
                                            return (
                                                <Link
                                                    key={post.slug}
                                                    className="-ml-4 flex gap-4 p-4 transition-colors rounded-lg hover:bg-emphasis"
                                                    href={getPostURL(post.slug)}
                                                >
                                                    <div className="py- w-[72px] flex-none text-secondary">
                                                        {format(new Date(Date.parse(post.date)), "MMM dd")}
                                                    </div>
                                                    <span className="text-primary">{post.title}</span>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </PageContainer>
        </div>
    )
}
