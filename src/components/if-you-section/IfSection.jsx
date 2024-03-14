import IfItem from "./if-item/IfItem";
import "./IfSection.css";

export default function IfSection() {
  const info = [
    {
      id: 1,
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      value: "Praesent vel ligula scelerisque, gravida libero quis, bibendum.",
    },
    {
      id: 3,
      value: "Morbi tincidunt ornare massa eget egestas purus viverra.",
    },
    {
      id: 4,
      value: "Curabitur sodales ligula in libero sed dignissim lacinia nunc.",
    },
    { id: 5, value: "Sed convallis tristique sem proin ut ligula vel nunc." },
    {
      id: 6,
      value:
        "Egestas sed sed risus pretium quam vulputate dignissim suspendisse.",
    },
  ];

  return (
    <div className="main-div-if">
      <h1 className="if-header">
        BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA BLA
      </h1>
      <div className="if-section">
        {info.map((item) => (
          <IfItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
