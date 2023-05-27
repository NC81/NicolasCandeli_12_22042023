import logo from '../../assets/logo.svg'

export default function Header() {
  return (
    <header className="root-header">
      <img className="root-header__logo" src={logo} alt="SportSee logo" />
      <nav className="root-header__nav">
        <ul className="root-header__list">
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  )
}
