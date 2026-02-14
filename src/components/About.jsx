import { useInView, useCounter } from '../hooks/useAnimations';
import profileImg from '../assets/profile.JPG';

const skills = [
    {
        name: 'React',
        logo: (
            <svg viewBox="0 0 32 32" className="w-7 h-7">
                <circle cx="16" cy="16" r="3" fill="#61DAFB" />
                <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" />
                <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(60 16 16)" />
                <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="1.5" fill="none" transform="rotate(120 16 16)" />
            </svg>
        ),
    },
    {
        name: 'JavaScript',
        logo: (
            <svg viewBox="0 0 32 32" className="w-7 h-7">
                <rect x="2" y="2" width="28" height="28" rx="3" fill="#F7DF1E" />
                <text x="16.5" y="24" textAnchor="middle" fontSize="16" fontWeight="bold" fontFamily="sans-serif" fill="#323330">JS</text>
            </svg>
        ),
    },
    {
        name: 'Node.js',
        logo: (
            <svg viewBox="0 0 32 32" className="w-7 h-7">
                <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" fill="#339933" />
                <text x="16" y="20" textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily="sans-serif" fill="white">N</text>
            </svg>
        ),
    },
    {
        name: 'Express',
        logo: (
            <svg viewBox="0 0 32 32" className="w-7 h-7">
                <rect x="2" y="2" width="28" height="28" rx="4" fill="#3D3832" />
                <text x="16" y="20" textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily="sans-serif" fill="white">Ex</text>
            </svg>
        ),
    },
    {
        name: 'PHP',
        logo: (
            <svg viewBox="0 0 32 32" className="w-7 h-7">
                <ellipse cx="16" cy="16" rx="15" ry="10" fill="#777BB3" />
                <text x="16" y="20" textAnchor="middle" fontSize="10" fontWeight="bold" fontFamily="sans-serif" fill="white">PHP</text>
            </svg>
        ),
    },
    {
        name: 'Laravel',
        logo: (
            <svg viewBox="0 0 32 32" className="w-7 h-7">
                <rect x="2" y="2" width="28" height="28" rx="6" fill="#FF2D20" />
                <path d="M9 22l3-10 4 6 4-6 3 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
        ),
    },
    {
        name: 'Git',
        logo: (
            <svg viewBox="0 0 32 32" className="w-7 h-7">
                <path d="M30.3 14.6L17.4 1.7a1.6 1.6 0 00-2.3 0L12.4 4.4l2.9 2.9a2 2 0 012.5 2.5l2.8 2.8a2 2 0 11-1.2 1.1L16.8 11v7.3a2 2 0 11-1.8-.2V10.7a2 2 0 01-1-2.6L11.2 5.3 1.7 14.8a1.6 1.6 0 000 2.3L14.6 30a1.6 1.6 0 002.3 0l13.4-13.1a1.6 1.6 0 000-2.3z" fill="#F05032" />
            </svg>
        ),
    },
    {
        name: 'Figma',
        logo: (
            <svg viewBox="0 0 32 32" className="w-7 h-7">
                <path d="M11 30a5 5 0 005-5v-5h-5a5 5 0 000 10z" fill="#0ACF83" />
                <path d="M6 15a5 5 0 015-5h5v10h-5a5 5 0 01-5-5z" fill="#A259FF" />
                <path d="M6 5a5 5 0 015-5h5v10h-5a5 5 0 01-5-5z" fill="#F24E1E" />
                <path d="M16 0h5a5 5 0 010 10h-5V0z" fill="#FF7262" />
                <circle cx="21" cy="15" r="5" fill="#1ABCFE" />
            </svg>
        ),
    },
    {
        name: 'Tailwind',
        logo: (
            <svg viewBox="0 0 32 32" className="w-7 h-7">
                <path d="M9 13.7C10.4 8.5 13.6 6 18.8 6c7.8 0 8.8 5.8 5.4 8.8-2.3 2-5 2.2-6.4 4.2M13.2 25c-7.8 0-8.8-5.8-5.4-8.8 2.3-2 5-2.2 6.4-4.2C15.6 18.5 18.8 21 24 21" fill="none" stroke="#38BDF8" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        name: 'Webpack',
        logo: (
            <svg viewBox="0 0 32 32" className="w-7 h-7">
                <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" fill="#1C78C0" opacity="0.15" />
                <path d="M16 5L26 10.5V21.5L16 27L6 21.5V10.5L16 5Z" stroke="#1C78C0" strokeWidth="1.5" fill="none" />
                <path d="M16 5V27M6 10.5L16 16L26 10.5M6 21.5L16 16L26 21.5" stroke="#8ED6FB" strokeWidth="1.2" />
            </svg>
        ),
    },
    {
        name: 'REST API',
        logo: (
            <svg viewBox="0 0 32 32" className="w-7 h-7">
                <rect x="2" y="2" width="28" height="28" rx="6" fill="#6B8DAE" />
                <path d="M10 11h12M10 16h12M10 21h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <circle cx="24" cy="21" r="2" fill="white" />
            </svg>
        ),
    },
    {
        name: 'Docker',
        logo: (
            <svg viewBox="0 0 32 32" className="w-7 h-7">
                <rect x="1" y="1" width="30" height="30" rx="6" fill="#2496ED" />
                <g fill="white">
                    <rect x="7" y="14" width="3" height="2.8" rx="0.4" />
                    <rect x="11" y="14" width="3" height="2.8" rx="0.4" />
                    <rect x="15" y="14" width="3" height="2.8" rx="0.4" />
                    <rect x="19" y="14" width="3" height="2.8" rx="0.4" />
                    <rect x="11" y="10.5" width="3" height="2.8" rx="0.4" />
                    <rect x="15" y="10.5" width="3" height="2.8" rx="0.4" />
                    <rect x="15" y="7" width="3" height="2.8" rx="0.4" />
                    <rect x="11" y="7" width="3" height="2.8" rx="0.4" />
                </g>
                <path d="M25 15.5c-.5-.3-1.5-.4-2.3-.2-.2-1-.7-1.8-1.5-2.3l-.3-.2-.2.3c-.3.5-.4 1.2-.3 1.8.1.5.3.9.6 1.3-.3.2-.6.3-.9.4-.5.2-1.1.3-1.7.3H5.5c-.2 1-.2 2.1.1 3.1.4 1.2 1 2.1 2 2.8 1.1.8 2.6 1.2 4.3 1.2.8 0 1.6-.1 2.4-.3 1.1-.3 2.1-.8 2.9-1.5.7-.6 1.3-1.4 1.8-2.3.5.0 1.6.0 2.2-.9l.1-.2-.3-.2z" fill="white" opacity="0.9" />
            </svg>
        ),
    },
];


export default function About() {
    const [headerRef, headerVisible] = useInView({ triggerOnce: false });
    const [photoRef, photoVisible] = useInView({ threshold: 0.2, triggerOnce: false });
    const [contentRef, contentVisible] = useInView({ threshold: 0.1, triggerOnce: false });
    const [skillsRef, skillsVisible] = useInView({ threshold: 0.1, triggerOnce: false });

    return (
        <section id="about" className="py-16 lg:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FDFBF7 0%, #F0F4FA 35%, #FDFBF7 50%, #FBF3EE 75%, #FDFBF7 100%)' }}>
            {/* Background accents */}
            <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-accent-blue/5 blur-3xl" />
            <div className="absolute bottom-20 left-0 w-60 h-60 rounded-full bg-accent-coral/5 blur-3xl" />
            <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-accent-lavender/5 blur-2xl" />
            <div className="absolute bottom-1/3 right-1/3 w-32 h-32 rounded-full bg-accent-gold/4 blur-2xl animate-float" />

            {/* Decorative Icons */}
            <div className="absolute top-24 left-10 opacity-[0.03] animate-float-slow hidden lg:block">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-ink-600">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            </div>
            <div className="absolute bottom-20 right-10 opacity-[0.03] animate-float-delayed hidden lg:block">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-ink-600">
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
            </div>
            <div className="absolute top-[15%] right-[6%] animate-float select-none hidden md:block" style={{ animationDelay: '0.5s' }}>
                <svg width="48" height="16" viewBox="0 0 60 20" fill="none" className="opacity-[0.15]">
                    <rect x="2" y="2" width="56" height="16" rx="2" fill="#D4A03C" opacity="0.4" />
                    {[8, 16, 24, 32, 40, 48].map((x, i) => (
                        <line key={i} x1={x} y1="2" x2={x} y2={i % 2 === 0 ? "10" : "7"} stroke="#3D3832" strokeWidth="1" opacity="0.3" />
                    ))}
                </svg>
            </div>
            <div className="absolute bottom-[25%] left-[4%] animate-wiggle select-none hidden md:block" style={{ animationDelay: '1s' }}>
                <svg width="20" height="48" viewBox="0 0 24 56" fill="none" className="opacity-[0.18]">
                    <path d="M6 48V12a6 6 0 0112 0v32a4 4 0 01-8 0V16a2 2 0 014 0v28" stroke="#6B8DAE" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
            </div>
            <span className="absolute top-[30%] right-[15%] text-accent-coral/25 text-lg animate-wiggle select-none">✦</span>
            <span className="absolute bottom-[35%] left-[12%] text-accent-teal/20 text-sm animate-float select-none">✧</span>
            <span className="absolute top-[60%] right-[8%] text-accent-lavender/20 text-xs animate-bounce-subtle select-none">◇</span>
            <span className="absolute bottom-[15%] right-[25%] text-accent-gold/20 text-lg animate-float-delayed select-none">★</span>
            <div className="absolute top-[20%] left-[20%] w-2 h-2 rounded-full bg-accent-coral/20 animate-float" style={{ animationDelay: '0.3s' }} />
            <div className="absolute bottom-[30%] right-[18%] w-1.5 h-1.5 rounded-full bg-accent-blue/25 animate-bounce-subtle" style={{ animationDelay: '1s' }} />
            <div className="absolute top-[50%] right-[30%] w-2 h-2 rounded-full bg-accent-teal/15 animate-float-delayed" />
            <svg className="absolute bottom-[10%] right-[5%] w-20 h-20 opacity-[0.05] animate-spin-slow hidden lg:block" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="35" stroke="#8B7EC8" strokeWidth="1.5" fill="none" strokeDasharray="6 8" />
                <circle cx="50" cy="15" r="2.5" fill="#8B7EC8" />
            </svg>
            <svg className="absolute top-[40%] left-[6%] w-3 h-3 opacity-[0.10] animate-wiggle hidden md:block" viewBox="0 0 16 16" style={{ animationDelay: '0.8s' }}>
                <line x1="8" y1="2" x2="8" y2="14" stroke="#5B9A8B" strokeWidth="2" strokeLinecap="round" />
                <line x1="2" y1="8" x2="14" y2="8" stroke="#5B9A8B" strokeWidth="2" strokeLinecap="round" />
            </svg>

            <div className="max-w-6xl mx-auto px-6">
                {/* ─── Single unified header ─── */}
                <div ref={headerRef} className={`flex items-center justify-center lg:justify-start gap-3 mb-10 reveal ${headerVisible ? 'visible' : ''}`}>
                    <span className="text-accent-coral text-lg">✦</span>
                    <span className="font-mono text-xs tracking-[0.3em] text-ink-300 uppercase">About Me</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-ink-100 via-accent-blue/20 to-transparent hidden lg:block" />
                </div>

                {/* ─── Top row: Photo + Bio side by side ─── */}
                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
                    {/* Photo */}
                    <div ref={photoRef} className={`lg:col-span-2 flex justify-center lg:justify-start reveal-left ${photoVisible ? 'visible' : ''}`}>
                        <div className="relative">
                            <div className="sketch-border bg-cream-100/50 backdrop-blur-sm w-56 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-[22rem] flex flex-col items-center justify-center relative overflow-hidden group hover:scale-[1.03] transition-transform duration-500">
                                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-accent-blue/10 to-transparent" />
                                <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-accent-coral/10 to-transparent" />
                                <div className="absolute inset-4 bg-gradient-to-br from-ink-900/5 to-ink-800/5 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-morph shadow-inner opacity-50" />
                                <div className="absolute inset-6 flex items-end justify-center overflow-hidden rounded-[60%_40%_30%_70%/60%_30%_70%_40%]">
                                    <img src={profileImg} alt="Adhiyasa Satya" className="relative z-10 w-full h-full object-cover object-top scale-110 hover:scale-115 transition-transform duration-700 brightness-110 contrast-110 saturate-110" />
                                </div>
                                <svg className="absolute top-3 left-3 w-5 h-5 text-ink-300" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M1 8 L1 1 L8 1" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg className="absolute bottom-3 right-3 w-5 h-5 text-ink-300" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M19 12 L19 19 L12 19" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="absolute -bottom-3 -right-3 w-56 sm:w-64 lg:w-72 h-72 sm:h-80 lg:h-[22rem] border-2 border-accent-blue/30 rounded-xl -z-10" />
                            <div className="absolute -top-3 -left-3 w-56 sm:w-64 lg:w-72 h-72 sm:h-80 lg:h-[22rem] border-2 border-accent-coral/15 rounded-xl -z-10" />
                            <span className="absolute -top-4 -right-4 text-accent-coral text-xl animate-wiggle">✧</span>
                            <span className="absolute -bottom-5 left-4 text-accent-lavender/50 text-sm animate-float">◆</span>
                            <div className="absolute -right-8 top-1/3 flex-col gap-2 hidden sm:flex">
                                {['bg-accent-blue', 'bg-accent-coral', 'bg-accent-teal', 'bg-accent-lavender'].map((c, i) => (
                                    <div key={i} className={`w-2 h-2 rounded-full ${c} opacity-40 animate-bounce-subtle`} style={{ animationDelay: `${i * 0.2}s` }} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bio + Info + CTA */}
                    <div ref={contentRef} className={`lg:col-span-3 text-center lg:text-left reveal-right ${contentVisible ? 'visible' : ''}`}>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-700 mb-2">
                            Passionate about creating
                        </h2>
                        <h2 className="font-sketch text-3xl sm:text-4xl mb-6">
                            <span className="text-accent-blue">digital</span>{' '}
                            <span className="text-accent-coral">experiences</span>{' '}
                            <span className="text-accent-teal">✦</span>
                        </h2>

                        <div className="space-y-4 mb-6 text-left">
                            <p className="font-body text-ink-400 leading-relaxed">
                                Hi! I'm <span className="font-semibold text-ink-600">Muhammad Adhiyasa Satya Putranto</span>, a{' '}
                                <span className="text-accent-blue font-semibold">Professional Web Developer</span> based in Semarang.
                                A highly curious learner with a focus on logical problem-solving and technical precision.
                            </p>
                            <p className="font-body text-ink-400 leading-relaxed">
                                I build <span className="text-accent-coral font-semibold">high-performance web applications</span> as
                                a fullstack developer, and design intuitive <span className="text-accent-lavender font-semibold">UI/UX experiences</span>.
                                Dedicated team collaborator with a proactive attitude and commitment to professional growth.
                            </p>
                        </div>

                        {/* Info grid */}
                        <div className={`grid grid-cols-2 gap-3 mb-6 stagger-children ${contentVisible ? 'visible' : ''}`}>
                            {[
                                { icon: '📍', label: 'Location', value: 'Semarang, ID', accent: 'border-accent-blue/20 bg-accent-blue/5' },
                                { icon: '🎓', label: 'Education', value: 'S1 Information Tech', accent: 'border-accent-coral/20 bg-accent-coral/5' },
                                { icon: '💼', label: 'Status', value: 'Freelance Available', accent: 'border-accent-teal/20 bg-accent-teal/5' },
                                { icon: '🌐', label: 'Languages', value: 'ID, EN (Fluent)', accent: 'border-accent-lavender/20 bg-accent-lavender/5' },
                            ].map(item => (
                                <div key={item.label} className={`flex items-center gap-3 p-3 rounded-xl border ${item.accent} hover:-translate-y-0.5 hover:shadow-md transition-all duration-300`}>
                                    <span className="text-lg">{item.icon}</span>
                                    <div className="text-left">
                                        <span className="block text-[0.55rem] uppercase tracking-wider text-ink-200 font-heading">{item.label}</span>
                                        <span className="block text-xs sm:text-sm font-semibold text-ink-600">{item.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center lg:justify-start">
                            <a href="#contact" className="group inline-flex items-center gap-2 bg-gradient-to-r from-ink-600 to-ink-500 text-cream-50 px-6 py-3 rounded-full font-heading text-sm font-medium hover:shadow-xl hover:shadow-accent-blue/20 hover:-translate-y-0.5 transition-all duration-300">
                                Let's Talk ✧
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* ─── Divider with "What I Work With" inline label ─── */}
                <div ref={skillsRef} className={`mt-12 reveal ${skillsVisible ? 'visible' : ''}`}>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent-blue/15 to-transparent" />
                        <span className="font-mono text-[0.55rem] tracking-[0.25em] text-ink-200 uppercase flex items-center gap-2">
                            <span className="text-accent-teal">✦</span> What I Work With <span className="text-accent-coral">✦</span>
                        </span>
                        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent-coral/15 to-transparent" />
                    </div>

                    {/* Skill chips — inline logos */}
                    <div className={`flex flex-wrap justify-center lg:justify-start gap-3 stagger-children ${skillsVisible ? 'visible' : ''}`}>
                        {skills.map((skill, i) => (
                            <div
                                key={skill.name}
                                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-cream-50/80 border border-ink-100/30 hover:border-accent-blue/30 hover:shadow-lg hover:shadow-accent-blue/10 hover:-translate-y-1 transition-all duration-300 cursor-default hover-glow"
                            >
                                <div className="w-7 h-7 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    {skill.logo}
                                </div>
                                <span className="font-heading text-xs font-semibold text-ink-500 group-hover:text-ink-700 transition-colors duration-300">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
