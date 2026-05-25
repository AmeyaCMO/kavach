import { Reveal } from '../ui/Reveal';
import { SectionLabel } from '../ui/SectionLabel';
import { networkTiers } from '../../data/stats';
import styles from './NetworkEffect.module.css';

export function NetworkEffect() {
  return (
    <section className={styles.section}>
      <Reveal>
        <SectionLabel align="center">The network effect</SectionLabel>
        <h2 className={styles.title}>
          The more companies join,<br />
          the safer <span className={styles.accent}>everyone</span> becomes.
        </h2>
      </Reveal>

      <div className={styles.grid}>
        {networkTiers.map((tier) => (
          <Reveal key={tier.n}>
            <article className={styles.card}>
              <span className={`${styles.value} ${tier.accent ? styles.valueAccent : ''}`}>
                {tier.n}
              </span>
              <h3 className={styles.cardTitle}>{tier.title}</h3>
              <p className={styles.cardDesc}>{tier.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <blockquote className={styles.quote}>
          <span className={styles.quoteLabel}>The CIBIL analogy:</span>{' '}
          CIBIL changed how India lends money — before it, every bank decided in
          isolation. After it, one default followed you everywhere.{' '}
          <span className={styles.quoteHighlight}>
            KAVACH does for workforce trust what CIBIL did for credit.
          </span>{' '}
          One verified record, portable across the entire ecosystem.
        </blockquote>
      </Reveal>
    </section>
  );
}
