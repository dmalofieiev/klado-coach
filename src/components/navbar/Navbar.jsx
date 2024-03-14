import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
        <a href="#" className="nav-item">
          Портфолио
        </a>
        <a href="#" className="nav-item">
          Услуги
        </a>
        <a href="#" className="nav-item">
          Блог
        </a>
      </div>
      <div className="right-section">
        <a href="#" className="social-media-item">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-media-item">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-media-item">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
