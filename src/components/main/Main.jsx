import Button from "../../ui/button/Button";
import "./Main.css";
// import image from "./../../images/IMG_2503.jpg";

const Main = () => {
  return (
    <div className="main-container">
      <div className="text-section">
        <h1 className="name">
          Персональный коуч ICF <span className="new-line">Анна Кладо</span>
        </h1>
        <p className="description">
          Формирование уникальной стратегии <br /> жизни для каждого
        </p>
        <Button>Получить консультацию</Button>
      </div>
      <div className="image-section">
        {/* <img src={image} alt="Main" /> */}
      </div>
    </div>
  );
};

export default Main;
