import { useEffect, useRef, useState } from 'react';

export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            const elementTop = rect.top + scrolled;
            const elementHeight = rect.height;
            const windowHeight = window.innerHeight;
            
            // Only apply parallax when element is in viewport
            if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
              const parallaxOffset = (scrolled - elementTop + windowHeight) * speed;
              setOffset(parallaxOffset);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { offset, elementRef };
};
