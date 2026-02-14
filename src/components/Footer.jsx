import { useInView } from '../hooks/useAnimations';

export default function Footer() {
    const year = new Date().getFullYear();
    const [ref, visible] = useInView({ triggerOnce: false });

    return (
        <footer className="border-t-2 border-ink-100 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FDFBF7 0%, #F0F4FA 35%, #FDFBF7 50%, #FBF3EE 75%, #FDFBF7 100%)' }}>
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-accent-blue/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent-coral/5 to-transparent" />
            {/* Decorative Icon */}
            <div className="absolute top-10 right-10 opacity-[0.05] animate-pulse-ring hidden sm:block">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent-gold">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            </div>

            <div ref={ref} className={`max-w-6xl mx-auto px-6 py-8 reveal ${visible ? 'visible' : ''}`}>
                <div className={`grid sm:grid-cols-3 gap-8 mb-8 stagger-children ${visible ? 'visible' : ''}`}>
                    <div>
                        <a href="#home" className="font-sketch text-2xl inline-block mb-3">
                            <span className="text-accent-coral animate-wiggle inline-block">✦</span>{' '}
                            <span className="bg-gradient-to-r from-accent-blue via-accent-lavender to-accent-coral bg-clip-text text-transparent font-bold">adhiyasa</span>
                        </a>
                        <p className="font-body text-sm text-ink-300 leading-relaxed max-w-xs">
                            Professional <span className="text-accent-blue font-medium">Web Developer</span>. Building{' '}
                            <span className="text-accent-teal font-medium">high-performance apps</span> & crafting{' '}
                            <span className="text-accent-coral font-medium">digital experiences</span>.
                        </p>
                        {/* Color dots */}
                        <div className="flex gap-2 mt-4">
                            {['bg-accent-blue', 'bg-accent-coral', 'bg-accent-teal', 'bg-accent-lavender', 'bg-accent-gold'].map((c, i) => (
                                <div key={i} className={`w-2.5 h-2.5 rounded-full ${c} opacity-50`} />))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-ink-500 mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map(link => (
                                <li key={link}><a href={`#${link.toLowerCase()}`} className="font-body text-sm text-ink-300 hover:text-accent-blue transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-ink-500 mb-4">Connect</h4>
                        <ul className="space-y-2">
                            {[
                                { n: 'GitHub', c: 'hover:text-accent-blue', href: 'https://github.com/adhiyasaa' },
                                { n: 'LinkedIn', c: 'hover:text-accent-teal', href: 'https://www.linkedin.com/in/muhammad-adhiyasa-satya' },
                                { n: 'Instagram', c: 'hover:text-accent-coral', href: 'https://instagram.com/adhiyasast' },
                                { n: 'Email', c: 'hover:text-accent-gold', href: 'mailto:adhiyasa1203@gmail.com' },
                            ].map(s => (
                                <li key={s.n}><a href={s.href} target="_blank" rel="noopener noreferrer" className={`font-body text-sm text-ink-300 ${s.c} transition-colors`}>{s.n}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="border-t border-ink-100 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <p className="font-body text-xs text-ink-200">&copy; {year} Muhammad Adhiyasa Satya Putranto. All rights reserved.</p>
                    <p className="font-body text-xs text-ink-200">
                        Built with <span className="text-accent-coral">♥</span> using <span className="text-accent-blue">React</span> & <span className="text-accent-teal">Tailwind</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
