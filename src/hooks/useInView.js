import { useEffect, useRef, useState } from "react";

export function useInView({ rootMargin = "0px 0px -10% 0px", threshold = 0.12 } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Wenn User "Reduce motion" aktiviert hat -> keine Animation erzwingen
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect(); // nur einmal animieren
        }
      },
      { rootMargin, threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin, threshold]);

  return { ref, inView };
}
