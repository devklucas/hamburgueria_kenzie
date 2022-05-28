import { useContext, createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [currentSale, setCurrentSale] = useState([]);

  const addCart = (product) => {
    product.qtd = 1;
    setCurrentSale([...currentSale, product]);
  };

  const addNumber = (product) => {
    const newCart = currentSale.filter(itemOnCart => itemOnCart.id !== product.id);

    product.qtd += 1;

    newCart.push(product);

    setCurrentSale(newCart);
  };

  const handleClick = (handleProduct) => {
    if (currentSale.length === 0) {
      addCart(handleProduct);
    } else {
      const filter = currentSale.filter((item) =>
        item.id === handleProduct.id ? item : null
      );
      filter.length === 0 ? addCart(handleProduct) : addNumber(handleProduct);
    }
  };

  const removeCart = (productId) => {
    const filtro = currentSale.filter((item) =>
      item.id !== productId ? item : null
    );
    setCurrentSale(filtro);
  };
  const cleanCart = () => setCurrentSale([]);

  return (
    <CartContext.Provider
      value={{ handleClick, removeCart, cleanCart, currentSale }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);
