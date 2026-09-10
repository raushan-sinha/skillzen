import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="min-h-screen relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-10">
            <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-16">

                {/* CONTENT */}
                <div className="w-full max-w-2xl text-center lg:w-[52%] lg:text-left">

                    {/* Small Badge */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-cyan-400 bg-cyan-400/5 px-4 py-2 text-sm font-bold text-cyan-400">
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                        Learn. Build. Grow.
                    </div>

                    {/* Heading */}
                    <h1 className="font-sans text-4xl font-extrabold leading-[1.1] tracking-tight text-black sm:text-5xl lg:text-6xl xl:text-7xl">
                        Empower Your Future with{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                            Industry-Ready Skills
                        </span>
                    </h1>

                    {/* Paragraph */}
                    <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:mx-0">
                        Join the next-generation learning platform designed to
                        elevate your career. Explore expertly curated courses
                        that align with today&apos;s job market, and transform
                        your potential into success.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                        <Link
                            href="/courses"
                            className="w-full rounded-xl bg-cyan-400 px-7 py-3.5 text-center text-sm font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-cyan-400/30 sm:w-auto"
                        >
                            Explore Courses
                        </Link>

                        <Link
                            href="/about"
                            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 text-center text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-800 sm:w-auto"
                        >
                            Learn More
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-0 lg:justify-start">

                        {/* Learners */}
                        <div className="px-5 text-center sm:text-left">
                            <h3 className="text-2xl font-bold text-black sm:text-3xl">
                                14 Lakhs+
                            </h3>
                            <p className="mt-1 text-sm text-slate-500">
                                Learners Enrolled
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="hidden h-12 w-px bg-slate-800 sm:block" />

                        {/* Courses */}
                        <div className="px-5 text-center sm:text-left">
                            <h3 className="text-2xl font-bold text-black sm:text-3xl">
                                50+
                            </h3>
                            <p className="mt-1 text-sm text-slate-500">
                                Courses
                            </p>
                        </div>
                    </div>
                </div>

                {/* HERO IMAGE */}
                <div className="flex w-full items-center justify-center lg:w-[48%] lg:justify-end">
                    <div className="relative w-full max-w-[420px] sm:max-w-[500px] lg:max-w-[560px] xl:max-w-[620px]">

                        {/* Image Glow */}
                        <div className="absolute inset-10 rounded-full bg-cyan-400/10 blur-3xl" />

                        {/* Image */}
                        <div className="relative">
                            <Image
                                src="/HeroImage.png"
                                alt="SkillZen online learning platform"
                                width={620}
                                height={520}
                                priority
                                className="h-auto w-full object-contain"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}