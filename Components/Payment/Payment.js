import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
//import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../Reducer/Reducer";
import axios from "../axios";
import { db } from "../../firebase";
import { usePaystackPayment } from "react-paystack";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory;

  const amount = getBasketTotal(basket);
  const email = user?.email;

  console.log(amount, email);

  //Paystack configuration parameters here
  const config = {
    reference: new Date().getTime(),
    email: email,
    amount: amount * 45000,
    publicKey: "pk_test_97eecf9a69ef5cbc1c23d2010d19422cf9f8adcf"
  };

  const initializePayment = usePaystackPayment(config);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //generate the clientSecret that allows to charge the customer

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //Stripe expect the currency to be in sub-unit. That is, cent if your currency is dollar
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("The secret is >>>", clientSecret);

  //const stripe = useStripe();
  //const elements = useElements;

  // you can call this function anything
  const onSuccess = reference => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    window.location = "/orders";
  };
  /*(onSuccess => {
    //paymentIntent, as used by stripe, means payment confirmation

    db.collection("users")
      .doc(user?.uid)
      .collection("orders")
      .doc(onSuccess.id)
      .set({
        basket: basket,
        amount: onSuccess.amount,
        created: onSuccess.created
      });
  });*/

  const callback = function(response) {
    //this happens after the payment is completed successfully
    axios.get({
      url:
        "http://localhost:5001/my-6ff85/us-central1/api/verify_transaction?reference=" +
        response.reference,
      method: "get",
      success: function(response) {
        // the transaction status is in response.data.status
      }
    });

    var reference = response.reference;
    alert("Payment complete! Reference: " + reference);
    window.location = "/orders";
    // Make an AJAX call to your server with the reference to verify the transaction
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
    window.location = "/payment";
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link> )
        </h1>
        {/*Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Damilare Drive,</p>
            <p>Alen Avenue,</p>
            <p>Ikeja, Lagos.</p>
          </div>
        </div>
        {/*Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Item on delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/*Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe payment system */}
            <div className="payment__priceContainer">
              <CurrencyFormat
                renderText={value => <h3>Order Total:{value} </h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <button
                onClick={() => {
                  initializePayment(onSuccess, callback, onClose);
                }}
              >
                "Buy Now"
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
