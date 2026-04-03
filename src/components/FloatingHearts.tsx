"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export function FloatingHearts() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Generate 15 distinct hearts with randomized properties
  const hearts = Array.from({ length: 15 }).map((_, i) => {
    const size = Math.random() * 24 + 16; // Random size between 16 and 40
    const left = Math.random() * 100; // Random horizontal position
    const animationDuration = Math.random() * 10 + 10; // Between 10 and 20s
    const animationDelay = Math.random() * 10; // Between 0 and 10s

    return (
      <div
        key={i}
        className="absolute bottom-[-100px] text-pink-400 opacity-60 animate-floating-heart pointer-events-none"
        style={{
          left: `${left}%`,
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay}s`,
        }}
      >
        <Heart size={size} fill="currentColor" strokeWidth={1} />
      </div>
    );
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {hearts}
    </div>
  );
}
