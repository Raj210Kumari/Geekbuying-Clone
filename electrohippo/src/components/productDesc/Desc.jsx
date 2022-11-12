import React, { useState, useEffect } from "react";
import "./desc.css";
import Clock from "./timer";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ADD } from "../../redux/actions";

function Desc() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cartreducer.carts);

  //send function used to send items to Cart Page
  const send = (e) => {
    // console.log(e)
    dispatch(ADD(e));
  };

  const { id } = useParams();

  const [data, setdata] = useState({});

  useEffect(() => {
    axios
      .get(`https://projects-data-masai.herokuapp.com/geekProducts/${id}`)
      .then((res) => {
        setdata(res.data);
      });
  }, []);

  const obj = {
    image:
      "https://img.gkbcdn.com/s3/p/2022-03-10/SENBONO-MAX2-Smartwatch-for-Men-Brwon-Leather-497706-0.jpg",
    title:
      "SENBONO Max2 Smartwatch for Men Touch Screen 24 Sports Modes Waterproof Fitness Tracker for iOS Android Brwon Leather",
    brand: "Senbono",
    itemCode: "497706",
    offerPrice: 2751.02,
    price: 3222.76,
    shipFrom: "China",
    off: "15%",
    qty: 0,
  };

  const unfilledLike = "https://cdn-icons-png.flaticon.com/128/535/535285.png";
  const filledLike = "https://cdn-icons-png.flaticon.com/128/7299/7299756.png";

  function randomOff() {
    let off = Math.floor(Math.random() * 10) + 10;
    let offNew = off + "%";
    return offNew;
  }

  const [timer, setTimer] = useState({
    h1: 0,
    m1: 0,
    s1: 0,
  });

  const [counter, setcounter] = useState(1);

  function add() {
    if (counter < 10) {
      setcounter((prev) => prev + 1);
    }
  }

  function remove() {
    if (counter > 0) {
      setcounter((prev) => prev - 1);
    }
  }

  const [liked, setliked] = useState(false);

  function handleLike() {
    setliked((prev) => !prev);
  }

  //Use here localStorage to retrieve our data when page gets refreshed:-

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(carts));
  }, [carts]);

  return (
    <div className="biggy">
      <div className="main">
        <img
          className="headerImg"
          src="https://img.gkbcdn.com/s3/bn/2205/1500x125-6271031b2b40c930d0488be9.jpg"
          alt=""
        />
        <div className="subMain">
          <div className="mainImgBox">
            <img src={data.image_url} alt="watch" />
          </div>
          <div className="rightMain">
            <p className="title">{data.name}</p>
            <div className="forSpans">
              <span>
                Brand: <span>{data.brand}</span>{" "}
              </span>
              <span>
                Item Code: <span>{obj.itemCode || 345617}</span>
              </span>
            </div>
            <div className="timer">
              <div className="timerLeft">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3601/3601695.png"
                  alt=""
                />
                <span>FLASH DEAL</span>
              </div>
              <div className="timerRight">
                <span style={{ marginRight: 20 }}>Sales Ends in 2 hours </span>
                <div className="clock11">
                  <Clock />
                </div>
              </div>
            </div>
            <div className="data">
              <div className="price">
                <span className="label">Price:</span>
                <span className="price1">&#8377;{data.price}</span>
                <span className="price2">
                  <s>&#8377;{data.strikedoffprice}</s>
                </span>
                <span className="price3">{randomOff()}OFF</span>
              </div>
              <div className="shipFrom">
                <span className="label">Ship From: </span>
                <span className="shipName">{obj.shipFrom}</span>
              </div>
              <div className="qty">
                <span className="label">QTY:</span>
                <button className="counter" onClick={remove}>
                  -
                </button>
                <span className="counterBox">{counter}</span>
                <button className="counter" onClick={add}>
                  +
                </button>
              </div>
            </div>
            <div className="buttons">
              <div className="buyNow pointer">Buy Now </div>
              <div className="addToCart pointer" onClick={() => send(data)}>
                Add to Cart{" "}
              </div>
              <div onClick={handleLike} className="wishList pointer">
                <img src={liked ? filledLike : unfilledLike} />
                <p className="wishTxt">Add to WishList</p>
              </div>
            </div>
            <div className="paypal">
              <span className="label">Payment:</span>
              <img
                src="https://cdn-icons-png.flaticon.com/128/196/196566.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="four">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2438/2438078.png"
              alt=""
            />
            <p class="text">SECURE PAYMENTS</p>
          </div>
          <div class="four">
            <img
              src="https://cdn-icons-png.flaticon.com/128/4766/4766928.png"
              alt=""
            />
            <p class="text">CASH ON DELIVERY</p>
          </div>
          <div class="four">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1212/1212158.png"
              alt=""
            />
            <p class="text">ASSURED QUALITY</p>
          </div>
          <div class="four">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2271/2271113.png"
              alt=""
            />
            <p class="text">EASY RETURNS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desc;
