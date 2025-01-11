import { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

const initialState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      let updatedCartItems;
      if (existingItemIndex !== -1) {
        updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += 1;
      } else {
        updatedCartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
      }
      return {
        ...state,
        cartItems: updatedCartItems,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + Number(action.payload.price),
      };
    }

    case "REMOVE_FROM_CART": {
      const filteredItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cartItems: filteredItems,
        totalItems: state.totalItems - action.payload.quantity,
        totalPrice:
          state.totalPrice -
          Number(action.payload.price) * action.payload.quantity,
      };
    }

    case "INCREASE_QUANTITY": {
      const updatedCart = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return {
        ...state,
        cartItems: updatedCart,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + Number(action.payload.price),
      };
    }

    case "DECREASE_QUANTITY": {
      const updatedCart = state.cartItems
        .map((item) =>
          item.id === action.payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
      return {
        ...state,
        cartItems: updatedCart,
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - Number(action.payload.price),
      };
    }

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
};

export function useCart() {
  return useContext(CartContext);
}

export function CartItemsProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success("Product added to cart!");
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
    toast.error("Product removed from cart!");
  };

  const increaseQuantity = (product) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: product });
  };

  const decreaseQuantity = (product) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: product });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
    toast.info("Cart cleared!");
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
