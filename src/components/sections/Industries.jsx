import { Reveal } from '../ui/Reveal';
import { SectionLabel } from '../ui/SectionLabel';
import { industries } from '../../data/industries';
import styles from './Industries.module.css';

export function Industries() {
  return (
    <section id="industries" className={styles.section}>
      <div className={styles.layout}>
        <header className={styles.intro}>
          <SectionLabel>Industries</SectionLabel>
          <h2 className={styles.title}>Built for every industry that moves on people.</h2>
          <p className={styles.lede}>
            If your operations depend on drivers, workers, or contractual staff —
            KAVACH was built for you.
          </p>
        </header>

        <div className={styles.grid}>
          {industries.map(({ Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.07}>
              <article className={styles.card}>
                <span className={styles.iconBox}>
                  <Icon size={26} />
                </span>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
