import './Header.css';
import { Link } from 'react-router-dom';

function Header({ onResetSearch }) {
  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo">
          <Link to="/" onClick={onResetSearch}>MoviesFlix</Link>
        </div>
        <nav className="main-nav">
          <Link to="/" onClick={onResetSearch}>Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;