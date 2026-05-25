import styles from './DonutChart.module.css';

export function DonutChart({ pct, color, size = 80, label }) {
  const radius = size / 2 - 8;
  const circumference = 2 * Math.PI * radius;
  const dash = (pct / 100) * circumference;

  return (
    <div className={styles.wrap}>
      <div className={styles.ring} style={{ width: size, height: size }}>
        <svg width={size} height={size} className={styles.svg} role="img" aria-label={`${pct} percent ${label ?? ''}`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={6}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={6}
            strokeDasharray={`${dash} ${circumference - dash}`}
            strokeLinecap="round"
          />
        </svg>
        <span className={styles.value} style={{ color, fontSize: size * 0.26 }}>
          {pct}%
        </span>
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
}
