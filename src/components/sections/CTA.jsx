import { Button } from '../ui/Button';
import { ArrowRight } from '../../icons';
import { LOGIN_URL, CONTACT_EMAIL } from '../../data/nav';
import styles from './CTA.module.css';

export function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.body}>
        <h2 className={styles.title}>
          Protect your fleet.<br />Join the network.
        </h2>
        <p className={styles.lede}>
          Get early access — be among the first companies to build a verified,
          accountable workforce.
        </p>

        <div className={styles.ctas}>
          <Button href={LOGIN_URL} variant="dark" size="xl">
            Get early access <ArrowRight size={14} />
          </Button>
          <a href={`mailto:${CONTACT_EMAIL}`} className={styles.contact}>
            Contact sales
          </a>
        </div>
      </div>
    </section>
  );
}
