import "./myCart.css";

const MyCart = ({ currentSale }) => {
  console.log(currentSale);
  return (
    <div className="cartList">
      {/* acho que devia quebrar mais, a li devia vir de outro componente... */}
      <ul>
        {currentSale.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.category}</p>
            <p>{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyCart;
