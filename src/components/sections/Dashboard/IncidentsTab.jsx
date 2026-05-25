import { RiskBadge } from '../../ui/RiskBadge';
import { incidentStats, incidentMatrix } from '../../../data/dashboard';
import { colors } from '../../../styles/tokens';
import styles from './IncidentsTab.module.css';

const toneColor = {
  critical: colors.critical,
  warning: colors.warning,
  success: colors.success,
  danger: colors.danger,
};

const severityColor = {
  Blacklisted: colors.danger,
  Critical: colors.critical,
  Caution: colors.warning,
};

export function IncidentsTab() {
  return (
    <div>
      <h3 className={styles.heading}>Incident category management</h3>

      <div className={styles.cards}>
        {incidentStats.map((s) => (
          <div key={s.label} className={styles.card}>
            <div className={styles.cardValue} style={{ color: toneColor[s.tone] }}>{s.value}</div>
            <div className={styles.cardLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      <div className={styles.matrixHeading}>Incident scoring matrix</div>
      <ul className={styles.matrix}>
        {incidentMatrix.map((inc) => (
          <li key={inc.type} className={styles.row}>
            <span className={styles.type}>{inc.type}</span>
            <RiskBadge level={inc.severity} />
            <span className={styles.bar}>
              <span
                className={styles.fill}
                style={{ width: `${inc.impact}%`, background: severityColor[inc.severity] }}
              />
            </span>
            <span className={styles.impact}>{inc.impact}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
