
import React, { useRef, useEffect } from 'react';

const HeroParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 70; // Adjust for density

    const setCanvasSize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    
    class Particle {
        x: number;
        y: number;
        dx: number;
        dy: number;
        radius: number;

        constructor(x: number, y: number, dx: number, dy: number, radius: number) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
        }

        draw() {
            if(!ctx) return;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.fill();
        }

        update() {
            if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        }
    }
    
    const init = () => {
        setCanvasSize();
        particles = [];
        const isMobile = canvas.width < 768;
        const count = isMobile ? 40 : particleCount;
        for (let i = 0; i < count; i++) {
            const radius = Math.random() * 1.5 + 1;
            const x = Math.random() * (canvas.width - radius * 2) + radius;
            const y = Math.random() * (canvas.height - radius * 2) + radius;
            const dx = (Math.random() - 0.5) * 0.5;
            const dy = (Math.random() - 0.5) * 0.5;
            particles.push(new Particle(x, y, dx, dy, radius));
        }
    };

    const connect = () => {
        if(!ctx) return;
        let opacityValue = 1;
        const connectDistance = canvas.width < 768 ? 90 : 150;

        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                const distance = Math.sqrt(
                    (particles[a].x - particles[b].x) * (particles[a].x - particles[b].x) +
                    (particles[a].y - particles[b].y) * (particles[a].y - particles[b].y)
                );

                if (distance < connectDistance) {
                    opacityValue = 1 - (distance / connectDistance);
                    ctx.strokeStyle = `rgba(139, 92, 246, ${opacityValue * 0.7})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    };
    
    const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        if(!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const particle of particles) {
            particle.update();
        }
        connect();
    };

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            cancelAnimationFrame(animationFrameId);
            init();
            animate();
        }, 100);
    };
    
    window.addEventListener('resize', handleResize);

    init();
    animate();

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
        clearTimeout(resizeTimeout);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />;
};

export default HeroParticles;
