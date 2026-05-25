import styles from './ShieldBadge.module.css';
import { colors } from '../../../styles/tokens';

const orbitDots = [
  { deg: 0,   color: colors.success },
  { deg: 72,  color: colors.accent },
  { deg: 144, color: colors.critical },
  { deg: 216, color: colors.danger },
  { deg: 288, color: colors.info },
];

export function ShieldBadge() {
  return (
    <div className={styles.float}>
      <div className={styles.shield}>
        <div className={styles.inner}>
          <span className={styles.deva}>क</span>
          <span className={styles.word}>VACH</span>
          <span className={styles.tag}>VERIFIED</span>
        </div>
      </div>

      {orbitDots.map((d) => (
        <span
          key={d.deg}
          className={styles.dot}
          style={{
            transform: `rotate(${d.deg}deg) translateX(108px)`,
            background: d.color,
            boxShadow: `0 0 8px ${d.color}`,
          }}
        />
      ))}
    </div>
  );
}
