import { Reveal } from '../ui/Reveal';
import { SectionLabel } from '../ui/SectionLabel';
import { features } from '../../data/features';
import { colors } from '../../styles/tokens';
import styles from './Features.module.css';

const toneColor = {
  accent:   colors.accent,
  info:     colors.info,
  success:  colors.success,
  danger:   colors.danger,
  critical: colors.critical,
};

export function Features() {
  return (
    <section id="features" className={styles.section}>
      <header className={styles.header}>
        <Reveal>
          <SectionLabel align="center">Why KAVACH?</SectionLabel>
          <h2 className={styles.title}>
            The problem is structural.<br />
            The solution is KAVACH.
          </h2>
          <p className={styles.lede}>
            Kavach ensures that drivers flagged for theft or misconduct cannot
            re-enter the network as an unknown risk.
          </p>
        </Reveal>
      </header>

      <div className={styles.grid}>
        {features.map(({ Icon, title, desc, tone }, i) => {
          const color = toneColor[tone];
          return (
            <Reveal key={title} delay={i * 0.07}>
              <article className={styles.card}>
                <span className={styles.cardRule} style={{ background: color }} />
                <div className={styles.iconBox} style={{ color, background: `${color}1f` }}>
                  <Icon size={22} />
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{desc}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
