'use client';

import Link from "next/link";
import HeaderLogo from "../logos/header";
import { usePathname } from "next/navigation";
import config from "@/config";

export default function Header() {
    const pathname = usePathname();

    const getNavbarItems = () => {
        return (
            <>
                {config.navbarItems.map(({ href, label }) => {
                    const isActive = pathname === href;

                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`navbar-brand ${isActive ? 'text-primary' : ''}`}
                        >
                            {label}
                        </Link>
                    )
                })}
            </>
        )
    }

    const getNavbarButtons = () => {
        return (
            <>
                {config.navbarButtons.map(({ label, className }) => {
                    return (
                        <button key={label} className={className}>
                            {label}
                        </button>
                    )
                })}
            </> 
        )
    }

    return (
        <nav className={`navbar navbar-expand-lg bg-body-tertiary h-${config.headerHeight}`}>
            <div className="container-fluid">
                <Link href="/" className="flex gap-1" >
                    <HeaderLogo />
                    <p className="navbar-brand">{config.title}</p>
                </Link>

                {getNavbarItems()}

                <div className="flex gap-4">
                    {getNavbarButtons()}
                </div>
            </div>
        </nav>
    )
}
