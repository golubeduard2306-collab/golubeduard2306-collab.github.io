import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>EG</span>
      <ul className={styles.links}>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#skills">Compétences</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
