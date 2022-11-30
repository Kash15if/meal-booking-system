import "./NumberCards.css";

const NumberCards = ({ label, value }) => {
  let cardColor = value === "OFF" ? "redNumCard" : "";

  console.log(value);
  return (
    <div className={"cardForDetOuter " + cardColor}>
      <div className="cardForDets">
        <h4>
          {label}: {value}
        </h4>
      </div>
    </div>
  );
};

export default NumberCards;
