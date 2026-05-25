import { Button } from '../../ui/Button';
import { EyebrowDot } from '../../ui/EyebrowDot';
import { Lock, Globe, Bolt, ArrowRight, ArrowDown } from '../../../icons';
import { LOGIN_URL } from '../../../data/nav';
import { ShieldBadge } from './ShieldBadge';
import { VerificationFlow } from './VerificationFlow';
import { AlertCard } from './AlertCard';
import styles from './Hero.module.css';

const trustItems = [
  { Icon: Lock,  label: 'Biometric verified' },
  { Icon: Globe, label: 'Network blacklist' },
  { Icon: Bolt,  label: 'Real-time alerts' },
];

export function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={`${styles.glow} ${styles.glowA}`} aria-hidden="true" />
      <div className={`${styles.glow} ${styles.glowB}`} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.left}>
          <EyebrowDot>India’s first workforce intelligence network</EyebrowDot>

          <h1 className={styles.headline}>
            <span>Your Driver Left.</span>
            <span className={styles.accent}>His Record Didn’t.</span>
          </h1>

          <p className={styles.lede}>
            KAVACH turns unverified manpower into fully accountable, trackable,
            and biometrically-verified identities — permanently, across every
            company on the network.
          </p>

          <div className={styles.ctas}>
            <Button href={LOGIN_URL} size="lg">
              Get started <ArrowRight size={14} />
            </Button>
            <Button as="a" href="#dashboard" variant="ghost" size="md">
              See live dashboard <ArrowDown size={14} />
            </Button>
          </div>

          <ul className={styles.trust}>
            {trustItems.map(({ Icon, label }) => (
              <li key={label}>
                <Icon size={16} /> {label}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.right}>
          <ShieldBadge />

          <div className={styles.card}>
            <div className={styles.cardHead}>Live verification pipeline</div>
            <VerificationFlow />
          </div>

          <AlertCard />
        </div>
      </div>
    </section>
  );
}
