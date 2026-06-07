import { useEffect, useRef } from "react";

interface Drop {
  x: number;
  y: number;
  len: number;
  speed: number;
  opacity: number;
}

// 轻量 canvas 雨滴动画，营造梅雨氛围
export default function RainCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let drops: Drop[] = [];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = reduce ? 0 : Math.floor((canvas.width * canvas.height) / 9000);
      drops = Array.from({ length: count }, () => makeDrop(canvas.height, true));
    };

    const makeDrop = (h: number, init = false): Drop => ({
      x: Math.random() * (canvas.width + 200) - 100,
      y: init ? Math.random() * h : -20,
      len: 8 + Math.random() * 18,
      speed: 6 + Math.random() * 9,
      opacity: 0.08 + Math.random() * 0.22,
    });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineCap = "round";
      for (const d of drops) {
        ctx.strokeStyle = `rgba(150, 180, 210, ${d.opacity})`;
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - 1.5, d.y + d.len);
        ctx.stroke();
        d.y += d.speed;
        d.x -= 0.6;
        if (d.y > canvas.height) {
          Object.assign(d, makeDrop(canvas.height));
        }
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    if (!reduce) draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
