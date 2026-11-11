export const ProjectCard = ({ title, description, tags = [] }) => {
  return (
    <article className="card">
      <h2>{title}</h2>
      <p className="card-text">{description}</p>
      <ul className="tag-list">
        {tags.map((tag) => (
          <li className="tag" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    </article>
  )
}
