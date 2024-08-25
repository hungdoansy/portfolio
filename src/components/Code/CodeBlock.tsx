import { useTheme } from "next-themes"
import Highlight, { Prism, defaultProps } from "prism-react-renderer"
import vsDark from "prism-react-renderer/themes/vsDark"
import vsLight from "prism-react-renderer/themes/vsLight"

import CopyToClipboardButton from "@/components/buttons/CopyToClipboardButton"
import { cn } from "@/lib/utils"

import { CodeBlockProps, HighlightedCodeTextProps } from "./types"
import { calculateLinesToHighlight, hasTitle } from "./utils"

;(() => {
    // @ts-ignore
    ;(typeof global !== "undefined" ? global : window).Prism = Prism
})()

/**
 * @todo Fix highlighted line's background is cut off
 */

export const HighlightedCodeText = (props: HighlightedCodeTextProps) => {
    const { codeString, language, highlightLine } = props
    const { resolvedTheme } = useTheme()

    const preTheme = resolvedTheme === "dark" ? vsDark : vsLight

    if (!codeString) return null

    return (
        <Highlight {...defaultProps} theme={preTheme} code={codeString} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <Pre className={className} style={style}>
                    {tokens.map((line, index) => {
                        const { className: lineClassName } = getLineProps({
                            /**
                             * @todo Remove `highlight-line`
                             */
                            className: highlightLine && highlightLine(index) ? "highlight-line" : "",
                            key: index,
                            line,
                        })

                        return (
                            <Line
                                key={index}
                                className={lineClassName}
                                highlighted={highlightLine ? highlightLine(index) : false}
                            >
                                <LineNumber>{index + 1}</LineNumber>
                                <LineContent>
                                    {line.map((token, key) => {
                                        const { key: _key, ...tokenProps } = getTokenProps({
                                            token,
                                        })
                                        return <span key={key} {...tokenProps} />
                                    })}
                                </LineContent>
                            </Line>
                        )
                    })}
                </Pre>
            )}
        </Highlight>
    )
}

const CodeBlock = (props: CodeBlockProps) => {
    const { codeString, language, metastring } = props

    const highlightLineFn = calculateLinesToHighlight(metastring)
    const title = hasTitle(metastring)

    return (
        <div className="w-full bg-[unset] text-sm rounded-lg border border-border overflow-hidden">
            {title ? (
                <div className="h-12 px-4 bg-muted flex items-center justify-between border-b border-border">
                    <CodeSnippetTitle>{title}</CodeSnippetTitle>
                    <CopyToClipboardButton title={title} text={codeString} />
                </div>
            ) : null}

            <HighlightedCodeText codeString={codeString} language={language} highlightLine={highlightLineFn} />
        </div>
    )
}

export default CodeBlock

function Pre({ children, className, ...props }: React.HTMLAttributes<HTMLPreElement>) {
    return (
        <pre className={cn("my-0 text-left py-2 overflow-auto rounded-b-lg font-mono leading-[26px]")} {...props}>
            {children}
        </pre>
    )
}

function Line({
    children,
    className,
    highlighted,
    ...props
}: React.HTMLAttributes<HTMLDivElement> & {
    highlighted: boolean
}) {
    return (
        <div
            className={cn(
                "flex w-full border-collapse border-l-[3px] border-transparent hover:bg-emphasis",
                highlighted && "bg-emphasis border-accent",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

function CodeSnippetTitle({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <span className={cn("text-primary", className)} {...props}>
            {children}
        </span>
    )
}

function LineNumber({ children, className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
    return (
        <span
            aria-hidden="true"
            className={cn("flex-none w-11 px-3 select-none text-secondary text-right", className)}
            {...props}
        >
            {children}
        </span>
    )
}

function LineContent({ children, className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
    return (
        <span className={cn("flex flex-1 w-full", className)} {...props}>
            {children}
        </span>
    )
}

/**
 * @todo display table / cell
 * use Github Dark?
 */
