import React, { useEffect, useState } from "react";

const BackgroundStars = ({
  numStars = 170, 
  color = "white",
  className,
  fade = true,
  ...props
}) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: numStars }, () => ({
        x: Math.random() * 100, 
        y: Math.random() * 100, 
        size: Math.random() * 2 + 0.5, 
        delay: Math.random() * 5, 
      }));
    };
    setStars(generateStars());
  }, [numStars]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
      style={{
        maskImage: fade
          ? `radial-gradient(ellipse at top, white, transparent 70%)`
          : undefined,
        WebkitMaskImage: fade
          ? `radial-gradient(ellipse at top, white, transparent 70%)`
          : undefined,
      }}
      {...props}
    >
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute rounded-full animate-twinkle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: color,
            top: `${star.y}%`,
            left: `${star.x}%`,
            animationDelay: `${star.delay}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default BackgroundStars;
