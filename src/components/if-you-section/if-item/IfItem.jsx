/* eslint-disable react/prop-types */
import "./IfItem.css";
import styled from "styled-components";

export default function IfItem({ item }) {
  const StyledDiv = styled.div`
    &:before {
      content: "${item.id}";
      position: absolute;
      right: 0;
      bottom: -10px;
      font-size: 150px;
      color: #f2f2f2;
      z-index: -1;
    }
  `;

  return <StyledDiv className="if-item-element">{item.value}</StyledDiv>;
}
