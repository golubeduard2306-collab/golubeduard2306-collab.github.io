import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.greeting}>Bonjour, je suis</p>
      <h1 className={styles.name}>Eduard GOLUB</h1>
      <p className={styles.title}>
        Étudiant <span>BUT Informatique</span> — IUT La Rochelle · Nantes
      </p>
      <p className={styles.bio}>
        Développeur full-stack orienté PHP / Symfony et JavaScript, passionné par la résolution
        de problèmes et les projets concrets. Scrum Master sur Smart Campus.
        Disponible pour un <span className={styles.highlight}>stage de 3 mois à partir d'avril 2026</span>, avec souhait de poursuivre en alternance.
      </p>
      <div className={styles.cta}>
        <a href="#projects" className={styles.btnPrimary}>Voir mes projets</a>
        <a href="#contact" className={styles.btnSecondary}>Me contacter</a>
      </div>
    </section>
  )
}
