import styles from './Skills.module.css'

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
    </section>
  )
}
