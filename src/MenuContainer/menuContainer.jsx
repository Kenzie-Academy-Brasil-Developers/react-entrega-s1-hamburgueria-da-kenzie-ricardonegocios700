//Responsável por renderizar a lista de produtos;
import "./menuContainer.css";

const MenuContainer = ({ products, handleClick }) => {
  return (
    <div className="productList">
      <ul>
        {products.map((item, index) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.category}</p>
            <p>{parseFloat(item.price)}</p>
            <button onClick={() => handleClick(item)}>Adicionar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuContainer;
