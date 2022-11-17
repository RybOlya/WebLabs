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
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.totalQuantity++;
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          image: newItem.image,
          // totalPrice: newItem.quantity * newItem.price,
          name: newItem.name
        });
      } else {
        existingItem.quantity++;
        existingItem.price = newItem.quantity * newItem.price;
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
      state.items = state.items.filter((item) => item.id !== removeId);
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
