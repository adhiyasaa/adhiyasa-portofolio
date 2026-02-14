/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: {
                    50: '#FDFBF7',
                    100: '#FAF6EE',
                    200: '#F5EDDB',
                    300: '#EDE0C4',
                    400: '#E0CFA5',
                },
                ink: {
                    50: '#E8E6E3',
                    100: '#C4C0BA',
                    200: '#9B958C',
                    300: '#7A736A',
                    400: '#5C554D',
                    500: '#3D3832',
                    600: '#2C2722',
                    700: '#1E1A16',
                    800: '#141210',
                    900: '#0A0908',
                },
                accent: {
                    blue: '#6B8DAE',
                    teal: '#5B9A8B',
                    coral: '#E07A5F',
                    gold: '#D4A574',
                    lavender: '#8B7EC8',
                },
            },
            fontFamily: {
                display: ['"Playfair Display"', 'serif'],
                heading: ['"Space Grotesk"', 'sans-serif'],
                body: ['"Inter"', 'sans-serif'],
                mono: ['"Fira Code"', 'monospace'],
                sketch: ['"Caveat"', 'cursive'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 2s infinite',
                'float-slow': 'float 8s ease-in-out 1s infinite',
                'float-reverse': 'floatReverse 7s ease-in-out infinite',
                'spin-slow': 'spin 20s linear infinite',
                'spin-reverse': 'spinReverse 25s linear infinite',
                'draw': 'draw 1.5s ease forwards',
                'fade-in': 'fadeIn 0.8s ease forwards',
                'fade-in-up': 'fadeInUp 0.8s ease forwards',
                'fade-in-down': 'fadeInDown 0.6s ease forwards',
                'fade-in-left': 'fadeInLeft 0.8s ease forwards',
                'fade-in-right': 'fadeInRight 0.8s ease forwards',
                'slide-in-right': 'slideInRight 0.6s ease forwards',
                'scale-in': 'scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                'blink': 'blink 1s step-end infinite',
                'wiggle': 'wiggle 3s ease-in-out infinite',
                'wiggle-fast': 'wiggle 1.5s ease-in-out infinite',
                'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
                'pulse-ring': 'pulseRing 2s ease-out infinite',
                'morph': 'morph 8s ease-in-out infinite',
                'dash': 'dash 2s ease-in-out forwards',
                'typewriter': 'typewriter 3s steps(30) forwards',
                'gradient-x': 'gradientX 6s ease infinite',
                'shimmer': 'shimmer 2.5s ease-in-out infinite',
                'marquee': 'marquee 20s linear infinite',
                'reveal-up': 'revealUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                'reveal-down': 'revealDown 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
                'stagger-in': 'fadeInUp 0.5s ease forwards',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-14px)' },
                },
                floatReverse: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(10px) rotate(5deg)' },
                },
                fadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                fadeInUp: {
                    from: { opacity: '0', transform: 'translateY(30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInDown: {
                    from: { opacity: '0', transform: 'translateY(-20px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInLeft: {
                    from: { opacity: '0', transform: 'translateX(-30px)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
                },
                fadeInRight: {
                    from: { opacity: '0', transform: 'translateX(30px)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    from: { opacity: '0', transform: 'translateX(-20px)' },
                    to: { opacity: '1', transform: 'translateX(0)' },
                },
                scaleIn: {
                    from: { opacity: '0', transform: 'scale(0.8)' },
                    to: { opacity: '1', transform: 'scale(1)' },
                },
                draw: {
                    from: { strokeDashoffset: '1000' },
                    to: { strokeDashoffset: '0' },
                },
                blink: {
                    '50%': { opacity: '0' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                bounceSubtle: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-6px)' },
                },
                pulseRing: {
                    '0%': { transform: 'scale(1)', opacity: '1' },
                    '100%': { transform: 'scale(1.8)', opacity: '0' },
                },
                morph: {
                    '0%, 100%': { borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%' },
                    '25%': { borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%' },
                    '50%': { borderRadius: '50% 60% 30% 60%/30% 60% 70% 40%' },
                    '75%': { borderRadius: '60% 40% 60% 30%/40% 50% 60% 50%' },
                },
                dash: {
                    from: { strokeDasharray: '0 1000' },
                    to: { strokeDasharray: '1000 0' },
                },
                typewriter: {
                    from: { width: '0' },
                    to: { width: '100%' },
                },
                gradientX: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                marquee: {
                    from: { transform: 'translateX(0)' },
                    to: { transform: 'translateX(-50%)' },
                },
                revealUp: {
                    from: { opacity: '0', transform: 'translateY(100%)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                revealDown: {
                    from: { opacity: '0', transform: 'translateY(-100%)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                spinReverse: {
                    from: { transform: 'rotate(360deg)' },
                    to: { transform: 'rotate(0deg)' },
                },
            },
            transitionTimingFunction: {
                'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                'smooth-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
            },
        },
    },
    plugins: [],
}
