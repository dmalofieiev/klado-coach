/* eslint-disable react/prop-types */
import "./List.css";

export default function List({ header, item }) {
  return (
    <div className="list-div">
      <h2 className="list-header">{header}</h2>
      <ul>
        {item.map((el, index) => (
          <li key={index}>{el}</li>
        ))}
      </ul>
    </div>
  );
}
