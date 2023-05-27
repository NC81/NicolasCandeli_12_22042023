import { NavLink } from 'react-router-dom'
import yoga from '../../assets/yoga.svg'
import pool from '../../assets/pool.svg'
import bike from '../../assets/bike.svg'
import dumbbell from '../../assets/dumbbell.svg'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <ul className="sidebar__list">
          <li>
            <NavLink>
              <img src={yoga} alt="Yoga icon" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img src={pool} alt="Pool icon" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img src={bike} alt="Bike icon" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img src={dumbbell} alt="Dumbbell icon" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <footer className="sidebar__footer">Copyright, SportSee 2020</footer>
    </aside>
  )
}
