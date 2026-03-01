import styles from './Projects.module.css'

const PROJECTS = [
  {
    title: 'Smart Campus',
    description:
      "Plateforme de monitoring énergétique pour l'Université de La Rochelle. Visualisation temps réel des données des bâtiments via API REST, interfaces interactives et backend Symfony avec API Platform.",
    stack: ['Symfony', 'API Platform', 'JavaScript', 'Chart.js', 'PHP', 'SQL', 'Docker'],
    github: 'https://github.com/golubeduard2306-collab/smart-campus',
    role: 'Scrum Master',
    highlight: true,
  },
  {
    title: 'Cas Music',
    description:
      "Plateforme d'automatisation des pré-inscriptions et de gestion administrative pour une école de musique. Architecture MVC Symfony, gestion de formulaires, base de données et sprints Scrum hebdomadaires.",
    stack: ['Symfony', 'PHP', 'JavaScript', 'HTML / CSS', 'SQL', 'Git'],
    github: 'https://github.com/golubeduard2306-collab/cas-music',
  },
  {
    title: 'Bataille Navale',
    description:
      'Jeu de bataille navale en réseau, architecture client-serveur TCP en C. Serveur multi-clients via fork(), grille 5×5 générée aléatoirement.',
    stack: ['C', 'POSIX Sockets', 'TCP/IP', 'GNU Make'],
    github: 'https://github.com/golubeduard2306-collab/bataille-navale',
  },
    {
    title: 'Monitoring du marché CS2',
    description:
      'Mise en place d’un système de monitoring pour les prix des skins CS2 sur Steam. Collecte des données via l’API Steam, envoie un mail quand offre est trouvé.',
    stack: ['n8n', 'API STEAM', 'Node.js', 'JavaScript'],
  },
    {
    title: 'The Protector',
    description:
      'Jeu rétro développé en C++/Qt Creator en équipe (4 étudiants) sur une période dun mois. Gestion de projet par le biais de Kanban',
    stack: ['C++', 'Qt Creator', 'Kanban'],
    github: 'https://github.com/golubeduard2306-collab/the-protector',
  },
]

function Badge({ label }) {
  return <span className={styles.badge}>{label}</span>
}

function ProjectCard({ project }) {
  return (
    <article className={`${styles.card} ${project.highlight ? styles.highlighted : ''}`}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        {project.role && <span className={styles.role}>{project.role}</span>}
      </div>
      <p className={styles.cardDesc}>{project.description}</p>
      <div className={styles.stack}>
        {project.stack.map(s => <Badge key={s} label={s} />)}
      </div>
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          Voir sur GitHub
        </a>
      )}
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <h2>Mes <span>projets</span></h2>
      <div className={styles.grid}>
        {PROJECTS.map(p => <ProjectCard key={p.title} project={p} />)}
      </div>
    </section>
  )
}
