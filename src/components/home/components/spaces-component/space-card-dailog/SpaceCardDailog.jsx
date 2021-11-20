import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import { AiOutlinePoundCircle } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { BiLink } from "react-icons/bi";

import { BsPeople } from "react-icons/bs";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  setDrawer,
  setCalender,
  setTextCopied,
} from "../../../../../Redux/HomeReducer";

// image
import book from "../../../../../assets/home-page/book.png";
import space from "../../../../../assets/home-page/space.png";

// style
import "./spaceCardDailog.scss";
import TextCopied from "../../../../Text Copied/TextCopied";

const item = [1, 2];

const SpaceCardDailog = () => {
  const history = useHistory();

  // Redux
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const [state, setState] = useState({ visible: false, placement: "right" });

  const onClose = () => {
    history.push("/dashboard?spaces=true");
    dispatch(setDrawer({ spacesInfo: false }));
  };

  // url params
  const urlSpacesInfo = new URLSearchParams(history.location.search).get(
    "spaces-info"
  );

  useEffect(() => {
    if (urlSpacesInfo === "true") {
      dispatch(setDrawer({ spacesInfo: true }));
    }
  }, []);

  return (
    <>
      <Drawer
        width="550px"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={store.home.openDrawer.spacesInfo}
      >
        <>
          <div className="space-card-view-dailog">
            {/* Header title */}
            <div className="header">
              <MdClose
                className="md-icon"
                style={{ color: "#000" }}
                onClick={onClose}
              />

              <div className="title">Prenety Installations (only weekends)</div>

              <div className="copy-link-div">
                <div className="copy-link">
                  <BiLink size={16} />
                </div>

                <span
                  onClick={() => {
                    dispatch(setTextCopied(true));
                  }}
                >
                  copy link
                </span>
              </div>
              <TextCopied />
            </div>

            {/* Thumbnail Image */}
            <div className="thumbnail">
              <img src={space} alt="" />
            </div>

            {/* Book at #Pernety Button */}
            <div
              className="make"
              onClick={() => {
                dispatch(setDrawer({ spacesInfo: false }));
                dispatch(setCalender(true));
                history.push("/dashboard?spaces=true&spaces-calendar=true");
              }}
            >
              <div className="make-inner" onClick={() => {}}>
                Make a Booking
                <img src={book} alt="" />
              </div>
            </div>

            {/* Price title */}
            <div className="price-title">
              <div className="baisc">
                <AiOutlinePoundCircle className="icon" />
                <div className="key">Basic Rate:</div>
              </div>

              <div className="additional">
                <AiOutlinePoundCircle className="icon" />
                <div className="key">Additional fees</div>
              </div>
            </div>

            {/* Price Table */}
            <div className="price-div">
              <div className="price-side-1">
                <div className="value">
                  € 9.00 <span className="price-side-1-lig">(per visit)</span>
                </div>
                <div className="value">
                  € 12.00 <span className="price-side-1-lig">(per hour)</span>
                </div>
                <div className="value">
                  € 49.00 <span className="price-side-1-lig">(per month)</span>
                </div>
              </div>

              <div className="price-side-2">
                <div className="text-main">
                  <div className="text-div">
                    Cleaning fee <span className="lig">(Obligatory)*:</span>
                  </div>

                  <div className="price-tag">€ 9.00</div>
                </div>
              </div>
            </div>

            {/* Basic Information */}
            <div className="basic-information-wrapper">
              <div className="text-wrapper">
                {/* Location */}
                <div className="div1-wrapper">
                  <div className="icon-text">Location:</div>

                  <div className="text">
                    Street '9, CP 1234, City name, Country.
                  </div>
                </div>

                {/* Availability */}
                <div className="div1-wrapper">
                  <div className="icon-text">Availability:</div>

                  <div className="text ">All week (11:00 - 21:00)</div>
                </div>

                {/* Description */}
                <div className="div1-wrapper">
                  <div className="icon-text">Description:</div>

                  <div className="des-text">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="basic-divider"></div>
            </div>

            {/* Guidelines and Information */}
            <div className="information-wrapper">
              {/* title */}
              <div className="title-div">
                <div className="title">Guidelines and Information</div>

                <div className="invite">
                  <BsPeople size={18} />
                  <span>Invite more people</span>
                </div>
              </div>

              {/* logo */}
              <div className="logo-title-phone-div">
                <div className="logo-title-div">
                  <img src={space} alt="" className="logo" />

                  <div className="title">Studio Corps & Forme</div>
                </div>

                <div className="phone-div">
                  <div className="phone">+33 5455 552</div>

                  <div className="copy-link-div">
                    <div className="copy-link">
                      <BiLink size={16} />
                    </div>

                    <span>copy link</span>
                  </div>
                </div>
              </div>

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
                          sur son île intérieure, à côté de l"alcôve ovoïde, où
                          le dans un capharnaüm.
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </>
      </Drawer>
    </>
  );
};

export default SpaceCardDailog;
