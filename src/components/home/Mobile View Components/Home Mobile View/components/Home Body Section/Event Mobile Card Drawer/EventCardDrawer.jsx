import React, { useState } from "react";
import { Drawer } from "antd";
import "./eventCardDrawer.scss";
import TopNavbar from "../../../../Top Navbar/TopNavbar";
import { BiChevronsDown, BiCalendar } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { MdEventAvailable, MdLocationOn } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";
import thumb from "../../../../../../../assets/home-page/thumb.png";
import { GoogleMap, Marker } from "react-google-maps";
import { RiArrowRightSLine } from "react-icons/ri";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import { useSelector, useDispatch } from "react-redux";
import { setEventMobileCardDrawer } from "../../../../../../../Redux/HomeReducer";

const number = [1, 2, 3, 4];

const EventCardDrawer = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const image = [
    {
      original: thumb,
    },
    {
      original: thumb,
    },
    {
      original: thumb,
    },
    {
      original: thumb,
    },
  ];

  return (
    <>
      <Drawer
        width="100%"
        height="100%"
        placement="bottom"
        closable={false}
        // onClose={onClose}
        visible={store.home.openEventMobileCardDrawer}
        // key={state.placement}
        className="eventCardDrawer-main"
      >
        <TopNavbar />
        <div className="eventCardDrawer">
          {/* Close Drawer */}
          <div
            className="close-btn"
            onClick={(onClose) => {
              dispatch(setEventMobileCardDrawer(false));
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
              </div>{" "}
            </div>

            {/* title */}
            <div className="head-title">
              Crossfit <span>with Carl Johson</span>
            </div>

            {/* divider */}
            <div className="divider"></div>

            {/* Book at #Pernety Button */}
            <div className="book">
              <span>Book at #Pernety</span>
              <BiCalendar className="icon" />
            </div>

            {/* Basic Rate */}
            <div className="basic-rate">
              <div className="key">Basic Rate:</div>
              <div className="value">
                € &nbsp;
                <span> 49.00 </span> &nbsp; (+VAT)
              </div>
            </div>

            {/* Additional fee */}
            <div className="basic-rate">
              <div className="key">Additional fees:</div>

              <div className="sub-value">
                <div className="text-main">
                  <div className="text-div">
                    Cleaning fee <span className="lig">(Obligatory)*:</span>
                  </div>

                  <div className="price-tag">€ 9.00</div>
                </div>

                <div className="text-main">
                  <div className="text-div">
                    Soap & towel <span className="lig">(Optional):</span>
                  </div>

                  <div className="price-tag">€ 9.00</div>
                </div>

                <div className="text-main">
                  <div className="text-div">
                    <span className="lig">In case of accident*:</span>
                  </div>

                  <div className="price-tag">€ 9.00</div>
                </div>

                <div className="text-main">
                  <div className="text-div">
                    <span className="lig">Travel fee (Obligatory)*:</span>
                  </div>

                  <div className="price-tag">€ 9.00</div>
                </div>
              </div>
            </div>

            {/* Basic Information */}
            <div className="text-wrapper">
              {/* Availability */}
              <div className="avail-loc-wrapper">
                <div className="icon-text">
                  <MdEventAvailable className="icon" />
                  <span>Availability:</span>
                </div>

                <div className="text">
                  Today at 14:00, 16:00, 18:00, 20:00,{" "}
                  <span style={{ color: "#29BDEF" }}>see more</span>
                </div>
              </div>

              {/* Duration */}
              <div className="div1-wrapper">
                <div className="icon-text">
                  <FiClock className="icon" />
                  <span>Duration</span>
                </div>

                <div className="text">120 min</div>
              </div>

              {/* Host */}
              <div className="div1-wrapper">
                <div className="icon-text">
                  <CgProfile className="icon" />
                  <span>Hosts:</span>
                </div>

                <div
                  style={{
                    color: "#29bdef",
                    font: "normal normal normal 16px/19px Lato",
                  }}
                >
                  Carl Johnson
                </div>
              </div>

              {/* Category */}
              <div className="div1-wrapper">
                <div className="icon-text">
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      backgroundColor: "#FD65A7",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <span>Category:</span>
                </div>

                <div className="text">Fitness</div>
              </div>

              {/*  Bookings */}
              <div className="div1-wrapper">
                <div className="icon-text">
                  <GoThreeBars className="icon" />
                  <span>Bookings:</span>
                </div>

                <div className="text">5 of 20</div>
              </div>

              {/* Location */}
              <div className="avail-loc-wrapper">
                <div className="icon-text">
                  <MdLocationOn className="icon" />
                  <span>Location:</span>
                </div>

                <div className="text loc-text">
                  St Name, District / Area #3423, Paris, France.
                </div>
              </div>

              {/* Description */}
              <div className="avail-loc-wrapper des-top">
                <div className="icon-text">Description:</div>

                <div className="text loc-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  nostrum doloribus praesentium provident minus libero
                  laudantium sapiente assumenda, culpa, eius distinctio rem
                  explicabo eveniet nesciunt ipsum quae accusamus commodi atque.{" "}
                </div>
              </div>
            </div>

            {/* date wrapper */}
            <div className="date-wrapper">
              {/* time-day div */}
              <div className="date">April 20 - April 24</div>

              {number.map(() => {
                return (
                  <>
                    {/* data wrapper */}
                    <div className="data-wrapper">
                      {/* header */}
                      <div className="header">
                        <div className="left">
                          <div
                            className="dot"
                            style={{ backgroundColor: "#FD65A7" }}
                          ></div>

                          <div className="title">
                            Crossfit <span>with Maud</span>
                          </div>
                        </div>

                        <div className="right">
                          <span>€ 49.00</span>
                          <RiArrowRightSLine className="icon" />
                        </div>
                      </div>

                      {/* body  */}
                      <div className="body-data">
                        <div className="card-text">
                          <div className="title">Time:</div>

                          <div className="subtitle">
                            Today at 15:00 hrs (120 min)
                          </div>
                        </div>

                        <div className="card-text">
                          <div className="title">Location:</div>

                          <div className="subtitle">
                            #Pernety - Street Name, District #3423, City
                          </div>
                        </div>

                        <div className="card-text">
                          <div className="title">Bookings:</div>

                          <div className="subtitle">10 / 11</div>
                        </div>
                      </div>
                    </div>

                    {/* divider */}
                    <div className="divider"></div>
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

export default EventCardDrawer;
