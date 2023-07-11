import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import authSlice from "./authSlice";

// Redux mağazasını yapılandırırken, configureStore fonksiyonu kullanılır.
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer, // Dilimin azaltıcısını (reducer) mağazaya ekler
    auth: authSlice.reducer,
  },
});

export default store;
