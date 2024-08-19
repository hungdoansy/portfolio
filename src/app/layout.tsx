import type { Metadata } from "next"

import PageBody from "@/components/layout/PageBody"
import PageFooter from "@/components/layout/PageFooter"
import PageHeader from "@/components/layout/PageHeader"

import "./globals.css"

export const metadata: Metadata = {
    title: "hungdoan.xyz",
    description: "Site of a regular frontend developer",
    icons: "/favicon.svg",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            data-theme="dark"
            style={{
                colorScheme: "dark",
            }}
        >
            <body>
                <PageHeader />
                <PageBody>{children}</PageBody>
                <PageFooter />
            </body>
        </html>
    )
}
