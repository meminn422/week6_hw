// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// 初始 state（購物車內容陣列）
const initialState = {
    cartItems: [] // 每筆資料要包含 qty 屬性
  }
  

// 建立 slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItems: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find(i => i.id === item.id);
      if (existItem) {
        existItem.qty += item.qty;
      } else {
        state.cartItems.push(item);
      }
    },
  },
});

// 匯出 selector（用來從 store 讀取資料）
export const selectCartItems = (state) => state.cart.cartItems;

// 匯出 action
export const { addCartItems } = cartSlice.actions;

// 匯出 reducer（預設 export）
export default cartSlice.reducer;
