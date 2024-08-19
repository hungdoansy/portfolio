import { cn } from "@/lib/utils"

type PageContainerProps = React.PropsWithChildren<{
    className?: string
}>
export default function PageContainer({ className, children }: PageContainerProps) {
    return <div className={cn("w-full max-w-[720px]", className)}>{children}</div>
}
