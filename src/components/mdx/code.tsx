import { DetailedHTMLProps, HTMLAttributes } from "react"

type InlineCodeProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
export function InlineCode({ children, ...props }: InlineCodeProps) {
    return (
        <code
            className="font-light px-1.5 py-0.5 ps-1.5 pe-1.5 text-sm leading-none tracking-normal break-words rounded-lg border bg-foreground text-accent"
            {...props}
        >
            {children}
        </code>
    )
}
