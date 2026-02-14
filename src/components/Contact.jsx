import { useState, useEffect } from 'react';
import { useInView } from '../hooks/useAnimations';
import { SiGithub, SiLinkedin, SiInstagram, SiWhatsapp } from 'react-icons/si';

const WA_NUMBER = '6285950519424';
const waLink = (plan) =>
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Halo, saya tertarik untuk ${plan}`)}`;

const pricingPlans = [
    {
        name: 'Landing Page',
        subtitle: 'SME / Personal',
        price: 'Rp 500.000',
        prefix: 'start from',
        description: 'Perfect for product promotion, digital invitations, or a quick portfolio showcase.',
        features: [
            '1 Page (Single Page)',
            'Responsive Design (Mobile & Desktop)',
            'Free Minor Revisions (2x)',
            'Fast Delivery (2–3 Days)',
            'WhatsApp / Social Media Button',
        ],
        color: 'accent-blue',
        icon: '🚀',
    },
    {
        name: 'Company Profile',
        subtitle: 'Business',
        price: 'Rp 750.000',
        prefix: 'start from',
        badge: 'Best Value',
        description: 'A professional solution to build your business credibility in the digital world.',
        features: [
            'Up to 5 Pages (Home, About, etc.)',
            'Basic SEO (Google Search)',
            'Google Maps Integration',
            'Premium & Custom Design',
            'Free 1 Month Maintenance',
        ],
        color: 'accent-coral',
        icon: '⭐',
        highlight: true,
    },
    {
        name: 'Custom Web App',
        subtitle: 'System',
        price: 'Rp 2.000.000',
        prefix: 'start from',
        description: 'Complex web applications with login, database, and admin dashboard features.',
        features: [
            'Fullstack (Next.js / MERN)',
            'Login & Register Feature',
            'Admin Dashboard (CMS)',
            'Database Integration (MongoDB/MySQL)',
            'Server Deployment (VPS/Railway)',
        ],
        color: 'accent-lavender',
        icon: '💎',
    },
];

export default function Contact() {
    const [headerRef, headerVisible] = useInView({ triggerOnce: true });
    const [contentRef, contentVisible] = useInView({ threshold: 0.2, triggerOnce: true });
    const [pricingRef, pricingVisible] = useInView({ threshold: 0.1, triggerOnce: true });
    const [expandedPlan, setExpandedPlan] = useState(null);
    const [rateCardOpen, setRateCardOpen] = useState(false);

    const togglePlan = (name) => {
        setExpandedPlan(expandedPlan === name ? null : name);
    };

    // Lock body scroll when modal is open
    useEffect(() => {
        if (rateCardOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [rateCardOpen]);

    return (
        <section id="contact" className="py-16 lg:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FDFBF7 0%, #F0F4FA 35%, #FDFBF7 50%, #FBF3EE 75%, #FDFBF7 100%)' }}>
            {/* Colorful background accents */}
            <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-accent-blue/5 blur-3xl" />
            <div className="absolute bottom-20 left-0 w-60 h-60 rounded-full bg-accent-coral/5 blur-3xl" />
            <div className="absolute top-1/2 left-1/4 w-40 h-40 rounded-full bg-accent-lavender/5 blur-2xl" />
            <div className="absolute bottom-1/4 right-1/4 w-36 h-36 rounded-full bg-accent-gold/4 blur-2xl animate-float-delayed" />

            {/* Decorative Icons — email */}
            <div className="absolute top-24 left-10 opacity-[0.03] animate-float-slow hidden lg:block">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-ink-600">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            </div>
            <div className="absolute bottom-20 right-10 opacity-[0.03] animate-float-delayed hidden lg:block">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-ink-600">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            </div>

            {/* ✈️ Paper airplane — top right */}
            <div className="absolute top-[12%] right-[8%] animate-float select-none hidden md:block" style={{ animationDelay: '0.7s' }}>
                <svg width="36" height="36" viewBox="0 0 40 40" fill="none" className="opacity-[0.15] rotate-[15deg]">
                    <path d="M4 20L36 4L28 36L20 24L4 20Z" fill="#6B8DAE" opacity="0.5" />
                    <path d="M20 24L36 4" stroke="#3D3832" strokeWidth="1" opacity="0.3" />
                </svg>
            </div>

            {/* 💬 Chat bubble kawaii — bottom left */}
            <div className="absolute bottom-[18%] left-[4%] animate-wiggle select-none hidden md:block" style={{ animationDelay: '1.3s' }}>
                <svg width="36" height="32" viewBox="0 0 44 40" fill="none" className="opacity-[0.15]">
                    <path d="M4 4h28a4 4 0 014 4v16a4 4 0 01-4 4H16l-8 8v-8H4a4 4 0 01-4-4V8a4 4 0 014-4z" fill="#E07A5F" opacity="0.5" />
                    <circle cx="14" cy="16" r="1.5" fill="#3D3832" />
                    <circle cx="22" cy="16" r="1.5" fill="#3D3832" />
                    <circle cx="30" cy="16" r="1.5" fill="#3D3832" />
                </svg>
            </div>

            {/* Scattered sparkles */}
            <span className="absolute top-[30%] right-[12%] text-accent-coral/25 text-lg animate-wiggle select-none">✦</span>
            <span className="absolute bottom-[40%] left-[10%] text-accent-teal/20 text-sm animate-float select-none">✧</span>
            <span className="absolute top-[55%] right-[6%] text-accent-lavender/20 text-xs animate-bounce-subtle select-none">◇</span>
            <span className="absolute bottom-[20%] right-[30%] text-accent-gold/20 text-lg animate-float-delayed select-none">★</span>

            {/* Floating colored dots */}
            <div className="absolute top-[18%] left-[22%] w-2 h-2 rounded-full bg-accent-coral/20 animate-float" style={{ animationDelay: '0.4s' }} />
            <div className="absolute bottom-[35%] right-[20%] w-1.5 h-1.5 rounded-full bg-accent-blue/25 animate-bounce-subtle" style={{ animationDelay: '1.1s' }} />
            <div className="absolute top-[45%] left-[35%] w-2 h-2 rounded-full bg-accent-teal/15 animate-float-delayed" />

            {/* Orbit ring */}
            <svg className="absolute top-[10%] left-[5%] w-20 h-20 opacity-[0.05] animate-spin-slow hidden lg:block" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="35" stroke="#5B9A8B" strokeWidth="1.5" fill="none" strokeDasharray="8 6" />
                <circle cx="50" cy="15" r="2.5" fill="#5B9A8B" />
            </svg>

            {/* Wavy line — right side */}
            <svg className="absolute top-[40%] right-0 w-12 h-20 opacity-[0.06] hidden md:block" viewBox="0 0 40 80">
                <path d="M20 5 Q35 20 20 40 Q5 60 20 75" stroke="#8B7EC8" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>

            {/* Cross/Plus */}
            <svg className="absolute top-[35%] left-[8%] w-4 h-4 opacity-[0.10] animate-wiggle hidden md:block" viewBox="0 0 16 16" style={{ animationDelay: '0.6s' }}>
                <line x1="8" y1="2" x2="8" y2="14" stroke="#D4A03C" strokeWidth="2" strokeLinecap="round" />
                <line x1="2" y1="8" x2="14" y2="8" stroke="#D4A03C" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg className="absolute bottom-[15%] right-[8%] w-3 h-3 opacity-[0.08] animate-bounce-subtle hidden md:block" viewBox="0 0 16 16" style={{ animationDelay: '1.5s' }}>
                <line x1="8" y1="2" x2="8" y2="14" stroke="#E07A5F" strokeWidth="2" strokeLinecap="round" />
                <line x1="2" y1="8" x2="14" y2="8" stroke="#E07A5F" strokeWidth="2" strokeLinecap="round" />
            </svg>

            <div className="max-w-5xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div ref={headerRef} className={`reveal ${headerVisible ? 'visible' : ''}`}>
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
                        <span className="text-accent-coral text-lg">✦</span>
                        <span className="font-mono text-xs tracking-[0.3em] text-ink-300 uppercase">Get In Touch</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-ink-100 via-accent-coral/20 to-transparent hidden lg:block" />
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-700 mb-2 text-center lg:text-left">
                        Let's work together
                    </h2>
                    <h2 className="font-sketch text-3xl sm:text-4xl mb-8 text-center lg:text-left">
                        <span className="text-accent-blue">create</span>{' '}
                        <span className="text-accent-coral">something</span>{' '}
                        <span className="text-accent-teal">great ✦</span>
                    </h2>
                    <p className="font-body text-ink-400 max-w-lg leading-relaxed mb-12 text-center lg:text-left mx-auto lg:mx-0">
                        Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new projects and opportunities.
                    </p>
                </div>

                {/* ─── Contact Content - Postcard Style ─── */}
                <div ref={contentRef} className={`relative sketch-border bg-cream-100/80 backdrop-blur-sm rounded-2xl p-5 sm:p-12 reveal ${contentVisible ? 'visible' : ''} overflow-hidden group`}>
                    {/* Paper Texture Overlay */}
                    <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#7A736A 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

                    {/* Postage Stamp decoration */}
                    <div className="absolute top-6 right-8 hidden sm:flex flex-col items-center justify-center w-24 h-28 bg-white border-4 border-dashed border-accent-coral/30 shadow-sm rotate-6 z-10 opacity-80 mix-blend-multiply">
                        <div className="w-16 h-16 rounded-full bg-accent-coral/10 flex items-center justify-center">
                            <svg className="w-10 h-10 text-accent-coral/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <span className="font-mono text-[0.55rem] text-accent-coral mt-2 font-bold tracking-widest">2026</span>
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent-blue/10 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent-coral/10 to-transparent pointer-events-none" />

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative z-20">

                        {/* Left: Contact Info */}
                        <div className="space-y-10">
                            <div>
                                <h3 className="font-heading text-xs font-bold text-ink-500 mb-4 uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-8 h-[1px] bg-ink-300"></span>
                                    Connect
                                </h3>

                                <div className="space-y-6">
                                    {/* Email Card */}
                                    <a href="mailto:adhiyasa1203@gmail.com" className="group/email flex items-start gap-4 p-4 rounded-2xl bg-white border border-ink-100 hover:border-accent-blue hover:shadow-lg hover:shadow-accent-blue/10 transition-all duration-300 hover-lift">
                                        <div className="w-12 h-12 rounded-xl bg-accent-blue/10 text-accent-blue flex items-center justify-center group-hover/email:scale-110 transition-transform">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </div>
                                        <div>
                                            <span className="block text-xs font-bold text-ink-400 uppercase tracking-wider mb-1">Email Me</span>
                                            <span className="block font-heading text-lg font-bold text-ink-700 group-hover/email:text-accent-blue transition-colors break-all">adhiyasa1203@gmail.com</span>
                                        </div>
                                    </a>

                                    {/* Social Stickers - Icon Only */}
                                    <div>
                                        <span className="block text-xs font-bold text-ink-400 uppercase tracking-wider mb-3">On the web</span>
                                        <div className="flex flex-wrap gap-4">
                                            {[
                                                {
                                                    name: 'GitHub', href: 'https://github.com/adhiyasaa', icon: (
                                                        <SiGithub className="w-6 h-6" color="#181717" />
                                                    ), color: 'hover:border-ink-800 hover:bg-ink-50'
                                                },
                                                {
                                                    name: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-adhiyasa-satya', icon: (
                                                        <SiLinkedin className="w-6 h-6" color="#0077B5" />
                                                    ), color: 'hover:border-blue-600 hover:bg-blue-50'
                                                },
                                                {
                                                    name: 'Instagram', href: 'https://instagram.com/adhiyasast', icon: (
                                                        <SiInstagram className="w-6 h-6" color="#E4405F" />
                                                    ), color: 'hover:border-pink-300 hover:bg-pink-50'
                                                },
                                            ].map((social) => (
                                                <a
                                                    key={social.name}
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`group/social flex items-center justify-center w-12 h-12 rounded-xl border-2 border-transparent bg-white shadow-sm hover:shadow-lg hover:scale-110 transition-all duration-300 transform ${social.color}`}
                                                    title={social.name}
                                                >
                                                    {social.icon}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Info Grid */}
                            <div className="pt-8 border-t border-ink-200/50">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/50 p-4 rounded-xl border border-ink-50">
                                        <span className="block text-[0.55rem] uppercase tracking-wider text-ink-400 font-bold mb-1">Location</span>
                                        <div className="flex items-center gap-2 text-ink-700 font-medium text-sm">
                                            <span className="text-accent-teal">📍</span>
                                            Semarang, ID
                                        </div>
                                    </div>
                                    <div className="bg-white/50 p-4 rounded-xl border border-ink-50">
                                        <span className="block text-[0.55rem] uppercase tracking-wider text-ink-400 font-bold mb-1">Status</span>
                                        <div className="flex items-center gap-2 text-ink-700 font-medium text-sm">
                                            <span className="relative flex h-2.5 w-2.5">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                            </span>
                                            Open for work
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ─── Rate Card Mini Trigger ─── */}
                            <div ref={pricingRef} className="pt-6 border-t border-ink-200/50">
                                <div
                                    onClick={() => setRateCardOpen(true)}
                                    className="group/rate relative cursor-pointer rounded-xl border border-ink-100/60 bg-white/80 hover:border-accent-blue/40 hover:shadow-md hover:shadow-accent-blue/10 transition-all duration-500"
                                >
                                    <div className="flex items-center gap-3 p-3">
                                        <div className="relative w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-accent-blue/80 to-accent-lavender/80 group-hover/rate:from-accent-coral group-hover/rate:to-accent-gold transition-all duration-500 flex-shrink-0">
                                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                            </svg>
                                            <span className="absolute -top-1 -right-1 text-accent-gold text-[0.45rem] opacity-0 scale-50 group-hover/rate:opacity-100 group-hover/rate:scale-100 transition-all duration-300">✦</span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <span className="font-heading text-xs font-bold text-ink-600">Rate Card</span>
                                            <span className="block font-body text-[0.55rem] text-ink-300">Service pricing</span>
                                        </div>
                                        <span className="font-heading text-[0.55rem] font-semibold text-accent-blue opacity-0 group-hover/rate:opacity-100 transition-all duration-300 whitespace-nowrap">See Rate Card →</span>
                                        <div className="p-1.5 rounded-full border border-ink-100 bg-ink-50/50 group-hover/rate:border-accent-blue/30 transition-all duration-500 flex-shrink-0">
                                            <svg className="w-3 h-3 text-ink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Right: Direct Chat CTA */}
                        <div className="relative h-full flex flex-col min-h-[300px] md:min-h-0">
                            <div className="bg-white rounded-xl shadow-sm border border-ink-100 p-6 sm:p-8 h-full flex flex-col justify-center items-center text-center relative overflow-hidden group">
                                {/* Decorative background elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-50 to-transparent rounded-bl-full opacity-50" />
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent-blue/5 to-transparent rounded-tr-full opacity-50" />

                                <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-green-100">
                                    <SiWhatsapp className="w-8 h-8" />
                                </div>

                                <h3 className="font-heading text-xl font-bold text-ink-700 mb-2">
                                    Let's Connect!
                                </h3>
                                <p className="font-body text-sm text-ink-400 max-w-xs mx-auto mb-8 leading-relaxed">
                                    Want to discuss a project or just say hi? Chat me directly on WhatsApp for the fastest response.
                                </p>

                                <a
                                    href={waLink('berdiskusi')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-xl font-heading text-sm font-bold shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Chat on WhatsApp
                                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                    <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </a>
                            </div>
                        </div>
                    </div>




                    {/* Decorative Corner Brackets */}
                    <svg className="absolute top-4 left-4 w-5 h-5 text-ink-300" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 8 L1 1 L8 1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className="absolute bottom-4 right-4 w-5 h-5 text-ink-300" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M19 12 L19 19 L12 19" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                {/* ─── Rate Card Modal Overlay ─── */}
                {
                    rateCardOpen && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setRateCardOpen(false)}>
                            {/* Backdrop */}
                            <div className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm animate-fade-in" />

                            {/* Modal Content */}
                            <div
                                className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-cream-50 rounded-2xl shadow-2xl border border-ink-100/50 p-6 sm:p-8 animate-scale-in"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setRateCardOpen(false)}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-white border border-ink-100 hover:border-accent-coral/40 hover:bg-accent-coral/5 transition-all duration-300 z-10"
                                >
                                    <svg className="w-4 h-4 text-ink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>

                                {/* Header */}
                                <div className="text-center mb-8">
                                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-accent-coral to-accent-gold mb-3">
                                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-heading text-lg font-bold text-ink-700">Rate Card</h3>
                                    <p className="font-body text-xs text-ink-400 mt-1">Choose the package that fits your needs</p>
                                </div>

                                {/* Pricing Cards */}
                                <div className="grid md:grid-cols-3 gap-4">
                                    {pricingPlans.map((plan) => {
                                        const isExpanded = expandedPlan === plan.name;
                                        const isHighlight = plan.highlight;
                                        return (
                                            <div
                                                key={plan.name}
                                                className={`relative rounded-2xl border-2 p-5 transition-all duration-500 cursor-pointer hover-lift
                                                ${isHighlight
                                                        ? 'border-accent-coral/40 bg-gradient-to-b from-white to-accent-coral/5 shadow-lg shadow-accent-coral/10 md:scale-[1.03] md:-translate-y-1'
                                                        : 'border-ink-100/40 bg-white hover:border-accent-blue/30 hover:shadow-md'
                                                    }`}
                                                onClick={() => togglePlan(plan.name)}
                                            >
                                                {plan.badge && (
                                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                                        <span className="inline-block px-3 py-0.5 bg-gradient-to-r from-accent-coral to-accent-gold text-white text-[0.55rem] font-bold font-heading uppercase tracking-wider rounded-full shadow-sm">
                                                            {plan.badge}
                                                        </span>
                                                    </div>
                                                )}

                                                <div className="text-center mb-3">
                                                    <span className="text-2xl">{plan.icon}</span>
                                                    <h3 className="font-heading text-base font-bold text-ink-700 mt-1">{plan.name}</h3>
                                                    <span className="font-mono text-[0.55rem] text-ink-300 tracking-wider uppercase">{plan.subtitle}</span>
                                                </div>

                                                <div className="text-center mb-3">
                                                    <span className="block font-mono text-[0.55rem] text-ink-300 uppercase">{plan.prefix}</span>
                                                    <span className={`font-display text-xl font-bold ${isHighlight ? 'text-accent-coral' : 'text-ink-700'}`}>
                                                        {plan.price}
                                                    </span>
                                                </div>

                                                <p className="font-body text-xs text-ink-400 text-center leading-relaxed mb-4">{plan.description}</p>

                                                <button
                                                    className="w-full flex items-center justify-center gap-1 text-[0.6rem] font-heading font-medium text-ink-300 hover:text-ink-500 transition-colors"
                                                    onClick={(e) => { e.stopPropagation(); togglePlan(plan.name); }}
                                                >
                                                    {isExpanded ? 'Hide Details' : 'View Details'}
                                                    <svg className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>

                                                <div className={`overflow-hidden transition-all duration-400 ease-out ${isExpanded ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
                                                    <div className="border-t border-ink-100/30 pt-3 space-y-2">
                                                        {plan.features.map((feat) => (
                                                            <div key={feat} className="flex items-start gap-2">
                                                                <svg className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${isHighlight ? 'text-accent-coral' : 'text-accent-teal'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                                </svg>
                                                                <span className="font-body text-xs text-ink-500">{feat}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <a
                                                    href={waLink(plan.name)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className={`mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-heading text-xs font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg
                                                    ${isHighlight
                                                            ? 'bg-gradient-to-r from-accent-coral to-accent-gold text-white hover:shadow-accent-coral/20'
                                                            : 'bg-ink-700 text-cream-50 hover:bg-ink-600 hover:shadow-ink-200/30'
                                                        }`}
                                                >
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.116 1.52 5.854L.053 23.681a.5.5 0 00.613.613l5.826-1.468A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.78 9.78 0 01-5.202-1.49l-.373-.222-3.87.975.99-3.822-.243-.387A9.818 9.818 0 1112 21.818z" fillRule="evenodd" clipRule="evenodd" />
                                                    </svg>
                                                    Get in Touch
                                                </a>
                                            </div>
                                        );
                                    })}
                                </div>

                                <p className="text-center font-body text-[0.6rem] text-ink-300 mt-6 flex items-center justify-center gap-1.5">
                                    <svg className="w-3 h-3 text-ink-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Prices do not include domain & hosting
                                </p>
                            </div>
                        </div>
                    )
                }
            </div >
        </section >
    );
}