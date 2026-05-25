import styles from './Logo.module.css';

export function Logo({ size = 'md' }) {
  return (
    <span className={`${styles.logo} ${styles[size]}`} aria-label="Kavach">
      <span className={styles.deva} aria-hidden="true">क</span>
      <span className={styles.wordmark}>VACH</span>
    </span>
  );
}
