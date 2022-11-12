import react, { useEffect, useState } from "react";
import "./css/navbar.css";
import NavbarBottomSelect from "./NavbarBottomSelect";
import NavbarMid from "./NavbarMid";

const Navbar = () => {
  const [bottonSelect, setBottonSelect] = useState(false);
  const handleBottomSelect = () => {
    setBottonSelect(!bottonSelect);
  };
  return (
    <nav >
      {/* ----- Navbar TOP ----- */}
      <div id="navTop">
        <div>
          <p>
            {" "}
            <img src="https://cdn-icons-png.flaticon.com/512/0/191.png" /> Save
            Big with our app!{" "}
            <img
              className="navTopArrow"
              src="https://cdn-icons-png.flaticon.com/512/892/892498.png"
            />
          </p>
        </div>

        <div>
          <p>
            Language{" "}
            <img
              className="navTopArrow"
              src="https://cdn-icons-png.flaticon.com/512/892/892498.png"
            />
          </p>
        </div>

        <div>
          <p>
            Ship to{" "}
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png" />{" "}
            /INR
            <img
              className="navTopArrow"
              src="https://cdn-icons-png.flaticon.com/512/892/892498.png"
            />{" "}
          </p>
        </div>

        <div>
          <p>
            Support center{" "}
            <img
              className="navTopArrow"
              src="https://cdn-icons-png.flaticon.com/512/892/892498.png"
            />{" "}
          </p>
        </div>
      </div>

      {/* ----- Navbar MID ----- */}
      <NavbarMid />

      {/* ----- Navbar BOTTOM ----- */}
      <div id="navBottom">
        <button
          id="navBottomSelectButton"
          value="all"
          onClick={handleBottomSelect}
        >
          Shop All Categories{" "}
          <img src="https://cdn-icons-png.flaticon.com/512/57/57055.png" />
        </button>

        {/* <div id="navBottomButtondiv">
          <button className="navBottomButton">
            New
          </button>
          <button className="navBottomButton">Top Seller</button>
          <button className="navBottomButton">Brand</button>
          <button className="navBottomButton">Clearance</button>
          <button className="navBottomButton">Deals</button>
          <button className="navBottomButton">Bargain</button>
          <button className="navBottomButton">Cupon</button>
        </div> */}

        <button className="navBottomButton">New</button>
        <button className="navBottomButton">Top Seller</button>
        <button className="navBottomButton">Brand</button>
        <button className="navBottomButton">Clearance</button>
        <button className="navBottomButton">Deals</button>
        <button className="navBottomButton">Bargain</button>
        <button className="navBottomButton">Cupon</button>

        {bottonSelect ? <NavbarBottomSelect /> : ""}
      </div>
    </nav>
  );
};

export default Navbar;
