/* eslint-disable react/no-unescaped-entities */
import "./About.css";
import firstImage from "./../../images/IMG_2519.jpg";
import secondImage from "./../../images/IMG_2508.jpg";

export default function About() {
  return (
    <div className="main-div">
      <div className="photo-div">
        <img src={firstImage} alt="firstimage" />
        <img src={secondImage} alt="secondImage" />
      </div>
      <div className="about-info">
        <h1 className="header">Обо мне</h1>
        <p className="description">
          Жизнь — моя карта к самовыражению, а миссия — зажигать искры
          потенциала в других. С каждым, кого встречаю, строим путь к истинному
          'я', обнаруживая смелость изменяться и вдохновение для роста.
        </p>
        <ul className="about-list">
          <li>Коуч ICF</li>
          <li>Живу в Мадриде, работаю на русском и английском языках.</li>
          <li>У меня 3 высших образования из 3х стран</li>
          <li>Говорю на трех языках</li>
          <li>Мои ценности - свобода, аутентичность и любопытство</li>
        </ul>
      </div>
    </div>
  );
}
