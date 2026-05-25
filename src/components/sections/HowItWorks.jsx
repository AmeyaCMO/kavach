import { Reveal } from '../ui/Reveal';
import { SectionLabel } from '../ui/SectionLabel';
import { Button } from '../ui/Button';
import { ArrowRight } from '../../icons';
import { onboardingSteps } from '../../data/steps';
import { LOGIN_URL } from '../../data/nav';
import { colors } from '../../styles/tokens';
import styles from './HowItWorks.module.css';

const toneColor = {
  accent: colors.accent,
  info:    colors.info,
  success: colors.success,
  danger:  colors.danger,
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <header className={styles.header}>
        <Reveal>
          <SectionLabel>How it works</SectionLabel>
          <h2 className={styles.title}>
            From unknown to verified —{' '}
            <span className={styles.accent}>permanently.</span>
          </h2>
        </Reveal>
      </header>

      <div className={styles.body}>
        <Reveal className={styles.pitch}>
          <p>
            Every driver enters KAVACH once. Their identity, history, and risk
            profile follow them forever — across every company on the network.
          </p>
          <Button href={LOGIN_URL} size="lg">
            Start verifying <ArrowRight size={14} />
          </Button>
        </Reveal>

        <Reveal delay={0.15}>
          <ol className={styles.steps}>
            {onboardingSteps.map(({ num, Icon, title, desc, tone }, i) => {
              const color = toneColor[tone];
              return (
                <li key={num} className={styles.step}>
                  {i < onboardingSteps.length - 1 && (
                    <span className={styles.line} style={{ background: `${color}55` }} />
                  )}
                  <span
                    className={styles.bullet}
                    style={{ color, borderColor: `${color}99`, background: `${color}1f` }}
                  >
                    <Icon size={22} />
                  </span>
                  <div className={styles.stepBody}>
                    <span className={styles.stepNum} style={{ color }}>Step {num}</span>
                    <h3 className={styles.stepTitle}>{title}</h3>
                    <p className={styles.stepDesc}>{desc}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
