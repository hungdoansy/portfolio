import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

type ListItemProps = React.HTMLAttributes<HTMLLIElement>
export function ListItem({ className, children }: ListItemProps) {
    return (
        <li className={cn("list-style-none flex leading-[2]", className)}>
            <span data-list-item>
                <ArrowRight className="text-accent w-5 h-5" />
            </span>
            <div>{children}</div>
        </li>
    )
}
