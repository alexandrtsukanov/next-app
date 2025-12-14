'use client';

import Link from "next/link";
import HeaderLogo from "../logos/header";
import { usePathname } from "next/navigation";

const NAVBAR_ITEMS: { href: string; label: string }[] = [
    { href: '/', label: 'Recipes' },
    { href: '/ingridients', label: 'Ingridients' },
    { href: '/about', label: 'About' },
]

export default function Header() {
    const pathname = usePathname();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link href="/" className="flex gap-1" >
                    <HeaderLogo />
                    <p className="navbar-brand">Tatar kitchen</p>
                </Link>

                {NAVBAR_ITEMS.map(({ href, label }) => {
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
            </div>
        </nav>
    )
}
