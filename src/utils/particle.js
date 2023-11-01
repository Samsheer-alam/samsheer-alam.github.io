import React, { useRef, useEffect } from 'react';

const ParticleEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function createParticles() {
      for (let i = 0; i < 450; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 0.5 + 1;
        const color = 'white';
        const speed = { x: Math.random() - 0.5, y: Math.random() - 0.5 };
        particles.push({ x, y, size, color, speed });
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speed.x;
        particle.y += particle.speed.y;

        if (particle.x > canvas.width || particle.x < 0 || particle.y > canvas.height || particle.y < 0) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }
      });

      drawLines(); // Draw lines between nearby particles

      requestAnimationFrame(drawParticles);
    }

    function drawLines() {
      // ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.strokeStyle = 'rgba(0, 255, 0, 0.1)';

      particles.forEach(particle => {
        particles.forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
            Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < 50) { // Adjust this threshold for line connections
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
    }

    function handleMouseMove(event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      particles.forEach(particle => {
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

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0}} />;
};

export default ParticleEffect;
