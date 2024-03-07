/* eslint-disable react/prop-types */
import "./Button.css";

export default function Button({ children }) {
  return (
    <button type="button" className="apply-button">
      {children}
    </button>
  );
}
