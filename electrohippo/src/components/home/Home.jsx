import React from "react";

import { useState, useEffect, useRef } from "react";

const images = [
  "https://img.gkbcdn.com/s3/bn/2205/1090x422-6274f0ca2b40c938fc33ef3d.jpg",
  "https://img.gkbcdn.com/s3/bn/2205/1090x422-627102d02b40c930d0c34570.jpg",
  "https://img.gkbcdn.com/s3/bn/2205/1090x422-627095d62b40c92fe444d3aa.jpg",
  "https://img.gkbcdn.com/s3/bn/2205/1090x422-627097f82b40c92fe444d3ac.jpg",
  "https://img.gkbcdn.com/s3/bn/2204/1090x4221-626bc0cc2b40c92588165461.jpg",
  "https://img.gkbcdn.com/s3/bn/2204/1090x422-62593b442b40c918c04b0691.jpg",
];

export const Home = () => {
  const [imgInd, setImgInd] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setImgInd((prevIndex) => (prevIndex + 1) % images.length),
      2000
    );

    return () => {
      resetTimeout();
    };
  }, [imgInd]);

  const [state, setstate] = useState();
  var countDownDate = new Date("May 10, 2022 23:00:00").getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setstate(hours + "h " + minutes + "m " + seconds + "s ");

    if (distance < 0) {
      clearInterval(x);
      setstate("EXPIRED");
    }
  }, 1000);
  const [counter, setcounter] = useState(true);

  const prev = () => {
    // console.log(count);
    if (
      counter == true &&
      document.getElementsByClassName("five-div-title-images").length != 0
    ) {
      setcounter(false);
      document.getElementsByClassName(
        "five-div-title-images"
      )[0].style.marginLeft = "-30%";
      document.getElementsByClassName(
        "five-div-title-images"
      )[0].style.transition = "2s";
    }
    console.log("prev", counter);
  };
  const next = () => {
    if (
      counter == false &&
      document.getElementsByClassName("five-div-title-images").length != 0
    ) {
      document.getElementsByClassName(
        "five-div-title-images"
      )[0].style.marginLeft = "0";

      document.getElementsByClassName(
        "five-div-title-images"
      )[0].style.transition = "2s";
    }
    setcounter(true);
    console.log("next", counter);
  };

  const [counter1, setcounter1] = useState(true);

  const prev1 = () => {
    if (
      counter1 == true &&
      document.getElementsByClassName("six-div-title-images").length != 0
    ) {
      setcounter1(false);
      document.getElementsByClassName(
        "six-div-title-images"
      )[0].style.marginLeft = "-30%";
      document.getElementsByClassName(
        "six-div-title-images"
      )[0].style.transition = "2s";
    }
  };
  const next1 = () => {
    if (
      counter1 == false &&
      document.getElementsByClassName("six-div-title-images").length != 0
    ) {
      document.getElementsByClassName(
        "six-div-title-images"
      )[0].style.marginLeft = "0";

      document.getElementsByClassName(
        "six-div-title-images"
      )[0].style.transition = "2s";
    }
    setcounter1(true);
  };
  const [counter2, setcounter2] = useState(true);

  const prev2 = () => {
    if (
      counter2 == true &&
      document.getElementsByClassName("seven-div-title-images").length != 0
    ) {
      setcounter2(false);
      document.getElementsByClassName(
        "seven-div-title-images"
      )[0].style.marginLeft = "-30%";
      document.getElementsByClassName(
        "seven-div-title-images"
      )[0].style.transition = "2s";
    }
  };
  const next2 = () => {
    if (
      counter2 == false &&
      document.getElementsByClassName("seven-div-title-images").length != 0
    ) {
      document.getElementsByClassName(
        "seven-div-title-images"
      )[0].style.marginLeft = "0";

      document.getElementsByClassName(
        "seven-div-title-images"
      )[0].style.transition = "2s";
    }
    setcounter2(true);
  };
  const [counter3, setcounter3] = useState(true);

  const prev3 = () => {
    if (
      counter3 == true &&
      document.getElementsByClassName("eight-div-title-images").length != 0
    ) {
      setcounter2(false);
      document.getElementsByClassName(
        "eight-div-title-images"
      )[0].style.marginLeft = "-30%";
      document.getElementsByClassName(
        "eight-div-title-images"
      )[0].style.transition = "2s";
    }
  };
  const next3 = () => {
    if (
      counter2 == false &&
      document.getElementsByClassName("eight-div-title-images").length != 0
    ) {
      document.getElementsByClassName(
        "eight-div-title-images"
      )[0].style.marginLeft = "0";

      document.getElementsByClassName(
        "eight-div-title-images"
      )[0].style.transition = "2s";
    }
    setcounter3(true);
  };
  const onclick = () => {
    console.log("asd");
  };
  return (
    <div
      className="main"
      style={{ background: "#f2f2f2", height: "3340px", width: "100%" }}
    >
      <div className="reddiv">
        <div className="slideshow">
          <a href="./mobile">
            <img src={images[imgInd]} alt={imgInd} />
          </a>
          <div className="slider">
            {images.map((_, ind) => (
              <div
                onClick={() => setImgInd(ind)}
                className={imgInd === ind ? "active" : ""}
              />
            ))}
          </div>
        </div>
        <div className="side-div">
          <div className="div1">
            <a href="./mobile">
              <img
                src="https://img.gkbcdn.com/s3/bn/2205/424040350160-626f35a32b40c9339cabd74a.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="div2">
            <a href="./mobile">
              {" "}
              <img
                src="https://img.gkbcdn.com/s3/bn/2205/471160350x242-626f38162b40c9339cabd74e.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div className="second-div">
        <div className="second-div-block">
          <div className="second-div-block-upper1"></div>
          <p
            style={{ textAlign: "center", fontSize: "14px", fontWeight: "500" }}
          >
            SENBONO Max2 Smartwatch
          </p>
          <a href="./mobile">
            <img
              src="https://img.gkbcdn.com/s3/bn/2205/497705-626f45ba2b40c9339c112e8e.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="second-div-block">
          <div className="second-div-block-upper2"></div>
          <p
            style={{ textAlign: "center", fontSize: "14px", fontWeight: "500" }}
          >
            ROIDMI EVE Plus
          </p>
          <a href="./mobile">
            <img
              src="https://img.gkbcdn.com/s3/bn/2205/449701-626f45ea2b40c9339c112e8f.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="second-div-block">
          <div className="second-div-block-upper3"></div>
          <p
            style={{ textAlign: "center", fontSize: "14px", fontWeight: "500" }}
          >
            SYL-14 Off-Road E-Skateboard
          </p>
          <a href="./mobile">
            <img
              src="https://img.gkbcdn.com/s3/bn/2205/463887-626f45612b40c9339c112e8d.jpg"
              alt=""
            />
          </a>
        </div>
        <div className="second-div-block">
          <div className="second-div-block-upper4"></div>
          <p
            style={{ textAlign: "center", fontSize: "14px", fontWeight: "500" }}
          >
            Garden Supplies
          </p>
          <a href="./mobile">
            <img
              src="https://img.gkbcdn.com/s3/bn/2205/499068-626f46232b40c9339c112e90.jpg"
              alt=""
            />
          </a>
        </div>
      </div>

      <div className="third-div">
        <div className="third-div-title">
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "40px" }}
              img
              src="https://mpng.subpng.com/20191121/awz/transparent-shapes-icon-flash-icon-lightning-icon-5dd63b247132f9.2712528715743209324637.jpg"
              alt=""
            />
          </div>
          <div>
            <p style={{ color: "Black", fontSize: "20px", fontWeight: "500" }}>
              Flash Deal
            </p>
          </div>
          <div>
            <p style={{ color: "Grey", fontSize: "20px", marginLeft: "30px" }}>
              Ends in
            </p>
          </div>
          <p style={{ marginTop: "25px", marginLeft: "25px" }}>{state}</p>
        </div>
        <div className="third-div-title-image">
          <div className="third-div-title-images">
            <div className="third-div-title-images1">
              <img
                src="https://img.gkbcdn.com/p/2022-03-29/LOKMAT-APPLLP-MAX-Android-Watch-Phone-Black-498482-0._w280_p1_.jpg"
                alt=""
              />
            </div>
            <div className="third-div-title-images-price">
              <div className="product-price">
                <p>₹14937.58</p>
              </div>
              <div className="offer-price">
                <del>₹16903.16</del>
              </div>
              <div className="discount">12% OFF</div>
            </div>
          </div>
          <div className="third-div-title-images">
            <div className="third-div-title-images1">
              <img
                src="https://img.gkbcdn.com/p/2022-02-19/LOKMAT-Time-2-Sport-Smart-Watch-Black-496727-0._w280_p1_.jpg"
                alt=""
              />
            </div>
            <div className="third-div-title-images-price">
              <div className="product-price">
                <p>₹3380.00</p>
              </div>
              <div className="offer-price">
                <del>₹3773.12</del>
              </div>
              <div className="discount">10% OFF</div>
            </div>
          </div>
          <div className="third-div-title-images">
            <div className="third-div-title-images1">
              <img
                src="https://img.gkbcdn.com/p/2022-02-10/a6r-tws-wireless-earphones-black-4570b2-1644488631155._w280_p1_.jpg"
                alt=""
              />
            </div>
            <div className="third-div-title-images-price">
              <div className="product-price">
                <p>₹675.37</p>
              </div>
              <div className="offer-price">
                <del>₹1178.56</del>
              </div>
              <div className="discount">43% OFF</div>
            </div>
          </div>
          <div className="third-div-title-images">
            <div className="third-div-title-images1">
              <img
                src="https://img.gkbcdn.com/p/2021-11-09/63in1-Screwdriver-Set-Gray-477863-0._w280_p1_.jpg"
                alt=""
              />
            </div>
            <div className="third-div-title-images-price">
              <div className="product-price">
                <p>₹1021.31</p>
              </div>
              <div className="offer-price">
                <del>₹1571.67</del>
              </div>
              <div className="discount">35% OFF</div>
            </div>
          </div>
          <div className="third-div-title-images">
            <div className="third-div-title-images1">
              <img
                src="https://img.gkbcdn.com/p/2019-11-30/tws-i500-earphones-20191130100234539._w280_p1_.jpg"
                alt=""
              />
            </div>
            <div className="third-div-title-images-price">
              <div className="product-price">
                <p>₹1178.56</p>
              </div>
              <div className="offer-price">
                <del>₹1964.79</del>
              </div>
              <div className="discount">40% OFF</div>
            </div>
          </div>
        </div>
      </div>

      <div className="four-div">
        <div className="four-div-block">
          <p
            style={{ textAlign: "center", fontSize: "14px", fontWeight: "500" }}
          >
            3D Printers & Laser Engravers
          </p>
          <div>
            <img
              src="https://img.gkbcdn.com/s3/bn/2204/laser-6260f66a2b40c93724be1ee9.jpg"
              alt=""
            />
          </div>
          <p className="discription">
            Your at-home 3D laser printer that makes magical things at the push
            of a button.
          </p>
        </div>
        <div className="four-div-block">
          <p
            style={{ textAlign: "center", fontSize: "14px", fontWeight: "500" }}
          >
            Gamesir Brand Sale
          </p>
          <div>
            <img
              src="https://img.gkbcdn.com/s3/bn/2204/Gamesir-6260f6532b40c93724be1ee8.jpg"
              alt=""
            />
          </div>
          <p className="discription">
            Exploring a comprehensive gaming experience as always through
            Gamesir
          </p>
        </div>
        <div className="four-div-block">
          <p
            style={{ textAlign: "center", fontSize: "14px", fontWeight: "500" }}
          >
            E-Bikes
          </p>
          <div>
            <img
              src="https://img.gkbcdn.com/s3/bn/2203/481198-623d205c2b40c91d90971af4.jpg"
              alt=""
            />
          </div>
          <p className="discription">
            Road, mountain, gravel, commuter, they've all got electric versions.
          </p>
        </div>
        <div className="four-div-block">
          <p
            style={{ textAlign: "center", fontSize: "14px", fontWeight: "500" }}
          >
            Xming 1080p Projector
          </p>
          <div>
            <img
              src="https://img.gkbcdn.com/s3/bn/2204/497217-624fa3172b40c931484ec7f2.jpg"
              alt=""
            />
          </div>
          <p className="discription">
            1080P resolution, 250 lumens, it projects high-resolution images,
            more outstanding details.
          </p>
        </div>
      </div>
      <div className="five-div">
        <div className="five-div-block">
          <div className="five-div-title">
            <p style={{ fontSize: "20px", fontWeight: "400" }}>New Arrivals</p>
            <a
              href=""
              style={{
                textDecoration: "none",
                fontSize: "16px",
                marginTop: "10px",
              }}
            >
              See More
            </a>
          </div>
          <div className="five-div-title-image">
            <div className="next" style={{ height: "50px" }} onClick={prev}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/54/54782.png"
                alt=""
              />
            </div>
            <div className="prev" style={{ height: "50px" }} onClick={next}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/54/54782.png"
                alt=""
              />
            </div>
            <div className="five-div-title-images">
              <div className="five-div-title-images1">
                {/* <div style={{marginTop:"50px",height:"20px"}}>abc</div> */}
                <img
                  src="https://img.gkbcdn.com/p/2022-04-28/Zeblaze-Stratos-2-Smartwatch-1-3---AMOLED-Display-Blue-500033-0._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div className="five-div-title-images-price">
                <div className="product-discription">
                  <p>Zeblaze Stratos 2 Smartwatch 1.3'' AMOLED Display 24</p>
                </div>
                <div className="product-price">
                  <p>₹3380.00</p>
                </div>
              </div>
            </div>
            <div className="five-div-title-images">
              <div className="five-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/p/2022-02-19/LOKMAT-Time-2-Sport-Smart-Watch-Black-496727-0._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div className="five-div-title-images-price">
                <div className="product-discription">
                  <p>KUMI KU5 Smartwatch 1.22'' TFT Screen Real-time Health</p>
                </div>
                <div className="product-price">
                  <p>₹4480.72</p>
                </div>
              </div>
            </div>
            <div className="five-div-title-images">
              <div className="five-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/p/2022-02-10/a6r-tws-wireless-earphones-black-4570b2-1644488631155._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div className="five-div-title-images-price">
                <div className="product-discription">
                  <p>A pair of LED Luminous Chopsticks Creative Tableware</p>
                </div>
                <div className="product-price">
                  <p>₹470.95</p>
                </div>
              </div>
            </div>
            <div className="five-div-title-images">
              <div className="five-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/p/2021-11-09/63in1-Screwdriver-Set-Gray-477863-0._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div className="five-div-title-images-price">
                <div className="product-discription">
                  <p>ALLDOCUBE iWork GT 2 in 1 Tablet Windows 11 i5-1135G7</p>
                </div>
                <div className="product-price">
                  <p>₹69187.45</p>
                </div>
              </div>
            </div>
            <div className="five-div-title-images">
              <div className="five-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/p/2019-11-30/tws-i500-earphones-20191130100234539._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div className="five-div-title-images-price">
                <div className="product-discription">
                  <p>Magene HRM60 Heart Rate Monitor IML Colorful Shell</p>
                </div>
                <div className="product-price">
                  <p>₹3144.13</p>
                </div>
              </div>
            </div>
            <div className="five-div-title-images">
              <div className="five-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/p/2019-11-30/tws-i500-earphones-20191130100234539._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div className="five-div-title-images-price">
                <div className="product-discription">
                  <p>LED Camping Light 1.8m Adjustable with Tripod 6500-</p>
                </div>
                <div className="product-price">
                  <p>₹2122.03</p>
                </div>
              </div>
            </div>
            <div className="five-div-title-images">
              <div className="five-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/p/2019-11-30/tws-i500-earphones-20191130100234539._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div className="five-div-title-images-price">
                <div className="product-discription">
                  <p>Xiaomi Mijia MJJMQ01-ZJ Portable Massage Gun Muscle</p>
                </div>
                <div className="product-price">
                  <p>₹8647.74</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="six-div">
        <div className="six-div-block">
          {/* <button>abc</button> */}

          <div className="six-div-title">
            <p
              style={{ fontSize: "20px", fontWeight: "400", marginTop: "10px" }}
            >
              Best Sellers
            </p>
            <a
              href=""
              style={{
                textDecoration: "none",
                fontSize: "16px",
                marginTop: "15px",
              }}
            >
              See More
            </a>
          </div>
          <div className="six-div-title-image">
            <div className="next" style={{ height: "50px" }} onClick={prev1}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/54/54782.png"
                alt=""
              />
            </div>
            <div className="prev" style={{ height: "50px" }} onClick={next1}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/54/54782.png"
                alt=""
              />
            </div>
            <div className="six-div-title-images">
              <div className="six-div-title-images1">
                {/* <div style={{marginTop:"50px",height:"20px"}}>abc</div> */}
                <a href="./mobile">
                  <img
                    src="https://img.gkbcdn.com/p/2019-03-22/tronsmart-glary-virtual-7-1-gaming-headset-1571985014193._w280_p1_.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="six-div-title-images-price">
                <div className="product-discription">
                  <p>Zeblaze Stratos 2 Smartwatch 1.3'' AMOLED Display 24</p>
                </div>
                <div className="product-price">
                  <p>₹3380.00</p>
                </div>
              </div>
            </div>
            <div className="six-div-title-images">
              <div className="six-div-title-images1">
                <a href="./mobile">
                  <img
                    src="https://img.gkbcdn.com/p/2019-10-11/jjrc-x12-4k-gps-rc-drone-white-two-batteries-with-bag-1574132236117._w280_p1_.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="six-div-title-images-price">
                <div className="product-discription">
                  <p>KUMI KU5 Smartwatch 1.22'' TFT Screen Real-time Health</p>
                </div>
                <div className="product-price">
                  <p>₹4480.72</p>
                </div>
              </div>
            </div>
            <div className="six-div-title-images">
              <div className="six-div-title-images1">
                <a href="./mobile">
                  <img
                    src="https://img.gkbcdn.com/p/2021-12-09/A9-1080P-Mini-Wireless-WIFI-IP-Camera-480325-0._w280_p1_.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="six-div-title-images-price">
                <div className="product-discription">
                  <p>A pair of LED Luminous Chopsticks Creative Tableware</p>
                </div>
                <div className="product-price">
                  <p>₹470.95</p>
                </div>
              </div>
            </div>
            <div className="six-div-title-images">
              <div className="six-div-title-images1">
                <a href="./mobile">
                  {" "}
                  <img
                    src="https://img.gkbcdn.com/p/2021-11-29/razer-deathadder-essential-optical-gaming-mouse-black-aa9d23-1638169302886._w280_p1_.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="six-div-title-images-price">
                <div className="product-discription">
                  <p>ALLDOCUBE iWork GT 2 in 1 Tablet Windows 11 i5-1135G7</p>
                </div>
                <div className="product-price">
                  <p>₹69187.45</p>
                </div>
              </div>
            </div>
            <div className="six-div-title-images">
              <div className="six-div-title-images1">
                <a href="./mobile">
                  <img
                    src="https://img.gkbcdn.com/p/2019-10-28/enchen-blackstone-3d-smart-electric-shaver-black-1574132742777._w280_p1_.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="six-div-title-images-price">
                <div className="product-discription">
                  <p>Magene HRM60 Heart Rate Monitor IML Colorful Shell</p>
                </div>
                <div className="product-price">
                  <p>₹3144.13</p>
                </div>
              </div>
            </div>
            <div className="six-div-title-images">
              <div className="six-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/p/2022-02-09/gamebox-g5-32gb-video-game-console-with-2-gamepads-8fec60-1644387756223._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div className="six-div-title-images-price">
                <div className="product-discription">
                  <p>LED Camping Light 1.8m Adjustable with Tripod 6500-</p>
                </div>
                <div className="product-price">
                  <p>₹2122.03</p>
                </div>
              </div>
            </div>
            <div className="six-div-title-images">
              <div className="six-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/p/2019-11-30/tws-i500-earphones-20191130100234539._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div className="six-div-title-images-price">
                <div className="product-discription">
                  <p>Xiaomi Mijia MJJMQ01-ZJ Portable Massage Gun Muscle</p>
                </div>
                <div className="product-price">
                  <p>₹8647.74</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="popular-brand">
        <div className="pb">
          <div
            style={{ fontSize: "20px", fontWeight: "400", marginTop: "10px" }}
          >
            Populars Brand
          </div>
          <a
            href=""
            style={{
              textDecoration: "none",
              fontSize: "16px",
              marginTop: "15px",
            }}
          >
            See More
          </a>
        </div>
        <div className="popular-brand-div-container">
          <div className="popular-brand-div">
            <div className="popular-brand-div-img">
              <img src="https://img.gkbcdn.com/s3/b/Logo/tronsmart.jpg?v=788944783" />
            </div>
            <div className="popular-brand-div-second-block">
              <div
                style={{
                  height: "100px",
                  width: "21%",
                  margin: "auto",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src="https://img.gkbcdn.com/p/2020-01-09/Tronsmart-element-T6-plus-Upgrade-Black-895558-._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div
                style={{
                  height: "100px",
                  width: "21%",
                  margin: "auto",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src="https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-mega-bluetooth-speaker-black-1571991416189._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div
                style={{
                  height: "100px",
                  width: "21%",
                  margin: "auto",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src="https://img.gkbcdn.com/p/2019-10-24/tronsmart-element-t6-max-60w-bluetooth-5-0-nfc-speaker-black-1574132858241._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div
                style={{
                  height: "100px",
                  width: "21%",
                  margin: "auto",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src="https://img.gkbcdn.com/p/2019-03-18/tronsmart-element-t6-plus-bluetooth-speaker-black-1574132202231._w280_p1_.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="popular-brand-div">
            <div className="popular-brand-div-img">
              <img
                src="https://img.gkbcdn.com/s3/b/Logo/jimmy.jpg?v=-219567574"
                alt=""
              />
            </div>
            <div className="popular-brand-div-second-block">
              <div
                style={{
                  height: "100px",
                  width: "21%",
                  margin: "auto",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src="https://img.gkbcdn.com/p/2020-01-07/JIMMY-F6-1800W-Electric-Hair-Dryer-Ruby-Red-882508-._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div
                style={{
                  height: "100px",
                  width: "21%",
                  margin: "auto",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src="https://img.gkbcdn.com/p/2020-09-18/JIMMY-JV85-Cordless-Handheld-Vacuum-Cleaner-23000Pa-Suction-426268-0._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div
                style={{
                  height: "100px",
                  width: "21%",
                  margin: "auto",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src="https://img.gkbcdn.com/p/2019-05-07/xiaomi-jimmy-jv83-wireless-vacuum-cleaner-blue-1571994426496._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div
                style={{
                  height: "100px",
                  width: "21%",
                  margin: "auto",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src="https://img.gkbcdn.com/p/2021-03-09/JIMMY-H8-Cordless-Handheld-Flexible-Vacuum-Cleaner-Blue-455909-0._w280_p1_.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="popular-brand-div">
            <div className="popular-brand-div-img">
              <img src="https://img.gkbcdn.com/s3/b/Logo/roborock.jpg" alt="" />
            </div>
            <div className="popular-brand-div-second-block">
              <div
                style={{
                  height: "100px",
                  width: "21%",
                  margin: "auto",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src="https://img.gkbcdn.com/p/2022-04-29/roborock-s7-robot-vacuum-cleaner-2500pa-powerful-suction-feadc9-1651214912229._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div
                style={{
                  height: "100px",
                  width: "21%",
                  margin: "auto",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src="https://img.gkbcdn.com/p/2020-05-29/roborock-s5-max-robot-vacuum-cleaner-international-version-black-1590736089662._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div
                style={{
                  height: "100px",
                  width: "21%",
                  margin: "auto",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src="https://img.gkbcdn.com/p/2020-03-28/Roborock-Smart-Robotic-Vacuum-Cleaner-Rolling-Brush-899581-._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div
                style={{
                  height: "100px",
                  width: "21%",
                  margin: "auto",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src="https://img.gkbcdn.com/p/2021-05-27/Roborock-S7-Robotic-Vacuum-Cleaner-Mop-Cloth-459860-0._w280_p1_.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="popular-brand-div">
            <div className="popular-brand-div-img">
              <img src="https://img.gkbcdn.com/s3/b/eleglide.jpg" alt="" />
            </div>
            <div className="popular-brand-div-second-block">
              <div
                style={{
                  height: "100px",
                  width: "21%",
                  margin: "auto",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src="https://img.gkbcdn.com/p/2022-04-24/eleglide-m1-plus-upgraded-version-electric-bike-12-5ah-250w-black-258649-1650765309927._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div
                style={{
                  height: "100px",
                  width: "21%",
                  margin: "auto",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src="https://img.gkbcdn.com/p/2022-04-24/eleglide-m1-upgraded-version-electric-bike-7-5ah-250w-motor-dark-blue-b23cd2-1650765670228._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div
                style={{
                  height: "100px",
                  width: "21%",
                  margin: "auto",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src="https://img.gkbcdn.com/p/2021-09-10/eleglide-s1-plus-folding-electric-scooter-10--pneumatic-tires-black-1631275759377._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div
                style={{
                  height: "100px",
                  width: "21%",
                  margin: "auto",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src="https://img.gkbcdn.com/p/2021-09-14/eleglide-d1-master-off-road-folding-electric-scooter-10--tires-black-1631613267943._w280_p1_.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="popular-brand-div">
            <div className="popular-brand-div-img">
              <img
                src="https://img.gkbcdn.com/s3/b/sculpfun-6AlQjHhs.jpg"
                alt=""
              />
            </div>
            <div className="popular-brand-div-second-block-3">
              <div
                style={{
                  height: "100px",
                  width: "31%",
                  margin: "auto",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src="https://img.gkbcdn.com/p/2021-12-22/SCULPFUN-S9-Laser-Engraver-481991-0._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div
                style={{
                  height: "100px",
                  width: "31%",
                  margin: "auto",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src="https://img.gkbcdn.com/p/2021-12-17/Sculpfun-Honeycomb-Panel-200x300mm-481734-0._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div
                style={{
                  height: "100px",
                  width: "31%",
                  margin: "auto",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src="https://img.gkbcdn.com/p/2021-12-17/Sculpfun-S6-Pro-Laser-Engraver-481732-0._w280_p1_.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="popular-brand-div">
            <div className="popular-brand-div-img">
              <img src="https://img.gkbcdn.com/s3/b/artillery.jpg" alt="" />
            </div>
            <div className="popular-brand-div-second-block-3">
              <div
                style={{
                  height: "100px",
                  width: "31%",
                  margin: "auto",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src="https://img.gkbcdn.com/p/2022-04-24/artillery-sidewinder-x2-3d-printer-3b98f7-1650788405823._w280_.png"
                  alt=""
                />
              </div>
              <div
                style={{
                  height: "100px",
                  width: "31%",
                  margin: "auto",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src="https://img.gkbcdn.com/p/2021-09-16/Artillery-Genius-Pro-3D-Printer-472514-0._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div
                style={{
                  height: "100px",
                  width: "31%",
                  margin: "auto",
                  background: "#f5f5f5",
                }}
              >
                <img
                  src="https://img.gkbcdn.com/p/2021-07-12/Artillery-Hornet-2021-Newest-Model-3D-Printer-with-Metal-Integrated-St-461282-0._w280_p1_.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="seven-div">
        <div className="seven-div-block">
          {/* <button>abc</button> */}

          <div className="seven-div-title">
            <p style={{ fontSize: "20px", fontWeight: "400" }}>
              Trending Categories
            </p>
          </div>
          <div className="seven-div-title-image">
            <div className="next" style={{ height: "50px" }} onClick={prev2}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/54/54782.png"
                alt=""
              />
            </div>
            <div className="prev" style={{ height: "50px" }} onClick={next2}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/54/54782.png"
                alt=""
              />
            </div>
            <div className="seven-div-title-images">
              <div className="seven-div-title-images1">
                {/* <div style={{marginTop:"50px",height:"20px"}}>abc</div> */}
                <img
                  src="https://img.gkbcdn.com/s3/c/2109/robotvacuums60d29088e21ad3c62c1974d5-6135e4de2b40c928c4cffc23.jpg"
                  alt=""
                />
              </div>
              <div className="seven-div-title-images-price">
                <div className="product-discription-7">
                  <p>Robot Vacuums</p>
                </div>
              </div>
            </div>
            <div className="seven-div-title-images">
              <div className="seven-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/s3/c/2109/02020225144159Outdoor-6135e4ed2b40c92078307531.jpg"
                  alt=""
                />
              </div>
              <div className="seven-div-title-images-price">
                <div className="product-discription-7">
                  <p>Electric Scooters</p>
                </div>
              </div>
            </div>
            <div className="seven-div-title-images">
              <div className="seven-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/s3/c/2112/3d-61b0157f2b40c9211cc0ca18.jpg"
                  alt=""
                />
              </div>
              <div className="seven-div-title-images-price">
                <div className="product-discription-7">
                  <p>3D Printers</p>
                </div>
              </div>
            </div>
            <div className="seven-div-title-images">
              <div className="seven-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/s3/c/2109/electronics-6135e6ac2b40c916ac3b2823.jpg"
                  alt=""
                />
              </div>
              <div className="seven-div-title-images-price">
                <div className="product-discription-7">
                  <p>Electronics</p>
                </div>
              </div>
            </div>
            <div className="seven-div-title-images">
              <div className="seven-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/s3/c/2109/02020516164612h6-6135e5222b40c92078307532.jpg"
                  alt=""
                />
              </div>
              <div className="seven-div-title-images-price">
                <div className="product-discription-7">
                  <p>Cordless Vacuums</p>
                </div>
              </div>
            </div>
            <div className="seven-div-title-images">
              <div className="seven-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/s3/c/2112/laptop-61b015fa2b40c9211cc0ca19.jpg"
                  alt=""
                />
              </div>
              <div className="seven-div-title-images-price">
                <div className="product-discription-7">
                  <p>Laptops & Tablets</p>
                </div>
              </div>
            </div>
            <div className="seven-div-title-images">
              <div className="seven-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/p/2019-11-30/tws-i500-earphones-20191130100234539._w280_p1_.jpg"
                  alt=""
                />
              </div>
              <div className="seven-div-title-images-price">
                <div className="product-discription-7">
                  <p>Xiaomi Mijia MJJMQ01-ZJ Portable Massage Gun Muscle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="eight-div">
        <div className="eight-div-block">
          {/* <button>abc</button> */}

          <div className="eight-div-title">
            <p style={{ fontSize: "22px", fontWeight: "400" }}>
              Recommendations for you
            </p>
          </div>
          <div className="eight-div-title-image">
            <div className="next" style={{ height: "50px" }} onClick={prev3}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/54/54782.png"
                alt=""
              />
            </div>
            <div className="prev" style={{ height: "50px" }} onClick={next3}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/54/54782.png"
                alt=""
              />
            </div>
            <div className="eight-div-title-images">
              <div className="eight-div-title-images1">
                {/* <div style={{marginTop:"50px",height:"20px"}}>abc</div> */}
                <img
                  src="https://img.gkbcdn.com/p/2019-03-18/tronsmart-element-t6-plus-bluetooth-speaker-black-1571991425316._w280_.jpg"
                  alt=""
                />
              </div>
              <div className="eight-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/p/2019-03-16/tronsmart-force-mega-t6-t6-plus-speaker-carry-case-1571991604256._w280_.jpg"
                  alt=""
                />
              </div>
              <div className="eight-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/p/2019-07-05/tronsmart-element-force-portable-bluetooth-speaker-1571994482583._w280_.jpg"
                  alt=""
                />
              </div>
              <div className="eight-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/p/2019-10-24/tronsmart-element-t6-max-60w-bluetooth-5-0-nfc-speaker-black-1574132858241._w280_.jpg"
                  alt=""
                />
              </div>
              <div className="eight-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/p/2019-01-31/tronsmart-element-mega-bluetooth-speaker-black-1571991416189._w280_.jpg"
                  alt=""
                />
              </div>
              <div className="eight-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/p/2022-04-25/LED-Portable-Lightweight-Neck-Hung-Lamp-499964-0._w280_.jpg"
                  alt=""
                />
              </div>
              <div className="eight-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/p/2022-04-29/C2-WIFI-Hidden-Camera-Wireless-Network-Security-Surveillance-Camera-500067-0._w280_.jpg"
                  alt=""
                />
              </div>
              <div className="eight-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/p/2022-04-16/tronsmart--trip-7b1e84-1650097276239._w280_.jpg"
                  alt=""
                />
              </div>
              <div className="eight-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/p/2022-04-21/CREASEE-CS30-3D-Printer-499863-0._w280_.jpg"
                  alt=""
                />
              </div>
              <div className="eight-div-title-images1">
                <img
                  src="https://img.gkbcdn.com/p/2022-03-28/Anycubic-Photon-Mono-4K-LCD-SLA-Printer-UV-Resin-3D-Printer-498383-0._w280_.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button style={{marginLeft:"93%",position:"relative"}} onClick={onclick} >dfghjk</button> */}
    </div>
  );
};
