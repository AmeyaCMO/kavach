import { useState } from 'react';
import { useInterval } from '../../../hooks/useInterval';
import { verificationPipeline } from '../../../data/steps';
import { colors } from '../../../styles/tokens';
import styles from './VerificationFlow.module.css';

const toneColor = {
  accent: colors.accent,
  info: colors.info,
  critical: colors.critical,
  success: colors.success,
};

export function VerificationFlow() {
  const [step, setStep] = useState(0);
  useInterval(() => setStep((s) => (s + 1) % verificationPipeline.length), 2000);

  return (
    <div className={styles.flow}>
      {verificationPipeline.map(({ Icon, label, tone }, i) => {
        const color = toneColor[tone];
        const reached = i <= step;
        const current = i === step;

        return (
          <div key={label} className={styles.item}>
            <div className={styles.node}>
              <span
                className={`${styles.ring} ${reached ? styles.reached : ''} ${current ? styles.current : ''}`}
                style={reached ? { '--ring': color } : undefined}
              >
                <Icon size={20} color={reached ? color : 'currentColor'} />
              </span>
              <span className={styles.label} style={reached ? { color } : undefined}>
                {label}
              </span>
            </div>

            {i < verificationPipeline.length - 1 && (
              <span className={`${styles.link} ${i < step ? styles.linkActive : ''}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
