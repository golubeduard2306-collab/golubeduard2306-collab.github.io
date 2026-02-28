import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '32px', color: 'var(--text-muted)', fontSize: '0.85rem', borderTop: '1px solid var(--border)' }}>
        © 2025 Eduard GOLUB — IUT La Rochelle
      </footer>
    </>
  )
}
