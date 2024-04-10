import {useState } from "react";

function Card({ product, setBasket, data }) {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    if (data === "cards") {
      setBasket((prev) => [...prev, product]);
    } else {
      setBasket((prev) => prev.filter((p) => p.id !== product.id));
    }
  }

 

  return (
    <div className="card" id={product.id}>
      <img src={product.img} alt="" />
      <h1>{product.title}</h1>
      <p>{product.text}</p>

      <div className="quantity">
        <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</button>
        <p>{count} шт</p>
        <button onClick={() => setCount(count < 5 ? count + 1 : 5)}>+</button>
      </div>
      <button onClick={() => handleClick()}>{data === "cards" ? "add to basket" : "delete"}</button>
    </div>
  );
}

export default Card;