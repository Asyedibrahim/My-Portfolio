import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Dot follows with smooth lag
  const dotX = useSpring(cursorX, { stiffness: 150, damping: 20 });
  const dotY = useSpring(cursorY, { stiffness: 150, damping: 20 });

  const isHovering = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show on non-touch devices
    if ('ontouchstart' in window) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleEnter = () => {
      isHovering.current = true;
      dotRef.current?.classList.add('cursor-hover');
      ringRef.current?.classList.add('ring-hover');
    };

    const handleLeave = () => {
      isHovering.current = false;
      dotRef.current?.classList.remove('cursor-hover');
      ringRef.current?.classList.remove('ring-hover');
    };

    window.addEventListener('mousemove', move);

    // Attach hover to all interactive elements
    const interactives = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, [tabindex]'
    );
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    // Re-attach when DOM changes (for dynamic elements)
    const observer = new MutationObserver(() => {
      const freshInteractives = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, [tabindex]'
      );
      freshInteractives.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
        el.addEventListener('mouseenter', handleEnter);
        el.addEventListener('mouseleave', handleLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', move);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  return (
    <>

      {/* Sharp dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: '#a855f7',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 0 10px rgba(168,85,247,0.8)',
        }}
      />

      <style>{`

        .cursor-ring.ring-hover {
          width: 56px !important;
          height: 56px !important;
          border-color: rgba(168, 85, 247, 0.7) !important;
        }

        .cursor-dot.cursor-hover {
          width: 10px !important;
          height: 10px !important;
          box-shadow: 0 0 16px rgba(168, 85, 247, 1) !important;
        }

        @media (hover: none), (pointer: coarse) {
          * { cursor: auto !important; }
          .cursor-ring, .cursor-dot { display: none !important; }
        }
      `}</style>
    </>
  );
}
