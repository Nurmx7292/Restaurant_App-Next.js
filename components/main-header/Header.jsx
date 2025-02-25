import logoImg from "@/assets/logo.png"
import HeaderBackground from "./headerBackground"
import Image from "next/image"
import Link from "next/link"
import classes from "./main-header.module.css"
import NavLink from "../NavLink/NavLink"

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
                    <li><NavLink href="/meals">Meals</NavLink></li>
                    <li><NavLink href="/community">Community</NavLink></li>
                </ul>
            </nav>
        </header>
    </>
  )
}
