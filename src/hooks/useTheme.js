import { useEffect, useMemo, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved || "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = useMemo(
    () => () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  return { theme, toggle };
}
