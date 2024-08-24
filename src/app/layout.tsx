import type { Metadata } from "next"

import { ThemeProvider } from "@/components/ThemeProvider"
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
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
                    <PageHeader />
                    <PageBody>{children}</PageBody>
                    <PageFooter />
                </ThemeProvider>
            </body>
        </html>
    )
}
