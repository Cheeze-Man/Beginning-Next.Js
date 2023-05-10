export default function List() {
  let products = [
    ["Tomatoes", "$10"],
    ["Pasta", "$8"],
    ["Coconut", "$14"],
  ];

  return (
    <div>
      <h4 className="title">상품 목록</h4>
      {products.map((e, i) => (
        <div className="food" key={i}>
          <img className="food-img" src={`/food${i}.png`} />
          <h4>
            {e[0]} {e[1]}
          </h4>
        </div>
      ))}
    </div>
  );
}
