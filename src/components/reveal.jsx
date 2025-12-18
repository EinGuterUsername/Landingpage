import { useInView } from "../hooks/useInView";

export default function Reveal({ children, delay = 0 }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "isIn" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
