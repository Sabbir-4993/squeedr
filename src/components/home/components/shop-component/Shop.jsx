import React from "react";
import ButtonFilter from "../button-filter/ButtonFilter";
import ShopCard from "./components/shop-card/ShopCard";
import SearchSelect from "../search-select/SearchSelect";
import { DatePicker } from "antd";
import moment from "moment";
// import style
import "./shop.scss";
import ShopViewInfo from "./components/shop-view-info/ShopViewInfo";

const data = [
  {
    id: 1,
    color: "#FD65A7",
    text: "Crossfit",
  },
  {
    id: 2,
    color: "#65F8FD",
    text: "Kundalini Yoga",
  },
  {
    id: 3,
    color: "#FDCF65",
    text: "Personal Massage",
  },
  {
    id: 4,
    color: "#65F8FD",
    text: "Service Name",
  },
];

const number = [1, 2, 3, 4, 5, 6, 7];

const Shop = () => {
  // Current Date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;

  return (
    <>
      <div className="shop-component">
        <div className="head-div">
          <div className="title">Items for sale and lease</div>
          <div className="subtitle">
            Select a Studio Corps & Forme location to book events, or tap on any
            name to see it directly.
          </div>
        </div>

        <div className="calender-search">
          <div className="calender-div">
            <DatePicker
              defaultValue={moment(`${today}`, "DD/MM/YYYY")}
              format="DD/MM/YYYY"
            />
          </div>

          <SearchSelect />
        </div>

        <div className="button-div">
          {data.map((item, index) => {
            return (
              <>
                <ButtonFilter color={item.color} text={item.text} />
              </>
            );
          })}
        </div>

        <div className="shop-card-wrapper ">
          {number.map((data, index) => {
            return (
              <>
                <div className="shop-card">
                  <ShopCard />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shop;
