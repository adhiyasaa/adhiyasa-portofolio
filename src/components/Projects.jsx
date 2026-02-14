import { useState, useEffect, useCallback } from 'react';
import { useInView } from '../hooks/useAnimations';
import { SiReact, SiNodedotjs, SiLeaflet, SiRailway, SiTailwindcss, SiVite, SiHtml5, SiCss3, SiJavascript, SiNextdotjs, SiVercel, SiMongodb, SiExpress, SiCssmodules, SiWebpack, SiPostgresql, SiDocker } from 'react-icons/si';

// Import project images explicitly
import arah1 from '../assets/arah1.png';
import arah2 from '../assets/arah2.png';
import arah3 from '../assets/arah3.png';
import griyasatya1 from '../assets/griyasatya1.png';
import griyasatya2 from '../assets/griyasatya2.png';
import griyasatya3 from '../assets/griyasatya3.png';
import warp1 from '../assets/warp1.png';
import warp2 from '../assets/warp2.png';
import warp3 from '../assets/warp3.png';
import ceic1 from '../assets/ceic1.png';
import ceic2 from '../assets/ceic2.png';
import ceic3 from '../assets/ceic3.png';

// Image mapping helper
const projectImages = {
    arah: [arah1, arah2, arah3],
    griyasatya: [griyasatya1, griyasatya2, griyasatya3],
    warp: [warp1, warp2, warp3],
    ceic: [ceic1, ceic2, ceic3]
};

const PROJECTS = [
    {
        id: 'arah',
        title: "Arah",
        type: "ML Web App",
        desc: "A machine learning–powered web application that recommends university majors based on user preferences and academic profiles. Built with a Webpack-bundled frontend, Node.js backend, and Leaflet for interactive campus mapping. Deployed on Railway for scalable hosting.",
        tech: ["Webpack", "Javascript", "Node.js", "Leaflet", "Railway"],
        link: "https://arah-production.up.railway.app/",
        color: "from-accent-blue/10 to-accent-teal/10",
        borderColor: "hover:border-accent-blue/50",
        accent: "text-accent-blue"
    },
    {
        id: 'griyasatya',
        title: "GriyaSatya",
        type: "Real Estate Platform",
        desc: "A responsive real estate landing page and property catalog built with React and Tailwind CSS. Features dynamic unit listings, pricing tables, and integrated contact forms — optimized for SEO and fast page loads via server-side rendering.",
        tech: ["React", "Tailwind CSS", "Javascript", "Node.js"],
        link: "https://griyasatya.vercel.app/",
        color: "from-accent-teal/10 to-accent-blue/10",
        borderColor: "hover:border-accent-teal/50",
        accent: "text-accent-teal"
    },
    {
        id: 'warp',
        title: "Warp",
        type: "AI Civic Report System",
        desc: "An AI-driven government reporting platform for detecting and classifying public facility damage. Features image-based damage detection, interactive Leaflet maps for geotagged reports, and a PostgreSQL-backed Express API with a React dashboard for monitoring submissions.",
        tech: ["Express", "React", "Node.js", "Leaflet", "PostgreSQL", "Docker"],
        link: "https://warp-app.up.railway.app/",
        color: "from-accent-lavender/10 to-accent-coral/10",
        borderColor: "hover:border-accent-lavender/50",
        accent: "text-accent-lavender"
    },
    {
        id: 'ceic',
        title: "CEIC",
        type: "Competition Platform",
        desc: "The official website for the Civil Engineering International Competition (CEIC) at Diponegoro University. Serves as the central hub for event showcases, competition details, schedules, and an integrated participant registration portal with real-time form validation.",
        tech: ["React", "CSS Modules", "Tailwind CSS"],
        link: "https://ceicundip.com/",
        color: "from-accent-coral/10 to-accent-gold/10",
        borderColor: "hover:border-accent-coral/50",
        accent: "text-accent-coral"
    }
];


// Tech Icons Mapping — using react-icons/si (SimpleIcons) for authentic brand logos
const TECH_ICONS = {
    "React": <SiReact className="w-full h-full" color="#61DAFB" />,
    "Node.js": <SiNodedotjs className="w-full h-full" color="#339933" />,
    "Leaflet": <SiLeaflet className="w-full h-full" color="#199900" />,
    "Railway": <SiRailway className="w-full h-full" color="#0B0D0E" />,
    "Tailwind CSS": <SiTailwindcss className="w-full h-full" color="#06B6D4" />,
    "Vite": <SiVite className="w-full h-full" color="#646CFF" />,
    "HTML": <SiHtml5 className="w-full h-full" color="#E34F26" />,
    "CSS": <SiCss3 className="w-full h-full" color="#1572B6" />,
    "Javascript": <SiJavascript className="w-full h-full" color="#F7DF1E" />,
    "Next.js": <SiNextdotjs className="w-full h-full" color="#000000" />,
    "Vercel": <SiVercel className="w-full h-full" color="#000000" />,
    "MongoDB": <SiMongodb className="w-full h-full" color="#47A248" />,
    "Express": <SiExpress className="w-full h-full" color="#000000" />,
    "CSS Modules": <SiCssmodules className="w-full h-full" color="#000000" />,
    "Webpack": <SiWebpack className="w-full h-full" color="#8DD6F9" />,
    "PostgreSQL": <SiPostgresql className="w-full h-full" color="#4169E1" />,
    "Docker": <SiDocker className="w-full h-full" color="#2496ED" />,
};

const TechIcon = ({ name }) => {
    return (
        <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center hover:scale-125 transition-transform duration-200" title={name}>
            {TECH_ICONS[name] || <span className="text-[0.45rem] font-bold text-ink-400">{name ? name.substring(0, 2) : '??'}</span>}
        </div>
    );
};

export default function Projects() {
    const [headerRef, headerVisible] = useInView({ triggerOnce: false });
    const [gridRef, gridVisible] = useInView({ threshold: 0.1, triggerOnce: false });
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <section id="projects" className="py-16 lg:py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FDFBF7 0%, #F0F4FA 35%, #FDFBF7 50%, #FBF3EE 75%, #FDFBF7 100%)' }}>
            {/* Background Decorations */}
            <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-accent-blue/5 blur-3xl" />
            <div className="absolute bottom-20 left-0 w-60 h-60 rounded-full bg-accent-coral/5 blur-3xl" />
            <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-accent-lavender/5 blur-2xl" />
            <div className="absolute top-1/3 left-1/4 w-36 h-36 rounded-full bg-accent-gold/4 blur-2xl animate-float" />

            {/* Decorative Icons */}
            <div className="absolute top-24 right-10 opacity-[0.03] animate-float-slow hidden lg:block">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-ink-600">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
            </div>
            <div className="absolute bottom-20 left-10 opacity-[0.03] animate-float-delayed hidden lg:block">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-ink-600">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
            </div>

            {/* 🚀 Rocket doodle — top left */}
            <div className="absolute top-[10%] left-[5%] animate-float select-none hidden md:block" style={{ animationDelay: '0.8s' }}>
                <svg width="36" height="44" viewBox="0 0 36 48" fill="none" className="opacity-[0.15] -rotate-[30deg]">
                    <path d="M18 4c-4 6-8 14-8 24h16c0-10-4-18-8-24z" fill="#E07A5F" opacity="0.5" />
                    <circle cx="18" cy="22" r="3" fill="#FDFBF7" opacity="0.6" />
                    <path d="M10 28c-4 0-6 4-6 8l6-4" fill="#6B8DAE" opacity="0.4" />
                    <path d="M26 28c4 0 6 4 6 8l-6-4" fill="#6B8DAE" opacity="0.4" />
                    <path d="M15 32l3 10 3-10" fill="#D4A03C" opacity="0.5" />
                </svg>
            </div>

            {/* 🧩 Puzzle piece — bottom right */}
            <div className="absolute bottom-[15%] right-[6%] animate-wiggle select-none hidden md:block" style={{ animationDelay: '1.2s' }}>
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" className="opacity-[0.15]">
                    <path d="M10 5h8v5a4 4 0 008 0V5h8v10h-5a4 4 0 000 8h5v12H10V23h5a4 4 0 000-8h-5z" fill="#5B9A8B" opacity="0.5" />
                </svg>
            </div>

            {/* Scattered sparkles */}
            <span className="absolute top-[25%] left-[12%] text-accent-coral/25 text-lg animate-wiggle select-none">✦</span>
            <span className="absolute bottom-[30%] right-[15%] text-accent-teal/20 text-sm animate-float select-none">✧</span>
            <span className="absolute top-[55%] left-[8%] text-accent-lavender/15 text-xs animate-bounce-subtle select-none">◆</span>
            <span className="absolute bottom-[45%] right-[5%] text-accent-gold/20 text-lg animate-float-delayed select-none">★</span>

            {/* Floating colored dots */}
            <div className="absolute top-[15%] left-[25%] w-2 h-2 rounded-full bg-accent-coral/20 animate-float" style={{ animationDelay: '0.2s' }} />
            <div className="absolute bottom-[25%] right-[22%] w-1.5 h-1.5 rounded-full bg-accent-blue/25 animate-bounce-subtle" style={{ animationDelay: '0.9s' }} />
            <div className="absolute top-[40%] right-[35%] w-2 h-2 rounded-full bg-accent-teal/15 animate-float-delayed" />
            <div className="absolute bottom-[50%] left-[20%] w-1.5 h-1.5 rounded-full bg-accent-lavender/20 animate-wiggle" style={{ animationDelay: '1.5s' }} />

            {/* Orbit ring */}
            <svg className="absolute top-[8%] right-[3%] w-24 h-24 opacity-[0.05] animate-spin-slow hidden lg:block" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="38" stroke="#E07A5F" strokeWidth="1.5" fill="none" strokeDasharray="6 8" />
                <circle cx="50" cy="12" r="2.5" fill="#E07A5F" />
            </svg>

            {/* Cross/Plus */}
            <svg className="absolute top-[30%] right-[8%] w-4 h-4 opacity-[0.10] animate-wiggle hidden md:block" viewBox="0 0 16 16" style={{ animationDelay: '0.4s' }}>
                <line x1="8" y1="2" x2="8" y2="14" stroke="#5B9A8B" strokeWidth="2" strokeLinecap="round" />
                <line x1="2" y1="8" x2="14" y2="8" stroke="#5B9A8B" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg className="absolute bottom-[12%] left-[8%] w-3 h-3 opacity-[0.08] animate-bounce-subtle hidden md:block" viewBox="0 0 16 16" style={{ animationDelay: '1.8s' }}>
                <line x1="8" y1="2" x2="8" y2="14" stroke="#6B8DAE" strokeWidth="2" strokeLinecap="round" />
                <line x1="2" y1="8" x2="14" y2="8" stroke="#6B8DAE" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* Wavy line — left side */}
            <svg className="absolute top-[45%] left-0 w-12 h-20 opacity-[0.06] hidden md:block" viewBox="0 0 40 80">
                <path d="M20 5 Q35 20 20 40 Q5 60 20 75" stroke="#D4A03C" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div ref={headerRef} className={`reveal ${headerVisible ? 'visible' : ''}`}>
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-8">
                        <span className="text-accent-coral text-lg">✦</span>
                        <span className="font-mono text-xs tracking-[0.3em] text-ink-300 uppercase">Selected Work</span>
                        <div className="flex-1 h-px bg-gradient-to-r from-ink-100 via-accent-blue/20 to-transparent hidden lg:block" />
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-700 mb-2 text-center lg:text-left">
                        Recent Projects
                    </h2>
                    <h2 className="font-sketch text-3xl sm:text-4xl mb-8 text-center lg:text-left">
                        <span className="text-accent-blue">showcasing</span>{' '}
                        <span className="text-accent-coral">my work</span>{' '}
                        <span className="text-accent-teal">✦</span>
                    </h2>
                </div>

                {/* Projects Grid */}
                <div ref={gridRef} className={`grid md:grid-cols-2 gap-6 stagger-children ${gridVisible ? 'visible' : ''}`}>
                    {PROJECTS.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={() => openModal(project)}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={closeModal} />
            )}
        </section>
    );
}

// Sub-component: Project Card — Browser-mockup style
function ProjectCard({ project, onClick }) {
    const images = projectImages[project.id] || [];

    return (
        <div
            onClick={onClick}
            className={`group relative rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 bg-white border border-ink-100/60 ${project.borderColor}`}
        >
            {/* Gradient Background Accent */}
            <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${project.color} opacity-40 blur-2xl pointer-events-none`} />
            <div className={`absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr ${project.color} opacity-30 blur-2xl pointer-events-none`} />

            {/* Image Area — Browser Mockup */}
            <div className={`relative overflow-hidden bg-gradient-to-br ${project.color}`}>
                {/* Browser Chrome Bar */}
                <div className="relative z-20 flex items-center gap-2 px-4 py-2.5 bg-ink-800/90 backdrop-blur-sm">
                    {/* Traffic Light Dots */}
                    <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                    </div>
                    {/* URL Bar */}
                    <div className="flex-1 mx-2 px-3 py-1 bg-ink-700/60 rounded-md flex items-center gap-2 overflow-hidden">
                        <svg className="w-3 h-3 text-ink-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                        <span className="font-mono text-[0.55rem] text-ink-400 truncate">{project.link.replace('https://', '')}</span>
                    </div>
                </div>

                {/* Screenshot Area */}
                <div className="relative h-52 overflow-hidden">
                    {/* Subtle dot pattern */}
                    <div className="absolute inset-0 opacity-[0.04] z-10" style={{
                        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                        backgroundSize: '16px 16px'
                    }} />

                    <img
                        src={images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Hover glass overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end justify-center pb-5">
                        <span className="px-5 py-2 bg-white/95 backdrop-blur-sm rounded-full text-xs font-bold text-ink-700 shadow-xl transform translate-y-6 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            View Details
                        </span>
                    </div>
                </div>
            </div>

            {/* Content Area */}
            <div className="p-5 sm:p-6 flex flex-col flex-1 relative">
                {/* Type Badge */}
                <div className="mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.55rem] font-bold uppercase tracking-widest ${project.accent} bg-cream-50 border border-ink-100/40`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${project.accent.replace('text-', 'bg-')}`} />
                        {project.type}
                    </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-ink-700 mb-2 group-hover:text-accent-blue transition-colors duration-300">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-ink-400 leading-relaxed line-clamp-3 mb-5">
                    {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="mt-auto flex items-center gap-2 pt-4 border-t border-ink-100/40">
                    <div className="flex items-center gap-1 flex-wrap">
                        {project.tech.map((t, i) => (
                            <div key={i} className="flex items-center gap-1 px-2 py-1 rounded-md bg-cream-50/80 border border-ink-50 hover:border-accent-blue/30 transition-colors">
                                <TechIcon name={t} />
                                <span className="hidden sm:inline font-mono text-[0.5rem] text-ink-400 font-medium">{t}</span>
                            </div>
                        ))}
                    </div>
                    {/* Arrow */}
                    <div className="ml-auto flex-shrink-0 p-2 rounded-full border border-ink-100 text-ink-300 group-hover:bg-accent-blue group-hover:border-accent-blue group-hover:text-white transition-all duration-300">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Sub-component: Detail Modal
function ProjectModal({ project, onClose }) {
    const images = projectImages[project.id] || [];
    const [currentImageIdx, setCurrentImageIdx] = useState(0);

    // Prevent body scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, []);

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIdx((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIdx((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" onClick={onClose}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-ink-900/70 backdrop-blur-md animate-fade-in" />

            {/* Modal Content - Enlarged Card Style */}
            <div
                className="relative bg-cream-100/50 backdrop-blur-sm rounded-2xl overflow-hidden sketch-border w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-scale-up shadow-2xl"
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-50 p-2.5 bg-white/90 backdrop-blur rounded-full border border-ink-200 hover:bg-white hover:border-ink-300 transition-all shadow-lg group"
                >
                    <svg className="w-5 h-5 text-ink-600 group-hover:text-ink-800 group-hover:rotate-90 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Gradient Background Accents */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${project.color} opacity-40 pointer-events-none`}></div>
                <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${project.color} opacity-30 pointer-events-none`}></div>

                {/* Image Carousel Section */}
                <div className="relative group bg-cream-100/30 p-6 sm:p-8">
                    <div className="relative w-full h-[350px] sm:h-[450px] flex items-center justify-center bg-white/40 rounded-xl overflow-hidden border border-ink-100/50 shadow-inner">
                        {/* Decorative Background Pattern */}
                        <div className="absolute inset-0 opacity-[0.02]" style={{
                            backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)',
                            backgroundSize: '24px 24px'
                        }}></div>

                        {/* Main Image */}
                        <img
                            src={images[currentImageIdx]}
                            alt={`${project.title} screenshot ${currentImageIdx + 1}`}
                            className="max-w-full max-h-full object-contain relative z-10 rounded-lg shadow-lg"
                        />

                        {/* Navigation Controls */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/95 hover:bg-white rounded-full shadow-lg border border-ink-100 transition-all hover:scale-110 z-20"
                                    aria-label="Previous image"
                                >
                                    <svg className="w-5 h-5 text-ink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/95 hover:bg-white rounded-full shadow-lg border border-ink-100 transition-all hover:scale-110 z-20"
                                    aria-label="Next image"
                                >
                                    <svg className="w-5 h-5 text-ink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                {/* Image Indicators */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full border border-ink-100">
                                    {images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setCurrentImageIdx(idx);
                                            }}
                                            className={`transition-all rounded-full ${idx === currentImageIdx
                                                ? 'w-8 h-2 bg-ink-700'
                                                : 'w-2 h-2 bg-ink-300 hover:bg-ink-400'
                                                }`}
                                            aria-label={`Go to image ${idx + 1}`}
                                        />
                                    ))}
                                </div>

                                {/* Image Counter */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-ink-100 text-xs font-mono text-ink-600 font-semibold">
                                    {currentImageIdx + 1} / {images.length}
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 bg-white/70 backdrop-blur-sm relative">
                    {/* Type Badge and Title */}
                    <div className="mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border mb-4"
                            style={{
                                backgroundColor: `${project.color.split('/')[0].replace('from-', 'var(--')}`.replace('accent-blue', 'rgba(147, 197, 253, 0.1)').replace('accent-teal', 'rgba(94, 234, 212, 0.1)').replace('accent-coral', 'rgba(251, 146, 120, 0.1)').replace('accent-lavender', 'rgba(196, 181, 253, 0.1)'),
                                borderColor: `${project.accent.replace('text-', 'var(--')}`.replace('accent-blue', 'rgba(147, 197, 253, 0.3)').replace('accent-teal', 'rgba(94, 234, 212, 0.3)').replace('accent-coral', 'rgba(251, 146, 120, 0.3)').replace('accent-lavender', 'rgba(196, 181, 253, 0.3)')
                            }}
                        >
                            <span className={`w-2 h-2 rounded-full ${project.accent.replace('text-', 'bg-')}`}></span>
                            <span className={`font-mono text-[0.6rem] font-bold uppercase tracking-widest ${project.accent}`}>
                                {project.type}
                            </span>
                        </div>

                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink-800 mb-3">
                            {project.title}
                        </h2>

                        <p className="font-body text-ink-500 leading-relaxed text-base">
                            {project.desc}
                        </p>
                    </div>

                    {/* Tech Stack Icons */}
                    <div className="mb-8">
                        <h4 className="font-heading text-xs font-bold text-ink-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                            <span className="text-accent-teal">✦</span>
                            Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {project.tech.map(t => (
                                <TechIcon key={t} name={t} />
                            ))}
                        </div>
                    </div>

                    {/* Action Button */}
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 bg-gradient-to-r from-ink-600 to-ink-500 text-cream-50 px-8 py-4 rounded-full font-heading text-sm font-medium hover:shadow-xl hover:shadow-accent-blue/20 hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Visit Live Site
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                {/* Corner Decorations */}
                <svg className="absolute top-4 left-4 w-6 h-6 text-ink-200 opacity-40" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 8 L1 1 L8 1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg className="absolute bottom-4 right-4 w-6 h-6 text-ink-200 opacity-40" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12 L19 19 L12 19" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    );
}