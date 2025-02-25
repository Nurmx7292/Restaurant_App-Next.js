"use client"
import Link from "next/link";
import classes from "./NavLink.module.css"
import { usePathname } from "next/navigation";

const NavLink = ({href,children}) => {
    let link = usePathname()
    return ( 
        <Link href={href} className={link.startsWith(href)?`${classes.active} ${classes.link}`: classes.link}>{children}</Link>
     );
}
 
export default NavLink;