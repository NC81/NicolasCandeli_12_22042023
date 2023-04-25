import logo from '../../assets/logo.svg'

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="SportSee logo" />
      <nav className="header__nav">
        <ul className="header__list">
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  )
}
