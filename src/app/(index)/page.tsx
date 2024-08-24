"use client"

import { NextPage } from "next"
import Link from "next/link"

import PageContainer from "@/components/layout/PageContainer"
import { Anchor, H1, Paragraph } from "@/components/mdx/typography"
import { Button } from "@/components/ui/button"

const GithubSVG = () => {
    return (
        <svg className="logo" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />

            <style jsx>{`
                .logo {
                    display: inline-block;
                    height: 1em;
                }
            `}</style>
        </svg>
    )
}

const EmailSVG = () => {
    return (
        <span className="logo">
            <svg width="1em" height="1em" viewBox="0 0 24 24">
                <path
                    fill="currentColor"
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"
                />
            </svg>
            <style jsx>{`
                .logo {
                    display: inline-block;
                    height: 1em;
                    vertical-align: -2px;

                    > svg {
                        height: 100%;
                    }
                }
            `}</style>
        </span>
    )
}

const FileSVG = () => {
    return (
        <svg className="logo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g id="document_fill" fill="none" fillRule="nonzero">
                <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z" />
                <path
                    fill="currentColor"
                    d="M18 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12Zm-6 11H9a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2Zm3-5H9a1 1 0 0 0-.117 1.993L9 10h6a1 1 0 0 0 .117-1.993L15 8Z"
                />
            </g>

            <style jsx>{`
                .logo {
                    display: inline-block;
                    height: 1em;
                    vertical-align: -2px;

                    > svg {
                        height: 100%;
                    }
                }
            `}</style>
        </svg>
    )
}

const HomePage: NextPage = () => {
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
            </PageContainer>
        </div>
    )
}

export default HomePage
