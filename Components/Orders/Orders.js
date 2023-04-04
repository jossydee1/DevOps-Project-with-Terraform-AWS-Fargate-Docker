import React, { useState, useEffect } from "react";
import "./Orders.css";
import { db } from "../../firebase";
import { useStateValue } from "../StateProvider/StateProvider";
import Order from "../Order/Order";
import { useSpring, animated } from "react-spring";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  const WhatsApp ='https://wa.me/2348069762478'

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    scroll: 100,
    from: { scroll: 0 }
  });

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot(snapshot => {
          setOrders(
            snapshot.docs.map(doc => ({
              id: doc.id,
              data: doc.data()
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your orders</h1>
      <p>
        Your payment was successful and your purchase is being processed for
        delivery.
      </p>

      <div className="orders__1">
        <p>
          Thank you for checking out my Amazon project. I hope you had a nice
          time navigating through the website
        </p>
        <p>
          Kindly hire me for your project and/or link me up for web development
          jobs
        </p>
      </div>
      <a href="https://wa.me/2348069762478">I AM AVAILABLE 24/7!!!</a>
      <div className="orders__3">
        <p>
          You can share this link with other people who may be interested in
          working with me
        </p>
        <p>Enjoy!!!</p>
      </div>
      <div className="orders__order">
        {orders?.map(order => <Order order={order} />)}
      </div>
    </div>
  );
}

export default Orders;
