import Image from "next/image"

import logo from "@/assets/images/logo.png"

type LogoProps = {
    className?: string
}
const Logo = ({ className }: LogoProps) => {
    return <Image src={logo} width={40} height={40} alt="hungdoan.xyz" className={className} />
}

export default Logo
