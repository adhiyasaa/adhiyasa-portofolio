import { useState, useEffect, useRef } from 'react';

const SECTIONS = [
    { id: 'home', label: 'Home', icon: '✧', color: '#6B8DAE' },
    { id: 'about', label: 'About', icon: '☺', color: '#5B9A8B' },
    { id: 'projects', label: 'Projects', icon: '◈', color: '#E07A5F' },
    { id: 'contact', label: 'Contact', icon: '✉', color: '#8B7EC8' },
];

export default function ScrollTimeline() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
    const [sectionPositions, setSectionPositions] = useState([]);
    const lineRef = useRef(null);

    useEffect(() => {
        const calcPositions = () => {
            const positions = SECTIONS.map(s => {
                const el = document.getElementById(s.id);
                if (!el) return 0;
                const rect = el.getBoundingClientRect();
                const top = rect.top + window.scrollY;
                return top / (document.documentElement.scrollHeight - window.innerHeight);
            });
            setSectionPositions(positions);
        };

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min(scrollTop / docHeight, 1);
            setScrollProgress(progress);

            // Find active section
            const sections = ['contact', 'projects', 'about', 'home'];
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200) {
                        const idx = SECTIONS.findIndex(s => s.id === id);
                        setActiveIndex(idx);
                        break;
                    }
                }
            }
        };

        calcPositions();
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', calcPositions);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', calcPositions);
        };
    }, []);

    return (
        <div className="fixed left-6 xl:left-10 top-0 bottom-0 z-40 hidden lg:flex flex-col items-center pointer-events-none">
            {/* Full height track */}
            <div className="relative w-px h-full" ref={lineRef}>
                {/* Background track line */}
                <div className="absolute inset-0 w-px bg-ink-100/30" />

                {/* Progress fill */}
                <div
                    className="absolute top-0 left-0 w-px transition-all duration-200 ease-out"
                    style={{
                        height: `${scrollProgress * 100}%`,
                        background: `linear-gradient(to bottom, #6B8DAE, #5B9A8B, #E07A5F, #8B7EC8)`,
                    }}
                />

                {/* Glowing head at current progress */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full transition-all duration-200 ease-out"
                    style={{
                        top: `${scrollProgress * 100}%`,
                        background: SECTIONS[activeIndex]?.color || '#6B8DAE',
                        boxShadow: `0 0 10px ${SECTIONS[activeIndex]?.color || '#6B8DAE'}60, 0 0 20px ${SECTIONS[activeIndex]?.color || '#6B8DAE'}30`,
                        transform: 'translate(-50%, -50%)',
                    }}
                />

                {/* Section nodes */}
                {SECTIONS.map((section, i) => {
                    const pos = sectionPositions[i] || (i / (SECTIONS.length - 1));
                    const isActive = i === activeIndex;
                    const isPast = i < activeIndex;

                    return (
                        <div
                            key={section.id}
                            className="absolute left-1/2 -translate-x-1/2 flex items-center pointer-events-auto cursor-pointer group"
                            style={{ top: `${pos * 100}%`, transform: 'translate(-50%, -50%)' }}
                            onClick={() => {
                                const el = document.getElementById(section.id);
                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            {/* Node circle */}
                            <div
                                className={`relative flex items-center justify-center rounded-full border-2 transition-all duration-500 ${isActive
                                        ? 'w-8 h-8 border-transparent scale-110'
                                        : isPast
                                            ? 'w-5 h-5 border-transparent'
                                            : 'w-5 h-5 border-ink-200/50 bg-cream-50'
                                    }`}
                                style={isActive || isPast ? {
                                    background: section.color,
                                    boxShadow: isActive ? `0 0 12px ${section.color}50` : 'none',
                                } : {}}
                            >
                                <span className={`transition-all duration-300 select-none ${isActive ? 'text-white text-sm' : isPast ? 'text-white text-[0.5rem]' : 'text-ink-300 text-[0.5rem]'
                                    }`}>
                                    {section.icon}
                                </span>

                                {/* Pulse ring for active */}
                                {isActive && (
                                    <span
                                        className="absolute inset-0 rounded-full animate-ping opacity-20"
                                        style={{ background: section.color }}
                                    />
                                )}
                            </div>

                            {/* Label tooltip on hover */}
                            <div className={`absolute left-full ml-4 whitespace-nowrap transition-all duration-300 ${isActive
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                                }`}>
                                <span
                                    className={`px-3 py-1.5 rounded-full text-[0.55rem] font-mono tracking-widest uppercase font-bold shadow-lg border ${isActive
                                            ? 'text-white border-transparent'
                                            : 'text-ink-500 bg-white/90 backdrop-blur-sm border-ink-100/50'
                                        }`}
                                    style={isActive ? { background: section.color, borderColor: 'transparent' } : {}}
                                >
                                    {section.label}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
