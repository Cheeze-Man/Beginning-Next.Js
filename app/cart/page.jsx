export default function Cart() {
  let cart = ["Tomatoes", "Pasta"];

  return (
    <div>
      <h4 className="title">Cart</h4>
      {cart.map((e, i) => (
        <CartItem item={e} idx={i} />
      ))}
    </div>
  );
}

function CartItem({ item, idx }) {
  return (
    <div className="cart-item" key={idx}>
      <p>{item}</p>
      <p>$10</p>
      <p>1개</p>
    </div>
  );
}
