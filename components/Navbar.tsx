import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLogo}>
        <Link href="/">Muiez Arif</Link>
      </div>

      {/* Hamburger (mobile only) */}
      <button
        className={styles.navToggle}
        onClick={() => setIsOpen((v) => !v)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span className={styles.navToggleBar} />
        <span className={styles.navToggleBar} />
        <span className={styles.navToggleBar} />
      </button>

      <ul className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ""}`}>
        <li className={router.pathname === "/" ? styles.activeLink : ""}>
          <Link href="/">Home</Link>
        </li>
        <li className={router.pathname === "/portfolio" ? styles.activeLink : ""}>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className={router.pathname === "/experience" ? styles.activeLink : ""}>
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
