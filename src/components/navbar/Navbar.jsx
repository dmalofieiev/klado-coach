import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
        <a href="#">Портфолио</a>
        <a href="#">Услуги</a>
        <a href="#">Блог</a>
      </div>
      <div className="right-section">
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
