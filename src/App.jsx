import './App.css'

const projects = [
  {
    title: 'Project One',
    description: 'Project Description',
    tags: ['React', 'UI Design']
  },
  {
    title: 'Project Two',
    description: 'Project Description',
    tags: ['JavaScript', 'Frontend']
  },
  {
    title: 'Project Three',
    description: 'Project Description',
    tags: ['Vite', 'Responsive']
  }
]

function App() {
  return (
    <main className="portfolio">
      <section className="section hero">
        <p className="eyebrow">Hello, I’m Cyrus</p>
        <h1>Title</h1>
        <p className="intro">
          This is a basic portfolio outline for your work, interests, and projects.
          You can fill in the details here later.
        </p>
      </section>

      <section id="about" className="section">
        <h2>About</h2>
        <p>
          Share a short introduction about who you are, what you enjoy building,
          and what you are currently learning.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
