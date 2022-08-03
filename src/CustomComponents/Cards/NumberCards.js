import "./NumberCards.css";

const NumberCards = ({ label, value }) => {
  return (
    <div className="cardForDetOuter">
      <div className="cardForDets">
        <h4>
          {label}: {value}
        </h4>
      </div>
    </div>
  );
};

export default NumberCards;
