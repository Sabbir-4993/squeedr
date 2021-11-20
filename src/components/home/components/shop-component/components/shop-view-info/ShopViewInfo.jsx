import React, { useState } from "react";
import { Drawer } from "antd";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import { useHistory } from "react-router-dom";

// component
import ShopCard from "../shop-card/ShopCard";
import TopNavbar from "../../../../Mobile View Components/Top Navbar/TopNavbar";

// icons
import { AiOutlinePoundCircle } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { BiChevronsDown } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  setReceiveItemDrawer,
  setCalender,
  setShop,
} from "../../../../../../Redux/HomeReducer";

// image
import pic from "../../../../../../assets/home-page/shop.png";
import img6 from "../../../../../../assets/mobileView/home/6.png";
import img7 from "../../../../../../assets/mobileView/home/7.jpg";

// style
import "./shopviewinfo.scss";

const show = [1, 2];

const number = [1, 2, 3, 4, 5, 6, 7];

const image = [
  {
    original: img6,
  },
  {
    original: img6,
  },
  {
    original: img6,
  },
  {
    original: img6,
  },
];

const ShopViewInfo = () => {
  const history = useHistory();

  // Redux
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      {/* Web drawer */}
      <Drawer
        width="420px"
        placement="right"
        onClose={() => {
          dispatch(setShop(false));
          history.push("/dashboard?shop=true");
        }}
        visible={store.home.openShop}
        className="uniquename101"
      >
        <div className="shop-view-info-drawer">
          <div className="header">
            <MdClose
              className="md-icon"
              style={{ color: "#000" }}
              onClick={() => {
                dispatch(setShop(false));
                history.push("/dashboard?shop=true");
              }}
            />

            <div className="title">Kundalini Yoga with Carl Johnson</div>
          </div>

          <div className="shop-view-body">
            <div className="shop-top-img">
              <img src={pic} alt="" />
            </div>

            <div className="btn-div">
              <>
                <div
                  className="lease"
                  onClick={() => {
                    history.push("/dashboard?shop=true&shop-calendar=true");
                    dispatch(setCalender(true));
                    dispatch(setShop(false));
                  }}
                >
                  Lease item
                </div>
              </>
              <>
                <div
                  className="buy"
                  onClick={() => {
                    history.push("/dashboard?shop=true&buy-item=true");
                    dispatch(setReceiveItemDrawer(true));
                    dispatch(setShop(false));
                  }}
                >
                  Buy item
                </div>
              </>
            </div>

            <div className="lease-sale-div">
              <div className="title">
                <AiOutlinePoundCircle />
                <span> Lease Rate:</span>
              </div>

              <div className="lease-wrapper">
                <div className="price-1">
                  € 9.00 <span className="price-light ">(per hour)</span>
                </div>
                <div className="price-2">
                  € 12.00 <span className="price-light ">(per day)</span>
                </div>
              </div>
            </div>

            <div className="lease-sale-div">
              <div className="title">
                <AiOutlinePoundCircle />
                <span> Sale Rate:</span>
              </div>

              <div className="sale-wrapper">
                <div className="price-1">€ 9.00</div>
              </div>
            </div>

            <div className="content workspace">
              <div className="heading">Workspace</div>

              <div className="para">
                {show.map((data, index) => {
                  return (
                    <p style={{ color: "#AEBACA" }}>
                      <span style={{ color: "#868E96" }}>#Pernety </span>
                      (Street Name, District/área...)
                    </p>
                  );
                })}
              </div>
            </div>

            <div className="content">
              <div className="heading">Availability</div>

              <div className="para">Monday, Tuesday, Friday, Saturday</div>
            </div>

            <div className="content">
              <div className="heading">In Stock</div>

              <div className="para">12 of 20 available </div>
            </div>

            <div className="content discription">
              <div className="heading">Description:</div>

              <div className="para">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                fugit neque eveniet, quod temporibus qui. Maxime excepturi
                corporis corrupti iusto, reprehenderit illum modi harum
                sapiente? Molestias iure odio tempore eaque.{" "}
              </div>
            </div>
          </div>
        </div>
      </Drawer>

      {/* mobile drawer */}
      <Drawer
        width="100%"
        height="100%"
        placement="bottom"
        closable={false}
        visible={store.home.openShop}
        className="uniquename102"
      >
        <TopNavbar />

        <div className="shopDrawerMobile">
          {/* Close Drawer */}
          <div
            className="close-btn"
            onClick={() => {
              dispatch(setShop(false));
              history.push("/dashboard?shop=true");
            }}
          >
            <BiChevronsDown size={40} />
          </div>

          <div className="wrapper">
            {/* Thumbnail Image */}
            <div className="thumbnail">
              <div className="carousel-image">
                <ImageGallery
                  items={image}
                  infinite={true}
                  showThumbnails={false}
                  autoPlay={true}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  showNav={false}
                  showBullets={true}
                />
              </div>
            </div>

            {/* title */}
            <div className="head-title">Yoga Mat</div>

            {/* divider */}
            <div className="divider"></div>

            {/* Button Div*/}
            <div className="btn-wrapper">
              <div
                className="make"
                onClick={() => {
                  dispatch(setCalender(true));
                  dispatch(setShop(false));
                  history.push("/dashboard?shop=true&shop-calendar=true");
                }}
              >
                <span>Make reservation</span>
              </div>

              <div
                className="buy"
                onClick={() => {
                  history.push("/dashboard?shop=true&buy-item=true");
                  dispatch(setReceiveItemDrawer(true));
                  dispatch(setShop(false));
                }}
              >
                <span>Buy item </span>
              </div>
            </div>

            {/* Basic Rate */}
            <div className="basic-rate">
              <div className="key">Basic Rate:</div>

              <div className="value">
                <div className="value-text-wrapper">
                  <div className="text">
                    € &nbsp;
                    <span> 9.00 </span> &nbsp; (per hour)
                  </div>

                  <div className="text">
                    € &nbsp;
                    <span> 12.00 </span> &nbsp; (per day)
                  </div>
                </div>
              </div>
            </div>

            {/* Sale Rate */}
            <div className="basic-rate">
              <div className="key">Sale rate:</div>

              <div className="value" style={{ border: "1px solid #33E68D" }}>
                <div className="value-text-wrapper">
                  <div className="text">
                    € &nbsp;
                    <span> 9.00 </span> &nbsp; (per hour)
                  </div>
                </div>
              </div>
            </div>

            {/* Basic Information */}
            <div className="text-wrapper">
              {/* Availability */}
              <div className="avail-loc-wrapper">
                <div className="icon-text">Availability:</div>

                <div className="text">All week (11:00 - 21:00)</div>
              </div>

              {/* Location */}
              <div className="avail-loc-wrapper">
                <div className="icon-text">
                  <MdLocationOn className="icon" />
                  Location:
                </div>

                <div className="text">
                  St Name, District / Area #3423, Paris, France.
                </div>
              </div>

              <div className="google">
                <img src={img7} alt="" />
              </div>

              {/* Description */}
              <div className="avail-loc-wrapper">
                <div className="icon-text">Description:</div>

                <div className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  nostrum doloribus praesentium provident minus libero
                  laudantium sapiente assumenda, culpa, eius distinctio rem
                  explicabo eveniet nesciunt ipsum quae accusamus commodi atque.{" "}
                </div>
              </div>
            </div>

            {/* divider */}
            <div className="divider" style={{ margin: "0px 20px" }}></div>

            <div className="other-spaces">Similar item's in the shop</div>

            <div className="shop-card-mobile-wrapper ">
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
        </div>
      </Drawer>
    </>
  );
};

export default ShopViewInfo;
