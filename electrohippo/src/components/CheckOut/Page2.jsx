import React from "react";
import { Link } from "react-router-dom";
import styles from "./Page2.module.css";

export const Page2 = () => {
  const shippingAddress = [
    {
      first: "syed",
      last: "mohd",
      city: "Agra",
      state: "Uttar Pradesh",
      country: "India",
      tel: "9760484562",
      postal: "246746",
      line1: "Hindu Choudnriyan",
      line2: "Near Electric Transformer",
    },
  ];

  let amount = JSON.parse(localStorage.getItem("total"));
  console.log(amount);
  return (
    <div>
      <div>
        <div className={styles.header}>
          <img className={styles.image} src="/geek_buying.jpg" alt={"name"} />
        </div>
        <h3>Shipping Address</h3>
        <div className={styles.div1}>
          <div>
            <span className={styles.coupon1}>Name:</span>
            {`${shippingAddress[0].first} ${shippingAddress[0].last}`}
          </div>
          <div>
            <span className={styles.coupon1}>Tel:</span>
            {`${shippingAddress[0].tel}`}
          </div>
          <div>
            <span className={styles.coupon1}>Address:</span>
            {`${shippingAddress[0].line1} ${shippingAddress[0].line2} ${shippingAddress[0].city} 
      ${shippingAddress[0].state}, ${shippingAddress[0].postal} ${shippingAddress[0].country}`}
          </div>
        </div>
        <h3>Shipping & Delivery</h3>
        <div className={styles.shipping}>
          <div className={styles.first_row1}>
            <span>Shipping Methods</span>
            <span>Estimated Shipping Time</span>
            <span>Shipping Cost</span>
          </div>
          <div className={styles.first_row}>
            <span className={styles.left1}>Expedited Shipping</span>
            <span className={styles.center1}>2-7 business days</span>
            <span className={styles.right}>Free Shipping</span>
          </div>
        </div>
        <div className={styles.right_box1}>
          <p>Order Subtotal:{amount}</p>
          <p>Shipping Cost:{0}</p>
          <br />
          <p>Grand Total:{amount}</p>
          <Link to="/checkOut">
            <input
              className={styles.order}
              type={"button"}
              value={"Place Your Order"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
