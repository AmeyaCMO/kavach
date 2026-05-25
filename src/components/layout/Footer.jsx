import { Logo } from '../ui/Logo';
import { Mail, Phone, Pin } from '../../icons';
import { footerLinks, contactDetails } from '../../data/nav';
import styles from './Footer.module.css';

const iconFor = {
  email: Mail,
  phone: Phone,
  pin: Pin,
};

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

        <div className={styles.col}>
          <h4 className={styles.colHead}>Product</h4>
          <ul>
            {footerLinks.product.map((l) => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colHead}>Company</h4>
          <ul>
            {footerLinks.company.map((l) => (
              <li key={l.label}>
                {l.external ? (
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.external}
                  >
                    {l.label}
                  </a>
                ) : (
                  <a href="#">{l.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} BlackBox Integrated Services Pvt. Ltd. All rights reserved.</span>
        <span className={styles.tag}>Made in India</span>
      </div>
    </footer>
  );
}
