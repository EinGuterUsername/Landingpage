import Portrait from "./portrait";

export default function About() {
  return (
    <section className="section aboutGrid" id="about">
      <Portrait />

      <div>
        <div className="sectionHead">
          <h2>Über mich</h2>
          <p className="muted">Kurz und ehrlich.</p>
        </div>

        <p>
          Ich bin Softwareentwickler und baue gern praktische Tools – vom Backend bis zur Oberfläche.
          Klare Logik, saubere Strukturen und Lösungen, die man wirklich benutzt.
        </p>
      </div>
    </section>
  );
}
