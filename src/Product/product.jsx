import { useState } from "react";

const Product = ({ showProducts, filteredProducts }) => {
  const [seekValue, setSeekValue] = useState("");

  return (
    <form>
      <p>: {seekValue}</p>
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
        botão
      </button>
    </form>
  );
};

export default Product;
