import React from "react";
import "./css/navbarBottomSelect.css";

import { Link } from "react-router-dom";

const NavbarBottomSelect = () => {
  return (
    <div>
      <div id="navBottomSelect">
        <div
          className="navBottomSelectHide"
          id="navBottomSelectHome"
          value="home"
        >
          Smart Home and Garden
        </div>
        <Link to="/mobile">
          <div
            className="navBottomSelectHide"
            id="navBottomSelectPhone"
            value="phone"
          >
            Phones & Accessories
          </div>
        </Link>
        <div
          className="navBottomSelectHide"
          id="navBottomSelectComputer"
          value="computer"
        >
          Computer, Tablet & Accessories
        </div>
        <div
          className="navBottomSelectHide"
          id="navBottomSelectWearable"
          value="wearable"
        >
          Wearable Devices
        </div>
        <div
          className="navBottomSelectHide"
          id="navBottomSelectAuto"
          value="auto"
        >
          Automobiles & Motorcycles
        </div>
        <div
          className="navBottomSelectHide"
          id="navBottomSelectSports"
          value="sports"
        >
          Sports and Outdoors
        </div>
        <div
          className="navBottomSelectHide"
          id="navBottomSelectConsumer"
          value="consumer"
        >
          Consumer Electronics
        </div>
        <div className="navBottomSelectHide" id="navBottomSelectTv" value="tv">
          TV Boxes & Mini PCs
        </div>
        <div
          className="navBottomSelectHide"
          id="navBottomSelectToys"
          value="toys"
        >
          Toys & Hobbies
        </div>
        <div
          className="navBottomSelectHide"
          id="navBottomSelectSecurity"
          value="security"
        >
          Security System
        </div>
        <div
          className="navBottomSelectHide"
          id="navBottomSelectFashion"
          value="fashion"
        >
          Fashion
        </div>
      </div>

      <div id="navBottomSelectHomeDiv">
        <div>
          <h4>Smarthome</h4>
          <div>Robot Vaccum Cleaners</div>
          <div>Cordless Vaccum Cleaners</div>
          <div>Fitness</div>
          <div>Smart Sockets & Switches</div>
          <div>Smart Lights</div>
          <div>Xiaomi Smart Gadgets</div>
          <div>Air Purifier</div>
          <div>Others</div>

          <h4>Kitchen & Dining</h4>
          <div>Kitchen Appliances</div>
          <div>Cookware</div>
          <div>Bakeware</div>
          <div>Tableware</div>
          <div>Barware</div>
          <div>Kitchen Tools & Gadgets</div>
          <div>Others</div>
        </div>

        <div>
          <h4>Household Appliances</h4>

          <h4>Furniture</h4>
          <div>Outdor Furniture</div>
          <div>Tables</div>
          <div>Chairs</div>
          <div>Beds & Accessories</div>
          <div>Cabinates & Storage</div>
          <div>Shelving</div>
          <div>Entertainment Centers & TV Stands</div>
          <div>Furniture Sets</div>

          <h4>Patio, Lawn & Garden</h4>
          <div>Pots & Planters</div>
          <div>Watering & Irrigation</div>
          <div>Mowers & Outdoor Power Tools</div>
          <div>Other Garden Supplies</div>
        </div>

        <div>
          <h4>Health & Beauty</h4>
          <div>Personal Care</div>
          <div>Health Care</div>
          <div>Massage & Relaxation</div>

          <h4>Home Decors</h4>
          <div>Rugs</div>
          <div>Door Mats</div>
          <div>Window Treatments</div>
          <div>Mirrors</div>
          <div>Artificial Flora</div>

          <h4>Household Supplies</h4>
          <div>Storage & Organization</div>
          <div>Household Cleaning Supplies</div>

          <h4>Lighting</h4>

          <h4>Tools & Home Improvement</h4>
        </div>

        <div>
          <h4>Office Supplies</h4>

          <h4>Pet Supplies</h4>

          <h4>Bathroom Supplies</h4>
        </div>
      </div>
    </div>
  );
};

export default NavbarBottomSelect;
