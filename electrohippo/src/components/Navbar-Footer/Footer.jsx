import React from "react";
import "./css/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="foot">
      <div id="footTop">
        <div id="footTopLeft">
          <div id="footSubscribe">
            <input
              type="text"
              placeholder="Enter email to get a 5% off coupon"
            />
            <button>Suscribe</button>
          </div>

          <div>
            <h5>About Geekbuying</h5>
            <p>
              We at Geekbuying are all about making our customers' lives
              comfortable and smarter. We have a massive selection of products
              and offer unbeatable prices. If you are looking for the latest and
              the greatest product in categories like smart home and outdoor
              gadgets, Geekbuying is where you should be! Geekbuying is the
              ultimate shopping hub for new releases covering smart home
              products like vacuum cleaners, fitness equipment like treadmills,
              top of the line home and office furniture, outdoor items including
              e-bikes, scooters, and other consumer goods like TV boxes, RC Toys
              and so much more! Shop for your favorite brands and products
              today!
            </p>
          </div>
        </div>

        <div id="footTopRight">
          <div id="footTopIcons">
            <div id="footTopIconsLeft">
              <img src="https://cdn-icons-png.flaticon.com/512/20/20837.png" />
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384028.png" />
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111710.png" />
              <img src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png" />
              <img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" />
              <img src="https://cdn-icons-png.flaticon.com/512/49/49046.png" />
            </div>

            <div id="footTopIconsRight">
              <div>
                <img src="https://cdn-icons-png.flaticon.com/512/0/191.png" />
                <p>Mobile</p>
              </div>

              <div>
                <img src="https://cdn-icons-png.flaticon.com/512/152/152753.png" />
                <p>Android</p>
              </div>

              <div>
                <img src="https://cdn-icons-png.flaticon.com/512/731/731985.png" />
                <p>iOS</p>
              </div>
            </div>
          </div>

          <div id="footTopRightLinks">
            <div>
              <h4>Help</h4>
              <p>Order status</p>
              <Link to="/aboutUS">
                <p>About us</p>
                <p>Contact us</p>
              </Link>
              <p>Warranty</p>
              <p>FAQs</p>
              <p>Sitemap</p>
            </div>

            <div>
              <h4>Support</h4>
              <p>Payment information</p>
              <p>Shipping guide</p>
              <p>Wholesale</p>
              <p>Affiliates</p>
              <p>Student discount</p>
              <p>Youth discount</p>
            </div>

            <div>
              <h4>Policies</h4>
              <p>Terms & conditions</p>
              <p>Return policy</p>
              <p>Privacy</p>
              <p>Declaration</p>
              <p>Customs</p>
            </div>
          </div>
        </div>
      </div>

      <div id="footMid">
        <div id="footMidHigh">
          <h5>Popular Searches</h5>
          <button>Geekbuying Coupon</button>
          <button>Roborock Q7 Max</button>
          <button>Tronsmart Bluetooth Speakers</button>
          <button>Windows Mini PC</button>
          <button>android tv boxes</button>
          <button>LDS Robot Vacuum</button>
          <button>Electric Bike</button>
          <button>OnexPlayer mini AMD</button>
        </div>

        <div id="footMidLow">
          <p>English</p>
          <p>Español</p>
          <p>Français</p>
          <p>Deutsch</p>
          <p>Italiano</p>
          <p>Português</p>
          <p>Nederlands</p>
          <p>Polski</p>
          <p>Русский</p>
          <p>Türkçe</p>
          <p>ελληνικά</p>
          <p>Magyar</p>
          <p>لعربية</p>
          <p>עברית</p>
          <p>ไทย</p>
          <p>日本語</p>
        </div>
      </div>

      <div id="footBottom">
        <img src="https://content1.geekbuying.com/V1.4/en/images/index_images/footicons.jpg?v=20220427" />
      </div>
    </div>
  );
};

export default Footer;
