import { useState, useEffect } from 'react';

export default function Preloader({ onFinish }) {
    const [lines, setLines] = useState([]);
    const [isComplete, setIsComplete] = useState(false);
    const [progressPercent, setProgressPercent] = useState(0);

    const steps = [
        { text: '> initializing core system...', delay: 300, progress: 15 },
        { text: '> loading assets...', delay: 800, progress: 40 },
        { text: '> compiling interface...', delay: 1400, progress: 75 },
        { text: '> system ready.', delay: 2000, progress: 100 },
        { text: 'DONE', delay: 2500 }
    ];

    useEffect(() => {
        let timeouts = [];

        // Smooth progress animation start
        const startProgress = setTimeout(() => setProgressPercent(5), 100);
        timeouts.push(startProgress);

        steps.forEach((step) => {
            const timeout = setTimeout(() => {
                if (step.text === 'DONE') {
                    setIsComplete(true);
                    setTimeout(() => onFinish?.(), 800);
                } else {
                    setLines(prev => [...prev, step.text]);
                    if (step.progress) setProgressPercent(step.progress);
                }
            }, step.delay);
            timeouts.push(timeout);
        });

        return () => timeouts.forEach(clearTimeout);
    }, [onFinish]);

    if (isComplete && !onFinish) return null;

    return (
        <div className={`fixed inset-0 z-[9999] bg-cream-50 flex items-center justify-center transition-opacity duration-700 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="w-full max-w-md px-8">
                {/* Brand */}
                <div className="text-center mb-8">
                    <span className="font-sketch text-3xl">
                        <span className="text-accent-coral animate-pulse">✦</span>{' '}
                        <span className="bg-gradient-to-r from-accent-blue via-accent-lavender to-accent-coral bg-clip-text text-transparent font-bold">adhiyasa</span>
                    </span>
                </div>

                {/* Terminal lines */}
                <div className="font-mono text-sm sm:text-base text-ink-600 mb-8">
                    <div className="space-y-2">
                        {lines.map((line, i) => (
                            <div key={i} className="flex">
                                <span className="text-accent-blue mr-2">➜</span>
                                <span className="animate-fade-in">{line}</span>
                            </div>
                        ))}
                        {!isComplete && (
                            <div className="animate-pulse text-accent-coral">_</div>
                        )}
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-mono text-[0.55rem] text-ink-300 uppercase tracking-widest">Loading</span>
                        <span className="font-mono text-xs font-bold text-ink-500">{progressPercent}%</span>
                    </div>
                    <div className="w-full h-2 bg-cream-200 rounded-full overflow-hidden">
                        <div
                            className="h-full rounded-full scroll-progress transition-all duration-700 ease-out"
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>
                    {/* Subtle dots below bar */}
                    <div className="flex justify-between mt-2">
                        {[0, 1, 2, 3].map(i => (
                            <div
                                key={i}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${progressPercent >= (i + 1) * 25 ? 'bg-accent-blue scale-100' : 'bg-ink-100 scale-75'}`}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Background minimal decoration */}
            <div className="absolute top-0 right-0 p-8 opacity-20 hidden sm:block">
                <div className="w-16 h-16 border-t-2 border-r-2 border-ink-400 rounded-tr-3xl" />
            </div>
            <div className="absolute bottom-0 left-0 p-8 opacity-20 hidden sm:block">
                <div className="w-16 h-16 border-b-2 border-l-2 border-ink-400 rounded-bl-3xl" />
            </div>

            {/* Extra decorative corners */}
            <span className="absolute top-8 left-8 text-accent-blue/10 text-xl">✦</span>
            <span className="absolute bottom-8 right-8 text-accent-coral/10 text-xl">✧</span>
        </div>
    );
}
