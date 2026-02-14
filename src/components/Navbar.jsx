import { useState, useEffect, useCallback } from 'react';
import { useScrollProgress } from '../hooks/useAnimations';

const navLinks = [
    { label: 'HOME', href: '#home', emoji: '✧' },
    { label: 'ABOUT', href: '#about', emoji: '☺' },
    { label: 'PROJECT', href: '#projects', emoji: '◈' },
    { label: 'CONTACT', href: '#contact', emoji: '✉' },
];

const SECTION_MARKERS = [
    { id: 'home', label: 'Home', color: '#6B8DAE' },
    { id: 'about', label: 'About', color: '#5B9A8B' },
    { id: 'projects', label: 'Projects', color: '#E07A5F' },
    { id: 'contact', label: 'Contact', color: '#8B7EC8' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [sectionPositions, setSectionPositions] = useState([]);
    const progress = useScrollProgress();

    // Calculate section positions as percentages of total scrollable height
    const calcPositions = useCallback(() => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight <= 0) return;
        const positions = SECTION_MARKERS.map(s => {
            const el = document.getElementById(s.id);
            if (!el) return 0;
            return Math.min(el.offsetTop / docHeight, 1);
        });
        setSectionPositions(positions);
    }, []);

    // Track scroll position to highlight active nav link
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Determine active section
            const sections = ['contact', 'projects', 'about', 'home'];
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        calcPositions();
        window.addEventListener('resize', calcPositions);
        // Recalculate after images load
        window.addEventListener('load', calcPositions);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', calcPositions);
            window.removeEventListener('load', calcPositions);
        };
    }, [calcPositions]);

    // Recalculate once content settles
    useEffect(() => {
        const timer = setTimeout(calcPositions, 1000);
        return () => clearTimeout(timer);
    }, [calcPositions]);

    // Lock body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const activeIdx = SECTION_MARKERS.findIndex(s => s.id === activeSection);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cream-50/90 backdrop-blur-xl shadow-sm py-3' : 'py-5'
                }`}>
                {/* Scroll progress bar with rocket + section markers */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] overflow-visible">
                    <div className="h-full scroll-progress" style={{ width: `${progress * 100}%` }} />

                    {/* Section marker dots — hidden on mobile to prevent overflow */}
                    {SECTION_MARKERS.map((marker, i) => {
                        const rawPos = sectionPositions[i] ?? (i / (SECTION_MARKERS.length - 1));
                        // Remap to 2%-98% range so edge markers aren't clipped
                        const pos = 2 + rawPos * 96;
                        const isActive = marker.id === activeSection;
                        const isPast = i <= activeIdx;
                        return (
                            <div
                                key={marker.id}
                                className="absolute -top-[5px] group cursor-pointer hidden md:block"
                                style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
                                onClick={() => {
                                    const el = document.getElementById(marker.id);
                                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                {/* Dot */}
                                <div
                                    className={`rounded-full border-2 transition-all duration-500 ${isActive ? 'w-[11px] h-[11px]' : 'w-[7px] h-[7px]'
                                        }`}
                                    style={{
                                        background: isPast ? marker.color : '#D6D0C8',
                                        borderColor: isPast ? marker.color : '#D6D0C8',
                                        boxShadow: isActive ? `0 0 8px ${marker.color}80` : 'none',
                                    }}
                                />
                                {/* Pulse on active */}
                                {isActive && (
                                    <div
                                        className="absolute inset-0 rounded-full animate-ping opacity-30"
                                        style={{ background: marker.color }}
                                    />
                                )}
                                {/* Label — shown on hover or active */}
                                <div className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0'
                                    }`}>
                                    <span
                                        className="px-2 py-0.5 rounded-full text-[0.45rem] font-mono tracking-[0.15em] uppercase font-bold shadow-md border"
                                        style={{
                                            background: isActive ? marker.color : 'rgba(255,255,255,0.9)',
                                            color: isActive ? '#fff' : '#706A62',
                                            borderColor: isActive ? marker.color : 'rgba(0,0,0,0.08)',
                                        }}
                                    >
                                        {marker.label}
                                    </span>
                                </div>
                            </div>
                        );
                    })}

                    {/* Rocket indicator */}
                    <div
                        className="absolute -top-[13px] transition-all duration-200 ease-out"
                        style={{ left: `calc(${progress * 100}% - 12px)` }}
                    >
                        {/* Glow trail */}
                        <div className="absolute top-1/2 -translate-y-1/2 -left-6 w-8 h-4 rounded-full opacity-40 blur-sm"
                            style={{ background: 'linear-gradient(90deg, transparent, #6B8DAE, #5B9A8B)' }} />
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="drop-shadow-md" style={{ filter: 'drop-shadow(0 0 4px rgba(107,141,174,0.5))' }}>
                            {/* Rocket body — facing right */}
                            <path d="M4 12c0 0 2-6 8-8c6-2 8-1 8-1s1 2-1 8c-2 6-8 8-8 8l-3-3l-1-1l-3-3z" fill="#E07A5F" />
                            <path d="M20 3c0 0 1 2-1 8l-2-5l3-3z" fill="#D4A574" />
                            {/* Window */}
                            <circle cx="14" cy="10" r="2" fill="#FDFBF7" />
                            {/* Flames — shooting left */}
                            <path d="M4 12L1 10L3 12L0 12L3 13L1 15L4 12Z" fill="#D4A03C" opacity="0.9" />
                            <path d="M7 17L5 19L6 17L3 18L6 16Z" fill="#D4A03C" opacity="0.8" />
                            <path d="M7 7L5 5L6 7L3 6L6 8Z" fill="#D4A03C" opacity="0.8" />
                        </svg>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    <a href="#home" className="font-sketch text-2xl text-ink-500 hover:text-accent-coral transition-colors group">
                        <span className="inline-block group-hover:animate-wiggle-fast text-accent-coral">✦</span>{' '}
                        <span className="bg-gradient-to-r from-accent-blue via-accent-lavender to-accent-coral bg-clip-text text-transparent font-bold">adhiyasa</span>
                    </a>

                    {/* Desktop nav */}
                    <ul className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const sectionId = link.href.replace('#', '');
                            const isActive = activeSection === sectionId;
                            return (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className={`relative px-4 py-2 text-xs tracking-[0.2em] font-heading font-medium transition-all duration-300 group rounded-full ${isActive
                                            ? 'bg-gradient-to-r from-ink-600 to-ink-500 text-cream-50 shadow-lg shadow-accent-blue/10'
                                            : 'text-ink-400 hover:text-ink-600'
                                            }`}
                                    >
                                        <span className="mr-1.5 opacity-60 group-hover:opacity-100 transition-opacity">{link.emoji}</span>
                                        {link.label}
                                        {!isActive && (
                                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-coral group-hover:w-3/4 transition-all duration-300 rounded-full" />
                                        )}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>

            {/* Mobile hamburger — completely outside nav to avoid z-index issues */}
            <button
                className="md:hidden fixed top-[16px] right-[20px] z-[60] flex flex-col gap-[6px] p-2 rounded-lg bg-cream-50/90 backdrop-blur-sm shadow-sm border border-ink-100/30"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle Menu"
            >
                <span className={`block w-[20px] h-[2px] transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[8px] bg-accent-coral' : 'bg-ink-500'}`} />
                <span className={`block w-[20px] h-[2px] transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-0' : 'bg-ink-500'}`} />
                <span className={`block w-[20px] h-[2px] transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[8px] bg-accent-coral' : 'bg-ink-500'}`} />
            </button>

            {/* Mobile fullscreen menu — outside nav, highest z-index */}
            <div className={`fixed inset-0 z-[55] bg-cream-50 flex flex-col items-center justify-center transition-all duration-500 md:hidden ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}>
                {/* Decorative elements in mobile menu */}
                <span className="absolute top-20 left-8 text-accent-coral/20 text-3xl animate-float">✦</span>
                <span className="absolute bottom-20 right-8 text-accent-blue/20 text-2xl animate-wiggle">✧</span>
                <div className="absolute top-1/4 right-12 w-16 h-16 rounded-full bg-accent-teal/5 blur-xl" />
                <div className="absolute bottom-1/3 left-12 w-20 h-20 rounded-full bg-accent-lavender/5 blur-xl" />

                <ul className="flex flex-col items-center gap-6">
                    {navLinks.map((link, i) => {
                        const sectionId = link.href.replace('#', '');
                        const isActive = activeSection === sectionId;
                        return (
                            <li
                                key={link.href}
                                className={`transition-all duration-500 ${mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                                style={{ transitionDelay: mobileOpen ? `${i * 80 + 100}ms` : '0ms' }}
                            >
                                <a
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`font-heading text-2xl transition-colors duration-300 flex items-center gap-3 px-6 py-2 rounded-2xl ${isActive
                                        ? 'text-cream-50 bg-gradient-to-r from-ink-600 to-ink-500 shadow-lg'
                                        : 'text-ink-500 hover:text-accent-blue'
                                        }`}
                                >
                                    <span className={isActive ? 'text-accent-coral' : 'text-accent-coral/50'}>{link.emoji}</span>
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile brand footer */}
                <div className="absolute bottom-10 font-sketch text-sm text-ink-200">
                    <span className="text-accent-coral">✦</span> adhiyasa.site
                </div>
            </div>
        </>
    );
}
