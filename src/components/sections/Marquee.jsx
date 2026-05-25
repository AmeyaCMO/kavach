import { marqueeItems } from '../../data/stats';
import styles from './Marquee.module.css';

// Duplicate the item list so the loop animation can wrap seamlessly.
const looped = [...marqueeItems, ...marqueeItems];

export function Marquee() {
  return (
    <div className={styles.strip}>
      <ul className={styles.track}>
        {looped.map((item, i) => (
          <li key={`${item}-${i}`} className={styles.item}>
            <span className={styles.dot} /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
