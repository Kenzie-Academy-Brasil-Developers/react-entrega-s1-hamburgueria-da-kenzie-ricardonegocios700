import "./App.css";
import { useState } from "react";
import MenuContainer from "./MenuContainer/menuContainer";
import Product from "./Product/product";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const showProducts = () => {
    // ?  não sei se quer mesmo mudar a variável
    setFilteredProducts(
      products.filter((item) => {
        return item === filteredProducts;
      })
    );
  };
  const handleClick = () => {
    //deve receber por parâmetro o id e usar o método find para
    //encontrar o item no array com o mesmo id do produto e será
    //responsável por adicionar o produto selecionado no state
    //currentSale;
  };
  console.log(products);
  return (
    <div className="App">
      <MenuContainer products={products} />
      {/* <Product /> */}
      <div id="totalSale">
        <p>Total da venda: R$ {cartTotal}</p>
      </div>
    </div>
  );
}

export default App;
