import { MenuIcon, X } from "lucide-react";
import Link from "next/link";

export default function MobileNavbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-xl">
            <nav className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-white"
                >
                    Skill<span className="text-cyan-400">Zen</span>
                </Link>

                {/* Menu Icon - UI Only */}
                <button
                    type="button"
                    aria-label="Open menu"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-200 transition-colors duration-200 hover:border-cyan-400/40 hover:bg-slate-800 hover:text-cyan-400"
                >
                    <MenuIcon />
                    <X />
                </button>

            </nav>
        </header>
    )
}