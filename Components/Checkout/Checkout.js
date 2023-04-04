import React from "react";
import "./Checkout.css";
import Ad from "./Ad.jpg";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={Ad} alt="" />

        <div className="checkout__title">
          <h3>Hello, {user?.email || "Guest"}</h3>
          <h2>Your Shopping Basket contains the following item(s)</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

          {/*CheckoutProduct*/}
          {/*CheckoutProduct*/}
          {/*CheckoutProduct*/}
          {/*CheckoutProduct*/}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
