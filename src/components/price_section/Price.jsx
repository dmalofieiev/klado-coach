import "./Price.css";
import PriceItem from "./price-item/PriceItem";

export default function Price() {
  const pricing = [
    {
      header: "Экспресс Шопинг",
      price: "$100",
      list: [
        "Онлайн-консультация и постановка задач",
        "2 часа шопинга в любом ТЦ города",
        "Онлайн-поддержка 1 месяц",
      ],
    },
    {
      header: "Экспресс Шопинг",
      price: "$100",
      list: [
        "Онлайн-консультация и постановка задач",
        "2 часа шопинга в любом ТЦ города",
        "Онлайн-поддержка 1 месяц",
      ],
    },
    {
      header: "Экспресс Шопинг",
      price: "$100",
      list: [
        "Онлайн-консультация и постановка задач",
        "2 часа шопинга в любом ТЦ города",
        "Онлайн-поддержка 1 месяц",
      ],
    },
  ];

  return (
    <div className="price-div-main">
      <h1 className="price-header">Мои услуги</h1>
      <h3 className="price-discription">
        Все услуги можно модифицировать или скомбинировать по вашим пожеланиям
      </h3>
      <div className="price-div-item">
        {pricing.map((priceItem, index) => (
          <PriceItem key={index} priceItem={priceItem} />
        ))}
      </div>
    </div>
  );
}
