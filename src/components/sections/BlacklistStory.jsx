import { Reveal } from '../ui/Reveal';
import { SectionLabel } from '../ui/SectionLabel';
import { Lock } from '../../icons';
import { blacklistStory } from '../../data/blacklistStory';
import { colors } from '../../styles/tokens';
import styles from './BlacklistStory.module.css';

const toneColor = {
  critical: '#D4900A',
  danger:   colors.danger,
  info:     colors.info,
  success:  colors.success,
};

export function BlacklistStory() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Reveal>
          <SectionLabel align="center" tone="danger">The central blacklist</SectionLabel>
          <h2 className={styles.title}>
            Once blacklisted.<br />
            <span className={styles.accent}>Flagged everywhere.</span>
          </h2>
          <p className={styles.lede}>
            No name change. No document swap. No escape from a biometric record.
          </p>
        </Reveal>
      </header>

      <div className={styles.grid}>
        {blacklistStory.map(({ Icon, title, desc, tone }, i) => {
          const color = toneColor[tone];
          return (
            <Reveal key={title} delay={i * 0.1}>
              <article className={styles.card}>
                <span className={styles.cardNum} style={{ color: `${color}1f` }}>0{i + 1}</span>
                <div className={styles.iconBox} style={{ color, background: `${color}1a`, borderColor: `${color}55` }}>
                  <Icon size={22} />
                </div>
                <h3 className={styles.cardTitle} style={{ color }}>{title}</h3>
                <p className={styles.cardDesc}>{desc}</p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2}>
        <aside className={styles.privacy}>
          <span className={styles.lockIcon}><Lock size={24} /></span>
          <div>
            <h3 className={styles.privacyTitle}>Privacy guaranteed</h3>
            <p className={styles.privacyDesc}>
              Super Admin sees zero individual company data. Each Admin’s
              environment is isolated. Only biometric blacklist matches cross
              company boundaries — protecting privacy while eliminating repeat
              offenders.
            </p>
          </div>
        </aside>
      </Reveal>
    </section>
  );
}
