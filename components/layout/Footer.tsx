import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
            <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link
                            href="/"
                            className="inline-block text-2xl font-bold tracking-tight text-white"
                        >
                            Skill<span className="text-cyan-400">Zen</span>
                        </Link>

                        <p className="mt-4 max-w-md text-sm leading-6 text-slate-400">
                            SkillZen is an online learning platform designed to
                            help you build practical skills through high-quality
                            courses and resources.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Quick Links
                        </h3>

                        <ul className="mt-5 space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/courses"
                                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                                >
                                    Courses
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support & Policy */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                            Support & Policy
                        </h3>

                        <ul className="mt-5 space-y-3">
                            <li>
                                <Link
                                    href="/help"
                                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                                >
                                    Help Center
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                                >
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/terms"
                                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/refund"
                                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                                >
                                    Refund Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 flex flex-col gap-4 border-t border-slate-800 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
                    <p className="text-xs text-slate-500">
                        © {new Date().getFullYear()} SkillZen. All rights reserved.
                    </p>

                    <p className="text-xs text-slate-500">
                        Learn. Build. Grow.
                    </p>
                </div>
            </div>
        </footer>
    )
}