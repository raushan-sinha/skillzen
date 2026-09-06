import { NavbarLinks } from "@/data/navbarLinkData.data";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl">
            <nav className="mx-auto flex h-[72px] max-w-7xl items-center px-4 sm:px-6 lg:px-8">

                {/* Logo */}
                <Link
                    href="#"
                    className="shrink-0 text-2xl font-bold tracking-tight text-white"
                >
                    Skill<span className="text-cyan-400">Zen</span>
                </Link>

                {/* Navigation Links */}
                <div className="ml-auto hidden items-center gap-6 lg:flex xl:gap-8">
                    {NavbarLinks.map((link) => (
                        <Link
                            key={link.id}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Auth Buttons */}
                <div className="ml-8 hidden items-center gap-2.5 lg:flex">
                    <Link
                        href="#"
                        className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
                    >
                        Login
                    </Link>

                    <Link
                        href="#"
                        className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/10 transition-all hover:bg-cyan-300"
                    >
                        Sign Up
                    </Link>
                </div>

            </nav>
        </header>
    );
}