import { Ban, AlertTriangle } from '../../../icons';
import { blacklistedSample } from '../../../data/drivers';
import styles from './BlacklistTab.module.css';

const fields = [
  ['Aadhaar', blacklistedSample.aadhaar],
  ['PAN', blacklistedSample.pan],
  ['Licence', blacklistedSample.licence],
  ['Local station', blacklistedSample.station],
];

export function BlacklistTab() {
  return (
    <div>
      <h3 className={styles.heading}>Blacklisted drivers</h3>
      <p className={styles.sub}>Once blacklisted — flagged everywhere. No reset. No escape.</p>

      <div className={styles.card}>
        <div className={styles.avatar}>
          <Ban size={20} />
        </div>

        <div className={styles.body}>
          <div className={styles.row}>
            <span className={styles.driverId}>
              {blacklistedSample.code} (ID: {blacklistedSample.id})
            </span>
            <span className={styles.chip}>BLACKLISTED</span>
          </div>

          <dl className={styles.grid}>
            {fields.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          <div className={styles.warning}>
            <AlertTriangle size={14} />
            <span>Alert sent to Super Admin + all network companies. Investigation in progress.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
