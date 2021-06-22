import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="green">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Notebook</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/favorites" >favorites</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;