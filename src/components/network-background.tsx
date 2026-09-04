import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

/**
 * Layered animated "electronic network" background.
 * Canvas nodes + links + light pulses, with cursor parallax attraction.
 * Honours prefers-reduced-motion by rendering a single static frame.
 */
export function NetworkBackground({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let raf = 0;
    let t = 0;
    const pointer = { x: -9999, y: -9999 };

    const build = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      width = rect?.width ?? window.innerWidth;
      height = rect?.height ?? 600;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = width < 640 ? 14000 : 11000;
      const count = Math.max(18, Math.min(70, Math.round((width * height) / density)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.4 + 0.8,
      }));
    };

    const linkDistance = () => (width < 640 ? 110 : 155);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const maxD = linkDistance();

      // Layer: connecting circuit lines
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d > maxD) continue;
          const alpha = (1 - d / maxD) * 0.28;
          ctx.strokeStyle = `rgba(23, 174, 196, ${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          // orthogonal "circuit" routing for the tech feel
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();

          // Layer: travelling light pulse on some links
          if (!reduced && d < maxD * 0.7 && (i + j) % 7 === 0) {
            const p = ((t / 120 + (i + j) * 0.13) % 1);
            const px = a.x + (b.x - a.x) * p;
            const py = a.y + (b.y - a.y) * p;
            ctx.fillStyle = `rgba(23, 174, 196, ${0.55 * (1 - Math.abs(0.5 - p) * 2) + 0.1})`;
            ctx.beginPath();
            ctx.arc(px, py, 1.6, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // Layer: nodes
      for (const n of nodes) {
        ctx.fillStyle = "rgba(16, 48, 94, 0.45)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "rgba(23, 174, 196, 0.35)";
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + 2.6, 0, Math.PI * 2);
        ctx.stroke();
      }
    };

    const step = () => {
      t += 1;
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // gentle cursor attraction (parallax feel)
        const dx = pointer.x - n.x;
        const dy = pointer.y - n.y;
        const d = Math.hypot(dx, dy);
        if (d < 140 && d > 0.5) {
          n.x += (dx / d) * 0.22;
          n.y += (dy / d) * 0.22;
        }
      }
      draw();
      raf = requestAnimationFrame(step);
    };

    const onResize = () => {
      build();
      draw();
    };
    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };

    build();
    draw();
    if (!reduced) {
      raf = requestAnimationFrame(step);
      window.addEventListener("pointermove", onPointer, { passive: true });
      window.addEventListener("pointerleave", onLeave);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className={className} aria-hidden="true">
      {/* Layer 1: atmospheric depth */}
      <div className="absolute inset-0 mesh-bg opacity-80" />
      {/* Layer 2+3+4: canvas network */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* Layer 5: foreground glow / readability veil */}
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_75%_20%,transparent,var(--background)_85%)]" />
    </div>
  );
}
