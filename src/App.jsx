import Header from "./components/header";
import About from "./components/about";
import AppSection from "./components/appSection";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Reveal from "./components/reveal";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <Header theme={theme} onToggleTheme={toggle} />

      <Reveal>
        <About />
      </Reveal>

      <Reveal delay={120}>
        <AppSection />
      </Reveal>

      <Reveal delay={240}>
        <Projects />
      </Reveal>

      <Footer />
    </>
  );
}
