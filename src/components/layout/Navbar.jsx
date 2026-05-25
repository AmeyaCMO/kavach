import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { ArrowRight } from '../../icons';
import { useScrolled } from '../../hooks/useScrolled';
import { navLinks, LOGIN_URL } from '../../data/nav';
import styles from './Navbar.module.css';

export function Navbar() {
  const scrolled = useScrolled(50);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#home" aria-label="Kavach home">
        <Logo />
      </a>

      <div className={styles.right}>
        <ul className={styles.links}>
          {navLinks.map((l) => (
            <li key={l.label}>
              <a className={styles.link} href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <Button href={LOGIN_URL} size="sm">
          Login <ArrowRight size={14} />
        </Button>
      </div>
    </nav>
  );
}
