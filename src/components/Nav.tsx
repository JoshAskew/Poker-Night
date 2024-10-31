import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;