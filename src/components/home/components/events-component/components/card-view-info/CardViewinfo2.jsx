import React, { useState } from "react";
import { Drawer } from "antd";
import { AiOutlinePoundCircle } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { BiLink } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";
import { MdLocationOn, MdEventAvailable } from "react-icons/md";
import Checkbox from "@mui/material/Checkbox";

import {
  setCalender,
  setTextCopied,
} from "../../../../../../Redux/HomeReducer";

// image
import thumb from "../../../../../../assets/home-page/thumb.png";
import book from "../../../../../../assets/home-page/book.png";
import shop from "../../../../../../assets/home-page/shop.png";
import hoverpic from "../../../../../../assets/squeed images/hoverpic.png";
import profile1 from "../../../../../../assets/squeed images/Union 71.png";
import { setViewinfo2 } from "../../../../../../Redux/HomeReducer";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { HiDotsVertical } from "react-icons/hi";
// style
import "./cardviewinfo.scss";
import TextCopied from "../../../../../Text Copied/TextCopied";

const item = [1, 2];

const CardViewInfo2 = () => {
  const store = useSelector((state) => state);
  const history = useHistory();
  const [text1, settext1] = useState(false);
  const dispatch = useDispatch();
  const [state, setState] = useState({ visible: false, placement: "right" });

  const showDrawer = () => {
    console.log("card");
    setState({
      visible: true,
    });
  };

  const onClose = () => {
    history.push("/dashboard?reservation=true");
    //   {
    //   pathname: "/dashboard?reservation=true",
    //   search: "",
    // }
    dispatch(setViewinfo2(false));
  };

  return (
    <>
      <Drawer
        width="570px"
        placement={state.placement}
        closable={false}
        onClose={() => {
          onClose();
        }}
        // onClose={onClose}
        visible={store.home.openViewinfo2}
        key={state.placement}
        className="card-view-info-wrapper-drawer"
      >
        <>
          <div className="card-view-info-wrapper">
            {/* Drawer */}
            <div className="card-view-info-drawer">
              {/* Header title */}
              <div className="header">
                <MdClose
                  className="md-icon"
                  style={{ color: "#000" }}
                  onClick={() => onClose()}
                />

                <div className="title">Kundalini Yoga with Carl Johnson</div>

                <div
                  className="copy-link-div"
                  onClick={() => {
                    dispatch(setTextCopied(true));
                  }}
                >
                  <div className="copy-link">
                    <BiLink size={16} />
                  </div>

                  <span>copy link</span>
                </div>
                <div className="dotsdiv11">
                  <img src={profile1} />
                  <HiDotsVertical
                    style={{
                      color: "#29BDEF",
                      fontSize: "20px",
                      marginLeft: "15px",
                      cursor: "pointer",
                    }}
                    onClick={() => settext1(true)}
                  />
                  <div
                    className="firstdiv11"
                    style={{
                      display: text1 ? "block" : "none",
                      zIndex: "100",
                    }}
                  >
                    <div className="innerthings111">
                      <div className="content111th">Reschedulle</div>
                      <div>
                        <MdClose
                          style={{ color: "#AEBACA", fontSize: "16px" }}
                          onClick={() => settext1(false)}
                        />
                      </div>
                    </div>
                    <div className="border"></div>
                    <div className="innerthings111">
                      <div className="content111th">Cancel event</div>
                    </div>
                    <div className="border"></div>
                    <div className="innerthings111">
                      <div className="content111th">Copy link</div>
                    </div>
                    <div className="border"></div>
                    <div className="innerthings111">
                      <div className="content111th">View Information</div>
                    </div>
                  </div>
                </div>
                <TextCopied />
              </div>

              {/* Thumbnail Image */}
              <div className="thumbnail">
                <img src={thumb} alt="" className="immage11" />
                <img src={hoverpic} alt="" className="immage12" />
              </div>

              {/* Book at #Pernety Button */}
              <div className="book">
                <span style={{ marginRight: "10px" }}>My Reservation</span>
                <img src={book} alt="" />
              </div>

              {/* Price Table */}
              {/* <div className="price-div">
                <div className="price-side-1">
                  <AiOutlinePoundCircle className="icon" />
                  <div className="key">Basic Rate:</div>
                  <div className="value">€ 49.00</div>
                </div>

                <div className="price-side-2">
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
              </div> */}

              {/* Basic Information */}
              <div className="basic-information-wrapper">
                <div className="title">Basic Information</div>

                <div className="text-wrapper">
                  {/* Duration */}
                  <div className="div1-wrapper">
                    <div className="icon-text">
                      <FiClock className="icon" />
                      <span>Duration</span>
                    </div>

                    <div className="text">120 min</div>
                  </div>

                  {/* Availability */}
                  <div className="div1-wrapper">
                    <div className="icon-text">
                      <MdEventAvailable className="icon" />
                      <span>Availability:</span>
                    </div>

                    <div className="text">
                      Today at 14:00, 16:00, 18:00, 20:00, see more
                    </div>
                  </div>

                  {/* Location */}
                  <div className="div1-wrapper">
                    <div className="icon-text">
                      <MdLocationOn className="icon" />
                      <span>Location:</span>
                    </div>

                    <div className="text">
                      Studio Corps & Forme Parodi - Gym (Room 12){" "}
                      <span className="loca-text">
                        Street Name, District/area, City, Country
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="div1-wrapper">
                    <div className="icon-text">
                      <span style={{ marginLeft: "1px" }}>Description:</span>
                    </div>

                    <div className="des-text">
                      Spinning is a training technique that connects movements
                      from different disciplines, such as weightlifting ,
                      metabolic training or gymnastics.
                    </div>
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
                </div>

                {/* Divider */}
                <div className="basic-divider"></div>
              </div>

              {/* Guidelines and Information */}
              <div className="information-wrapper">
                <div className="title">Guidelines and Information</div>

                {/* Guideline 1 */}
                {item.map((data, index) => {
                  return (
                    <>
                      <div className="content-wrapper">
                        <div className="head">Guideline 1</div>

                        <div className="text-wrapper">
                          <div className="arrow-down"> </div>

                          <div className="description">
                            Voyez ce jeu exquis wallon, de graphie en kit mais
                            bref. Portez ce vieux whisky au juge blond qui fume
                            sur son île intérieure, à côté de l"alcôve ovoïde,
                            où le dans un capharnaüm.
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </>
      </Drawer>
    </>
  );
};

export default CardViewInfo2;
