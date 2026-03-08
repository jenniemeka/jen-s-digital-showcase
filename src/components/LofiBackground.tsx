import { useEffect, useRef } from "react";

const LofiBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Floating shapes
    const shapes = Array.from({ length: 18 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 8 + Math.random() * 40,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.25,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.004,
      type: Math.floor(Math.random() * 4), // 0=circle, 1=square, 2=triangle, 3=line
      opacity: 0.03 + Math.random() * 0.06,
      hue: Math.random() > 0.5 ? 25 : 200, // warm orange or cool blue
    }));

    // Stars / dots
    const stars = Array.from({ length: 50 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 1 + Math.random() * 2,
      twinkleSpeed: 0.005 + Math.random() * 0.015,
      phase: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Floating shapes
      shapes.forEach((s) => {
        s.x += s.speedX;
        s.y += s.speedY;
        s.rotation += s.rotSpeed;

        // Wrap around
        if (s.x < -60) s.x = canvas.width + 60;
        if (s.x > canvas.width + 60) s.x = -60;
        if (s.y < -60) s.y = canvas.height + 60;
        if (s.y > canvas.height + 60) s.y = -60;

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);
        ctx.globalAlpha = s.opacity;
        ctx.strokeStyle = `hsl(${s.hue} 70% 60%)`;
        ctx.lineWidth = 1.5;

        if (s.type === 0) {
          ctx.beginPath();
          ctx.arc(0, 0, s.size, 0, Math.PI * 2);
          ctx.stroke();
        } else if (s.type === 1) {
          ctx.strokeRect(-s.size / 2, -s.size / 2, s.size, s.size);
        } else if (s.type === 2) {
          ctx.beginPath();
          ctx.moveTo(0, -s.size);
          ctx.lineTo(s.size * 0.866, s.size * 0.5);
          ctx.lineTo(-s.size * 0.866, s.size * 0.5);
          ctx.closePath();
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.moveTo(-s.size, 0);
          ctx.lineTo(s.size, 0);
          ctx.stroke();
        }
        ctx.restore();
      });

      // Twinkling stars
      stars.forEach((star) => {
        const alpha = 0.15 + 0.15 * Math.sin(time * star.twinkleSpeed + star.phase);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = "hsl(210 15% 92%)";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Subtle scan line effect
      ctx.globalAlpha = 0.015;
      for (let y = 0; y < canvas.height; y += 4) {
        ctx.fillStyle = "hsl(220 20% 5%)";
        ctx.fillRect(0, y, canvas.width, 1);
      }

      // Film grain noise (very subtle)
      ctx.globalAlpha = 0.025;
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      // Only do grain every 3rd frame for performance
      if (time % 3 === 0) {
        for (let i = 0; i < data.length; i += 16) {
          const v = Math.random() * 255;
          data[i] = v;
          data[i + 1] = v;
          data[i + 2] = v;
          data[i + 3] = 12;
        }
        ctx.putImageData(imageData, 0, 0);
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none print:hidden"
      aria-hidden="true"
    />
  );
};

export default LofiBackground;
