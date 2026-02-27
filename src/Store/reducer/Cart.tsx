import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type CartState = {
  items: CardapioItem[];
  isOpen: boolean;
  isOpenCheckout: boolean;
  isOpenPayment: boolean;
  isOpenOrder: boolean;
  products: Product[];
  delivery: DeliveryType | null;
  payment: Pay | null;
  orderId: string | null;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
  isOpenCheckout: false,
  isOpenPayment: false,
  isOpenOrder: false,
  products: [],
  delivery: null,
  payment: null,
  orderId: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      const food = state.items.find((item) => item.id === action.payload.id);

      if (!food) {
        state.items.push(action.payload);
      } else {
        alert("Item já adicionado no carrinho");
      }

      state.products.push({
        id: action.payload.id,
        price: action.payload.preco,
      });
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    open: (state) => {
      state.isOpen = true;
      state.isOpenCheckout = false;
    },
    close: (state) => {
      state.isOpen = false;
    },

    openCheckout: (state) => {
      state.isOpenCheckout = true;
      state.isOpen = false;
    },

    closeCheckout: (state) => {
      state.isOpenCheckout = false;
    },

    openPayment: (state) => {
      state.isOpenPayment = true;
    },
    closePayment: (state) => {
      state.isOpenPayment = false;
    },
    openOrder: (state) => {
      state.isOpenOrder = true;
    },
    closeOrder: (state) => {
      state.isOpenOrder = false;
    },

    setDelivery: (state, action) => {
      state.delivery = action.payload;
    },
    setOrderId: (state, action) => {
      state.orderId = action.payload;
    },
  },
});

export const {
  add,
  open,
  close,
  remove,
  openCheckout,
  closeCheckout,
  openPayment,
  closePayment,
  openOrder,
  setDelivery,
  setOrderId,
  closeOrder,
} = cartSlice.actions;
export default cartSlice.reducer;
