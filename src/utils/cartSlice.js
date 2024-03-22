import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items:
      localStorage.getItem("cart") !== null
        ? JSON.parse(localStorage.getItem("cart"))
        : [],
    counter: 1,
    isAuthenticated: sessionStorage.getItem("isAuthenticated") === "true",
    user: sessionStorage.getItem("user") || null,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
      // localStorage.setItem('cart',state.items);
      // return [...state,action.payload]
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.items));
      // localStorage.removeItem('cart',state.items);
      // return state.items.filter(product=>product.itemName!==action.payload.itemName);
      // state.items.pop(action.payload);
    },

    clearCart: () => {
      return { items: [] };
    },
    increment: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        if (typeof item.counter !== "number") {
          item.counter = 1;
        }
        item.counter += 1;
        state.items[itemIndex] = { ...item };
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },

    decrement: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];
        if (typeof item.counter !== "number") {
          item.counter = 1;
        }
        item.counter -= 1;
        state.items[itemIndex] = { ...item };
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      sessionStorage.setItem("isAuthenticated", "true");
      sessionStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      sessionStorage.removeItem("isAuthenticated", "true");
      sessionStorage.removeItem("user", JSON.stringify(action.payload));
    },
  },
});

export const {
  items,
  addItem,
  removeItem,
  clearCart,
  increment,
  decrement,
  counter,
  login,
  logout,
} = cartSlice.actions;

export default cartSlice.reducer;
