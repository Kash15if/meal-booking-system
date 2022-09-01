import "./NumberCards.css";

const CartCounter = ({ count, setCount }) => {
  //method for addition
  const add = () => {
    let newCount = count >= 5 ? 5 : count + 1;

    setCount(newCount);
  };

  //method for substraction
  const sub = () => {
    let newCount = count <= 0 ? 0 : count - 1;

    setCount(newCount);
  };
  return (
    <div className="cartCounter">
      <i class="bi bi-plus-circle-fill" onClick={add}></i>
      <span className="valueCount">{count}</span>
      <i class="bi bi-dash-circle-fill" onClick={sub}></i>
    </div>
  );
};

export default CartCounter;
