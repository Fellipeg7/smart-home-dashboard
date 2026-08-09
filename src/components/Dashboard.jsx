import React, { useEffect, useRef, useState } from 'react';
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

// Dados simulados enquanto o backend MQTT/WebSocket não é integrado
const simulatedReadings = Array.from({ length: 12 }, (_, i) => ({
  label: `${String(i).padStart(2, '0')}:00`,
  consumption: 1.2 + Math.sin(i / 2) * 0.6 + Math.random() * 0.4,
  temperature: 22 + Math.sin(i / 3) * 2 + Math.random() * 1.5,
}));

function Dashboard() {
  const chartRef = useRef(null);
  const canvasRef = useRef(null);
  const [sensors, setSensors] = useState([
    { id: 1, name: 'Temperatura Sala', value: '22.4 °C', status: 'ok', icon: '🌡️' },
    { id: 2, name: 'Umidade', value: '58 %', status: 'ok', icon: '💧' },
    { id: 3, name: 'Consumo Hoje', value: '3.2 kWh', status: 'ok', icon: '⚡' },
    { id: 4, name: 'Presença', value: 'Ativa', status: 'ok', icon: '📡' },
  ]);
  const [devices, setDevices] = useState([
    { id: 1, name: 'Luz da Sala', status: 'Ligada', icon: '💡' },
    { id: 2, name: 'Ar-condicionado', status: 'Desligado', icon: '❄️' },
    { id: 3, name: 'Tomada Cozinha', status: 'Ligada', icon: '🔌' },
  ]);

  // Cria o gráfico de consumo
  useEffect(() => {
    if (!canvasRef.current) return;

    chartRef.current = new Chart(canvasRef.current, {
      type: 'line',
      data: {
        labels: simulatedReadings.map((r) => r.label),
        datasets: [
          {
            label: 'Consumo (kWh)',
            data: simulatedReadings.map((r) => r.consumption),
            borderColor: '#38bdf8',
            backgroundColor: 'rgba(56, 189, 248, 0.15)',
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: '#e2e8f0' } },
        },
        scales: {
          x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148, 163, 184, 0.15)' } },
          y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(148, 163, 184, 0.15)' } },
        },
      },
    });

    return () => {
      if (chartRef.current) chartRef.current.destroy();
    };
  }, []);

  return (
    <div>
      {/* Cards de sensores */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>📡 Sensores</h2>
        <div style={styles.grid}>
          {sensors.map((sensor) => (
            <div key={sensor.id} style={styles.card}>
              <div style={styles.cardIcon}>{sensor.icon}</div>
              <div style={styles.cardBody}>
                <span style={styles.cardLabel}>{sensor.name}</span>
                <span style={styles.cardValue}>{sensor.value}</span>
              </div>
              <span style={{ ...styles.badge, ...(sensor.status === 'ok' ? styles.badgeOk : styles.badgeWarn) }}>
                {sensor.status === 'ok' ? '● Online' : '● Atenção'}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Gráfico de consumo */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>⚡ Consumo de Energia (últimas 12h)</h2>
        <div style={styles.chartContainer}>
          <canvas ref={canvasRef} />
        </div>
      </section>

      {/* Dispositivos */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>💡 Dispositivos</h2>
        <div style={styles.deviceList}>
          {devices.map((device) => (
            <div key={device.id} style={styles.deviceRow}>
              <span style={styles.cardIcon}>{device.icon}</span>
              <span style={styles.deviceName}>{device.name}</span>
              <span style={device.status === 'Ligada' ? styles.deviceOn : styles.deviceOff}>
                {device.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  section: {
    marginBottom: '2.5rem',
  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: 600,
    margin: '0 0 1rem',
    color: '#f1f5f9',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1rem',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1.25rem',
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    border: '1px solid #334155',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  cardIcon: {
    fontSize: '1.75rem',
  },
  cardBody: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  cardLabel: {
    fontSize: '0.8rem',
    color: '#94a3b8',
  },
  cardValue: {
    fontSize: '1.15rem',
    fontWeight: 600,
    color: '#f1f5f9',
  },
  badge: {
    fontSize: '0.7rem',
    padding: '0.25rem 0.6rem',
    borderRadius: '999px',
    fontWeight: 600,
  },
  badgeOk: {
    color: '#4ade80',
    backgroundColor: 'rgba(74, 222, 128, 0.15)',
  },
  badgeWarn: {
    color: '#fbbf24',
    backgroundColor: 'rgba(251, 191, 36, 0.15)',
  },
  chartContainer: {
    position: 'relative',
    height: '320px',
    padding: '1.5rem',
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    border: '1px solid #334155',
  },
  deviceList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  deviceRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem 1.25rem',
    backgroundColor: '#1e293b',
    borderRadius: '12px',
    border: '1px solid #334155',
  },
  deviceName: {
    flex: 1,
    fontWeight: 500,
    color: '#e2e8f0',
  },
  deviceOn: {
    color: '#4ade80',
    fontWeight: 600,
  },
  deviceOff: {
    color: '#94a3b8',
    fontWeight: 600,
  },
};

export default Dashboard;
