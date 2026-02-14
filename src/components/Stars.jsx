import { useEffect, useRef } from 'react';

export default function Stars() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let stars = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            stars = [];
            const numStars = Math.floor((canvas.width * canvas.height) / 10000); // Density
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5,
                    vx: (Math.random() - 0.5) * 0.2, // Slow movement
                    vy: (Math.random() - 0.5) * 0.2,
                    alpha: Math.random(),
                    dAlpha: (Math.random() - 0.5) * 0.02
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(147, 197, 253, ${star.alpha})`; // Light blue tint
                ctx.fill();

                // Update position
                star.x += star.vx;
                star.y += star.vy;

                // Update alpha (twinkle)
                star.alpha += star.dAlpha;
                if (star.alpha <= 0.1 || star.alpha >= 0.8) star.dAlpha *= -1;

                // Wrap around screen
                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas(); // Init
        draw(); // Start loop

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
            style={{ opacity: 0.6 }}
        />
    );
}
