"use client";

import { useEffect, useState, useCallback } from "react";
import { Sparkles } from "lucide-react";

interface SparkleProps {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
}

export function BackgroundSparkles() {
  const [mounted, setMounted] = useState(false);
  const [cursorSparkles, setCursorSparkles] = useState<SparkleProps[]>([]);
  const [sparkleIdCounter, setSparkleIdCounter] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle mouse move to generate cursor-tracking sparkles
  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Only spawn a new sparkle roughly 1 in every 5 mouse move events to prevent overwhelming the DOM
    if (Math.random() > 0.2) return;

    const newSparkle: SparkleProps = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY + window.scrollY, // Adjust to page scroll
      size: Math.random() * 12 + 6, // 6px to 18px
      rotation: Math.random() * 180,
    };

    setCursorSparkles((prev) => [...prev, newSparkle]);

    // Automatically remove the sparkle after it fades out (1s)
    setTimeout(() => {
      setCursorSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
    }, 1000);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mounted, handleMouseMove]);

  if (!mounted) return null;

  // Pre-generate some random global ambient background sparkles
  const ambientSparkles = Array.from({ length: 20 }).map((_, i) => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const animationDelay = Math.random() * 5;
    const animationDuration = Math.random() * 4 + 3; // 3 to 7s

    return (
      <div
        key={`ambient-${i}`}
        className="fixed text-purple-400 opacity-0 animate-ambient-sparkle pointer-events-none z-0"
        style={{
          left: `${left}vw`,
          top: `${top}vh`,
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay}s`,
        }}
      >
        <Sparkles size={Math.random() * 16 + 8} fill="currentColor" />
      </div>
    );
  });

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {ambientSparkles}
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-50">
        {cursorSparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute text-purple-500 animate-cursor-sparkle drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]"
            style={{
              left: `${sparkle.x}px`,
              top: `${sparkle.y}px`,
              transform: `translate(-50%, -50%) rotate(${sparkle.rotation}deg)`,
            }}
          >
            <Sparkles size={sparkle.size} fill="currentColor" />
          </div>
        ))}
      </div>
    </>
  );
}
