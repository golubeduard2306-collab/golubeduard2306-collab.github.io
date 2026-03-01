import styles from './Skills.module.css'

const LEARNING = ['React (projets universitaires & perso)', 'Swift', 'UI/UX mobile']

const SKILLS = [
  {
    category: 'Backend',
    items: ['PHP', 'Symfony', 'Doctrine ORM', 'API REST', 'API Platform', 'SQL (MySQL)'],
  },
  {
    category: 'Frontend',
    items: ['JavaScript', 'HTML / CSS', 'Chart.js', 'React', 'Twig'],
  },
  {
    category: 'Langages',
    items: ['C++', 'C'],
  },
  {
    category: 'Outils & Infrastructure',
    items: ['Git', 'Docker', 'Linux', 'PHPStorm', 'VS Code', 'Figma'],
  },
  {
    category: 'Méthodes',
    items: ['Scrum (Scrum Master)', 'Kanban', 'GitFlow'],
  },
  {
    category: 'Langues',
    items: ['Français — bilingue', 'Anglais — C1', 'Roumain — natif', 'Espagnol — B1'],
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
      <div className={styles.learning}>
        <h3 className={styles.learningTitle}>En cours d'apprentissage</h3>
        <div className={styles.learningBadges}>
          {LEARNING.map(item => (
            <span key={item} className={styles.learningBadge}>⚡ {item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
