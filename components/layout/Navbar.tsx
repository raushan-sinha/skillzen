import { NavbarLinksData } from "@/data/navbarLinkData.data";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">

                {/* Logo */}
                <Link
                    href="#"
                    className="text-2xl font-bold tracking-tight text-white"
                >
                    Skill<span className="text-cyan-400">Zen</span>
                </Link>

                {/* Navigation Links */}
                {NavbarLinksData.map((link) => (
                    <div className="hidden items-center gap-8 md:flex" key={link.id}>
                        <Link
                            href={link.href}
                            className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
                        >
                            {link.name}
                        </Link>
                    </div>
                ))}

                {/* Buttons */}
                <div className="flex items-center gap-3">
                    <Link
                        href="#"
                        className="hidden rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white sm:block"
                    >
                        Sign In
                    </Link>

                    <Link
                        href="#"
                        className="rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
                    >
                        Get Started
                    </Link>
                </div>
            </nav>
        </header>
    );
}