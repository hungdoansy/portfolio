import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
    title: "Hung Doan",
    description: "A regular frontend developer",
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
            <body>{children}</body>
        </html>
    )
}
