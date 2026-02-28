import styles from './Skills.module.css'

const SKILLS = [
  {
    category: 'Langages',
    items: ['PHP', 'C', 'JavaScript', 'SQL', 'HTML / CSS'],
  },
  {
    category: 'Frameworks & Librairies',
    items: ['Symfony 7', 'React', 'Doctrine ORM', 'Twig', 'Chart.js'],
  },
  {
    category: 'Infrastructure & BDD',
    items: ['Docker', 'MariaDB', 'MySQL', 'Apache', 'phpMyAdmin'],
  },
  {
    category: 'Outils & Méthodes',
    items: ['Git', 'GitHub', 'Scrum', 'PHPUnit', 'Composer'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <h2>Compétences <span>techniques</span></h2>
      <div className={styles.grid}>
        {SKILLS.map(group => (
          <div key={group.category} className={styles.group}>
            <h3 className={styles.category}>{group.category}</h3>
            <ul className={styles.list}>
              {group.items.map(item => (
                <li key={item} className={styles.item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
