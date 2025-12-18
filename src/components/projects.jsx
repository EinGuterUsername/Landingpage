import Reveal from "./reveal";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section>
      <h2>Weitere Projekte</h2>

      <div className="grid">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 80}>
            <div className="card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

