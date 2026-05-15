import React, { useState, useEffect, useRef } from 'react'
import logo from '../assets/aasra-logo.png'
import { Menu, X, Heart, ChevronDown } from 'lucide-react'

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
]

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeLink, setActiveLink] = useState('/')
    const menuRef = useRef(null)

    // Shrink navbar on scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Close menu on outside click
    useEffect(() => {
        const handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false)
            }
        }
        if (menuOpen) document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [menuOpen])

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=DM+Sans:wght@400;500;600&display=swap');

        .nav-root {
          font-family: 'DM Sans', sans-serif;
        }
        .nav-logo-font {
          font-family: 'Playfair Display', serif;
        }

        /* Pill nav link underline */
        .nav-link {
          position: relative;
          padding: 6px 0;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 2px;
          background: #efa968;
          border-radius: 99px;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        /* Mobile menu slide-in */
        .mobile-menu {
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-menu.open {
          transform: translateX(0);
        }

        /* Stagger links */
        .mobile-link {
          opacity: 0;
          transform: translateX(24px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .mobile-menu.open .mobile-link {
          opacity: 1;
          transform: translateX(0);
        }
        .mobile-menu.open .mobile-link:nth-child(1) { transition-delay: 0.08s }
        .mobile-menu.open .mobile-link:nth-child(2) { transition-delay: 0.14s }
        .mobile-menu.open .mobile-link:nth-child(3) { transition-delay: 0.20s }
        .mobile-menu.open .mobile-link:nth-child(4) { transition-delay: 0.26s }
        .mobile-menu.open .mobile-link:nth-child(5) { transition-delay: 0.32s }

        /* Donate pulse ring */
        .donate-btn {
          position: relative;
        }
        .donate-btn::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 99px;
          background: rgba(239,169,104,0.35);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .donate-btn:hover::before {
          opacity: 1;
        }

        /* Backdrop blur overlay */
        .menu-overlay {
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .menu-overlay.open {
          opacity: 1;
          pointer-events: all;
        }
      `}</style>

            {/* ── Backdrop overlay ─────────────────────────────────────────────── */}
            <div
                className={`menu-overlay fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(false)}
            />

            {/* ── Navbar Shell ─────────────────────────────────────────────────── */}
            <header
                className={`nav-root fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? 'py-2 bg-white/90 backdrop-blur-md shadow-md'
                        : 'py-4 bg-white'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">

                    {/* ── Logo ──────────────────────────────────────────────────────── */}
                    <a href="/" className="flex items-center gap-2.5 group" aria-label="AASRA Home">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300">
                            <img src={logo} alt="AASRA logo" className="w-14 h-14 object-contain" />
                        </div>
                        <div>
                            <p className="nav-logo-font text-slate-900 text-base font-semibold leading-tight tracking-tight">
                                AASRA
                            </p>
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest leading-none">
                                Foundation
                            </p>
                        </div>
                    </a>

                    {/* ── Desktop Nav Links ─────────────────────────────────────────── */}
                    <nav className="hidden lg:flex items-center gap-10 bg-gray-50 rounded-2xl px-2 py-2 border border-gray-100">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setActiveLink(link.href)}
                                className={`nav-link text-sm font-medium px-4 py-2 rounded-xl transition-all duration-300 ${activeLink === link.href
                                        ? 'text-slate-900 shadow-sm '
                                        : 'text-slate-500 hover:text-slate-900 hover:bg-white/60'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* ── Desktop CTA ───────────────────────────────────────────────── */}
                    <div className="hidden lg:flex items-center gap-3">
                        <a
                            href="/volunteer"
                            className="text-sm font-medium text-slate-600 hover:text-[#efa968] transition-colors duration-300"
                        >
                            Volunteer
                        </a>
                        <button className="donate-btn flex items-center gap-2 bg-[#efa968] hover:bg-[#e09050] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md">
                            <Heart size={14} fill="white" />
                            Donate Now
                        </button>
                    </div>

                    {/* ── Mobile Hamburger ─────────────────────────────────────────── */}
                    <button
                        className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 hover:bg-[#efa968]/10 transition-colors duration-300"
                        onClick={() => setMenuOpen((p) => !p)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <span className={`absolute transition-all duration-300 ${menuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}>
                            <X size={20} className="text-slate-800" />
                        </span>
                        <span className={`absolute transition-all duration-300 ${menuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`}>
                            <Menu size={20} className="text-slate-800" />
                        </span>
                    </button>
                </div>
            </header>

            {/* ── Mobile Slide-in Menu ──────────────────────────────────────────── */}
            <div
                ref={menuRef}
                className={`mobile-menu lg:hidden fixed top-0 right-0 bottom-0 z-50 w-72 bg-white flex flex-col shadow-2xl ${menuOpen ? 'open' : ''}`}
            >
                {/* Header strip */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                    <div>
                        <p className="nav-logo-font text-slate-900 font-semibold">AASRA</p>
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest">Foundation</p>
                    </div>
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-red-50 hover:text-red-500 transition-colors duration-200"
                    >
                        <X size={16} />
                    </button>
                </div>

                {/* Links */}
                <nav className="flex flex-col gap-1 px-4 py-6 flex-1 overflow-y-auto">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => { setActiveLink(link.href); setMenuOpen(false) }}
                            className={`mobile-link flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${activeLink === link.href
                                    ? 'bg-[#efa968]/10 text-[#efa968]'
                                    : 'text-slate-700 hover:bg-gray-50 hover:text-slate-900'
                                }`}
                        >
                            {link.label}
                            {activeLink === link.href && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#efa968]" />
                            )}
                        </a>
                    ))}

                    <a
                        href="/volunteer"
                        className="mobile-link flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-gray-50 hover:text-slate-900 transition-all duration-200"
                    >
                        Volunteer
                    </a>
                </nav>

                {/* Bottom CTA */}
                <div className="px-4 pb-8 mobile-link">
                    <button className="donate-btn w-full flex items-center justify-center gap-2 bg-[#efa968] hover:bg-[#e09050] text-white text-sm font-semibold px-5 py-3.5 rounded-2xl transition-all duration-300 shadow-sm">
                        <Heart size={15} fill="white" />
                        Donate Now
                    </button>
                    <p className="text-center text-xs text-slate-400 mt-3">
                        बे-सहारों का सहारा है, आसरा।
                    </p>
                </div>
            </div>

            {/* ── Spacer so page content clears fixed navbar ──────────────────── */}
            <div className="h-[68px]" />
        </>
    )
}

export default Navbar