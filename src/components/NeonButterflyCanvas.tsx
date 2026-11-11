import React, { useEffect, useRef } from 'react';
import { ButterflyParticle } from '../types/wedding';

interface NeonButterflyCanvasProps {
  isScrollingDown?: boolean;
}

export const triggerButterflyBurst = (x?: number, y?: number, count = 25) => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('trigger-butterflies', {
        detail: { x, y, count },
      })
    );
  }
};

// Elegant Brown & Bronze-Gold palette ("Kupu-kupu cokelat - Cokelat Elegan")
const BROWN_BUTTERFLY_COLORS = [
  '#c59b6d', // Warm golden bronze
  '#a56f3e', // Deep bronze amber
  '#875128', // Rich chestnut brown
  '#d6ab7b', // Soft honey gold
  '#b37a44', // Classic copper bronze
  '#e2c299', // Champagne caramel
];

export const NeonButterflyCanvas: React.FC<NeonButterflyCanvasProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const butterfliesRef = useRef<ButterflyParticle[]>([]);
  const sparklesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; alpha: number; size: number; color: string }>>([]);
  const animFrameIdRef = useRef<number | null>(null);
  const lastScrollYRef = useRef<number>(0);
  const lastScrollTimeRef = useRef<number>(0);

  // Spawn small brown butterflies from bottom-right flying towards top-left
  const spawnScrollButterflies = (count = 3) => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    for (let i = 0; i < count; i++) {
      // Spawn origin: Bottom-Right corner area
      const originX = width - Math.random() * 120 + 20;
      const originY = height - Math.random() * 140 + 20;

      // Trajectory towards Top-Left
      const speed = 2.8 + Math.random() * 3.4;
      const angle = -Math.PI * 0.72 + (Math.random() - 0.5) * 0.45;

      const color = BROWN_BUTTERFLY_COLORS[Math.floor(Math.random() * BROWN_BUTTERFLY_COLORS.length)];

      butterfliesRef.current.push({
        id: Math.random(),
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        // Dainty & delicate size ("kecilin")
        size: 7 + Math.random() * 8,
        rotation: angle + Math.PI / 2,
        rotationSpeed: (Math.random() - 0.5) * 0.04,
        wingPhase: Math.random() * Math.PI * 2,
        wingSpeed: 0.35 + Math.random() * 0.2,
        alpha: 0.95,
        color,
        glowColor: '#c59b6d',
        life: 0,
        maxLife: 230 + Math.random() * 100,
        scale: 0.55 + Math.random() * 0.45,
      });

      // Warm golden bronze stardust trail
      sparklesRef.current.push({
        x: originX,
        y: originY,
        vx: (Math.random() - 0.5) * 2 - 1.2,
        vy: (Math.random() - 0.5) * 2 - 1.2,
        alpha: 0.9,
        size: 1.5 + Math.random() * 2,
        color: '#d6ab7b',
      });
    }
  };

  // Spawn a radiant burst of small golden-brown butterflies
  const spawnBurstButterflies = (count = 25, customX?: number, customY?: number) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const originX = customX ?? width / 2;
    const originY = customY ?? height / 2;

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
      const speed = 3.0 + Math.random() * 4.5;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed - 1.0;
      const flightAngle = Math.atan2(vy, vx);
      const color = BROWN_BUTTERFLY_COLORS[Math.floor(Math.random() * BROWN_BUTTERFLY_COLORS.length)];

      butterfliesRef.current.push({
        id: Math.random(),
        x: originX + (Math.random() - 0.5) * 25,
        y: originY + (Math.random() - 0.5) * 25,
        vx,
        vy,
        // Smaller refined size
        size: 7.5 + Math.random() * 8,
        rotation: flightAngle + Math.PI / 2,
        rotationSpeed: (Math.random() - 0.5) * 0.04,
        wingPhase: Math.random() * Math.PI * 2,
        wingSpeed: 0.38 + Math.random() * 0.22,
        alpha: 1,
        color,
        glowColor: '#c59b6d',
        life: 0,
        maxLife: 200 + Math.random() * 110,
        scale: 0.6 + Math.random() * 0.45,
      });

      // Stardust trail at burst origin
      for (let s = 0; s < 2; s++) {
        sparklesRef.current.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * (speed * 0.55) + (Math.random() - 0.5) * 1.8,
          vy: Math.sin(angle) * (speed * 0.55) - 0.8 + (Math.random() - 0.5) * 1.8,
          alpha: 1,
          size: 1.8 + Math.random() * 2.2,
          color: '#e2c299',
        });
      }
    }
  };

  // Scroll Down & Custom Event Detection
  useEffect(() => {
    lastScrollYRef.current = window.scrollY;
    let touchStartY = 0;

    const triggerSpawn = (intensity = 3) => {
      const now = performance.now();
      if (now - lastScrollTimeRef.current > 75) {
        spawnScrollButterflies(intensity);
        lastScrollTimeRef.current = now;
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollYRef.current;

      // Scrolling DOWN
      if (deltaY > 1.5) {
        const count = Math.min(4, Math.max(2, Math.floor(deltaY / 12)));
        triggerSpawn(count);
      }
      lastScrollYRef.current = currentScrollY;
    };

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 1.5) {
        triggerSpawn(3);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches[0]) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches[0]) {
        const currentTouchY = e.touches[0].clientY;
        const deltaTouch = touchStartY - currentTouchY;
        if (deltaTouch > 5) {
          triggerSpawn(2);
          touchStartY = currentTouchY;
        }
      }
    };

    const handleCustomTrigger = (e: Event) => {
      const customEvent = e as CustomEvent<{ x?: number; y?: number; count?: number }>;
      const { x, y, count } = customEvent.detail || {};
      spawnBurstButterflies(count ?? 25, x, y);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('trigger-butterflies', handleCustomTrigger);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('trigger-butterflies', handleCustomTrigger);
    };
  }, []);

  // Main Canvas Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Draw single stylized delicate brown butterfly with flapping 3D wings
    const drawButterfly = (b: ButterflyParticle) => {
      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.rotate(b.rotation);
      ctx.scale(b.scale, b.scale);

      const flap = Math.cos(b.wingPhase);
      const wingSpread = Math.max(0.12, Math.abs(flap));

      ctx.shadowColor = b.glowColor;
      ctx.shadowBlur = 12;
      ctx.globalAlpha = Math.max(0, Math.min(1, b.alpha));

      // Left Wing
      ctx.save();
      ctx.scale(wingSpread, 1);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-b.size * 0.8, -b.size * 1.1, -b.size * 1.6, -b.size * 0.8, -b.size * 1.3, -b.size * 0.2);
      ctx.bezierCurveTo(-b.size * 1.1, b.size * 0.1, -b.size * 0.5, 0, 0, 0);
      ctx.bezierCurveTo(-b.size * 0.7, b.size * 0.3, -b.size * 1.1, b.size * 0.9, -b.size * 0.5, b.size * 1.1);
      ctx.bezierCurveTo(-b.size * 0.2, b.size * 0.8, -b.size * 0.1, b.size * 0.3, 0, 0);

      const gradLeft = ctx.createRadialGradient(-b.size * 0.5, -b.size * 0.3, 1.5, -b.size * 0.5, -b.size * 0.3, b.size * 1.2);
      gradLeft.addColorStop(0, '#fdf7ee');
      gradLeft.addColorStop(0.35, b.color);
      gradLeft.addColorStop(0.8, '#875128');
      gradLeft.addColorStop(1, 'rgba(135, 81, 40, 0.45)');
      ctx.fillStyle = gradLeft;
      ctx.fill();

      ctx.strokeStyle = 'rgba(255, 245, 230, 0.7)';
      ctx.lineWidth = 0.8;
      ctx.stroke();
      ctx.restore();

      // Right Wing
      ctx.save();
      ctx.scale(-wingSpread, 1);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-b.size * 0.8, -b.size * 1.1, -b.size * 1.6, -b.size * 0.8, -b.size * 1.3, -b.size * 0.2);
      ctx.bezierCurveTo(-b.size * 1.1, b.size * 0.1, -b.size * 0.5, 0, 0, 0);
      ctx.bezierCurveTo(-b.size * 0.7, b.size * 0.3, -b.size * 1.1, b.size * 0.9, -b.size * 0.5, b.size * 1.1);
      ctx.bezierCurveTo(-b.size * 0.2, b.size * 0.8, -b.size * 0.1, b.size * 0.3, 0, 0);

      const gradRight = ctx.createRadialGradient(-b.size * 0.5, -b.size * 0.3, 1.5, -b.size * 0.5, -b.size * 0.3, b.size * 1.2);
      gradRight.addColorStop(0, '#fdf7ee');
      gradRight.addColorStop(0.35, b.color);
      gradRight.addColorStop(0.8, '#875128');
      gradRight.addColorStop(1, 'rgba(135, 81, 40, 0.45)');
      ctx.fillStyle = gradRight;
      ctx.fill();

      ctx.strokeStyle = 'rgba(255, 245, 230, 0.7)';
      ctx.lineWidth = 0.8;
      ctx.stroke();
      ctx.restore();

      // Butterfly Center Body
      ctx.beginPath();
      ctx.ellipse(0, 0, b.size * 0.09, b.size * 0.45, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#f8ecd9';
      ctx.shadowColor = '#c59b6d';
      ctx.shadowBlur = 8;
      ctx.fill();

      // Antennae
      ctx.beginPath();
      ctx.moveTo(-0.8, -b.size * 0.35);
      ctx.quadraticCurveTo(-b.size * 0.3, -b.size * 0.8, -b.size * 0.45, -b.size * 0.9);
      ctx.moveTo(0.8, -b.size * 0.35);
      ctx.quadraticCurveTo(b.size * 0.3, -b.size * 0.8, b.size * 0.45, -b.size * 0.9);
      ctx.strokeStyle = 'rgba(255, 245, 230, 0.8)';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      ctx.restore();
    };

    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = Math.min((time - lastTime) / 16.67, 2);
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render sparkles
      for (let s = sparklesRef.current.length - 1; s >= 0; s--) {
        const sp = sparklesRef.current[s];
        sp.x += sp.vx * dt;
        sp.y += sp.vy * dt;
        sp.alpha -= 0.018 * dt;

        if (sp.alpha <= 0) {
          sparklesRef.current.splice(s, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, sp.alpha);
        ctx.shadowColor = sp.color;
        ctx.shadowBlur = 10;
        ctx.fillStyle = sp.color;
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Render & update butterflies
      for (let i = butterfliesRef.current.length - 1; i >= 0; i--) {
        const b = butterfliesRef.current[i];
        b.life += dt;
        b.wingPhase += b.wingSpeed * dt;

        const flutterOffset = Math.sin(b.wingPhase * 0.8) * 1.2;
        b.x += (b.vx + flutterOffset * 0.5) * dt;
        b.y += (b.vy - flutterOffset * 0.5) * dt;

        // Drop warm golden stardust trails
        if (Math.random() < 0.28) {
          sparklesRef.current.push({
            x: b.x,
            y: b.y,
            vx: (Math.random() - 0.5) * 1.0,
            vy: (Math.random() - 0.5) * 1.0,
            alpha: b.alpha * 0.75,
            size: 1.2 + Math.random() * 1.8,
            color: b.color,
          });
        }

        if (b.life > b.maxLife * 0.7) {
          b.alpha = 1 - (b.life - b.maxLife * 0.7) / (b.maxLife * 0.3);
        }

        drawButterfly(b);

        const isOffscreen = b.x < -100 || b.y < -100 || b.x > canvas.width + 100 || b.y > canvas.height + 100;
        if (b.life >= b.maxLife || isOffscreen) {
          butterfliesRef.current.splice(i, 1);
        }
      }

      animFrameIdRef.current = requestAnimationFrame(loop);
    };

    animFrameIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[60] w-full h-full"
      aria-hidden="true"
    />
  );
};