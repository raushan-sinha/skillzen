import Image from "next/image";
import { Clock3, PlayCircle, Star } from "lucide-react";

export default function TrendingCourses() {
    return (
        <section className="bg-gradient-to-b from-slate-50 via-blue-50/40 to-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <div className="mb-10 text-center sm:mb-12">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
                        Learn. Grow. Succeed.
                    </p>

                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Our{" "}
                        <span className="text-blue-600">Trending</span>{" "}
                        Courses
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                        Explore our most popular courses and build practical skills
                        that can help you grow your career.
                    </p>
                </div>

                {/* Course Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Card 1 */}
                    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                            <Image
                                src="/images/home/course1.jpg"
                                alt="Instagram Marketing"
                                fill
                                className="object-cover transition duration-500 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>

                        <div className="flex flex-1 flex-col p-5">
                            <div className="mb-3 flex items-center justify-between gap-3">
                                <h3 className="text-lg font-bold text-slate-900">
                                    Instagram Marketing
                                </h3>

                                <div className="flex shrink-0 items-center gap-1 text-sm font-semibold text-amber-500">
                                    <Star className="h-4 w-4 fill-current" />
                                    4.3
                                </div>
                            </div>

                            <p className="mb-5 line-clamp-3 text-sm leading-6 text-slate-600">
                                Instagram is one of the most trending and fastest
                                growing platforms. Learn the techniques of social
                                media marketing to reach potential customers.
                            </p>

                            <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                                <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                                    <span className="flex items-center gap-1.5">
                                        <Clock3 className="h-4 w-4" />
                                        21h 56m
                                    </span>

                                    <span className="flex items-center gap-1.5">
                                        <PlayCircle className="h-4 w-4" />
                                        9 lectures
                                    </span>
                                </div>

                                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 cursor-pointer">
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                            <Image
                                src="/images/home/course2.jpg"
                                alt="Canva"
                                fill
                                className="object-cover transition duration-500 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>

                        <div className="flex flex-1 flex-col p-5">
                            <div className="mb-3 flex items-center justify-between gap-3">
                                <h3 className="text-lg font-bold text-slate-900">
                                    Canva
                                </h3>

                                <div className="flex shrink-0 items-center gap-1 text-sm font-semibold text-amber-500">
                                    <Star className="h-4 w-4 fill-current" />
                                    4.3
                                </div>
                            </div>

                            <p className="mb-5 line-clamp-3 text-sm leading-6 text-slate-600">
                                Canva empowers everyone with creative tools and is
                                one of the most demanding design platforms. Learn
                                how to create effective presentations and designs.
                            </p>

                            <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                                <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                                    <span className="flex items-center gap-1.5">
                                        <Clock3 className="h-4 w-4" />
                                        21h 56m
                                    </span>

                                    <span className="flex items-center gap-1.5">
                                        <PlayCircle className="h-4 w-4" />
                                        15 lectures
                                    </span>
                                </div>

                                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 cursor-pointer">
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                            <Image
                                src="/images/home/course3.jpg"
                                alt="Communication Skills"
                                fill
                                className="object-cover transition duration-500 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>

                        <div className="flex flex-1 flex-col p-5">
                            <div className="mb-3 flex items-center justify-between gap-3">
                                <h3 className="text-lg font-bold text-slate-900">
                                    Communication Skills
                                </h3>

                                <div className="flex shrink-0 items-center gap-1 text-sm font-semibold text-amber-500">
                                    <Star className="h-4 w-4 fill-current" />
                                    4.3
                                </div>
                            </div>

                            <p className="mb-5 line-clamp-3 text-sm leading-6 text-slate-600">
                                Effective communication is a key to success. Develop
                                essential communication and soft skills for personal
                                growth, professional relationships, and development.
                            </p>

                            <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                                <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                                    <span className="flex items-center gap-1.5">
                                        <Clock3 className="h-4 w-4" />
                                        21h 56m
                                    </span>

                                    <span className="flex items-center gap-1.5">
                                        <PlayCircle className="h-4 w-4" />
                                        15 lectures
                                    </span>
                                </div>

                                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 cursor-pointer">
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                            <Image
                                src="/images/home/course4.jpg"
                                alt="Instagram Reels Mastery"
                                fill
                                className="object-cover transition duration-500 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>

                        <div className="flex flex-1 flex-col p-5">
                            <div className="mb-3 flex items-center justify-between gap-3">
                                <h3 className="text-lg font-bold text-slate-900">
                                    Instagram Reels Mastery
                                </h3>

                                <div className="flex shrink-0 items-center gap-1 text-sm font-semibold text-amber-500">
                                    <Star className="h-4 w-4 fill-current" />
                                    4.3
                                </div>
                            </div>

                            <p className="mb-5 line-clamp-3 text-sm leading-6 text-slate-600">
                                Learn Instagram algorithms, creative strategies, and
                                social media growth techniques to increase followers,
                                engagement, and reach.
                            </p>

                            <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                                <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                                    <span className="flex items-center gap-1.5">
                                        <Clock3 className="h-4 w-4" />
                                        21h 56m
                                    </span>

                                    <span className="flex items-center gap-1.5">
                                        <PlayCircle className="h-4 w-4" />
                                        18 lectures
                                    </span>
                                </div>

                                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 cursor-pointer">
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                            <Image
                                src="/images/home/course5.jpg"
                                alt="Adobe Premiere Pro"
                                fill
                                className="object-cover transition duration-500 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>

                        <div className="flex flex-1 flex-col p-5">
                            <div className="mb-3 flex items-center justify-between gap-3">
                                <h3 className="text-lg font-bold text-slate-900">
                                    Adobe Premiere Pro
                                </h3>

                                <div className="flex shrink-0 items-center gap-1 text-sm font-semibold text-amber-500">
                                    <Star className="h-4 w-4 fill-current" />
                                    4.3
                                </div>
                            </div>

                            <p className="mb-5 line-clamp-3 text-sm leading-6 text-slate-600">
                                Learn video editing, creative design techniques, and
                                professional editing workflows to create impactful
                                videos and reach a wider audience.
                            </p>

                            <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                                <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                                    <span className="flex items-center gap-1.5">
                                        <Clock3 className="h-4 w-4" />
                                        21h 56m
                                    </span>

                                    <span className="flex items-center gap-1.5">
                                        <PlayCircle className="h-4 w-4" />
                                        16 lectures
                                    </span>
                                </div>

                                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 cursor-pointer">
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                            <Image
                                src="/images/home/course6.jpg"
                                alt="Adobe Photoshop"
                                fill
                                className="object-cover transition duration-500 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        </div>

                        <div className="flex flex-1 flex-col p-5">
                            <div className="mb-3 flex items-center justify-between gap-3">
                                <h3 className="text-lg font-bold text-slate-900">
                                    Adobe Photoshop
                                </h3>

                                <div className="flex shrink-0 items-center gap-1 text-sm font-semibold text-amber-500">
                                    <Star className="h-4 w-4 fill-current" />
                                    4.3
                                </div>
                            </div>

                            <p className="mb-5 line-clamp-3 text-sm leading-6 text-slate-600">
                                Explore digital art, photography, and creative design
                                with Photoshop while building practical skills for
                                modern digital projects.
                            </p>

                            <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                                <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                                    <span className="flex items-center gap-1.5">
                                        <Clock3 className="h-4 w-4" />
                                        21h 56m
                                    </span>

                                    <span className="flex items-center gap-1.5">
                                        <PlayCircle className="h-4 w-4" />
                                        14 lectures
                                    </span>
                                </div>

                                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 cursor-pointer">
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}