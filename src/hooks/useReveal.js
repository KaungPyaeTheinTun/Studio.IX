import { useEffect, useRef } from 'react';

export function useReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    // Observe direct children with .reveal class, or the el itself
    const revealEls = el.querySelectorAll('.reveal');
    if (revealEls.length) {
      revealEls.forEach((child, i) => {
        child.style.transitionDelay = `${i * 60}ms`;
        observer.observe(child);
      });
    } else {
      el.classList.add('reveal');
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
