import React, { createContext, useState } from "react";

/**
 * The CartContext provides a way to share the cart state across the application
 * It includes the currently selected item and a function to add an item to the cart
 * @typedef {Object} CartContextType
 * The currently selected glasses item, or null if no item is selected
 * @property {Object|null} cartItem
 * Function to add a glasses item to the cart, replacing the existing one
 * @property {Function} addToCart
 */

/**
 * Creates a context object for the cart state
 * @type {React.Context<CartContextType>}
 */
export const CartContext = createContext();

/**
 * CartProvider component that wraps its children with the CartContext
 * It manages the state of a single cart item
 * The props object for the CartProvider
 * @param {Object} props
 * The child components that need access to the cart context
 * @param {React.ReactNode} props.children
 * The CartProvider component with the context provided to its children
 * @returns {React.ReactElement}
 *
 * @example
 * <CartProvider>
 *   <App />
 * </CartProvider>
 */
export function CartProvider({ children }) {
  /**
   * State hook to manage the single cart item
   * @type {[Object|null, Function]}
   */
  const [cartItem, setCartItem] = useState(null);

  /**
   * Adds an item to the cart Since we're only allowing one item per cart,
   * this function will replace any existing cart item with the new one
   *
   * The glasses item to be added to the cart
   * @param {Object} item
   */
  const addToCart = (item) => {
    setCartItem(item);
  };

  return (
    <CartContext.Provider value={{ cartItem, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
