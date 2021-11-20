import React, { useState } from "react";
import { Drawer } from "antd";
import { MdClose } from "react-icons/md";
import clock from "../../../../assets/membership-drawer/clock.png";
import eventsLogo from "../../../../assets/membership-drawer/cal111.png";
import ButtonFilter from "../button-filter/ButtonFilter";
import Button from "@mui/material/Button";
import { CgMenuGridO } from "react-icons/cg";
import ShowMoreText from "react-show-more-text";
import { FiCheck } from "react-icons/fi";
import { IoTriangleSharp } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhone } from "react-icons/md";
import TextField from "@mui/material/TextField";
import { BsDot } from "react-icons/bs";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Select from "react-select";
import { BiCalendar } from "react-icons/bi";
import { DatePicker, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  setReceiveItemDrawer,
  setShop,
  setCheckOut,
} from "../../../../Redux/HomeReducer";
import CheckOut from "../../../Checkout Component/CheckOut";
// style
import "./make-appointment-main.scss";
import { useHistory } from "react-router-dom";

const item = [1, 2];

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: "1px dotted red",
    color: state.selectProps.menuColor,
    padding: 20,
  }),

  control: (_, { selectProps: { width } }) => ({
    width: width,
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

function onChange(date, dateString) {
  console.log(date, dateString);
}

const MakeAppointmentMain = () => {
  const history = useHistory();

  // Redux
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const [show, setShow] = useState("");
  const [state, setState] = useState({ visible: false, placement: "right" });

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

  return (
    <>
      <Drawer
        width="570px"
        placement={state.placement}
        closable={false}
        onClose={() => {
          history.push("/dashboard?shop=true");
          dispatch(setReceiveItemDrawer(false));
        }}
        visible={store.home.openReceiveItemDrawer}
        key={state.placement}
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
                  onClick={() => {
                    history.push("/dashboard?shop=true");
                    dispatch(setReceiveItemDrawer(false));
                  }}
                />

                <div className="title">
                  How do you want to receive this item?
                </div>
                <div className="title2">Yoga Mat (#Pernety)</div>
              </div>

              {/* Thumbnail Image */}

              <div className="thumbnail-appointment">
                <div className="yoga-mat-info">
                  <div className="yoga-mat-picture"></div>
                  <div className="yoga-mat-main-info-container">
                    <div className="yoga-mat-heading-div">
                      <p className="yoga-mat-heading-text">
                        Yoga Mat (only rent)
                      </p>
                    </div>
                    <div className="info-container-main">
                      <div className="first-line-info">
                        <p className="heading-no-1-info">Rating</p>
                        <p className="ans-no-1-info">
                          € 49.00 &nbsp;
                          <span
                            style={{
                              fontFamily: "Lato, Regular",
                              fontSize: "13px",
                              color: "#596066",
                            }}
                          >
                            (per hour)
                          </span>
                        </p>
                      </div>
                      <div className="second-line-info">
                        <p className="heading-no-2-info">Workspace</p>
                        <p className="ans-no-2-info">
                          #Pernety &nbsp;
                          <span
                            style={{
                              fontFamily: "Lato, Regular",
                              fontSize: "13px",
                              color: "#AEBACA",
                            }}
                          >
                            (Street Name, District ...)
                          </span>
                        </p>
                      </div>
                      <div className="third-line-info">
                        <p className="heading-no-3-info">In Stock</p>
                        <p className="ans-no-3-info">12 of 20 available</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="title3">
                  How do you want to receive this item?
                </div>
                <div className="buttons-div">
                  <Button
                    className={
                      show == "via"
                        ? "via-delivery-btn-active"
                        : "via-delivery-btn"
                    }
                    variant="outlined"
                    size="large"
                    onClick={() => {
                      setShow("via");
                    }}
                  >
                    Via Delievery
                  </Button>
                  <Button
                    className={
                      show == "pick"
                        ? "pick-it-up-btn-active"
                        : "pick-it-up-btn"
                    }
                    variant="outlined"
                    size="large"
                    onClick={() => {
                      setShow("pick");
                    }}
                  >
                    Pick it Up
                  </Button>
                </div>
              </div>

              {/* Via Delivery  */}

              <div
                className={
                  show === "via" ? "via-delivery-form-main" : "display-none"
                }
              >
                <div className="delivery-form-title-div">
                  <p className="delivery-form-title-text">
                    Provide Delivery Information
                  </p>
                </div>
                <div className="address-crietaria-main-div">
                  <div className="delivery-address-title-div">
                    <p className="delivery-address-title-text">
                      Delivery Address *
                    </p>
                  </div>
                  <div className=" delivery-address-main-div">
                    <p className="delivery-address-main-text">
                      Street Name/Description in here PC #12345, District/area,
                      City, Country
                    </p>
                  </div>
                  <div className="change-address-div">
                    <p className="change-address-text">Change Address</p>
                  </div>
                </div>

                <div className="reference-point-main-div">
                  <div className="reference-point-text-div">
                    <p className="reference-point-text-text">
                      Reference Point:
                    </p>
                  </div>
                  <div className="reference-point-input-div">
                    <input
                      className="reference-point-main-input"
                      placeholder="Set a location to deliver"
                    />
                  </div>
                </div>

                <div className="email-contact1-input-main-div">
                  <div className="email-input-main-div">
                    <div className="email-title-div">
                      <p className="email-title-text">Email *</p>
                    </div>
                    <div className="email-input-div">
                      <input
                        className="email-main-input"
                        placeholder="annelorem@gmail.com"
                      />
                      <AiOutlineMail className="email-logo" />
                    </div>
                  </div>
                  <div className="contact1-input-main-div">
                    <div className="contact1-title-div">
                      <p className="contact1-title-text">Contact phone 1 *</p>
                    </div>
                    <div className="contact1-input-div">
                      <input
                        className="contact1-main-input"
                        placeholder="+33123424223"
                      />
                      <MdPhone className="contact-logo" />
                    </div>
                  </div>
                </div>
                <div className="email-contact1-input-main-div">
                  <div className="email-input-main-div email2">
                    <div className="email2-title-div">
                      <p className="email2-title-text">Email 2 (optional)</p>
                    </div>
                    <div className="email-input-div ">
                      <input
                        className="email-main-input"
                        placeholder="Enter second email"
                      />
                      <AiOutlineMail className="email-logo" />
                    </div>
                  </div>
                  <div className="contact1-input-main-div">
                    <div className="contact2-title-div">
                      <p className="contact2-title-text">
                        Contact phone 2 (optional)
                      </p>
                    </div>
                    <div className="contact1-input-div">
                      <input
                        className="contact1-main-input"
                        placeholder="+33123424223"
                      />
                      <MdPhone className="contact-logo" />
                    </div>
                  </div>
                </div>

                <div className="comments-delivery-main-div">
                  <div className="references-comments-title-div">
                    <p className="references-comments-title-text">
                      References & Comments For Delivery
                    </p>
                  </div>
                  <div className="comments-main-dialog-div">
                    <TextField
                      className="comments-main-dialog-text"
                      id="outlined-multiline-static"
                      placeholder="Write a description+"
                      multiline
                      rows={4}
                    />
                  </div>
                </div>

                <div className="footer-button-section">
                  <div className="footer-title-div">
                    <p className="footer-title-text">
                      Delivery Services Are Set Up By The Studio
                    </p>
                  </div>
                  <div className="footer-description-div">
                    <p className="footer-description-text">
                      You Will receive a call and/or an email to verify the
                      information.
                    </p>
                  </div>
                  <div className="footer-buttons-div">
                    <Button
                      className="go-back-btn"
                      variant="outlined"
                      size="large"
                      onClick={() => {
                        history.push("/dashboard?shop=true&shop-info=true");
                        dispatch(setReceiveItemDrawer(false));
                        dispatch(setShop(true));
                      }}
                    >
                      Go back
                    </Button>

                    <Button
                      className="continue-btn"
                      variant="contained"
                      size="large"
                      onClick={() => {
                        history.push("/dashboard?shop=true&checkout=true");
                        dispatch(setCheckOut(true));
                        dispatch(setReceiveItemDrawer(false));
                      }}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>

              {/* Pick It Up  */}

              <div
                className={
                  show === "pick" ? "pick-it-up-main-container" : "display-none"
                }
              >
                <div className="yoga-mat-workspace-div">
                  <div className="yoga-mat-title-main-div">
                    <div className="yoga-mat-dot-div">
                      <FiberManualRecordIcon className="yoga-mat-dot" />
                    </div>
                    <div className="yoga-mat-title-div">
                      <p className="yoga-mat-title-text">
                        Pick Yoga Mat at a workspace:
                      </p>
                    </div>
                  </div>
                  <div className="yoga-mat-content-div">
                    <p className="yoga-mat-content-text">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna
                    </p>
                  </div>

                  <div className="selects-main-div">
                    <div className="workspace-select-div">
                      <div className="workspace-title-div">
                        <p className="workspace-title-text">Workspace:</p>
                      </div>
                      <div className="workspace-select">
                        <Select options={options} />
                      </div>
                    </div>
                    <div className="date-select-div">
                      <div className="date-title-div">
                        <p className="date-title-text">Date:</p>
                      </div>
                      <div className="date-select-main-div">
                        <DatePicker onChange={onChange} />
                      </div>
                    </div>
                  </div>

                  <div className="pick-it-up-main-div">
                    <div className="yoga-mat-dot-div">
                      <FiberManualRecordIcon className="yoga-mat-dot" />
                    </div>
                    <div className="pick-it-up-title-div">
                      <p className="pick-it-up-title-text">
                        Pick it up before my reservation:
                      </p>
                    </div>
                  </div>
                  <div className="yoga-mat-content-div">
                    <p className="yoga-mat-content-text">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna
                    </p>
                  </div>

                  <div className="selects-main-div">
                    <div className="workspace-select-div">
                      <div className="workspace-title-div">
                        <p className="workspace-title-text">Workspace:</p>
                      </div>
                      <div className="workspace-select">
                        <Select options={options} />
                      </div>
                    </div>
                  </div>

                  <div className="footer-button-section">
                    <div className="footer-title-div">
                      <p className="footer-title-text">
                        Delivery Services Are Set Up By The Studio
                      </p>
                    </div>
                    <div className="footer-description-div">
                      <p className="footer-description-text">
                        You Will receive a call and/or an email to verify the
                        information.
                      </p>
                    </div>
                    <div className="footer-buttons-div">
                      <Button
                        className="go-back-btn"
                        variant="outlined"
                        size="large"
                        onClick={() => {
                          history.push("/dashboard?shop=true&shop-info=true");
                          dispatch(setReceiveItemDrawer(false));
                          dispatch(setShop(true));
                        }}
                      >
                        Go back
                      </Button>
                      <Button
                        className="continue-btn"
                        variant="contained"
                        size="large"
                        onClick={() => {
                          history.push("/dashboard?shop=true&checkout=true");
                          dispatch(setCheckOut(true));
                          dispatch(setReceiveItemDrawer(false));
                        }}
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guidelines  */}

              <div
                className={
                  show === "via" || show === "pick"
                    ? "display-none"
                    : "guidelines-main-div"
                }
              >
                <div className="title-guidelines">
                  <p className="main-title-text">
                    Studio Corps & Form Guidelines
                  </p>
                </div>
                <div className="guideline-no-1-main-div">
                  <div className="guideline-title-div-no-1">
                    <p className="guideline-title-text-no-1">Guideline 1</p>
                  </div>
                  <div className="guideline-main-content">
                    <div className="guideline-main-content-logo-div">
                      <IoTriangleSharp className="guideline-main-logo" />
                    </div>
                    <div className="guideline-main-content-text">
                      <p className="guideline-main-content-text">
                        Voyez ce jeu exquis wallon, de graphie en kit mais bref.
                        Portez ce vieux whisky au juge blond qui fume sur son
                        île intérieure, à côté de l"alcôve ovoïde, où le dans un
                        capharnaüm.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="guideline-no-1-main-div">
                  <div className="guideline-title-div-no-1">
                    <p className="guideline-title-text-no-1">Guideline 1</p>
                  </div>
                  <div className="guideline-main-content">
                    <div className="guideline-main-content-logo-div">
                      <IoTriangleSharp className="guideline-main-logo" />
                    </div>
                    <div className="guideline-main-content-text">
                      <p className="guideline-main-content-text">
                        Voyez ce jeu exquis wallon, de graphie en kit mais bref.
                        Portez ce vieux whisky au juge blond qui fume sur son
                        île intérieure, à côté de l"alcôve ovoïde, où le dans un
                        capharnaüm.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="guideline-no-1-main-div">
                  <div className="guideline-title-div-no-1">
                    <p className="guideline-title-text-no-1">Guideline 1</p>
                  </div>
                  <div className="guideline-main-content">
                    <div className="guideline-main-content-logo-div">
                      <IoTriangleSharp className="guideline-main-logo" />
                    </div>
                    <div className="guideline-main-content-text">
                      <p className="guideline-main-content-text">
                        Voyez ce jeu exquis wallon, de graphie en kit mais bref.
                        Portez ce vieux whisky au juge blond qui fume sur son
                        île intérieure, à côté de l"alcôve ovoïde, où le dans un
                        capharnaüm.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="guideline-no-1-main-div">
                  <div className="guideline-title-div-no-1">
                    <p className="guideline-title-text-no-1">Guideline 1</p>
                  </div>
                  <div className="guideline-main-content">
                    <div className="guideline-main-content-logo-div">
                      <IoTriangleSharp className="guideline-main-logo" />
                    </div>
                    <div className="guideline-main-content-text">
                      <p className="guideline-main-content-text">
                        Voyez ce jeu exquis wallon, de graphie en kit mais bref.
                        Portez ce vieux whisky au juge blond qui fume sur son
                        île intérieure, à côté de l"alcôve ovoïde, où le dans un
                        capharnaüm.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="guideline-no-1-main-div">
                  <div className="guideline-title-div-no-1">
                    <p className="guideline-title-text-no-1">Guideline 1</p>
                  </div>
                  <div className="guideline-main-content">
                    <div className="guideline-main-content-logo-div">
                      <IoTriangleSharp className="guideline-main-logo" />
                    </div>
                    <div className="guideline-main-content-text">
                      <p className="guideline-main-content-text">
                        Voyez ce jeu exquis wallon, de graphie en kit mais bref.
                        Portez ce vieux whisky au juge blond qui fume sur son
                        île intérieure, à côté de l"alcôve ovoïde, où le dans un
                        capharnaüm.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Drawer>
    </>
  );
};

export default MakeAppointmentMain;
