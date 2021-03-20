import React, { useState } from "react";

function Item({ name, category }) {
  const [cartItem, setCartItem] = useState("")

  function handleCartItem() {
    setCartItem("in-cart")
    console.log(cartItem)
  }
  return (
    <li className={cartItem}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartItem}>Add to Cart</button>
    </li>
  );
}

export default Item;
