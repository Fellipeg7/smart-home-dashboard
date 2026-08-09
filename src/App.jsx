import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.title}>🏠 Smart Home Dashboard</h1>
        <p style={styles.subtitle}>
          Monitoramento em tempo real dos seus dispositivos IoT e sensores
        </p>
      </header>
      <main style={styles.main}>
        <Dashboard />
      </main>
      <footer style={styles.footer}>
        <p>Smart Home Dashboard © 2026 — Dados atualizados em tempo real via MQTT + WebSocket</p>
      </footer>
    </div>
  );
}

const styles = {
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#0f172a',
    color: '#e2e8f0',
    fontFamily: "'Segoe UI', 'Inter', system-ui, -apple-system, sans-serif",
  },
  header: {
    textAlign: 'center',
    padding: '2.5rem 1rem 1.5rem',
    background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
    borderBottom: '1px solid #334155',
  },
  title: {
    margin: 0,
    fontSize: '2.2rem',
    fontWeight: 700,
    letterSpacing: '-0.5px',
    color: '#38bdf8',
  },
  subtitle: {
    margin: '0.5rem 0 0',
    fontSize: '1rem',
    color: '#94a3b8',
  },
  main: {
    flex: 1,
    padding: '2rem',
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    boxSizing: 'border-box',
  },
  footer: {
    textAlign: 'center',
    padding: '1rem',
    fontSize: '0.85rem',
    color: '#64748b',
    borderTop: '1px solid #334155',
  },
};

export default App;
