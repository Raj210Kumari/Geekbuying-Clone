import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.css";
import { DELETE, ADD, REMOVE } from "../../redux/actions";

export const Cart = () => {
  const [price, setPrice] = useState(0);
  console.log(price);

  const carts = useSelector((state) => state.cartreducer.carts);
  console.log(carts);

  const dispatch = useDispatch();

  const dlt = (id) => {
    dispatch(DELETE(id));
  };

  //add increment
  const send = (e) => {
    // console.log(e)
    dispatch(ADD(e));
  };

  //remove quantity by 1:-
  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  const total = () => {
    let price = 0;
    carts.map((ele, k) => {
      price = ele.price * ele.qnty + price;
    });
    setPrice(price);
  };
  localStorage.setItem("total", JSON.stringify(price));

  useEffect(() => {
    total();
  }, [total]);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {carts.length === 0 ? (
        <div className="cart-empty">
          <p>Your Cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="Quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {carts.map((cartItem) => {
              return (
                <>
                  <div className="cart-item" key={cartItem.id}>
                    <div className="cart-product">
                      <img src={cartItem.image_url} alt={cartItem.name} />
                      <div>
                        <h3>{cartItem.name}</h3>
                        <p>{cartItem.description}</p>
                        <button onClick={() => dlt(cartItem.id)}>Remove</button>
                      </div>
                    </div>
                    <div className="cart-product-price">{cartItem.price}</div>
                    <div className="cart-product-quantity">
                      <button
                        onClick={
                          cartItem.qnty <= 1
                            ? () => dlt(cartItem)
                            : () => remove(cartItem)
                        }
                      >
                        -
                      </button>
                      <div className="count">{cartItem.qnty}</div>
                      <button onClick={() => send(cartItem)}>+</button>
                    </div>
                    <div className="cart-product-total-price">
                      {cartItem.price * cartItem.qnty}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="cart-summary">
            <button className="clear-cart">Clear Cart</button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">₹ {price}</span>
              </div>
              <p>Taxes and shipping calculated at checkout</p>
              <Link to="/billing">
                <button>Proceed to checkout</button>
              </Link>
              <div className="continue-shopping">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
