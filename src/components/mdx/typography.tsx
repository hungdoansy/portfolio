import Link from "next/link"

import { isExternalLink } from "@/lib/routes"
import { cn } from "@/lib/utils"

export function EM({ className, children, ...props }: HeadingProps) {
    return (
        <em className={cn("font-medium text-secondary tracking-tight", className)} {...props}>
            {children}
        </em>
    )
}

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>
const defaultHeadingClassName = "font-semibold tracking-tight leading-[1.5] text-balance text-primary"

export function H1({ className, children, ...props }: HeadingProps) {
    return (
        <h1 className={cn(defaultHeadingClassName, "text-[32px]", className)} {...props}>
            {children}
        </h1>
    )
}

export function H2({ className, children, ...props }: HeadingProps) {
    return (
        <h2 className={cn(defaultHeadingClassName, "text-[24px] mt-8 mb-2", className)} {...props}>
            {children}
        </h2>
    )
}

export function H3({ className, children, ...props }: HeadingProps) {
    return (
        <h3 className={cn(defaultHeadingClassName, "text-[20px] mt-6 mb-1", className)} {...props}>
            {children}
        </h3>
    )
}

export function H4({ className, children, ...props }: HeadingProps) {
    return (
        <h4 className={cn(defaultHeadingClassName, "text-[18px] mt-4", className)} {...props}>
            {children}
        </h4>
    )
}

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>
export function Anchor({ className, href = "#", children, ...props }: AnchorProps) {
    const target = isExternalLink(href) ? "_blank" : undefined
    return (
        <Link
            className={cn("border-b border-border transition-colors duration-300 hover:border-accent", className)}
            target={target}
            href={href}
            {...props}
        >
            {children}
        </Link>
    )
}

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>
export function Paragraph({ className, children, ...props }: ParagraphProps) {
    return (
        <p className={cn("text-base tracking-wide m-0 p-0 ", className)} {...props}>
            {children}
        </p>
    )
}
