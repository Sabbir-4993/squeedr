import React from "react";
import { Drawer } from "antd";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import { useHistory } from "react-router";

// redux
import { useSelector, useDispatch } from "react-redux";
import {
  setSpacesMobileCardDrawer,
  setCalender,
} from "../../../../../../../Redux/HomeReducer";

// component
import TopNavbar from "../../../../Top Navbar/TopNavbar";
import SpacesMobileCard from "../Spaces Mobile Card/SpacesMobileCard";

// icons
import { BiChevronsDown } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

// image
import img6 from "../../../../../../../assets/mobileView/home/6.png";
import img7 from "../../../../../../../assets/mobileView/home/7.jpg";

// style
import "./spacesCardDrawer.scss";

const number = [1, 2, 3, 4];

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

const SpacesCardDrawer = () => {
  const history = useHistory();

  // redux
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  // url params
  const urlEvents = new URLSearchParams(history.location.search).get("events");
  const urlAppointments = new URLSearchParams(history.location.search).get(
    "appointments"
  );
  const urlSpaces = new URLSearchParams(history.location.search).get("spaces");

  const onClose = () => {
    if (urlEvents === "true") {
      dispatch(setSpacesMobileCardDrawer(false));
      history.push("/dashboard?events=true");
    } else if (urlAppointments === "true") {
      dispatch(setSpacesMobileCardDrawer(false));
      history.push("/dashboard?appointments=true");
    } else if (urlSpaces === "true") {
      dispatch(setSpacesMobileCardDrawer(false));
      history.push("/dashboard?spaces=true");
    }
  };

  const openCalendar = () => {
    if (urlEvents === "true") {
      dispatch(setSpacesMobileCardDrawer(false));
      dispatch(setCalender(true));
      history.push("/dashboard?events=true&event-calendar=true");
    } else if (urlAppointments === "true") {
      dispatch(setSpacesMobileCardDrawer(false));
      dispatch(setCalender(true));
      history.push("/dashboard?appointments=true&appointment-calendar=true");
    } else if (urlSpaces === "true") {
      dispatch(setSpacesMobileCardDrawer(false));
      dispatch(setCalender(true));
      history.push("/dashboard?spaces=true&spaces-calendar=true");
    }
  };

  return (
    <>
      <Drawer
        width="100%"
        height="100%"
        placement="bottom"
        closable={false}
        visible={store.home.openSpacesMobileCardDrawer}
        className="spacesCardDrawerMobilehide"
      >
        <TopNavbar />
        <div className="spacesCardDrawerMobile">
          {/* Close Drawer */}
          <div className="close-btn" onClick={onClose}>
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
            <div className="head-title">
              Studio Corps Pernety Installations (only weekends).
            </div>

            {/* divider */}
            <div className="divider"></div>

            {/* Book at #Pernety Button */}
            <div className="book" onClick={openCalendar}>
              <span>Make reservation...</span>
            </div>

            {/* Basic Rate */}
            <div className="basic-rate">
              <div className="key">Basic Rate:</div>

              <div className="value">
                <div className="value-text-wrapper">
                  <div className="text">
                    € &nbsp;
                    <span> 49.00 </span> &nbsp; (per hour)
                  </div>

                  <div className="text">
                    € &nbsp;
                    <span> 12.00 </span> &nbsp; (per day)
                  </div>

                  <div className="text">
                    € &nbsp;
                    <span> 49.00 </span> &nbsp; (per month)
                  </div>
                </div>
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

            <div className="other-spaces">Other Spaces</div>

            <SpacesMobileCard />
            {/* <div className="spaces-card">
              {number.map(() => {
                return (
                  <>
                    <div className="card-inner">
                      <div className="image">
                        <img src={img6} alt="" />
                      </div>

                      <div className="content">
                        <div className="up">
                    
                        </div>

                        <div className="down">
                          <div className="title">
                            Crossfit at #Pernety (11 on waiting list)
                          </div>

                          <div className="price">
                            € 49.00 <span>(perhour)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div> */}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default SpacesCardDrawer;
