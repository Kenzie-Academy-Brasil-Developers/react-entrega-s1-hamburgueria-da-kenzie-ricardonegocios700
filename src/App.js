import "./App.css";
import { useState } from "react";
import MenuContainer from "./MenuContainer/menuContainer";
import Product from "./Product/product";
import MyCart from "./MyCart/myCart";

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
  const joao = [1, 2, 3];
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const showProducts = (parametro) => {
    setFilteredProducts(
      products.filter((item) =>
        item.name.toLowerCase().includes(parametro.toLowerCase())
      )
    );
  };

  const handleClick = (toAdd) => {
    currentSale.includes(toAdd)
      ? setCurrentSale([...currentSale])
      : setCurrentSale(
          [...currentSale, toAdd],
          setCartTotal(cartTotal + toAdd.price) //uia, funciona
        );
  };

  return (
    <div className="App">
      <Product
        showProducts={showProducts}
        filteredProducts={filteredProducts}
      />
      {filteredProducts.length > 0 ? (
        <MenuContainer products={filteredProducts} handleClick={handleClick} />
      ) : (
        <MenuContainer products={products} handleClick={handleClick} />
      )}
      <div id="totalSale">
        <p>
          Total da venda: R$ <strong>{cartTotal.toFixed(2)}</strong>
        </p>
      </div>
      <MyCart currentSale={currentSale} />

      {/* Se não estivesse atrasado teria colocado um remove no carrinho 
      mas me perdi d+ no transito das informações, acho q agora entendi */}
    </div>
  );
}

export default App;
