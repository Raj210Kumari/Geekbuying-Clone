import React from "react";
import { ProductInfo, MobLink } from "../styled";
// import {Link} from 'react-router-dom'
export const MobileCard = (item) => {
  console.log(item.item.price);
  const mainID = item.item.id;
  return (
    <>
      <MobLink to={`/mobile/${mainID}`}>
        <div key={item.id} className="gridC">
          {/* display item info here  */}
          <img src={item.item.image_url} alt="product" className="imgProduct" />
          <ProductInfo>{item.item.name} </ProductInfo>
          <ProductInfo>{item.item.brand}</ProductInfo>
          <h3 className="priceProduct">Rs. {item.item.price}</h3>{" "}
          <span className="strikedoffprice">{item.item.strikedoffprice}</span>
          <p className="ratingP">
            {item.item.rating}{" "}
            <span className="rand">
              {Math.floor(Math.random() * (18 - 5 + 1)) + 5}
            </span>
          </p>
        </div>
      </MobLink>
    </>
  );
};
