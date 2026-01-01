import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
        img: "https://tse4.mm.bing.net/th/id/OIP.4susryXFUxNH3N1dzw1pQQHaGL?pid=Api&P=0&h=180",
        name: "Projector",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://tse3.mm.bing.net/th/id/OIP.5ktL-_JSj9-9NSg8ekImuwHaHa?pid=Api&P=0&h=180",
        name: "Speakers",
        cost: 35,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2024/09/17/23/23/studio-9054709_1280.jpg",
        name: "Microphone",
        cost: 45,
        quantity: 0,
    },
    {
        img: "https://tse4.mm.bing.net/th/id/OIP.E2L7pE1JYS3lNQghyf-KHwHaHY?pid=Api&P=0&h=180",
        name: "Whiteboard",
        cost: 80,
        quantity: 0,
    },
    {
        img: "https://tse1.mm.bing.net/th/id/OIP.d_Bn4N-7e3nsTEFmO5Y3bQHaFj?pid=Api&P=0&h=180",
        name: "Signs",
        cost: 80,
        quantity: 0,
    },
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
     const item = state[action.payload];
     if (item && item.quantity > 0) {
        item.quantity--;
     }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
