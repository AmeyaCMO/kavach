import { AlertTriangle } from '../../../icons';
import styles from './AlertCard.module.css';

export function AlertCard() {
  return (
    <div className={styles.alert} role="status">
      <span className={styles.iconWrap}>
        <AlertTriangle size={18} />
      </span>
      <div>
        <div className={styles.title}>Blacklist match detected</div>
        <p className={styles.body}>
          Driver K017 attempted re-entry at Transporter 2. Biometric matched a blacklisted profile.
          Alert sent to 4 parties.
        </p>
        <div className={styles.meta}>2 minutes ago · Investigation deployed</div>
      </div>
    </div>
  );
}
