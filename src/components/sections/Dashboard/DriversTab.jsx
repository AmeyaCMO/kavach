import { RiskBadge } from '../../ui/RiskBadge';
import { drivers } from '../../../data/drivers';
import { colors } from '../../../styles/tokens';
import styles from './DriversTab.module.css';

const scoreColor = (score) => {
  if (score > 70) return colors.success;
  if (score > 20) return colors.warning;
  return colors.danger;
};

export function DriversTab() {
  return (
    <div>
      <h3 className={styles.heading}>KAVACH verified drivers</h3>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              {['ID', 'Driver', 'Transporter', 'Score', 'Status', ''].map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {drivers.map((d) => (
              <tr key={d.id} className={d.status === 'Blacklisted' ? styles.rowDanger : ''}>
                <td className={styles.id}>{d.id}</td>
                <td className={styles.name}>{d.name}</td>
                <td className={styles.dim}>{d.transporter}</td>
                <td>
                  <div className={styles.scoreCell}>
                    <span className={styles.scoreBar}>
                      <span
                        className={styles.scoreFill}
                        style={{ width: `${d.score}%`, background: scoreColor(d.score) }}
                      />
                    </span>
                    <span className={styles.scoreText}>{d.score}%</span>
                  </div>
                </td>
                <td><RiskBadge level={d.status} /></td>
                <td>
                  <button type="button" className={styles.viewBtn}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
