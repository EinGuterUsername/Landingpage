export default function Header({ theme, onToggleTheme }) {
    return (
      <header className="hero">
        <div className="heroTop">
          <div className="brand">
            <span className="dot" />
            <span>marcusscherdel.com</span>
          </div>
  
          <button className="chip" onClick={onToggleTheme} aria-label="Theme wechseln">
            {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
  
        <h1>Marcus Scherdel</h1>
        <p className="lead">
          Softwareentwickler · Projekte · Tools, die wirklich gebraucht werden
        </p>
  
        <div className="heroCtas">
          <a className="btn primary" href="https://app.marcusscherdel.com">
            Zur App
          </a>
          <a className="btn ghost" href="#projects">
            Projekte ansehen
          </a>
        </div>
      </header>
    );
  }
  