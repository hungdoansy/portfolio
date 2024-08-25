"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

import Logo from "@/components/Logo"
import CommandCenterButton from "@/components/buttons/CommandCenterButton"
import LightDarkSwitcher from "@/components/buttons/LightDarkSwitcher"
import useScrollCounter from "@/hooks/useScrollCounter"
import { cn } from "@/lib/utils"

const headerVariants = {
    open: {
        height: 120,
        transition: { ease: "easeInOut", duration: 0.3 },
    },
    collapsed: {
        height: 60,
        transition: { ease: "easeInOut", duration: 0.3, delayChildren: 0.5 },
    },
}

const offsetHeight = 120
const showProgressBarOnMobile = true
const title = ""
const PageHeader: React.FC = () => {
    const reached = useScrollCounter(offsetHeight / 2)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    return (
        <header
            className={cn(
                "w-full flex justify-center bg-header fixed top-0 left-0 z-10 text-primary backdrop-blur",
                reached ? "border-b" : ""
            )}
        >
            <motion.div
                initial="open"
                animate={reached ? "collapsed" : "open"}
                variants={headerVariants}
                className={cn("px-4 w-full flex items-center justify-between max-w-[840px]")}
            >
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center">
                        <Link aria-label="Home" aria-describedby="home" href="/">
                            <Logo />
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <CommandCenterButton />
                        <LightDarkSwitcher />
                    </div>
                </div>
                {/* {showProgressBarOnMobile ? (
                        <HeaderProgressBar css={{ "--progress": `${readingProgress * 100}%` }} />
                    ) : null} */}
            </motion.div>
        </header>
    )
}

export default PageHeader
