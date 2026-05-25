import { Reveal } from '../ui/Reveal';
import { heroStats } from '../../data/stats';
import styles from './Stats.module.css';

export function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {heroStats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className={styles.cell}>
              <span className={styles.value}>
                {stat.num}
                <span className={styles.suffix}>{stat.suffix}</span>
              </span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
