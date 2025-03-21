import React, { useState } from "react";
import { predictions } from "./MockData";

const OpinionTrading = () => {
  const [balance, setBalance] = useState(1000);

  const handleBuy = (price) => {
    if (balance >= price) {
      setBalance(balance - price);
      alert(`You bought for $${price}`);
    } else {
      alert("Insufficient balance");
    }
  };

  return (
    <div>
      <h2>Opinion Trading</h2>
      <p>Balance: ${balance}</p>
      <ul>
        {predictions.map((item) => (
          <li key={item.id}>
            {item.title} - Price: ${item.price}
            <button onClick={() => handleBuy(item.price)}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OpinionTrading;
