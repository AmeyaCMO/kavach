import { Truck, Check, AlertTriangle, Ban } from '../../../icons';
import { DonutChart } from '../../charts/DonutChart';
import { BarChart } from '../../charts/BarChart';
import { overviewStats, weeklyUploads, riskDistribution } from '../../../data/dashboard';
import { colors } from '../../../styles/tokens';
import styles from './OverviewTab.module.css';

const iconFor = {
  'Total Transporters': Truck,
  'Kavach Verified':    Check,
  'Caution':            AlertTriangle,
  'Blacklisted':        Ban,
};

const toneColor = {
  info: colors.info,
  success: colors.success,
  warning: colors.warning,
  danger: colors.danger,
};

const barData = weeklyUploads.map((d, i) => ({
  label: d.label,
  value: d.value,
  color: i === 3 ? colors.accentDark : undefined,
}));

export function OverviewTab() {
  return (
    <div>
      <h3 className={styles.heading}>Dashboard overview</h3>

      <div className={styles.cards}>
        {overviewStats.map((s) => {
          const Icon = iconFor[s.label];
          const color = toneColor[s.tone];
          return (
            <div key={s.label} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.cardLabel}>{s.label}</span>
                <Icon size={14} color={color} />
              </div>
              <div className={styles.cardValue} style={{ color }}>{s.value}</div>
            </div>
          );
        })}
      </div>

      <div className={styles.charts}>
        <div className={styles.chartCard}>
          <div className={styles.chartLabel}>Weekly driver uploads</div>
          <BarChart data={barData} height={56} />
        </div>

        <div className={styles.chartCard}>
          <div className={styles.chartLabel}>Driver risk distribution</div>
          <div className={styles.donuts}>
            {riskDistribution.map((r) => (
              <DonutChart key={r.label} pct={r.pct} color={r.color} size={68} label={r.label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
