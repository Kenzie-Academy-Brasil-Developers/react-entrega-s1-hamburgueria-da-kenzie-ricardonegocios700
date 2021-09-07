//Responsável por renderizar a lista de produtos;
import "./menuContainer.css";

const MenuContainer = ({ products }) => {
  return (
    <div className="productList">
      <ul>
        {products.map((item, index) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <button id={item.id}>Adicionar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuContainer;
