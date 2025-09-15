import React, { useState, useEffect, useRef } from 'react';

import "../styles/AnimatedCounter.css";

export default function AnimatedCounter({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '', 
  className = '',
  triggerOnView = true 
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(!triggerOnView);
  const countRef = useRef(null);

  useEffect(() => {
    if (!triggerOnView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [triggerOnView, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrame = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * end);
      
      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={countRef} className={className}>
      <span className="counter-text">
        {prefix}{count}{suffix}
      </span>
    </div>
  );
}