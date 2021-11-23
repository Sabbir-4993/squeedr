import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import { MdClose } from "react-icons/md";

import Button from "@mui/material/Button";
import clock from "../../../../../assets/membership-drawer/clock.png";
import eventsLogo from "../../../../../assets/membership-drawer/cal111.png";
import ButtonFilter from "../../button-filter/ButtonFilter";
import { CgMenuGridO } from "react-icons/cg";
import ShowMoreText from "react-show-more-text";
import { FiCheck } from "react-icons/fi";
import img4 from "../../../../../assets/squeed images/sidescan.png";
import dots1 from "../../../../../assets/squeed images/dots1.png";
import dots from "../../../../../assets/squeed images/dots2.png";
import bar3 from "../../../../../assets/squeed images/bar3.png";
import { useSelector, useDispatch } from "react-redux";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useHistory } from "react-router-dom";

import {
  setMemberShipRightDrawer2,
  setOpenMembership,
} from "../../../../../Redux/HomeReducer";
import { BiChevronsDown } from "react-icons/bi";
import TopNavbar from "../../../Mobile View Components/Top Navbar/TopNavbar";
// style
import "./membershipRightDrawer.scss";
import {padding} from "@mui/system";

const item = [1, 2];

const Toggle = ({ settext }) => {
  const [checked, setChecked] = useState(false);
  const [text, settext1] = useState(true);
  useEffect(() => {
    settext1(settext);
  }, [settext]);
  // console.log(props);
  return (
    <div className="togle">
      <div className="view__switch">
        <div className="switch">
          <label
            className="toggle_switch"
            style={
              checked
                ? null
                : {
                    backgroundColor: "#E6E6E6",
                    borderColor: "#E6E6E6",
                  }
            }
          >
            <input
              type="checkbox"
              onChange={(e) => {
                setChecked(e.target.checked);
              }}
              className="toggle_checkbox"
            />
            <div
              className="toggle_circle"
              style={
                checked
                  ? {}
                  : {
                      background: " #29BDEF 0% 0% no-repeat padding-box",
                      border: "1px solid #AEBACA",
                    }
              }
            ></div>
          </label>
        </div>
        <div
          className="switch__para"
          style={{ display: text ? "flex" : "none" }}
        >
          YOUR MEMBERSHIP IS ACTIVE
        </div>
      </div>
    </div>
  );
};

const MemberShipRightDrawer2 = () => {
  const history = useHistory();

  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [state, setState] = useState({ visible: false, placement: "right" });
  const [text1, settext1] = useState(true);
  const [text2, settext2] = useState(true);
  const [text3, settext3] = useState(true);
  const [text4, settext4] = useState(true);
  const [text5, settext5] = useState(true);

  const showDrawer = () => {
    setState({
      visible: true,
    });
  };

  const onClose = () => {
    setState({
      visible: false,
    });
  };

  const executeOnClick = (isExpanded) => {
    console.log(isExpanded);
  };

  // Url Params
  const urlEvents = new URLSearchParams(history.location.search).get("events");
  const urlAppointments = new URLSearchParams(history.location.search).get(
    "appointments"
  );
  const urlSpaces = new URLSearchParams(history.location.search).get("spaces");
  const urlShop = new URLSearchParams(history.location.search).get("shop");

  const closeActiveDrawer = () => {
    if (urlEvents === "true") {
      history.push("/dashboard?events=true&membership=true");
    } else if (urlAppointments === "true") {
      history.push("/dashboard?appointments=true&membership=true");
    } else if (urlSpaces === "true") {
      history.push("/dashboard?spaces=true&membership=true");
    } else if (urlShop === "true") {
      history.push("/dashboard?shop=true&membership=true");
    }
    dispatch(setMemberShipRightDrawer2(false));
    dispatch(setOpenMembership(true));
  };

  return (
    <>
      {/* <div
        className="view"
        onClick={() => {
          showDrawer();
          // dispatch(setOpenMembership(false));
        }}
      >
        Tap to open
      </div> */}

      <Drawer
        width="460px"
        placement={state.placement}
        closable={false}
        // onClose={onClose}
        visible={store.home.openMemberShipRightDrawer2}
        key={state.placement}
        className="membership-right-drawer-123"
      >
        <>
          <div className="membership-right-drawer">
            {/* Drawer */}
            <div className="card-view-info-drawer">
              {/* Header title */}
              <div className="header">
                <MdClose
                  className="md-icon"
                  style={{ color: "#000" }}
                  onClick={closeActiveDrawer}
                />

                <div className="title">Anne Lorem's Membership Name</div>
              </div>

              {/* Thumbnail Image */}
              <div
                className="qr_main101"
                style={{ display: text1 ? "none" : "flex" }}
              >
                <img
                  src={bar3}
                  alt=""
                  style={{ cursor: "pointer" }}
                  onClick={() => settext1(true)}
                />
                <Toggle settext={true} />
              </div>
              <div className="thumbnail">
                <div className="beforeCard">
                  <div className="firstDiv"></div>
                  <div className="secondDiv"></div>
                  <div className="thirdDiv"></div>
                </div>
                <div className="afterCard">
                  <div className="mainContentFirstDiv">
                    <div className="ownerDetailsDiv">
                      <div className="ownerImgLogo"></div>
                      <div className="owner-name-title">
                        <p className="owner-name">Anne Lorem Ipsun</p>
                        <p className="owner-title">Membership Name</p>
                      </div>
                    </div>
                    <div className="middle">
                      <div className="subtitle">ID code</div>
                      <div className="title">21415 5415 51545 5454</div>
                    </div>

                    <div className="end">
                      <div className="side1">
                        <div className="subtitle">Valid Thru</div>
                        <div className="title">12 / 2020</div>
                      </div>

                      <div className="side2">
                        <div className="subtitle">Status</div>
                        <div className="title">
                          23{" "}
                          <span style={{ color: "#868E96" }}>
                            / 90 bookings
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className="qr-image"
                      style={{ display: text1 ? "flex" : "none" }}
                    >
                      <img
                        className="imgscan101"
                        src={img4}
                        onClick={() => {
                          settext1(false);
                          settext2(true);
                        }}
                        style={{
                          width: "62px",
                          height: "62px",
                          background: "white",
                          cursor: "pointer",
                        }}
                        alt=""
                      />
                      <img src={dots1} alt="" />
                    </div>
                    <div
                      className="qr-image"
                      style={{ display: text1 ? "none" : "flex" }}
                    >
                      <img src={dots} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Info  */}

              <div
                className="image-toogle"
                style={{ display: text1 ? "flex" : "none" }}
              >
                <Toggle settext={true} />
                <div
                  className="toglebelow101"
                  style={{ display: text2 ? "flex" : "none" }}
                >
                  Voyez ce jeu exquis wallon, de graphie en kit mais bref.
                  Portez ce vieux whisky au juge blond qui fume sur son île
                  intérieure, à côté de l"alcôve ovoïde, où les bûches se
                </div>
              </div>

              <div className="list102">
                <div className="listcontent">
                  List of benefits
                  <div>
                    {" "}
                    <div>
                      {" "}
                      <BiChevronDown
                        className="svg121"
                        style={{
                          display: text2 ? "flex" : "none",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          settext2(false);
                          settext1(true);
                        }}
                      />
                      <BiChevronUp
                        className="svg121"
                        style={{
                          display: text2 ? "none" : "flex",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          settext2(true);
                          settext1(true);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div style={{ display: text2 ? "none" : "block" }}>
                  <div className="innercontent">
                    <div className="toggle">
                      <Toggle settext={false} />
                    </div>
                    <div className="text">
                      <div className="tite">Automatic Renewal</div>
                      <div className="subtitle">
                        Purchase automatically a renewal for your membership
                        everytime it runs out of passes or became unvalid. You
                        must have a credit card registered.
                      </div>
                    </div>
                  </div>
                  <div className="innercontent">
                    <div className="toggle">
                      <Toggle settext={false} />
                    </div>
                    <div className="text">
                      <div className="tite">Send notifications to my email</div>
                      <div className="subtitle">
                        Receive an email from Squeedr everytime an upcoming
                        booking, rescheduled event, cancellation, etc.
                      </div>
                    </div>
                  </div>
                  <div className="innercontent">
                    <div className="toggle">
                      <Toggle settext={false} />
                    </div>
                    <div className="text">
                      <div className="tite">
                        Show nickname instead of full name
                      </div>
                      <div className="subtitle">
                        Your profile picture and your last name(s) on the back
                        of your membership will be hidden from sight.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border"></div>
                <div className="listcontent">
                  Preferences
                  <div>
                    {" "}
                    <BiChevronDown
                      className="svg121"
                      style={{
                        display: text3 ? "flex" : "none",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        settext3(false);
                        settext1(true);
                      }}
                    />
                    <BiChevronUp
                      className="svg121"
                      style={{
                        display: text3 ? "none" : "flex",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        settext3(true);
                        settext1(true);
                      }}
                    />
                  </div>
                </div>
                {/* <div> // content wrapper */}
                <div style={{ display: text3 ? "none" : "block" }}>
                  <div className="innercontent">
                    <div className="toggle">
                      <Toggle settext={false} />
                    </div>
                    <div className="text">
                      <div className="tite">Automatic Renewal</div>
                      <div className="subtitle">
                        Purchase automatically a renewal for your membership
                        everytime it runs out of passes or became unvalid. You
                        must have a credit card registered.
                      </div>
                    </div>
                  </div>
                  <div className="innercontent">
                    <div className="toggle">
                      <Toggle settext={false} />
                    </div>
                    <div className="text">
                      <div className="tite">Send notifications to my email</div>
                      <div className="subtitle">
                        Receive an email from Squeedr everytime an upcoming
                        booking, rescheduled event, cancellation, etc.
                      </div>
                    </div>
                  </div>
                  <div className="innercontent">
                    <div className="toggle">
                      <Toggle settext={false} />
                    </div>
                    <div className="text">
                      <div className="tite">
                        Show nickname instead of full name
                      </div>
                      <div className="subtitle">
                        Your profile picture and your last name(s) on the back
                        of your membership will be hidden from sight.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border"></div>
                <div className="listcontent">
                  Payment Information
                  <div>
                    {" "}
                    <BiChevronDown
                      className="svg121"
                      style={{
                        display: text4 ? "flex" : "none",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        settext4(false);
                        settext1(true);
                      }}
                    />
                    <BiChevronUp
                      className="svg121"
                      style={{
                        display: text4 ? "none" : "flex",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        settext4(true);
                        settext1(true);
                      }}
                    />
                  </div>
                </div>
                <div style={{ display: text4 ? "none" : "block" }}>
                  <div className="innercontent">
                    <div className="toggle">
                      <Toggle settext={false} />
                    </div>
                    <div className="text">
                      <div className="tite">Automatic Renewal</div>
                      <div className="subtitle">
                        Purchase automatically a renewal for your membership
                        everytime it runs out of passes or became unvalid. You
                        must have a credit card registered.
                      </div>
                    </div>
                  </div>
                  <div className="innercontent">
                    <div className="toggle">
                      <Toggle settext={false} />
                    </div>
                    <div className="text">
                      <div className="tite">Send notifications to my email</div>
                      <div className="subtitle">
                        Receive an email from Squeedr everytime an upcoming
                        booking, rescheduled event, cancellation, etc.
                      </div>
                    </div>
                  </div>
                  <div className="innercontent">
                    <div className="toggle">
                      <Toggle settext={false} />
                    </div>
                    <div className="text">
                      <div className="tite">
                        Show nickname instead of full name
                      </div>
                      <div className="subtitle">
                        Your profile picture and your last name(s) on the back
                        of your membership will be hidden from sight.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border"></div>
                <div className="buttonmsend">
                  Cancel Membership
                  <div>
                    {" "}
                    <BiChevronDown
                      className="svg121"
                      style={{
                        display: text5 ? "flex" : "none",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        settext5(false);
                        settext1(true);
                      }}
                    />
                    <BiChevronUp
                      className="svg121"
                      style={{
                        display: text5 ? "none" : "flex",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        settext5(true);
                        settext1(true);
                      }}
                    />
                  </div>
                </div>
                <div style={{ display: text5 ? "none" : "block" }}>
                  <div className="innercontent">
                    <div className="toggle">
                      <Toggle settext={false} />
                    </div>
                    <div className="text">
                      <div className="tite">Automatic Renewal</div>
                      <div className="subtitle">
                        Purchase automatically a renewal for your membership
                        everytime it runs out of passes or became unvalid. You
                        must have a credit card registered.
                      </div>
                    </div>
                  </div>
                  <div className="innercontent">
                    <div className="toggle">
                      <Toggle settext={false} />
                    </div>
                    <div className="text">
                      <div className="tite">Send notifications to my email</div>
                      <div className="subtitle">
                        Receive an email from Squeedr everytime an upcoming
                        booking, rescheduled event, cancellation, etc.
                      </div>
                    </div>
                  </div>
                  <div className="innercontent">
                    <div className="toggle">
                      <Toggle settext={false} />
                    </div>
                    <div className="text">
                      <div className="tite">
                        Show nickname instead of full name
                      </div>
                      <div className="subtitle">
                        Your profile picture and your last name(s) on the back
                        of your membership will be hidden from sight.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Drawer>

      {/* //mobile */}
      <Drawer
        width="100%"
        height="100%"
        placement="bottom"
        closable={false}
        onClose={onClose}
        visible={store.home.openMemberShipRightDrawer2}
        className="membership-mobile-123"
      >
        <TopNavbar />
        <div className="membership-right-drawer-mobile">
          {/* Close Drawer */}
          <div className="close-btn" onClick={onClose}>
            <BiChevronsDown
              size={40}
              onClick={() => {
                dispatch(setMemberShipRightDrawer2(false));
                dispatch(setOpenMembership(true));
              }}
            />
          </div>

          <div className="wrapper">
            {/* Thumbnail Image */}
            <div
              className="qr_main101"
              style={{ display: text1 ? "none" : "flex" }}
            >
              <img
                src={bar3}
                alt=""
                className="scanimage"
                style={{
                  cursor: "pointer",
                  marginTop: "30px",
                  marginBottom: "60px",
                }}
                onClick={() => settext1(true)}
              />
              <Toggle settext={true} />
            </div>
            <div className="thumbnail">
              <div className="beforeCard">
                <div className="firstDiv"></div>
                <div className="secondDiv"></div>
                <div className="thirdDiv"></div>
              </div>
              <div className="afterCard">
                <div className="mainContentFirstDiv">
                  <div className="ownerDetailsDiv">
                    <div className="ownerImgLogo"></div>
                    <div className="owner-name-title">
                      <p className="owner-name">Anne Lorem Ipsun</p>
                      <p className="owner-title">Membership Name</p>
                    </div>
                  </div>
                  <div className="middle">
                    <div className="subtitle">ID code</div>
                    <div className="title">21415 5415 51545 5454</div>
                  </div>

                  <div className="end">
                    <div className="side1">
                      <div className="subtitle">Valid Thru</div>
                      <div className="title">12 / 2020</div>
                    </div>

                    <div className="side2">
                      <div className="subtitle">Status</div>
                      <div className="title">
                        23{" "}
                        <span style={{ color: "#868E96" }}>/ 90 bookings</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="qr-image"
                    style={{ display: text1 ? "flex" : "none" }}
                  >
                    <img
                      className="imgscan101"
                      src={img4}
                      onClick={() => {
                        settext1(false);
                        settext2(true);
                      }}
                      style={{
                        width: "50px",
                        height: "50px",
                        background: "white",
                        cursor: "pointer",
                      }}
                      alt=""
                    />
                    <img style={{ height: "80px" }} src={dots1} alt="" />
                  </div>
                  <div
                    className="qr-image"
                    style={{
                      display: text1 ? "none" : "flex",
                    }}
                  >
                    <img
                      style={{
                        height: "135px",
                      }}
                      src={dots}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Info  */}

            <div
              className="image-toogle"
              style={{ display: text1 ? "flex" : "none" }}
            >
              <Toggle settext={true} />
            </div>

            <div className="list102">
              <div className="listcontent">
                List of benefits
                <div>
                  {" "}
                  <div>
                    {" "}
                    <BiChevronDown
                      className="svg121"
                      style={{
                        display: text2 ? "flex" : "none",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        settext2(false);
                        settext1(true);
                      }}
                    />
                    <BiChevronUp
                      className="svg121"
                      style={{
                        display: text2 ? "none" : "flex",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        settext2(true);
                        settext1(true);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div style={{ display: text2 ? "none" : "block" }}>
                <div className="innercontent">
                  <div className="toggle">
                    <Toggle settext={false} />
                  </div>
                  <div className="text">
                    <div className="tite">Automatic Renewal</div>
                    <div className="subtitle">
                      Purchase automatically a renewal for your membership
                      everytime it runs out of passes or became unvalid. You
                      must have a credit card registered.
                    </div>
                  </div>
                </div>
                <div className="innercontent">
                  <div className="toggle">
                    <Toggle settext={false} />
                  </div>
                  <div className="text">
                    <div className="tite">Send notifications to my email</div>
                    <div className="subtitle">
                      Receive an email from Squeedr everytime an upcoming
                      booking, rescheduled event, cancellation, etc.
                    </div>
                  </div>
                </div>
                <div className="innercontent">
                  <div className="toggle">
                    <Toggle settext={false} />
                  </div>
                  <div className="text">
                    <div className="tite">
                      Show nickname instead of full name
                    </div>
                    <div className="subtitle">
                      Your profile picture and your last name(s) on the back of
                      your membership will be hidden from sight.
                    </div>
                  </div>
                </div>
              </div>

              <div className="border"></div>
              <div className="listcontent">
                Preferences
                <div>
                  {" "}
                  <BiChevronDown
                    className="svg121"
                    style={{
                      display: text3 ? "flex" : "none",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      settext3(false);
                      settext1(true);
                    }}
                  />
                  <BiChevronUp
                    className="svg121"
                    style={{
                      display: text3 ? "none" : "flex",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      settext3(true);
                      settext1(true);
                    }}
                  />
                </div>
              </div>
              {/* <div> // content wrapper */}
              <div style={{ display: text3 ? "none" : "block" }}>
                <div className="innercontent">
                  <div className="toggle">
                    <Toggle settext={false} />
                  </div>
                  <div className="text">
                    <div className="tite">Automatic Renewal</div>
                    <div className="subtitle">
                      Purchase automatically a renewal for your membership
                      everytime it runs out of passes or became unvalid. You
                      must have a credit card registered.
                    </div>
                  </div>
                </div>
                <div className="innercontent">
                  <div className="toggle">
                    <Toggle settext={false} />
                  </div>
                  <div className="text">
                    <div className="tite">Send notifications to my email</div>
                    <div className="subtitle">
                      Receive an email from Squeedr everytime an upcoming
                      booking, rescheduled event, cancellation, etc.
                    </div>
                  </div>
                </div>
                <div className="innercontent">
                  <div className="toggle">
                    <Toggle settext={false} />
                  </div>
                  <div className="text">
                    <div className="tite">
                      Show nickname instead of full name
                    </div>
                    <div className="subtitle">
                      Your profile picture and your last name(s) on the back of
                      your membership will be hidden from sight.
                    </div>
                  </div>
                </div>
              </div>
              <div className="border"></div>
              <div className="listcontent">
                Payment Information
                <div>
                  {" "}
                  <BiChevronDown
                    className="svg121"
                    style={{
                      display: text4 ? "flex" : "none",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      settext4(false);
                      settext1(true);
                    }}
                  />
                  <BiChevronUp
                    className="svg121"
                    style={{
                      display: text4 ? "none" : "flex",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      settext4(true);
                      settext1(true);
                    }}
                  />
                </div>
              </div>
              <div style={{ display: text4 ? "none" : "block" }}>
                <div className="innercontent">
                  <div className="toggle">
                    <Toggle settext={false} />
                  </div>
                  <div className="text">
                    <div className="tite">Automatic Renewal</div>
                    <div className="subtitle">
                      Purchase automatically a renewal for your membership
                      everytime it runs out of passes or became unvalid. You
                      must have a credit card registered.
                    </div>
                  </div>
                </div>
                <div className="innercontent">
                  <div className="toggle">
                    <Toggle settext={false} />
                  </div>
                  <div className="text">
                    <div className="tite">Send notifications to my email</div>
                    <div className="subtitle">
                      Receive an email from Squeedr everytime an upcoming
                      booking, rescheduled event, cancellation, etc.
                    </div>
                  </div>
                </div>
                <div className="innercontent">
                  <div className="toggle">
                    <Toggle settext={false} />
                  </div>
                  <div className="text">
                    <div className="tite">
                      Show nickname instead of full name
                    </div>
                    <div className="subtitle">
                      Your profile picture and your last name(s) on the back of
                      your membership will be hidden from sight.
                    </div>
                  </div>
                </div>
              </div>
              <div className="border"></div>
              <div className="container">
                <div className="row">
                  <div className="col text-center">
                    <button style={{ border_redius: "1.0rem" }} className="btn btn-danger btn-lg">Cancel Membership</button>
                  </div>
                </div>
              </div>
              <div style={{ display: text5 ? "none" : "block" }}>
                <div className="innercontent">
                  <div className="toggle">
                    <Toggle settext={false} />
                  </div>
                  <div className="text">
                    <div className="tite">Automatic Renewal</div>
                    <div className="subtitle">
                      Purchase automatically a renewal for your membership
                      everytime it runs out of passes or became unvalid. You
                      must have a credit card registered.
                    </div>
                  </div>
                </div>
                <div className="innercontent">
                  <div className="toggle">
                    <Toggle settext={false} />
                  </div>
                  <div className="text">
                    <div className="tite">Send notifications to my email</div>
                    <div className="subtitle">
                      Receive an email from Squeedr everytime an upcoming
                      booking, rescheduled event, cancellation, etc.
                    </div>
                  </div>
                </div>
                <div className="innercontent">
                  <div className="toggle">
                    <Toggle settext={false} />
                  </div>
                  <div className="text">
                    <div className="tite">
                      Show nickname instead of full name
                    </div>
                    <div className="subtitle">
                      Your profile picture and your last name(s) on the back of
                      your membership will be hidden from sight.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MemberShipRightDrawer2;
