import styles from './RiskBadge.module.css';

const tones = {
  Safe:        { cls: 'safe',    glyph: '●' },
  Caution:     { cls: 'caution', glyph: '▲' },
  Critical:    { cls: 'critical',glyph: '⚠' },
  Blacklisted: { cls: 'banned',  glyph: '✕' },
};

export function RiskBadge({ level }) {
  const tone = tones[level] ?? tones.Safe;
  return (
    <span className={`${styles.badge} ${styles[tone.cls]}`}>
      <span className={styles.glyph}>{tone.glyph}</span>
      {level}
    </span>
  );
}
