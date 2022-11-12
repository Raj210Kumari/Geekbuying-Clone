import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/navbarMid.css";
import { useSelector } from "react-redux";

const NavbarMid = () => {
  const [show, setShow] = useState(false);

  //Used to reflect Cart Add Item into Bag:-
  const carts = useSelector((state) => state.cartreducer.carts);

  const handleShow = () => {
    console.log("show:", show);
    setShow(!show);
    console.log("show:", show);
  };

  return (
    <div id="navMid">
      <Link to="/home">
        <img
          id="navMidLogo"
          src="https://www.shareasale.com/images/logo2016_1.jpg"
          alt="LOGO"
        />
      </Link>

      <button id="navMidSelectButton" onClick={handleShow} value="all">
        All Categories{" "}
        <img src="https://cdn-icons-png.flaticon.com/512/57/57055.png" />
      </button>

      <div id="navMidSearchDiv">
        <div>
          <input
            type="text"
            id="navMidInput"
            placeholder="Search by keywords"
          />
        </div>
        <button id="navMidSearchButton">
          <img
            id="navMidSearchImage"
            src="https://i.ibb.co/LtfYhmG/search.png"
          />
        </button>
      </div>

      {show ? (
        <div id="navMidSelect">
          <div>
            <div value="home">Smart Home and Garden</div>
            <br></br>
            <Link to="/mobile">
              <div value="phone">Phones & Accessories</div>
            </Link>
            <br></br>
            <div value="computer">Computer, Tablet & Accessories</div>
            <br></br>
            <div value="wearable">Wearable Devices</div>
            <br></br>
            <div value="auto">Automobiles & Motorcycles</div>
            <br></br>
            <div value="sports">Sports and Outdoors</div>
            <br></br>{" "}
          </div>
          <div>
            <div value="consumer">Consumer Electronics</div>
            <br></br>
            <div value="tv">TV Boxes & Mini PCs</div>
            <br></br>
            <div value="toys">Toys & Hobbies</div>
            <br></br>
            <div value="security">Security System</div>
            <br></br>
            <div value="fashion">Fashion</div>
            <br></br>{" "}
          </div>
        </div>
      ) : (
        ""
      )}

      <div id="navMidRightButton">
        {/* <img src="https://i.ibb.co/jr8y62h/user.png"> */}
        <Link to="/login">
          <button>
            <img src="https://i.ibb.co/jr8y62h/user.png" />
            Sign in
          </button>
        </Link>

        <button>
          <img src="https://i.ibb.co/F3LgrPd/heart.png" />
          Wishlist
        </button>

        <Link to="/cart">
          <button>
            <img src="https://i.ibb.co/k4H1jZq/shopping-cart.png" />
            Cart
            <span className="bag-quantity">
              <span>{carts.length}</span>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavbarMid;
