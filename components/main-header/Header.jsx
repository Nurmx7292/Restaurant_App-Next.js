import logoImg from "@/assets/logo.png"
import HeaderBackground from "./headerBackground"
import Image from "next/image"
import Link from "next/link"
import classes from "./main-header.module.css"

export default function Header(){
    return (
    <>
        <HeaderBackground/>
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
                <Image src={logoImg} alt="#" priority/>
                NextBite Foods
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li><Link href="/meals" >Meals</Link></li>
                    <li><Link href="/community">Community</Link></li>
                </ul>
            </nav>
        </header>
    </>
  )
}
