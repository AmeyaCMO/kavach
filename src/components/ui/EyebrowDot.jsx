import styles from './EyebrowDot.module.css';

// Small pill used in the hero — accent dot + uppercase eyebrow text.
export function EyebrowDot({ children }) {
  return (
    <span className={styles.pill}>
      <span className={styles.dot} aria-hidden="true" />
      {children}
    </span>
  );
}
