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

const NEON_PINK_COLORS = [
  '#ff2d87', // Electric neon pink
  '#ff1493', // Deep hot pink
  '#ff007f', // Rose neon
  '#ff69b4', // Bright neon pink
  '#ff70a6', // Soft blossom neon
  '#ff3b9d', // Vibrant magenta-pink
];

export const NeonButterflyCanvas: React.FC<NeonButterflyCanvasProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const butterfliesRef = useRef<ButterflyParticle[]>([]);
  const sparklesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; alpha: number; size: number; color: string }>>([]);
  const animFrameIdRef = useRef<number | null>(null);
  const lastScrollYRef = useRef<number>(0);
  const lastScrollTimeRef = useRef<number>(0);

  // Spawn butterflies from bottom-right flying towards top-left
  const spawnScrollButterflies = (count = 3) => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    for (let i = 0; i < count; i++) {
      // Spawn origin: Bottom-Right corner area
      const originX = width - Math.random() * 120 + 20;
      const originY = height - Math.random() * 140 + 20;

      // Trajectory towards Top-Left (Angle between ~215° and ~245° / radians: -2.3 to -2.7)
      // Moving left (negative vx) and upward (negative vy)
      const speed = 3.5 + Math.random() * 4.2;
      const angle = -Math.PI * 0.72 + (Math.random() - 0.5) * 0.45; // ~ -130°

      const color = NEON_PINK_COLORS[Math.floor(Math.random() * NEON_PINK_COLORS.length)];

      butterfliesRef.current.push({
        id: Math.random(),
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 14 + Math.random() * 18,
        rotation: angle + Math.PI / 2, // Orient butterfly head towards flight direction
        rotationSpeed: (Math.random() - 0.5) * 0.04,
        wingPhase: Math.random() * Math.PI * 2,
        wingSpeed: 0.32 + Math.random() * 0.18,
        alpha: 1,
        color,
        glowColor: '#ff2d87',
        life: 0,
        maxLife: 220 + Math.random() * 100,
        scale: 0.65 + Math.random() * 0.65,
      });

      // Neon pink glowing stardust trail at bottom right origin
      sparklesRef.current.push({
        x: originX,
        y: originY,
        vx: (Math.random() - 0.5) * 2 - 1.5,
        vy: (Math.random() - 0.5) * 2 - 1.5,
        alpha: 0.95,
        size: 2 + Math.random() * 3,
        color: '#ff2d87',
      });
    }
  };

  // Spawn a radiant burst of glowing butterflies from a specific point (e.g. envelope click or RSVP)
  const spawnBurstButterflies = (count = 25, customX?: number, customY?: number) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const originX = customX ?? width / 2;
    const originY = customY ?? height / 2;

    for (let i = 0; i < count; i++) {
      // 360-degree radial trajectory with upward lift
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
      const speed = 3.5 + Math.random() * 5.5;
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed - 1.2;
      const flightAngle = Math.atan2(vy, vx);
      const color = NEON_PINK_COLORS[Math.floor(Math.random() * NEON_PINK_COLORS.length)];

      butterfliesRef.current.push({
        id: Math.random(),
        x: originX + (Math.random() - 0.5) * 30,
        y: originY + (Math.random() - 0.5) * 30,
        vx,
        vy,
        size: 15 + Math.random() * 18,
        rotation: flightAngle + Math.PI / 2,
        rotationSpeed: (Math.random() - 0.5) * 0.04,
        wingPhase: Math.random() * Math.PI * 2,
        wingSpeed: 0.35 + Math.random() * 0.25,
        alpha: 1,
        color,
        glowColor: '#ff2d87',
        life: 0,
        maxLife: 200 + Math.random() * 120,
        scale: 0.75 + Math.random() * 0.65,
      });

      // Stardust trail at burst origin
      for (let s = 0; s < 2; s++) {
        sparklesRef.current.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * (speed * 0.6) + (Math.random() - 0.5) * 2,
          vy: Math.sin(angle) * (speed * 0.6) - 1 + (Math.random() - 0.5) * 2,
          alpha: 1,
          size: 2.5 + Math.random() * 3,
          color: '#ff2d87',
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
        const count = Math.min(5, Math.max(2, Math.floor(deltaY / 12)));
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
        // User swiping finger UP -> page scrolls DOWN
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

    // Draw single stylized neon butterfly with flapping 3D wings
    const drawButterfly = (b: ButterflyParticle) => {
      ctx.save();
      ctx.translate(b.x, b.y);
      ctx.rotate(b.rotation);
      ctx.scale(b.scale, b.scale);

      // Flapping calculation
      const flap = Math.cos(b.wingPhase);
      const wingSpread = Math.max(0.12, Math.abs(flap));

      ctx.shadowColor = b.glowColor;
      ctx.shadowBlur = 16;
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

      const gradLeft = ctx.createRadialGradient(-b.size * 0.5, -b.size * 0.3, 2, -b.size * 0.5, -b.size * 0.3, b.size * 1.2);
      gradLeft.addColorStop(0, '#ffffff');
      gradLeft.addColorStop(0.35, b.color);
      gradLeft.addColorStop(0.8, '#ff2d87');
      gradLeft.addColorStop(1, 'rgba(255, 45, 135, 0.45)');
      ctx.fillStyle = gradLeft;
      ctx.fill();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
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

      const gradRight = ctx.createRadialGradient(-b.size * 0.5, -b.size * 0.3, 2, -b.size * 0.5, -b.size * 0.3, b.size * 1.2);
      gradRight.addColorStop(0, '#ffffff');
      gradRight.addColorStop(0.35, b.color);
      gradRight.addColorStop(0.8, '#ff2d87');
      gradRight.addColorStop(1, 'rgba(255, 45, 135, 0.45)');
      ctx.fillStyle = gradRight;
      ctx.fill();

      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // Butterfly Center Body
      ctx.beginPath();
      ctx.ellipse(0, 0, b.size * 0.1, b.size * 0.45, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#ff2d87';
      ctx.shadowBlur = 10;
      ctx.fill();

      // Antennae
      ctx.beginPath();
      ctx.moveTo(-1, -b.size * 0.35);
      ctx.quadraticCurveTo(-b.size * 0.3, -b.size * 0.8, -b.size * 0.45, -b.size * 0.9);
      ctx.moveTo(1, -b.size * 0.35);
      ctx.quadraticCurveTo(b.size * 0.3, -b.size * 0.8, b.size * 0.45, -b.size * 0.9);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1;
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
        ctx.shadowBlur = 12;
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

        // Flutter oscillation perpendicular to diagonal trajectory
        const flutterOffset = Math.sin(b.wingPhase * 0.8) * 1.4;
        b.x += (b.vx + flutterOffset * 0.6) * dt;
        b.y += (b.vy - flutterOffset * 0.6) * dt;

        // Drop stardust trails
        if (Math.random() < 0.28) {
          sparklesRef.current.push({
            x: b.x,
            y: b.y,
            vx: (Math.random() - 0.5) * 1.2,
            vy: (Math.random() - 0.5) * 1.2,
            alpha: b.alpha * 0.8,
            size: 1.5 + Math.random() * 2.5,
            color: b.color,
          });
        }

        // Fade out as it nears top-left or end of life
        if (b.life > b.maxLife * 0.7) {
          b.alpha = 1 - (b.life - b.maxLife * 0.7) / (b.maxLife * 0.3);
        }

        drawButterfly(b);

        // Remove if offscreen beyond top-left or died
        const isOffscreen = b.x < -150 || b.y < -150 || b.x > canvas.width + 150 || b.y > canvas.height + 150;
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
