import { Screen } from './Screen'

const contacts = [
  {
    id: 1,
    label: 'Correo: danielacolorado2134@gmail.com',
    href: 'mailto:danielacolorado2134@gmail.com',
  },
  {
    id: 2,
    label: 'GitHub: github.com/3daniela',
    href: 'https://github.com/3daniela',
  },
]

export const Contact = () => {
  return (
    <Screen title="Contacto">
      <ul className="contact-list">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <a className="contact-link" href={contact.href}>
              {contact.label}
            </a>
          </li>
        ))}
      </ul>
    </Screen>
  )
}
