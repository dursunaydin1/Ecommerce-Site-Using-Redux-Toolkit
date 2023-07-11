import React, { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { product } from "../../assets/data/data.js";
import { CartItems } from "./CartItems.jsx";
import { useSelector } from "react-redux";

const Card = () => {
  const [cardOpen, setCardOpen] = useState(false); // Kartın açık veya kapalı olma durumunu takip etmek için bir state değişkeni tanımlanır. Başlangıç değeri false olarak ayarlanır.
  const closeCard = () => {
    setCardOpen(null); // Kartı kapatmak için kullanılan bir işlev. setCardOpen işlevi aracılığıyla cardOpen state'i null olarak güncellenir.
  };

  const quantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.itemsList);

  let total = 0;
  const itemsLists = useSelector((state) => state.cart.itemsList);
  itemsLists.forEach((item) => {
    total += item.totalPrice;
  });
  return (
    <>
      <div className="card" onClick={() => setCardOpen(!cardOpen)}>
        <BiShoppingBag className="cardIcon" />
        <span className="flexCenter">{quantity}</span>
      </div>
      <div className={cardOpen ? "overlay" : "nonoverlay"}></div>

      <div className={cardOpen ? "cartItem" : "cardhide"}>
        <div className="title flex">
          <h2>Sepetim</h2>
          <button onClick={closeCard}>
            <AiOutlineClose className="icon" />
          </button>
        </div>
        {cartItems.map((item) => (
          <CartItems
            key={item.id}
            id={item.id}
            cover={item.cover}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
          />
        ))}

        <div className="checkOut">
          <button>
            <span>Ödenecek Tutar</span>
            <label htmlFor="">${total}</label>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
