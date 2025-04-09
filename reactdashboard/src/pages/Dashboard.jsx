import styles from './Dashboard.module.css';

const stats = [
  { label: 'Total Users', value: '12,345', growth: '+12%' },
  { label: 'Monthly Revenue', value: '$56,789', growth: '+8%' },
  { label: 'Active Sessions', value: '1,234', growth: '+5%' },
  { label: 'Support Tickets', value: '87', growth: '-2%' },
];

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.heading}>Dashboard Overview</h1>

      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statCard}>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
            <div
              className={`${styles.statGrowth} ${stat.growth.startsWith('-') ? styles.negative : styles.positive}`}
            >
              {stat.growth}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
