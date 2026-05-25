import styles from './BarChart.module.css';
import { colors } from '../../styles/tokens';

export function BarChart({ data, height = 44 }) {
  const max = Math.max(...data.map((d) => d.value));

  return (
    <div className={styles.chart} style={{ height }}>
      {data.map((d, i) => {
        const heightPx = (d.value / max) * (height - 4);
        const opacity = 0.4 + (i / data.length) * 0.6;
        return (
          <div key={d.label} className={styles.col}>
            <span
              className={styles.bar}
              style={{
                height: Math.max(heightPx, 4),
                background: d.color ?? `rgba(248, 203, 69, ${opacity})`,
              }}
            />
            <span className={styles.label}>{d.label}</span>
          </div>
        );
      })}
    </div>
  );
}

BarChart.accent = colors.accent;
