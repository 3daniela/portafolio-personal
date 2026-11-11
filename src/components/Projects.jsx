import { Screen } from './Screen'
import { ProjectCard } from './ProjectCard'

const projects = [
  {
    id: 1,
    title: 'AgroHospeda',
    description: 'Sistema para la gestión de una finca hotel.',
    tags: ['Java'],
  },
  {
    id: 2,
    title: 'Crochet con Amor',
    description:
      'Aplicación web con front-end en Angular y back-end en Java con Spring Boot.',
    tags: ['Angular', 'Java', 'Spring Boot'],
  },
]

export const Projects = () => {
  return (
    <Screen title="Mis proyectos">
      <div className="card-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </Screen>
  )
}
