import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    const move = (e) => {
      el.style.left = e.clientX + 'px';
      el.style.top = e.clientY + 'px';
    };

    const expand = () => el.classList.add('expanded');
    const shrink = () => el.classList.remove('expanded');

    document.addEventListener('mousemove', move);

    const targets = document.querySelectorAll('a, button, [data-cursor]');
    targets.forEach(t => {
      t.addEventListener('mouseenter', expand);
      t.addEventListener('mouseleave', shrink);
    });

    // Re-attach on DOM mutations
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(t => {
        t.addEventListener('mouseenter', expand);
        t.addEventListener('mouseleave', shrink);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', move);
      observer.disconnect();
    };
  }, []);

  return <div ref={cursorRef} className="cursor" aria-hidden="true" />;
}
