import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.greeting}>Bonjour, je suis</p>
      <h1 className={styles.name}>Eduard GOLUB</h1>
      <p className={styles.title}>
        Étudiant <span>BUT Informatique</span> — IUT La Rochelle
      </p>
      <p className={styles.bio}>
        Développeur back-end orienté PHP / Symfony, passionné par les architectures propres
        et les projets concrets. Scrum Master sur le projet Smart Campus.
      </p>
      <div className={styles.cta}>
        <a href="#projects" className={styles.btnPrimary}>Voir mes projets</a>
        <a href="#contact" className={styles.btnSecondary}>Me contacter</a>
      </div>
    </section>
  )
}
