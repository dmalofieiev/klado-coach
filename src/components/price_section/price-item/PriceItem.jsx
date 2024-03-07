/* eslint-disable react/prop-types */
import "./PriceItem.css";

export default function PriceItem({ priceItem }) {
  return (
    <div className="price-styled-item">
      <h2 className="price-styled-item-header">{priceItem.header}</h2>
      <p className="price-styled-item-price">{priceItem.price}</p>
      <ul className="price-styled-item-list">
        {priceItem.list?.map((el, index) => (
          <li className="price-styled-item-list-item" key={index}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}
