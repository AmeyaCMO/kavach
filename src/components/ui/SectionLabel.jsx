import styles from './SectionLabel.module.css';

export function SectionLabel({ children, tone = 'accent', align = 'left' }) {
  const cls = [styles.label, styles[tone], styles[align]].join(' ');
  return (
    <div className={cls}>
      <span className={styles.line} />
      <span className={styles.text}>{children}</span>
      {align === 'center' && <span className={styles.line} />}
    </div>
  );
}
