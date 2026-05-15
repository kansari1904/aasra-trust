import React from 'react'
import { ArrowUpRight, Play, Heart, Users } from 'lucide-react'

// ── Placeholder image URLs (swap with your real assets) ──────────────────────
const IMG_CHILD_AFRICA =
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80'
const IMG_ORPHAN_KENYA =
    'https://images.unsplash.com/photo-1594708767771-a5b67c4db1f2?w=400&q=80'
const IMG_HANDS =
    'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&q=80'

const Main = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-16 py-10 max-w-7xl mx-auto">

            {/* ── Hero Text ─────────────────────────────────────────────────────── */}
            <div className="flex flex-col items-center text-center mb-10">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
                    AASRA Foundation <br />
                    <span className="text-[#efa968]">Baghaura</span>
                </h1>
                <p className="text-slate-500 mt-4 text-lg max-w-xl">
                    बे-सहारों का सहारा है, आसरा।
                </p>
                <p className="text-slate-500 mt-4 text-center max-w-2xl">
                    AASRA Foundation Baghaura is a non-profit organization dedicated to providing support and assistance to those in need. We are committed to making a positive impact on the lives of individuals and communities through various initiatives and programs.
                </p>
                
            

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3 mt-6 justify-center">
                    <button className="bg-slate-900 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-slate-700 transition-all duration-300">
                        Donate Now
                    </button>
                    <button className="flex items-center gap-2 bg-gray-100 text-slate-800 px-6 py-3 rounded-full text-base font-medium hover:bg-gray-200 transition-all duration-300">
                        <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow">
                            <Play size={12} fill="currentColor" />
                        </span>
                        Watch Video
                    </button>
                </div>
            </div>

            {/* ── Bento Grid ────────────────────────────────────────────────────── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 grid-rows-[auto] gap-3">

                {/* Card 1 — Stat (dark green) */}
                <div className="bg-[#1a3a2a] text-white rounded-3xl p-5 flex flex-col justify-between row-span-2 min-h-[240px]">
                    <div>
                        <p className="text-5xl font-bold text-[#a8e6cf]">65%</p>
                        <p className="text-sm mt-3 text-gray-300 leading-snug">
                            17 Thousand People Died, Thousands Injured, Houses and Buildings
                            Destroyed. Turkey–Syria Crises.
                        </p>
                    </div>
                    <button className="mt-4 self-start bg-[#efa968] text-white text-sm px-4 py-2 rounded-full hover:bg-[#e09050] transition-all duration-300">
                        Donate now
                    </button>
                </div>

                {/* Card 2 — Child Africa image (tall) */}
                <div className="relative rounded-3xl overflow-hidden row-span-2 min-h-[240px]">
                    <img
                        src={IMG_CHILD_AFRICA}
                        alt="Child in South Africa"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        Health
                    </span>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-sm font-semibold leading-snug">
                            Lifeskills for 2,587 Children in South Africa
                        </p>
                    </div>
                </div>

                {/* Card 3 — Join Community (light) */}
                <div className="bg-gray-100 rounded-3xl p-5 flex flex-col justify-between min-h-[110px]">
                    <p className="text-slate-800 font-bold text-lg leading-tight">
                        Join 5000+ <br /> People Donate
                    </p>
                    <button className="self-start flex items-center gap-1 bg-slate-900 text-white text-sm px-4 py-2 rounded-full mt-3 hover:bg-slate-700 transition-all duration-300">
                        Join community
                        <ArrowUpRight size={14} />
                    </button>
                </div>

                {/* Card 4 — Hands image (top right, short) */}
                <div className="relative rounded-3xl overflow-hidden min-h-[110px]">
                    <img
                        src={IMG_HANDS}
                        alt="Helping hands"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <button className="absolute bottom-3 right-3 bg-[#efa968] text-white rounded-full p-2 hover:bg-[#e09050] transition-all duration-300">
                        <ArrowUpRight size={16} />
                    </button>
                </div>

                {/* Card 5 — "Let them be heard" (black) */}
                <div className="bg-slate-900 text-white rounded-3xl p-4 flex items-center gap-3 min-h-[100px]">
                    <span className="w-10 h-10 rounded-full bg-[#efa968] flex items-center justify-center shrink-0 text-lg">
                        🕊️
                    </span>
                    <p className="text-sm font-semibold leading-snug">
                        Let them be heard
                    </p>
                </div>

                {/* Card 6 — Orphan Kenya image */}
                <div className="relative rounded-3xl overflow-hidden min-h-[120px]">
                    <img
                        src={IMG_ORPHAN_KENYA}
                        alt="Orphan child Kenya"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                        Education
                    </span>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-sm font-semibold leading-snug">
                            Sponsor food, education to Orphans Kenya
                        </p>
                    </div>
                </div>

                {/* Card 7 — Your home for help (green accent) */}
                <div className="bg-[#c8f59a] rounded-3xl p-5 flex flex-col justify-between min-h-[120px]">
                    <div className="flex items-center gap-2">
                        <Heart size={18} className="text-[#1a3a2a]" fill="#1a3a2a" />
                        <p className="text-[#1a3a2a] font-bold text-sm leading-snug">
                            Your home for help
                        </p>
                    </div>
                    <button className="self-end bg-[#1a3a2a] text-white rounded-full p-2 hover:bg-[#2a5a3a] transition-all duration-300">
                        <ArrowUpRight size={16} />
                    </button>
                </div>

            </div>

            {/* ── Stats Row ─────────────────────────────────────────────────────── */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {[
                    { value: '5,000+', label: 'Donors Worldwide' },
                    { value: '₹12L+', label: 'Funds Raised' },
                    { value: '200+', label: 'Families Helped' },
                    { value: '10+', label: 'Active Programs' },
                ].map((stat) => (
                    <div key={stat.label} className="bg-gray-50 rounded-2xl py-5 px-3">
                        <p className="text-2xl font-bold text-[#efa968]">{stat.value}</p>
                        <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Main