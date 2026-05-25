import { Logo } from '../ui/Logo';
import { Mail, Phone, Pin } from '../../icons';
import { footerLinks, contactDetails } from '../../data/nav';
import styles from './Footer.module.css';

const iconFor = {
  email: Mail,
  phone: Phone,
  pin: Pin,
};

function FooterColumn({ title, items }) {
  return (
    <div className={styles.col}>
      <h4 className={styles.colHead}>{title}</h4>
      <ul>
        {items.map((l) => {
          const href = l.href ?? '#';
          const isExternal = l.external;
          return (
            <li key={l.label}>
              <a
                href={href}
                className={isExternal ? styles.external : undefined}
                {...(isExternal && !href.startsWith('mailto:')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {l.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.tagline}>
            India’s first biometric workforce intelligence and verification network.
            Powered by BlackBox Advisories.
          </p>

          <ul className={styles.contact}>
            {contactDetails.map((c) => {
              const Icon = iconFor[c.type];
              return (
                <li key={c.value}>
                  <Icon size={15} />
                  <span>{c.value}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <FooterColumn title="Product" items={footerLinks.product} />
        <FooterColumn title="Company" items={footerLinks.company} />
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} BlackBox Integrated Services Pvt. Ltd. All rights reserved.</span>
        <span className={styles.tag}>Made in India</span>
      </div>
    </footer>
  );
}
