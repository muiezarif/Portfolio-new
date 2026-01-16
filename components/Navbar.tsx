import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const Navbar = () => {
  const router = useRouter();
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>
        <Link href="/">Muiez Arif</Link>
      </div>
      <ul className={styles.navLinks}>
        <li className={router.pathname === '/' ? styles.activeLink : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.pathname === '/portfolio' ? styles.activeLink : ''}>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className={router.pathname === '/experience' ? styles.activeLink : ''}>
          <Link href="/experience">Experience</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
