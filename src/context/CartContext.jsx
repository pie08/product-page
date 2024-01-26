import { createContext, useContext, useReducer } from "react";

const cartContext = createContext();

const initialState = [
  // {
  //   itemId: 1,
  //   name: "Fall Limited Edition Sneakers",
  //   quantity: 1,
  //   unitPrice: 125,
  //   totalPrice: 125,
  //   imageUrl: "/images/image-product-1-thumbnail.jpg",
  // },
];

function reducer(state, action) {
  switch (action.type) {
    case "cart/addItem": {
      const exists = state.some(
        ({ itemId }) => itemId === action.payload.itemId
      );

      if (exists) {
        return state.map((item) => {
          if (item.itemId !== action.payload.itemId) return item;
          return {
            ...item,
            quantity: item.quantity + action.payload.quantity,
            totalPrice:
              item.unitPrice * (item.quantity + action.payload.quantity),
          };
        });
      }

      if (!exists) return [...state, action.payload];

      return state;
    }

    case "cart/deleteItem":
      return state.filter((item) => item.itemId !== action.payload);

    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, initialState);
  console.log(cart);

  return (
    <cartContext.Provider value={{ dispatch, cart }}>
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(cartContext);
  if (!context) throw new Error("Context used outside of provider");
  return context;
}

export default CartProvider;
