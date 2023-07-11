import { createSlice } from "@reduxjs/toolkit";

// Redux Toolkit'in createSlice fonksiyonuyla bir slice oluşturuluyor.
const cartSlice = createSlice({
  name: "cart", // Slice ismi
  initialState: {
    itemsList: [], // Sepetteki ürünlerin listesi
    totalQuantity: 0, // Toplam ürün miktarı
  },
  reducers: {
    addToCart(state, action) {
      // Sepete ürün ekleme işlevi
      const newItem = action.payload; // Eklenecek yeni ürün

      const exitsItem = state.itemsList.find((item) => item.id === newItem.id); // Eğer ürün daha önceden sepette varsa kontrolü

      if (exitsItem) {
        // Eğer ürün sepette varsa
        exitsItem.quantity++; // Ürün miktarını artır
        exitsItem.totalPrice += newItem.price; // Toplam fiyatı güncelle
      } else {
        // Eğer ürün sepette yoksa
        state.itemsList.push({
          // Yeni ürünü sepete ekle
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          cover: newItem.cover,
        });
        state.totalQuantity++; // Toplam ürün miktarını artır
      }
    },
    removeFromCart(state, action) {
      const id = action.payload; // Kaldırılacak ürünün kimliği

      const exitstingItem = state.itemsList.find((item) => item.id === id); // Kaldırılacak ürünün mevcut hali

      if (exitstingItem.quantity === 1) {
        // Eğer ürünün miktarı 1 ise
        state.itemsList = state.itemsList.filter((item) => item.id != id); // Ürünü listeden kaldır
        state.totalQuantity--; // Toplam ürün miktarını azalt
      } else {
        // Eğer ürünün miktarı 1'den fazlaysa
        exitstingItem.quantity--; // Ürün miktarını azalt
        exitstingItem.totalPrice -= exitstingItem.price; // Toplam fiyatı güncelle
      }
    },
  },
});
export const cartActions = cartSlice.actions;

export default cartSlice;
