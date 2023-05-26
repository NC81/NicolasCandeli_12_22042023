import logo from '../../assets/logo.svg'

export default function Header() {
  return (
    <header className="layout-header">
      <img className="layout-header__logo" src={logo} alt="SportSee logo" />
      <nav className="layout-header__nav">
        <ul className="layout-header__list">
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  )
}
