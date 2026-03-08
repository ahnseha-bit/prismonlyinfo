import React, { useEffect, useRef } from 'react';

const COLORS = ['#FF85A1', '#4CC9FE', '#48E19F', '#B377FF'];

export default function BackgroundStars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    let stars = [];
    let shootingStars = [];
    let animationFrameId;

    function draw4PointedStar(x, y, size, rotation, color) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotation);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(0, -size); 
        ctx.quadraticCurveTo(0, 0, size, 0); 
        ctx.quadraticCurveTo(0, 0, 0, size); 
        ctx.quadraticCurveTo(0, 0, -size, 0); 
        ctx.quadraticCurveTo(0, 0, 0, -size); 
        ctx.fill();
        ctx.restore();
    }

    class Star {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 6 + 2;
            this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
            this.opacity = Math.random() * 0.5 + 0.3;
            this.blink = 0.005 + Math.random() * 0.012;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotSpeed = (Math.random() - 0.5) * 0.03;
        }
        draw() {
            this.opacity += this.blink;
            if (this.opacity > 0.9 || this.opacity < 0.2) this.blink *= -1;
            this.rotation += this.rotSpeed;

            ctx.globalAlpha = Math.max(0, this.opacity);
            draw4PointedStar(this.x, this.y, this.size, this.rotation, this.color);
        }
    }

    class ShootingStar {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * width + 200;
            this.y = Math.random() * height * 0.2 - 200;
            this.len = Math.random() * 100 + 200;
            this.speed = Math.random() * 2 + 6;
            this.opacity = 1;
            this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
            this.headThickness = 4; 
        }
        draw() {
            const grad = ctx.createLinearGradient(this.x, this.y, this.x + this.len, this.y - this.len);
            grad.addColorStop(0, this.color);
            grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

            ctx.save();
            ctx.globalAlpha = Math.max(0, this.opacity);
            ctx.fillStyle = grad;

            const offset = this.headThickness / 2;
            
            ctx.beginPath();
            ctx.moveTo(this.x + offset, this.y + offset);
            ctx.lineTo(this.x - offset, this.y - offset);
            ctx.lineTo(this.x + this.len, this.y - this.len);
            ctx.closePath();
            ctx.fill();
            
            draw4PointedStar(this.x, this.y, 8, this.x * 0.03, this.color);
            ctx.restore();

            this.x -= this.speed;
            this.y += this.speed;
            this.opacity -= 0.005;
            
            return this.opacity > 0;
        }
    }

    function init() {
        width = window.innerWidth;
        height = window.innerHeight;
        // Handle High DPI displays
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        
        stars = Array.from({ length: 70 }, () => new Star());
    }

    let spawnTimeoutId;
    function spawn() {
        if (shootingStars.length < 3) shootingStars.push(new ShootingStar());
        spawnTimeoutId = setTimeout(spawn, Math.random() * 3000 + 1500);
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        stars.forEach(s => s.draw());
        shootingStars = shootingStars.filter(ss => ss.draw());
        animationFrameId = requestAnimationFrame(animate);
    }

    window.addEventListener('resize', init);
    init(); 
    spawn(); 
    animate();

    return () => {
        window.removeEventListener('resize', init);
        cancelAnimationFrame(animationFrameId);
        clearTimeout(spawnTimeoutId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
