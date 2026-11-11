import { Screen } from './Screen'

export const Home = () => {
  const name = 'Anyi Daniela Colorado Serna'
  const role = 'Desarrolladora de Software'
  const initials = 'AC'

  return (
    <Screen title="Inicio">
      <section className="hero">
        <div className="avatar">{initials}</div>
        <h2>{name}</h2>
        <p className="hero-role">{role}</p>
        <p className="hero-text">
          Desarrolladora de software en formación, aprendiendo a crear
          aplicaciones web con React. Este es mi portafolio.
        </p>
      </section>
    </Screen>
  )
}
