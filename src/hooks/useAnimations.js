import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-triggered visibility hook using IntersectionObserver.
 * Returns [ref, isInView] — attach ref to element, isInView triggers animation.
 */
export function useInView(options = {}) {
    const { threshold = 0.15, triggerOnce = true, rootMargin = '0px' } = options;
    const ref = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    if (triggerOnce) observer.unobserve(el);
                } else if (!triggerOnce) {
                    setIsInView(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, triggerOnce, rootMargin]);

    return [ref, isInView];
}

/**
 * Mouse position tracker for parallax effects.
 */
export function useMousePosition() {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (e) => {
            setPos({
                x: (e.clientX / window.innerWidth - 0.5) * 2,
                y: (e.clientY / window.innerHeight - 0.5) * 2,
            });
        };
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    return pos;
}

/**
 * Scroll progress (0 to 1).
 */
export function useScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const total = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(total > 0 ? window.scrollY / total : 0);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return progress;
}

/**
 * Animated counter hook.
 */
export function useCounter(end, duration = 2000, startOnView = false, isInView = true) {
    const [count, setCount] = useState(0);
    const hasRun = useRef(false);

    useEffect(() => {
        if (startOnView && !isInView) return;
        if (hasRun.current) return;
        hasRun.current = true;

        let start = 0;
        const startTime = performance.now();

        const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [end, duration, startOnView, isInView]);

    return count;
}

/**
 * 3D tilt effect on mouse hover.
 * Returns [ref, style] — attach ref to element, spread style on it.
 */
export function useTilt(maxTilt = 8) {
    const ref = useRef(null);
    const [style, setStyle] = useState({
        transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
        transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
    });

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const handleMove = (e) => {
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            const tiltX = (0.5 - y) * maxTilt;
            const tiltY = (x - 0.5) * maxTilt;
            setStyle({
                transform: `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02,1.02,1.02)`,
                transition: 'transform 0.15s ease-out',
            });
        };

        const handleLeave = () => {
            setStyle({
                transform: 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
                transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
            });
        };

        el.addEventListener('mousemove', handleMove);
        el.addEventListener('mouseleave', handleLeave);
        return () => {
            el.removeEventListener('mousemove', handleMove);
            el.removeEventListener('mouseleave', handleLeave);
        };
    }, [maxTilt]);

    return [ref, style];
}

/**
 * Scroll-based parallax offset.
 * Returns a Y offset value that changes as the user scrolls.
 */
export function useParallax(speed = 0.15) {
    const ref = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const center = rect.top + rect.height / 2;
            const viewCenter = window.innerHeight / 2;
            setOffset((center - viewCenter) * speed);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return [ref, offset];
}
