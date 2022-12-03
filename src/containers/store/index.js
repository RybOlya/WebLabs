import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0
  },
  reducers: {
    addItemsToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.href === newItem.href);

      if (!existingItem) {
        state.totalQuantity++;
        state.items.push({
          href: newItem.href,
          price: newItem.quantity * newItem.price,
          quantity: 1,
          imageSrc: newItem.imageSrc,
          title: newItem.title
        });
      } else {
        existingItem.quantity++;
        existingItem.price = existingItem.quantity * newItem.price;
      }
      console.log(newItem.quantity);
      console.log(state.items);
      state.totalAmount = state.items.reduce((result, item) => {
        return result + item.price;
      }, 0);
      console.log(state.totalAmount);
    },
    removeItemFromCart(state, action) {
      const removeId = action.payload;
      state.items = state.items.filter((item) => item.href !== removeId);
      state.totalQuantity--;
      state.totalAmount = state.items.reduce((result, item) => {
        return result + item.price;
      }, 0);
    }

  }
});

export const actions = cartSlice.actions;

const store = configureStore({
  reducer: cartSlice.reducer
});

export default store;
