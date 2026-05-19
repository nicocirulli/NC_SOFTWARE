import { useEffect, useRef } from 'react';

const PARTICLE_COUNT  = 72;
const MAX_DIST        = 130;
const BASE_SPEED      = 0.18;
const MOUSE_RADIUS    = 130;
const MOUSE_FORCE     = 0.022;

function initParticles(w, h) {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x:  Math.random() * w,
    y:  Math.random() * h,
    vx: (Math.random() - 0.5) * BASE_SPEED,
    vy: (Math.random() - 0.5) * BASE_SPEED,
    r:  Math.random() * 1.3 + 0.4,
    o:  Math.random() * 0.35 + 0.08,
  }));
}

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const stateRef  = useRef({ particles: [], mouse: { x: -9999, y: -9999 }, raf: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    const state  = stateRef.current;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      state.particles = initParticles(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener('resize', resize);

    const onMouse = (e) => { state.mouse.x = e.clientX; state.mouse.y = e.clientY; };
    window.addEventListener('mousemove', onMouse);

    const tick = () => {
      const { particles, mouse } = state;
      const { width: W, height: H } = canvas;

      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        const dx   = p.x - mouse.x;
        const dy   = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS && dist > 0) {
          const f = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * MOUSE_FORCE;
          p.vx += (dx / dist) * f;
          p.vy += (dy / dist) * f;
        }

        p.vx *= 0.992;
        p.vy *= 0.992;

        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > BASE_SPEED * 2.5) {
          p.vx = (p.vx / spd) * BASE_SPEED * 2.5;
          p.vy = (p.vy / spd) * BASE_SPEED * 2.5;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -12) p.x = W + 12;
        else if (p.x > W + 12) p.x = -12;
        if (p.y < -12) p.y = H + 12;
        else if (p.y > H + 12) p.y = -12;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.o})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.10;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.lineWidth   = 0.5;
            ctx.stroke();
          }
        }
      }

      state.raf = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(state.raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
    };
  }, []);

  return (
    <>
      {/* ── Aurora gradient orbs ── */}
      <div aria-hidden="true" style={{ position:'fixed', inset:0, zIndex:0, pointerEvents:'none', overflow:'hidden' }}>
        <div style={{
          position:'absolute', top:'-25%', left:'-15%',
          width:'80vw', height:'80vw', borderRadius:'50%',
          background:'radial-gradient(circle, rgba(120,60,255,0.07) 0%, transparent 58%)',
          animation:'bgOrbA 28s ease-in-out infinite',
        }} />
        <div style={{
          position:'absolute', top:'5%', right:'-20%',
          width:'70vw', height:'70vw', borderRadius:'50%',
          background:'radial-gradient(circle, rgba(0,170,255,0.055) 0%, transparent 58%)',
          animation:'bgOrbB 34s ease-in-out infinite',
        }} />
        <div style={{
          position:'absolute', bottom:'-15%', left:'25%',
          width:'55vw', height:'55vw', borderRadius:'50%',
          background:'radial-gradient(circle, rgba(0,210,140,0.045) 0%, transparent 58%)',
          animation:'bgOrbC 40s ease-in-out infinite',
        }} />
      </div>

      {/* ── Particle canvas ── */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position:'fixed', inset:0, zIndex:1, pointerEvents:'none' }}
      />

      <style>{`
        @keyframes bgOrbA {
          0%,100% { transform: translate(0,0) scale(1); }
          30%      { transform: translate(6vw, 10vh) scale(1.12); }
          65%      { transform: translate(-4vw, -6vh) scale(0.93); }
        }
        @keyframes bgOrbB {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(-8vw, 6vh) scale(1.08); }
          70%      { transform: translate(5vw, -9vh) scale(1.14); }
        }
        @keyframes bgOrbC {
          0%,100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(-5vw, -7vh) scale(1.1); }
        }
      `}</style>
    </>
  );
}
