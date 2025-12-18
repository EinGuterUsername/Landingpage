export default function AppSection() {
  return (
    <section className="section" id="app">
      <div className="sectionHead">
        <h2>My app</h2>
        <p className="muted">The main project lives here.</p>
      </div>

      <p>
        The bigger project runs at app.marcusscherdel.com.
        This landing page is my React playground.
      </p>

      <a className="btn primary" href="https://app.marcusscherdel.com">
        Open app
      </a>
    </section>
  );
}