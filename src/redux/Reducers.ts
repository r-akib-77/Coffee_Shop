import { createReducer } from "@reduxjs/toolkit";

interface Options {
  name: string;
  imgSrc: string;
  id: number;
  price: number;
  qty: number;
}

interface Action {
  type: string;
  payload: Options;
}

interface State {
  cartItems: Options[];
  coffee: number;
  delivery: number;
  vatAndService: number;
  total: number;
}

export const CartReducer = createReducer(
  {
    // initial state
    cartItems: [] as Options[],
    coffee: 0,
    delivery: 0,
    vatAndService: 0,
    total: 0,
  } as State,
  {
    // reducers
    addToCart: (state, action: Action) => {
      const item = action.payload;
      const itemExist = state.cartItems.find((i) => i.id === item.id);
      if (itemExist) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.qty += 1;
        });
      } else {
        state.cartItems.push(item);
      }
    },

    decrement: (state: State, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item && item.qty > 1) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.qty -= 1;
        });
      }
    },

    deleteFromCart: (state: State, action) => {
      state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
    },

    calculatePrice: (state: State) => {
      let sum = 0;
      state.cartItems.forEach((i) => (sum += i.price * i.qty));
      state.coffee = sum;
      state.delivery = state.coffee > 100 ? 0 : 10;
      state.vatAndService = Math.round(state.coffee * 100 * 0.09) / 100;
      state.total = state.coffee + state.delivery + state.vatAndService;
    },
  }
);
