"use client";

import { useState } from "react";

export default function List() {
  let products = [
    ["Tomatoes", "$10"],
    ["Pasta", "$8"],
    ["Coconut", "$14"],
  ];
  let [amount, setAmount] = useState(products.map((e) => (e = 0)));

  return (
    <div>
      <h4 className="title">상품 목록</h4>
      {products.map((e, i) => (
        <div className="food" key={i}>
          <img className="food-img" src={`/food${i}.png`} />
          <h4>
            {e[0]} {e[1]}
          </h4>
          <span> {amount[i]} </span>
          <button
            onClick={() => {
              let copy = [...amount];
              copy[i]++;
              setAmount(copy);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              let copy = [...amount];
              copy[i]--;
              if (copy[i] < 0) {
                copy[i] = 0;
              }
              setAmount(copy);
            }}
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
}
