import { Reveal } from '../ui/Reveal';
import { SectionLabel } from '../ui/SectionLabel';
import { Button } from '../ui/Button';
import { ArrowRight } from '../../icons';
import { Dashboard } from './Dashboard/Dashboard';
import { LOGIN_URL } from '../../data/nav';
import styles from './DashboardSection.module.css';

export function DashboardSection() {
  return (
    <section id="dashboard" className={styles.section}>
      <Reveal>
        <header className={styles.header}>
          <SectionLabel align="center">Live product demo</SectionLabel>
          <h2 className={styles.title}>
            The actual KAVACH dashboard.<br />Explore it.
          </h2>
          <p className={styles.lede}>
            Click through the tabs to navigate the real interface — verified
            drivers, incidents, blacklist management, and live risk scores.
          </p>
          <Button href={LOGIN_URL} size="md">
            Open full dashboard <ArrowRight size={14} />
          </Button>
        </header>
      </Reveal>

      <Reveal delay={0.15}>
        <Dashboard />
      </Reveal>
    </section>
  );
}
