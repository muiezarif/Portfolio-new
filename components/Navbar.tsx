import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>
        <Link href="/">Muiez Arif</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/experience">Experience</Link></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
