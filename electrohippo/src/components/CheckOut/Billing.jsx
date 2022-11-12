import React, { useEffect } from "react";
import styles from "./Billing.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faCoffee,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { CheckOut } from "./CheckOut";
// import { Page2 } from './Page2';
import { Link } from "react-router-dom";
library.add(faCheckSquare, faCoffee, faCircleExclamation);

export const Billing = () => {
  const [country, setCountry] = React.useState([]);
  const [countryid, setCountryId] = React.useState("");
  const [st, setState] = React.useState([]);
  const [dial, setDial] = React.useState("+00");
  const [city, setCity] = React.useState([]);
  const [shippingAddress, setShippingAddress] = React.useState([]);
  const [fname, setfName] = React.useState("");
  const [lname, setlName] = React.useState("");
  const [tel, setTel] = React.useState("");
  const [line1, setLine1] = React.useState("");
  const [line2, setLine2] = React.useState("");
  const [postal, setPostal] = React.useState("");
  const [stateName, setStateName] = React.useState("");
  const [cityName, setCityName] = React.useState("");
  const [showInsurance, setShowInsurance] = React.useState(false);
  const [showReturn, setShowReturn] = React.useState(false);
  // const[concession,setConcession]=React.useState(false);
  const [query, setQuery] = React.useState("");
  const [order, setOrder] = React.useState(0);
  const [showCoupon, setShowCoupon] = React.useState(false);
  const [coupon_value, setCouponValue] = React.useState(0);

  useEffect(() => {
    const getCities = async () => {
      let res = await fetch("https://countriesnow.space/api/v0.1/countries");
      let data = await res.json();
      let result = data.data;
      result.forEach((elem) => {
        if (elem.country === countryid) {
          console.log(elem);
          setCity(elem.cities);
        }
      });
    };
    getCities();
  }, [countryid]);

  useEffect(() => {
    let phones = 0;
    const getPhoneCode = async () => {
      let res = await fetch(
        "https://countriesnow.space/api/v0.1/countries/codes"
      );
      let data = await res.json();
      phones = data.data;
      phones.forEach((elem) => {
        if (elem.name === countryid) {
          setDial(elem.dial_code);
        }
      });
    };
    getPhoneCode();
  }, [dial, countryid]);

  useEffect(() => {
    const getCountry = async () => {
      let res = await fetch(
        "https://countriesnow.space/api/v0.1/countries/states"
      );
      let data = await res.json();
      setCountry(data.data);
      console.log(data.data);
    };
    getCountry();
  }, []);
  useEffect(() => {
    country.forEach((naam) => {
      if (naam.name === countryid) {
        console.log(naam.states);
        setState(naam.states);
      }
    });
  });

  const handleCheckbox = (e) => {
    let id = e.target.id;
    if (id === "insurance") {
      if (showInsurance) {
        setShowInsurance(false);
        setOrder(order - 820);
        if (showCoupon) {
          let conce = order * 0.3;
          setCouponValue(conce);
          setOrder(order - coupon_value);
        }
      } else {
        setShowInsurance(true);
        setOrder(order + 820);
        if (showCoupon) {
          let conce = order * 0.3;
          setCouponValue(conce);
          setOrder(order - coupon_value);
        }
      }
    } else if (id === "return") {
      if (showReturn) {
        setShowReturn(false);
        setOrder(order - 520);
        if (showCoupon) {
          let conce = order * 0.3;
          setCouponValue(conce);
          setOrder(order - coupon_value);
        }
      } else {
        setShowReturn(true);
        setOrder(order + 520);
        if (showCoupon) {
          let conce = order * 0.3;
          setCouponValue(conce);
          setOrder(order - coupon_value);
        }
      }
    }
  };

  const handleChange = () => {};

  const handleCancel = (e) => {
    document.location.reload();
  };
  const HandleSave = () => {
    const payload = {
      first: fname,
      last: lname,
      tel: tel,
      line1: line1,
      line2: line2,
      city: cityName,
      state: stateName,
      country: countryid,
      postal: postal,
    };
    console.log(payload);
    setShippingAddress([...shippingAddress, payload]);
    let value = shippingAddress;
    console.log(value);
    localStorage.setItem("shippingAddress", JSON.stringify(value));
  };

  const handleCoupon = () => {
    let coupon = document.querySelector("#coupon").value;
    console.log(coupon);
    if (coupon === "MASAI 30") {
      // setConcession(true);
      setQuery("");
      let value = order;
      let conce = value * 0.3;
      setCouponValue(conce);
      setShowCoupon(true);
      console.log(conce);
      setOrder(order - conce);
      //reduce rupees here
    }
  };

  let amount = JSON.parse(localStorage.getItem("total"));

  return (
    <div>
      <div className={styles.header}>
        <img className={styles.image} src="/geek_buying.jpg" alt={"name"} />
      </div>
      <h3>Shipping Address</h3>
      <div className={styles.colorBox}>
        <p>
          To ensure delivery and prevent delays, please enter the valid
          alphabetic character.
        </p>
      </div>
      <div className={styles.box1}>
        <form>
          <table className={styles.table} style={{ listStyle: "none" }}>
            <thead></thead>
            <tbody>
              <tr>
                <td className={styles.left_content}>
                  <span className={styles.astrick}>*</span>First Name:
                </td>
                <td>
                  <input
                    className={styles.Input}
                    type={"text"}
                    value={fname}
                    onChange={(e) => setfName(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td className={styles.left_content}>
                  <span className={styles.astrick}>*</span>Last Name:
                </td>
                <td>
                  <input
                    className={styles.Input}
                    type={"text"}
                    value={lname}
                    onChange={(e) => setlName(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td className={styles.left_content}>
                  <span className={styles.astrick}>*</span>Country/Region:
                </td>
                <td>
                  <select
                    className={styles.select}
                    onChange={(e) => setCountryId(e.target.value)}
                  >
                    <option></option>
                    {country.map((getcountry) => (
                      <option key={getcountry.iso3} value={getcountry.name}>
                        {getcountry.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>

              <tr>
                <td className={styles.left_content}>
                  <span className={styles.astrick}>*</span>
                  State/Province/Country:
                </td>
                <td>
                  <select
                    className={styles.select}
                    onChange={(e) => setStateName(e.target.value)}
                  >
                    <option></option>
                    {st.map((elem) => (
                      <option key={elem.state_code} value={elem.name}>
                        {elem.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>

              <tr>
                <td className={styles.left_content}>
                  <span className={styles.astrick}>*</span>City:
                </td>
                <td>
                  <select
                    className={styles.select}
                    onChange={(e) => setCityName(e.target.value)}
                  >
                    <option></option>
                    {city.map((elem, index) => (
                      <option key={index} value={elem}>
                        {elem}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>

              <tr>
                <td className={styles.left_content}>
                  <span className={styles.astrick}>*</span>Zip/Postal Code:
                </td>
                <td>
                  <input
                    placeholder="Your ZIP/postal code"
                    className={styles.Input}
                    type={"text"}
                    value={postal}
                    onChange={(e) => setPostal(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td className={styles.left_content}>
                  <span className={styles.astrick}>*</span>Address line1:
                </td>
                <td>
                  <input
                    className={styles.Input}
                    type={"text"}
                    placeholder="Street address, company name, P.O. box, c/o etc"
                    maxLength="100"
                    value={line1}
                    onChange={(e) => setLine1(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td className={styles.left_content}>Address line2:</td>
                <td>
                  <input
                    className={styles.Input}
                    type={"text"}
                    placeholder="Apartment, suite, unit, building, floor etc(Optional)"
                    value={line2}
                    onChange={(e) => setLine2(e.target.value)}
                  />
                </td>
              </tr>

              <tr>
                <td className={styles.left_content}>
                  <span className={styles.astrick}>*</span>Phone number:
                </td>
                <td>
                  <div className={styles.phone_div}>
                    <p className={styles.code}>{dial}</p>
                    <input
                      className={styles.phone}
                      placeholder="Your phone number"
                      type={"tel"}
                      value={tel}
                      onChange={(e) => setTel(e.target.value)}
                    />
                  </div>
                </td>
                <td className={styles.note}>
                  Note:Reuired by courier/Postman to ensure delivery and prevent
                  delays. Please enter your correct number.
                </td>
              </tr>

              <tr>
                <td></td>
                <td>
                  <input type={"checkbox"} className={styles.checkbox} />
                  Use as a default
                </td>
              </tr>
            </tbody>
          </table>
        </form>
        <div className={styles.button}>
          <Link to="/page2">
            <button className={styles.save} onClick={HandleSave}>
              Save
            </button>
          </Link>
          <button className={styles.cancel} onClick={handleCancel}>
            {" "}
            Cancel
          </button>
        </div>
      </div>
      <h3>Shipping & Delivery</h3>
      <div className={styles.box3}>
        <div className={styles.first_row}>
          <span>Shipping Methods</span>
          <span>Estimated Shipping Time</span>
          <span>Shipping Cost</span>
        </div>
        <div className={styles.first_row}>
          <span className={styles.left}>
            <input type={"radio"} checked={true} onChange={handleChange} />
            Expedited Shipping
          </span>
          <span className={styles.center}>2-7 business days</span>
          <span className={styles.right}>Free Shipping</span>
        </div>
        <div className={styles.gray_box}>
          <div className={styles.second_row}>
            <input type={"checkbox"} id="insurance" onClick={handleCheckbox} />{" "}
            <span>Add Shipping Insurance to your order</span>
            <FontAwesomeIcon
              className={styles.exclamation}
              icon="circle-exclamation"
            />
            <b>₹​ 816</b>
            <p className={styles.second_note}>
              <span className={styles.astrick}>*</span>Note: The time mentioned
              above are the shipping days by couriers, not including the order
              processing days by our warehouse.
            </p>
            <div className={styles.third_row}>
              <input type={"checkbox"} id="return" onClick={handleCheckbox} />
              <span>Add EU Local Return Service to your order</span>
              <FontAwesomeIcon
                className={styles.exclamation}
                icon="circle-exclamation"
              />
              <b>₹​ 520</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.box4}>
        <div className={styles.left_box}>
          <span className={styles.coupon}>Coupon:</span>
          <div className={styles.buttons}>
            <div>
              <input
                className={styles.coupon_input}
                id="coupon"
                name="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="please choose or enter your coupon code"
              />
            </div>
            <div>
              <input
                className={styles.apply}
                type={"button"}
                value={"Apply"}
                onClick={handleCoupon}
              />
            </div>
          </div>
        </div>
        <div className={styles.right_box}>
          <p>Order Subtotal:{amount}</p>
          <p>Shipping Cost:{0}</p>
          {showInsurance && <p>Insurance : {"₹​ 820"} </p>}
          {showReturn && <p>Local Return Service : {"₹​ 520"}</p>}
          {showCoupon && <p>Coupon Applied :{`- ₹​ ${coupon_value}`}</p>}
          <br />
          <p>Grand Total:{amount}</p>
          <input
            className={styles.order}
            type={"button"}
            value={"Place Your Order"}
          />
        </div>
      </div>
    </div>
  );
};
