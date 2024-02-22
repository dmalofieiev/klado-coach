import "./Main.css";
// import image from "./../../images/IMG_2503.jpg";

const Main = () => {
  return (
    <div className="main-container">
      <div className="text-section">
        <h1 className="name">Персональный коуч ICF</h1>
        <h1 className="name">Анна Кладо</h1>
        <p className="description">
          Формирование уникальной стратегии жизни для каждого
        </p>
      </div>
      <div className="image-section">
        {/* <img src={image} alt="Main" /> */}
      </div>
    </div>
  );
};

export default Main;
