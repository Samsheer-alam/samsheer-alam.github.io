import React, { useRef, useEffect } from 'react';
import { useDarkMode } from '../../utils/DarkModeContext';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  speed: { x: number; y: number };
}

const ParticleEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let particles: Particle[] = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function createParticles() {
      for (let i = 0; i < 450; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 0.5 + 2;
        const color = isDarkMode ? 'white' : 'black';
        const speed = { x: Math.random() - 0.1, y: Math.random() - 0.1 };
        particles.push({ x, y, size, color, speed });
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speed.x;
        particle.y += particle.speed.y;

        if (
          particle.x > canvas.width ||
          particle.x < 0 ||
          particle.y > canvas.height ||
          particle.y < 0
        ) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }
      });

      drawLines(); // Draw lines between nearby particles

      requestAnimationFrame(drawParticles);
    }

    function drawLines() {
      ctx.strokeStyle = isDarkMode ? 'rgba(0, 255, 0, 0.1)' : 'rgba(21, 18, 18)';

      particles.forEach((particle) => {
        particles.forEach((otherParticle) => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
            Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
    }

    function handleMouseMove(event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      particles.forEach((particle) => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 40;

        if (distance < maxDistance) {
          const moveSpeed = 0.5;
          particle.x += dx * moveSpeed;
          particle.y += dy * moveSpeed;
        }
      });
    }

    createParticles();
    drawParticles();
    // @ts-ignore
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      // @ts-ignore
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', top: 0, left: 0, zIndex:-10 }}
      className={isDarkMode ? 'dark' : 'light'}
    />
  );
};

export default ParticleEffect;
