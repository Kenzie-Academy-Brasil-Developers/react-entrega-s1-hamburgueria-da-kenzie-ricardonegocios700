import "./product.css";
import { useState } from "react";

const Product = ({ showProducts, filteredProducts }) => {
  const [seekValue, setSeekValue] = useState("");

  return (
    <form id="formProd">
      <input
        type="text"
        value={seekValue}
        onChange={(event) => setSeekValue(event.target.value)}
      />
      <button
        onClick={(event) => {
          // "impede/previne" ação default do evento
          event.preventDefault();
          showProducts(seekValue);
          setSeekValue("");
        }}
      >
        Pesquisar
      </button>
    </form>
  );
};

export default Product;
