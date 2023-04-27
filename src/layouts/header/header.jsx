import logo from '../../assets/logo.svg'

export default function Header() {
  return (
    <header className="lt-header">
      <img className="lt-header__logo" src={logo} alt="SportSee logo" />
      <nav className="lt-header__nav">
        <ul className="lt-header__list">
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  )
}
