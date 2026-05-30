import './App.css'

function App() {
  return (
    <div className="app-shell">
      <div className="app-banner">
        <section className="hero">
          <span className="eyebrow">OctoFit Tracker</span>
          <h1>Track workouts, teams, and leaderboard progress</h1>
          <p>
            Modern React 19 + Vite frontend for the OctoFit Tracker multi-tier
            application.
          </p>

          <div className="hero-actions">
            <button type="button">View dashboard</button>
            <a href="#features" className="hero-link">
              Learn more
            </a>
          </div>
        </section>

        <div className="stats-grid">
          <article>
            <h2>4</h2>
            <p>Core modules</p>
          </article>
          <article>
            <h2>5173</h2>
            <p>Frontend port</p>
          </article>
          <article>
            <h2>8000</h2>
            <p>Backend port</p>
          </article>
        </div>
      </div>

      <section id="features" className="features">
        <h2>What OctoFit does</h2>
        <div className="feature-cards">
          <article>
            <h3>Workouts</h3>
            <p>
              Log sessions, track performance, and stay motivated with a clean
              activity dashboard.
            </p>
          </article>
          <article>
            <h3>Teams</h3>
            <p>
              Create teams, collaborate with others, and compete on the leaderboard.
            </p>
          </article>
          <article>
            <h3>Analytics</h3>
            <p>
              Monitor progress with simple stats and a polished user experience.
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default App
