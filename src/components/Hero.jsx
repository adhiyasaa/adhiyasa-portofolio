import { useEffect, useState } from 'react';
import { useMousePosition } from '../hooks/useAnimations';
import myselfImg from '../assets/myself.jpeg';

export default function Hero() {
    const mouse = useMousePosition();
    const [typed, setTyped] = useState('');
    const fullText = 'Fullstack Developer & UI/UX Designer';

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i <= fullText.length) {
                setTyped(fullText.slice(0, i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 60);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16" style={{ background: 'linear-gradient(135deg, #FDFBF7 0%, #F0F4FA 35%, #FDFBF7 50%, #FBF3EE 75%, #FDFBF7 100%)' }}>
            {/* === BACKGROUND LAYERS === */}

            {/* Gradient blobs */}
            <div className="absolute top-16 right-0 w-80 h-80 rounded-full bg-accent-blue/5 blur-3xl animate-float" />
            <div className="absolute bottom-16 left-0 w-72 h-72 rounded-full bg-accent-coral/5 blur-3xl animate-float-delayed" />
            <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-accent-lavender/5 blur-2xl animate-float-slow" />
            <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-accent-teal/4 blur-2xl animate-float-reverse" />
            <div className="absolute top-1/3 right-1/3 w-52 h-52 morph-blob opacity-30" />
            <div className="absolute bottom-[15%] left-[15%] w-32 h-32 rounded-full bg-accent-gold/4 blur-2xl animate-float" />

            {/* Dot grid */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: 'radial-gradient(circle, #3D3832 1px, transparent 1px)',
                backgroundSize: '28px 28px'
            }} />

            {/* === CARTOON DOODLE ICONS === */}

            {/* 🚀 Rocket — REMOVED to prevent overlap */}

            {/* ☕ Coffee cup — right side with steam curls */}
            <div className="absolute top-[22%] right-[4%] animate-float-delayed select-none opacity-50 md:opacity-100 block" style={{ animationDelay: '0.8s' }}>
                <svg width="44" height="56" viewBox="0 0 50 64" fill="none" className="opacity-25">
                    <rect x="8" y="24" width="26" height="28" rx="4" fill="#E07A5F" opacity="0.6" />
                    <path d="M34 30c6 0 10 4 10 8s-4 8-10 8" stroke="#E07A5F" strokeWidth="2.5" fill="none" opacity="0.4" />
                    <rect x="12" y="48" width="18" height="4" rx="2" fill="#E07A5F" opacity="0.3" />
                    {/* Steam curls */}
                    <path d="M16 20c0-4 4-4 4-8" stroke="#8B7EC8" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3" className="animate-float-slow" />
                    <path d="M22 18c0-4 4-4 4-8" stroke="#6B8DAE" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.25" className="animate-float" />
                    <path d="M28 21c0-3 3-3 3-6" stroke="#5B9A8B" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.2" className="animate-float-delayed" />
                </svg>
            </div>

            {/* 💡 Lightbulb — REMOVED to prevent overlap */}

            {/* 🎨 Paint palette — bottom right */}
            <div className="absolute bottom-[20%] right-[6%] animate-wiggle select-none opacity-50 md:opacity-100 block" style={{ animationDelay: '0.6s' }}>
                <svg width="50" height="42" viewBox="0 0 56 48" fill="none" className="opacity-25">
                    <ellipse cx="28" cy="26" rx="26" ry="20" fill="#E07A5F" opacity="0.15" />
                    <path d="M28 6c-14 0-26 9-26 20s12 16 22 16c3 0 4-2 4-4s-1-3-1-4c0-2 1-3 3-3h5c8 0 14-5 14-12C49 11 40 6 28 6z" fill="#FAF6EE" stroke="#3D3832" strokeWidth="1.5" opacity="0.5" />
                    <circle cx="16" cy="20" r="4" fill="#E07A5F" opacity="0.7" />
                    <circle cx="24" cy="14" r="3.5" fill="#6B8DAE" opacity="0.7" />
                    <circle cx="34" cy="14" r="3" fill="#D4A03C" opacity="0.7" />
                    <circle cx="40" cy="20" r="3.5" fill="#5B9A8B" opacity="0.7" />
                    <circle cx="38" cy="30" r="3" fill="#8B7EC8" opacity="0.6" />
                </svg>
            </div>

            {/* ✈️ Paper airplane — REMOVED to prevent overlap */}

            {/* ☁️ Puffy cloud — top center */}
            <div className="absolute top-[8%] left-[35%] animate-float select-none hidden lg:block" style={{ animationDelay: '1.5s' }}>
                <svg width="64" height="36" viewBox="0 0 80 44" fill="none" className="opacity-[0.12]">
                    <circle cx="26" cy="28" r="16" fill="#6B8DAE" />
                    <circle cx="44" cy="20" r="18" fill="#6B8DAE" />
                    <circle cx="60" cy="28" r="14" fill="#6B8DAE" />
                    <circle cx="36" cy="14" r="12" fill="#6B8DAE" />
                    <rect x="10" y="28" width="64" height="14" fill="#6B8DAE" />
                </svg>
            </div>

            {/* 🎧 Headphones — REMOVED to prevent overlap */}

            {/* ✏️ Pencil — right middle area, drawing a wavy line */}
            <div className="absolute top-[60%] right-[12%] animate-wiggle select-none hidden lg:block" style={{ animationDelay: '0.4s' }}>
                <svg width="52" height="28" viewBox="0 0 70 32" fill="none" className="opacity-20">
                    {/* Wavy line being drawn */}
                    <path d="M4 20c8-12 16 8 24-4s12 8 18 0" stroke="#5B9A8B" strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="4 3" />
                    {/* Pencil body */}
                    <rect x="44" y="6" width="24" height="8" rx="1" fill="#D4A03C" opacity="0.6" transform="rotate(15 56 10)" />
                    <polygon points="44,12 40,16 44,18" fill="#E07A5F" opacity="0.5" transform="rotate(15 42 15)" />
                    <rect x="62" y="7" width="6" height="6" rx="1" fill="#E07A5F" opacity="0.3" transform="rotate(15 65 10)" />
                </svg>
            </div>

            {/* 🌟 Big star with face (kawaii) — near card */}
            <div className="absolute top-[40%] right-[38%] animate-wiggle select-none hidden lg:block" style={{ animationDelay: '1.8s' }}>
                <svg width="28" height="28" viewBox="0 0 40 40" fill="none" className="opacity-[0.15]">
                    <polygon points="20,2 25,15 38,15 27,23 31,36 20,28 9,36 13,23 2,15 15,15" fill="#D4A03C" />
                    <circle cx="16" cy="18" r="1.5" fill="#3D3832" />
                    <circle cx="24" cy="18" r="1.5" fill="#3D3832" />
                    <path d="M17 23c1.5 2 4.5 2 6 0" stroke="#3D3832" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                </svg>
            </div>

            {/* 🎮 Game controller — bottom area */}
            <div className="absolute bottom-[14%] left-[30%] animate-float-delayed select-none hidden lg:block" style={{ animationDelay: '2.5s' }}>
                <svg width="44" height="28" viewBox="0 0 56 36" fill="none" className="opacity-[0.15]">
                    <path d="M8 10c-4 0-8 4-8 10s6 14 12 14c4 0 6-4 8-8h16c2 4 4 8 8 8c6 0 12-8 12-14s-4-10-8-10z" fill="#5B9A8B" opacity="0.5" />
                    <rect x="13" y="14" width="2" height="8" rx="1" fill="#FDFBF7" opacity="0.5" />
                    <rect x="10" y="17" width="8" height="2" rx="1" fill="#FDFBF7" opacity="0.5" />
                    <circle cx="40" cy="14" r="2" fill="#FDFBF7" opacity="0.4" />
                    <circle cx="44" cy="18" r="2" fill="#FDFBF7" opacity="0.4" />
                    <circle cx="36" cy="18" r="2" fill="#FDFBF7" opacity="0.3" />
                    <circle cx="40" cy="22" r="2" fill="#FDFBF7" opacity="0.3" />
                </svg>
            </div>

            {/* === SCATTERED SPARKLES & SHAPES === */}
            <span className="absolute top-24 left-[12%] text-accent-coral/40 text-2xl animate-wiggle select-none">✦</span>
            <span className="absolute top-[35%] right-[8%] text-accent-lavender/30 text-lg animate-float select-none">✧</span>
            <span className="absolute bottom-[25%] left-[8%] text-accent-teal/25 text-sm animate-bounce-subtle select-none">◆</span>
            <span className="absolute top-[55%] left-[5%] text-accent-gold/25 text-xl animate-float-delayed select-none">★</span>
            <span className="absolute bottom-[35%] right-[5%] text-accent-blue/20 text-sm animate-float-reverse select-none">◇</span>
            <span className="absolute top-[18%] right-[22%] text-accent-coral/15 text-xs animate-wiggle select-none">✦</span>
            <span className="absolute bottom-[42%] left-[18%] text-accent-blue/15 text-sm animate-float-slow select-none">✧</span>
            <span className="absolute top-[68%] right-[15%] text-accent-teal/15 text-lg animate-bounce-subtle select-none" style={{ animationDelay: '1s' }}>○</span>

            {/* Floating colored dots */}
            <div className="absolute top-[15%] left-[28%] w-2 h-2 rounded-full bg-accent-coral/25 animate-float" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-[45%] right-[12%] w-1.5 h-1.5 rounded-full bg-accent-blue/30 animate-bounce-subtle" style={{ animationDelay: '0.8s' }} />
            <div className="absolute bottom-[20%] left-[35%] w-2 h-2 rounded-full bg-accent-teal/20 animate-float-delayed" />
            <div className="absolute top-[28%] right-[28%] w-1.5 h-1.5 rounded-full bg-accent-gold/25 animate-wiggle" style={{ animationDelay: '1.2s' }} />
            <div className="absolute bottom-[50%] right-[20%] w-2 h-2 rounded-full bg-accent-lavender/20 animate-float-slow" />

            {/* === FLOATING CODE SNIPPETS (decorative) === */}
            {/* 💻 Realistic IDE Code Block - Text Only (Light Mode) */}
            <div className="absolute top-[15%] right-[2%] lg:top-[20%] lg:right-[5%] font-mono text-[0.6rem] sm:text-xs z-10 animate-float-slow select-none leading-relaxed opacity-60 lg:opacity-90 block scale-90 lg:scale-100 origin-top-right">
                <div className="flex">
                    <span className="text-gray-400 mr-4 select-none">1</span>
                    <span className="text-purple-600 font-bold">const</span> <span className="text-blue-600 ml-2">Developer</span> <span className="text-gray-600">=</span> <span className="text-yellow-600">{'{'}</span>
                </div>
                <div className="flex">
                    <span className="text-gray-400 mr-4 select-none">2</span>
                    <span className="ml-4 text-blue-500">name</span><span className="text-gray-600">:</span> <span className="text-green-600 ml-2">"Adhiyasa"</span><span className="text-gray-600">,</span>
                </div>
                <div className="flex">
                    <span className="text-gray-400 mr-4 select-none">3</span>
                    <span className="ml-4 text-blue-500">role</span><span className="text-gray-600">:</span> <span className="text-green-600 ml-2">"Fullstack"</span><span className="text-gray-600">,</span>
                </div>
                <div className="flex">
                    <span className="text-gray-400 mr-4 select-none">4</span>
                    <span className="ml-4 text-blue-500">passion</span><span className="text-gray-600">:</span> <span className="text-orange-500 ml-2">true</span><span className="text-gray-600">,</span>
                </div>
                <div className="flex">
                    <span className="text-gray-400 mr-4 select-none">5</span>
                    <span className="ml-4 text-blue-500">skills</span><span className="text-gray-600">:</span> <span className="text-yellow-600 ml-2">['React', 'Node']</span>
                </div>
                <div className="flex">
                    <span className="text-gray-400 mr-4 select-none">6</span>
                    <span className="text-yellow-600 font-bold">{'}'}</span><span className="text-gray-600">;</span>
                </div>
            </div>

            {/* Floating Terminal/Console snippet - Text Only (Light Mode) */}
            <div className="absolute bottom-[25%] left-[5%] lg:bottom-[20%] lg:left-[45%] font-mono text-[0.55rem] sm:text-xs z-0 animate-float-delayed -rotate-3 select-none leading-relaxed opacity-50 lg:opacity-80 block scale-90 lg:scale-100 origin-bottom-left">
                <div><span className="text-accent-blue">➜</span> <span className="text-ink-400">~</span> <span className="text-ink-600">git commit -m</span> <span className="text-accent-coral">"update hero"</span></div>
                <div className="mt-1 text-ink-300">[main 8a2b3c] update hero</div>
                <div className="mt-1"><span className="text-accent-blue">➜</span> <span className="text-ink-400">~</span> <span className="text-ink-600">npm run build</span></div>
                <div className="mt-1 text-ink-300">Building...</div>
            </div>

            {/* === SVG DOODLE SHAPES (decorative rings & curves) === */}
            {/* Orbit ring — top right */}
            <svg className="absolute top-[10%] right-[5%] w-28 h-28 opacity-[0.06] animate-spin-slow" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#6B8DAE" strokeWidth="1.5" fill="none" strokeDasharray="8 6" />
                <circle cx="50" cy="10" r="3" fill="#6B8DAE" />
            </svg>

            {/* Orbit ring — bottom left */}
            <svg className="absolute bottom-[12%] left-[6%] w-20 h-20 opacity-[0.05] animate-spin-reverse" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="35" stroke="#E07A5F" strokeWidth="1.5" fill="none" strokeDasharray="6 8" />
                <circle cx="50" cy="15" r="2.5" fill="#E07A5F" />
            </svg>

            {/* Wavy line — middle left */}
            <svg className="absolute top-[50%] left-0 w-16 h-24 opacity-[0.06] block" viewBox="0 0 40 80">
                <path d="M20 5 Q35 20 20 40 Q5 60 20 75" stroke="#5B9A8B" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>

            {/* Cross/Plus — scattered */}
            <svg className="absolute top-[30%] left-[7%] w-4 h-4 opacity-[0.12] animate-wiggle" viewBox="0 0 16 16" style={{ animationDelay: '0.5s' }}>
                <line x1="8" y1="2" x2="8" y2="14" stroke="#8B7EC8" strokeWidth="2" strokeLinecap="round" />
                <line x1="2" y1="8" x2="14" y2="8" stroke="#8B7EC8" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg className="absolute bottom-[28%] right-[8%] w-3 h-3 opacity-[0.10] animate-bounce-subtle" viewBox="0 0 16 16" style={{ animationDelay: '1.5s' }}>
                <line x1="8" y1="2" x2="8" y2="14" stroke="#6B8DAE" strokeWidth="2" strokeLinecap="round" />
                <line x1="2" y1="8" x2="14" y2="8" stroke="#6B8DAE" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* === MARQUEE STRIP (behind content) === */}
            <div className="absolute top-[88%] left-0 right-0 overflow-hidden opacity-[0.06] pointer-events-none select-none">
                <div className="animate-marquee whitespace-nowrap font-display text-7xl font-bold text-ink-500">
                    FULLSTACK · DEVELOPER · UI/UX · DESIGNER · REACT · NODE · FULLSTACK · DEVELOPER · UI/UX · DESIGNER · REACT · NODE ·&nbsp;
                </div>
            </div>

            {/* === MAIN CONTENT === */}
            <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
                <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">

                    {/* Top part: Name + Role (on mobile: order-1) */}
                    <div className="lg:col-span-3 order-1">
                        {/* Section label */}
                        <div className="flex items-center gap-3 mb-6 animate-fade-in">
                            <span className="text-accent-coral text-xl">✦</span>
                            <span className="font-mono text-sm tracking-[0.3em] text-ink-300 uppercase">Portfolio 2026</span>
                            <div className="flex-1 h-px bg-gradient-to-r from-ink-100 via-accent-blue/20 to-transparent" />
                        </div>

                        {/* Name */}
                        <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold text-ink-700 mb-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            Adhiyasa
                        </h1>
                        <h1 className="font-sketch text-6xl sm:text-7xl lg:text-8xl mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <span className="text-accent-blue">Satya</span>{' '}
                            <span className="text-accent-coral animate-wiggle-fast inline-block">✦</span>
                        </h1>

                        {/* Typing role */}
                        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <p className="font-heading text-2xl sm:text-3xl text-ink-500 font-semibold">
                                <span className="shimmer-text">{typed}</span>
                                <span className="animate-blink text-accent-blue ml-0.5">|</span>
                            </p>
                        </div>

                        {/* Description — hidden on mobile (shown after photo), visible on lg */}
                        <p className="hidden lg:block font-body text-base text-ink-300 leading-relaxed max-w-lg mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            A passionate web developer focused on building
                            <span className="text-accent-teal font-semibold"> high-performance web apps</span> and crafting
                            <span className="text-accent-lavender font-semibold"> creative digital experiences</span> with
                            <span className="text-accent-coral font-semibold"> modern technologies</span>.
                        </p>

                        {/* CTA, tech logos, achievements — hidden on mobile, visible on lg */}
                        <div className="hidden lg:block">
                            {/* CTA buttons */}
                            <div className="flex flex-wrap items-center gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                                <a href="#projects" className="group inline-flex items-center gap-2 bg-gradient-to-r from-ink-600 to-ink-500 text-cream-50 px-7 py-3 rounded-full font-heading text-sm font-medium hover:shadow-xl hover:shadow-accent-blue/20 transition-all duration-300 hover-lift">
                                    View Projects
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                                <a href="#contact" className="px-7 py-3 rounded-full font-heading text-sm font-medium text-ink-400 border-2 border-ink-200 hover:border-accent-coral hover:text-accent-coral transition-all duration-300 hover-lift">
                                    Say Hello ✧
                                </a>
                            </div>

                            {/* Tech logos */}
                            <div className="flex flex-wrap items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                                {/* React */}
                                <div className="group flex items-center justify-center w-11 h-11 rounded-xl border border-accent-blue/20 bg-accent-blue/5 hover:bg-accent-blue/10 hover:scale-110 transition-all duration-300 cursor-default hover-glow" title="React.js">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-accent-blue group-hover:animate-spin-slow">
                                        <circle cx="12" cy="12" r="2.2" />
                                        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent-blue" />
                                        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent-blue" transform="rotate(60 12 12)" />
                                        <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" className="text-accent-blue" transform="rotate(120 12 12)" />
                                    </svg>
                                </div>
                                {/* Node.js */}
                                <div className="group flex items-center justify-center w-11 h-11 rounded-xl border border-accent-teal/20 bg-accent-teal/5 hover:bg-accent-teal/10 hover:scale-110 transition-all duration-300 cursor-default hover-glow" title="Node.js">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-accent-teal">
                                        <path d="M12 2l9 5v10l-9 5-9-5V7z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M12 10v7M8 12l4 2 4-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                                {/* Express */}
                                <div className="group flex items-center justify-center w-11 h-11 rounded-xl border border-accent-coral/20 bg-accent-coral/5 hover:bg-accent-coral/10 hover:scale-110 transition-all duration-300 cursor-default hover-glow" title="Express.js">
                                    <span className="font-mono text-lg font-bold text-accent-coral leading-none">Ex</span>
                                </div>
                                {/* Figma */}
                                <div className="group flex items-center justify-center w-11 h-11 rounded-xl border border-accent-lavender/20 bg-accent-lavender/5 hover:bg-accent-lavender/10 hover:scale-110 transition-all duration-300 cursor-default hover-glow" title="Figma">
                                    <svg viewBox="0 0 24 24" className="w-5 h-5">
                                        <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83" />
                                        <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF" />
                                        <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8C5.8 8 4 6.2 4 4z" fill="#F24E1E" />
                                        <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262" />
                                        <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE" />
                                    </svg>
                                </div>
                                {/* Tailwind CSS */}
                                <div className="group flex items-center justify-center w-11 h-11 rounded-xl border border-sky-400/20 bg-sky-400/5 hover:bg-sky-400/10 hover:scale-110 transition-all duration-300 cursor-default hover-glow" title="Tailwind CSS">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-sky-500">
                                        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Photo card (on mobile: order-2, right after the name) */}
                    <div className="lg:col-span-2 flex justify-center lg:justify-end order-2">
                        <div className="relative" style={{
                            transform: `translate(${mouse.x * 3}px, ${mouse.y * 3}px)`,
                            transition: 'transform 0.2s ease-out'
                        }}>
                            {/* Main card */}
                            <div className="sketch-border bg-cream-100 w-56 h-72 sm:w-72 sm:h-[22rem] flex flex-col items-center justify-center relative overflow-hidden animate-fade-in group" style={{ animationDelay: '0.3s' }}>
                                {/* Image */}
                                <div className="absolute inset-3 rounded-lg overflow-hidden border border-ink-100/50">
                                    <img
                                        src={myselfImg}
                                        alt="Adhiyasa Satya"
                                        className="w-full h-full object-cover filter grayscale-[0.2] sepia-[0.1] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                    />
                                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg pointer-events-none" />
                                </div>
                                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-accent-blue/20 to-transparent pointer-events-none mix-blend-multiply z-10" />
                                <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-accent-coral/20 to-transparent pointer-events-none mix-blend-multiply z-10" />
                                <svg className="absolute top-4 left-4 w-6 h-6 text-white drop-shadow-md z-20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M1 8 L1 1 L8 1" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg className="absolute bottom-4 right-4 w-6 h-6 text-white drop-shadow-md z-20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M19 12 L19 19 L12 19" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="absolute -bottom-3 -right-3 w-56 sm:w-72 h-72 sm:h-[22rem] border-2 border-accent-blue/20 rounded-xl -z-10" />
                            <div className="absolute -top-3 -left-3 w-56 sm:w-72 h-72 sm:h-[22rem] border-2 border-accent-coral/12 rounded-xl -z-10" />
                            <span className="absolute -top-5 -right-5 text-accent-coral text-xl animate-wiggle">✧</span>
                            <span className="absolute -bottom-5 left-4 text-accent-lavender/50 text-sm animate-float">◆</span>
                            <span className="absolute top-1/4 -left-6 text-accent-teal/40 text-xs animate-bounce-subtle hidden sm:block">★</span>
                            <span className="absolute top-[60%] -right-6 text-accent-gold/30 text-xs animate-float-delayed hidden sm:block">✦</span>
                            <div className="absolute -right-8 top-1/3 flex-col gap-2 hidden sm:flex">
                                {['bg-accent-blue', 'bg-accent-coral', 'bg-accent-teal', 'bg-accent-lavender'].map((c, i) => (
                                    <div key={i} className={`w-2 h-2 rounded-full ${c} opacity-35 animate-bounce-subtle`} style={{ animationDelay: `${i * 0.2}s` }} />
                                ))}
                            </div>
                            <div className="absolute -bottom-6 -left-6 sketch-border bg-cream-50 px-4 py-2.5 flex items-center gap-2.5 shadow-lg animate-fade-in-up z-10 hidden sm:flex" style={{ animationDelay: '0.6s' }}>
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="font-heading text-xs font-medium text-ink-500">Available for work</span>
                            </div>
                        </div>
                    </div>

                    {/* Mobile-only: CTA, description, tech logos (order-3, after photo) */}
                    <div className="lg:hidden order-3 col-span-full space-y-6">
                        <p className="font-body text-base text-ink-300 leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            A passionate web developer focused on building
                            <span className="text-accent-teal font-semibold"> high-performance web apps</span> and crafting
                            <span className="text-accent-lavender font-semibold"> creative digital experiences</span> with
                            <span className="text-accent-coral font-semibold"> modern technologies</span>.
                        </p>

                        <div className="flex flex-wrap items-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                            <a href="#projects" className="group inline-flex items-center gap-2 bg-gradient-to-r from-ink-600 to-ink-500 text-cream-50 px-7 py-3 rounded-full font-heading text-sm font-medium hover:shadow-xl hover:shadow-accent-blue/20 transition-all duration-300 hover-lift">
                                View Projects
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a href="#contact" className="px-7 py-3 rounded-full font-heading text-sm font-medium text-ink-400 border-2 border-ink-200 hover:border-accent-coral hover:text-accent-coral transition-all duration-300 hover-lift">
                                Say Hello ✧
                            </a>
                        </div>
                    </div>


                </div>
            </div>

            {/* === MARQUEE STRIP (second, inverted direction) === */}
            < div className="absolute top-[6%] left-0 right-0 overflow-hidden opacity-[0.05] pointer-events-none select-none rotate-[-2deg]" >
                <div className="animate-marquee whitespace-nowrap font-sketch text-5xl text-ink-400" style={{ animationDirection: 'reverse', animationDuration: '30s' }}>
                    ✦ PORTFOLIO ✧ CREATIVE ✦ CODE ✧ DESIGN ✦ BUILD ✧ DEPLOY ✦ PORTFOLIO ✧ CREATIVE ✦ CODE ✧ DESIGN ✦ BUILD ✧ DEPLOY&nbsp;
                </div>
            </div >

            {/* Scroll indicator - REMOVED */}
        </section >
    );
}