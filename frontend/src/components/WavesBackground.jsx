"use client";
import { cn } from "../Utils/cn.jsx";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 7,
  speed = "fast",
  waveOpacity = 0.5,
  positions = [0.1,0.2, 0.3,0.4,0.5,0.6,0.7,0.8, 0.9,0.95, 0.99], // Default positions for waves
  ...props
}) => {
  const noise = createNoise3D();
  let w, h, nt, i, x, ctx, canvas;
  const canvasRef = useRef(null);
  const animationId = useRef(null); // Use a ref to store the animation frame ID

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    nt = 0;

    window.onresize = function () {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    startAnimation();
  };

  const waveColors = colors ?? [
"#dbeafe",  /* blue-100 */
"#bfdbfe",  /* blue-200 */
"#93c5fd",  /* blue-300 */
"#60a5fa",  /* blue-400 */
"#3b82f6",  /* blue-500 */
"#2563eb",  /* blue-600 */
"#1d4ed8",  /* blue-700 */
"#1e40af",  /* blue-800 */
"#1e3a8a" ,  /* blue-900 */
"#1e3a8a" ,  /* blue-900 */
"#1e3a8a" ,  /* blue-900 */
"#1e3a8a"   /* blue-900 */
  ];

  const drawWave = (n) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 200;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 50;
        const position = positions[i % positions.length]; // Use the position prop
        ctx.lineTo(x, y + h * position); // Apply the position
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  const render = () => {
    ctx.fillStyle = backgroundFill || "white";
    ctx.globalAlpha = waveOpacity || 0.7;
    ctx.fillRect(0, 0, w, h);
    drawWave(positions.length); // Draw waves based on the number of positions

    animationId.current = requestAnimationFrame(render);
  };

  const startAnimation = () => {
    if (!animationId.current) {
      render();
    }
  };

  const stopAnimation = () => {
    if (animationId.current) {
      cancelAnimationFrame(animationId.current);
      animationId.current = null;
    }
  };

  useEffect(() => {
    init();

    // Add visibility change listener
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        startAnimation();
      } else {
        stopAnimation();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup
    return () => {
      stopAnimation();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};

export default WavyBackground;