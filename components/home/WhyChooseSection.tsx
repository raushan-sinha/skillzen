import { whyChooseData } from "@/data/whyChooseData.data";
import Image from "next/image";

export default function WhyChooseSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <span className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black">
                        Why SkillZen
                    </span>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
                        Why Learners Choose{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                            SkillZen
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                        Learn what matters, build practical skills, and get the
                        guidance you need to turn your ambitions into real
                        opportunities.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:gap-6">
                    {/* Card */}
                    {whyChooseData.map((item) => (
                        <article key={item.id} className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-slate-900 sm:p-7 lg:p-8">
                            <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/5 p-3 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                                    <Image
                                        src={item.image}
                                        alt={item.heading}
                                        width={40}
                                        height={40}
                                        className="h-10 w-10 object-contain"
                                    />
                                </div>

                                <div className="mt-5 sm:ml-5 sm:mt-0">
                                    <h3 className="text-lg font-bold leading-7 text-white sm:text-xl">
                                        {item.heading}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-slate-400">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}