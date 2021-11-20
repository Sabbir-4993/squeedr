import React, { useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { Modal, Box } from "@mui/material/";
import { makeStyles } from "@mui/styles";
import { IoMdClose } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdPeopleOutline } from "react-icons/md";
import { BiPencil } from "react-icons/bi";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { FaAngleDown } from "react-icons/fa";
import TopNavbar from "../home/Mobile View Components/Top Navbar/TopNavbar";
import img1 from "../../assets/mobileView/checkbox/1.png";
import img2 from "../../assets/mobileView/checkbox/2.png";
import { useSelector, useDispatch } from "react-redux";
import {
  setCheckOut,
  setBookingConfirmation,
  setCalender,
} from "../../Redux/HomeReducer";
import { Link as Scroll } from "react-scroll";
import BookingConfirmation from "../Booking Confirmation/BookingConfirmation";

// style
import "./checkout.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "575px",
  bgcolor: "#FFFFFF",
  boxShadow: "-3px 3px 6px #0000001F",
  //   p: 3,

  "@media (max-width: 850px)": {
    width: "100%",
    height: "100%",
  },
};

const checkmap = [
  {
    id: 1,
    title: "Cleaning fee*",
    price: "€ 9.00",
    select: false,
  },
  {
    id: 2,
    title: "Soap and towel",
    price: "€ 9.00",
    select: false,
  },

  {
    id: 3,
    title: "Water bottle",
    price: "€ 9.00",
    select: false,
  },
  {
    id: 4,
    title: "Yoga Mat",
    price: "€ 9.00",
    select: false,
  },
];

const webmap = [
  {
    id: 1,
    title: "Subtotal amount",
    price: "€ 49.00",
  },
  {
    id: 2,
    title: "+Cleaning fee",
    price: "€ 9.00",
  },
  {
    id: 3,
    title: "+Soap and towel",
    price: "€ 9.00",
  },
  {
    id: 4,
    title: "+VAT",
    price: "-",
  },
];

const mobileMap = [
  {
    id: 1,
    title: "English Class with Maud Blanc",
  },
  {
    id: 2,
    title: "Yoga Mat (#Pernety) (1)",
  },
  {
    id: 3,
    title: "Gym (Room 12) - 24 hrs",
  },
  {
    id: 4,
    title: "Crossfit with Carl Johnson",
  },
];

const AddButton = () => {
  return (
    <>
      <div className="input">
        <TextField
          id="outlined-basic"
          placeholder="Discount coupon"
          variant="outlined"
          fullWidth
        />
      </div>
      <div className="add-btn">Add</div>
    </>
  );
};

const CheckOut = () => {
  const history = useHistory();

  // Redux
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const [check, setCheck] = useState(false);
  const [yesNo, setYesNo] = React.useState("Yes");
  const [mobileQuestion, setMobileQuestion] = useState(false);
  const handleYesNo = (event) => {
    setYesNo(event.target.value);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [currentSelect, setCurrent] = useState(null);

  const setCheckmap = (title, index) => {
    setCheck(title);
    checkmap[index].select = !checkmap[index].select;
  };

  // url params
  const urlPernety = new URLSearchParams(history.location.search).get(
    "pernety"
  );
  const urlEvents = new URLSearchParams(history.location.search).get("events");
  const urlAppointments = new URLSearchParams(history.location.search).get(
    "appointments"
  );
  const urlSpaces = new URLSearchParams(history.location.search).get("spaces");

  const urlShop = new URLSearchParams(history.location.search).get("shop");

  const onClose = () => {
    if (urlEvents === "true") {
      dispatch(setCheckOut(false));
      history.push("/dashboard?events=true");
    } else if (urlAppointments === "true") {
      dispatch(setCheckOut(false));
      history.push("/dashboard?appointments=true");
    } else if (urlSpaces === "true") {
      dispatch(setCheckOut(false));
      history.push("/dashboard?spaces=true");
    } else if (urlShop === "true") {
      dispatch(setCheckOut(false));
      history.push("/dashboard?shop=true");
    } else if (urlPernety === "true") {
      dispatch(setCheckOut(false));
      history.push("/dashboard?pernety=true");
    }
  };

  return (
    <>
      <div className="checkout-component">
        <Modal
          open={store.home.openCheckOut}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="checkout-modal-wrapper">
              {/* header */}
              <div className="header">
                <div className="close-text">
                  <IoMdClose className="icon" onClick={onClose} />
                  <span>Checkout</span>
                </div>

                <AiOutlineShoppingCart className="cart" />
              </div>

              {/* Card */}
              <div className="card-main">
                <div className="checkout-card-wrapper">
                  {/* Card Head */}
                  <div className="card-head">
                    <div className="dot-title-div">
                      <div className="check-div">
                        <div
                          className="dot"
                          style={{ background: "#29BDEF" }}
                        ></div>
                      </div>

                      <div className="title">
                        Kundalini Yoga with Carl Johnson
                      </div>
                    </div>

                    <div className="head-right-icon">
                      <MdPeopleOutline />
                    </div>
                  </div>

                  {/* divider */}
                  <div className="divider"></div>

                  {/* Card Body */}
                  <div className="checkout-card-body-wrapper">
                    {/* Rating */}
                    <div className="text-wrapper">
                      <div className="title">Rating:</div>

                      <div className="subtitle">
                        <span
                          style={{
                            font: "normal normal bold 14px/17px Lato",
                            color: "#596066",
                          }}
                        >
                          €99.00
                        </span>{" "}
                        <span
                          style={{
                            font: "normal normal normal 12px/17px Lato",
                            color: "#596066",
                          }}
                        >
                          +VAT{" "}
                        </span>
                        <span
                          style={{
                            font: "normal normal normal 14px/17px Lato",
                            color: "#868E96",
                          }}
                        >
                          (€49.00 per day)
                        </span>
                      </div>
                    </div>

                    {/* location */}
                    <div className="text-wrapper">
                      <div className="title">Location:</div>

                      <div className="subtitle">
                        <span
                          style={{
                            font: "normal normal bold 14px/25px Lato",
                            color: "#596066",
                          }}
                        >
                          Studio Corps #Pernety{" "}
                        </span>
                        <span
                          style={{
                            font: "normal normal normal 14px/25px Lato",
                            color: "#868E96",
                          }}
                        >
                          (Street '9, CP 1234, City name, Country){" "}
                        </span>
                      </div>
                    </div>

                    {/* Start Time */}
                    <div className="text-wrapper">
                      <div className="title">Start time:</div>
                      <div className="subtitle">
                        <span
                          style={{
                            font: "normal normal bold 14px/17px Lato",
                            color: "#596066",
                          }}
                        >
                          12:00 hours
                        </span>{" "}
                        <span
                          style={{
                            font: "normal normal normal 14px/17px Lato",
                            color: "#868E96",
                          }}
                        >
                          (Tues 24, Ap 2020 CT){" "}
                        </span>
                      </div>
                    </div>

                    {/* Checkout */}
                    <div className="text-wrapper">
                      <div className="title">Checkout:</div>
                      <div className="subtitle">
                        <span
                          style={{
                            font: "normal normal bold 14px/17px Lato",
                            color: "#596066",
                          }}
                        >
                          13:00 hours
                        </span>{" "}
                        <span
                          style={{
                            font: "normal normal normal 14px/17px Lato",
                            color: "#868E96",
                          }}
                        >
                          (Thurs 26, Ap 2020 CT){" "}
                        </span>
                      </div>
                    </div>

                    {/* view-edit-wrappper */}
                    <div className="view-edit-wrappper">
                      {" "}
                      <div className="view-complete">
                        <a
                          href="#detail"
                          style={{ color: "inherit", scrollBehavior: "smooth" }}
                          smooth
                        >
                          View complete details
                        </a>
                      </div>
                      <div
                        className="edit-booking"
                        onClick={() => {
                          dispatch(setCheckOut(false));
                          dispatch(setCalender(true));
                        }}
                      >
                        <span>Edit booking</span>
                        <BiPencil />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* mobile screen time */}
              <div className="mobile-time">12 minutes ago</div>

              {/* web Add input wrapper */}
              <div className="add-input-div">
                <div className="input">
                  <TextField
                    id="outlined-basic"
                    placeholder="Discount coupon"
                    variant="outlined"
                    // fullWidth
                  />
                </div>
                <div className="add-btn">Add</div>
              </div>

              {/* Suggestions Subtotal wrapper */}
              <div className="suggest-subtotal-wrapper">
                <div className="suggestion-wrapper">
                  <div className="title">Suggestions & Extras:</div>

                  {checkmap.map((data, index) => {
                    return (
                      <>
                        <div className="product-main">
                          <div
                            className={
                              data.id == 1
                                ? "inner-wrapper disable"
                                : "inner-wrapper"
                            }
                            key={data.id}
                            onClick={() => {
                              setCheckmap(data.title, index);
                            }}
                          >
                            {/* checkbox text wrapper*/}
                            <div className="check-text-wrapper">
                              <div className="check-box-div">
                                <div
                                  className={
                                    data.id == 1
                                      ? "dot"
                                      : data.select
                                      ? "dot"
                                      : "white"
                                  }
                                ></div>
                              </div>

                              <div className="text">{data.title}</div>
                            </div>

                            {/* price text */}
                            <div className="price">{data.price}</div>
                          </div>
                        </div>
                      </>
                    );
                  })}

                  <div
                    className="shop-text"
                    onClick={() => {
                      dispatch(setCheckOut(false));
                    }}
                  >
                    <Link
                      to="/dashboard?shop=true"
                      style={{ textDecoration: "none", color: "#29bdef" }}
                    >
                      Go to Shop
                    </Link>
                  </div>
                </div>

                {/* Web View */}
                <div className="subtotal">
                  <div className="subtotal-inner">
                    {webmap.map((data, index) => {
                      return (
                        <>
                          <div className="text-wrapper" key={data.id}>
                            <div className="title">{data.title}</div>

                            <div className="subtitle">{data.price}</div>
                          </div>
                        </>
                      );
                    })}

                    {/* divider */}
                    <div className="divider"></div>

                    {/* total */}
                    <div className="text-wrapper">
                      <div className="total-title">Total fee</div>

                      <div className="subtitle total-title">€ 67.00</div>
                    </div>
                  </div>
                </div>

                {/* Mobile View */}
                <div className="mobile-subtotal-wrapper" id="detail">
                  <div className="discount-activate-wrapper">
                    <div className="image">
                      <img src={img1} alt="" />
                    </div>

                    <div className="text">
                      10% discount on any Studio Corps #Pernety event{" "}
                      <span
                        style={{
                          // marginLeft: "5px",
                          font: "normal normal bold 14px/22px Lato",
                          color: "#29BDEF",
                          textTransform: "capitalize",
                        }}
                      >
                        Activate
                      </span>
                    </div>
                  </div>

                  {/* mobile subtotal  div*/}
                  <div className="mobile-subtotal-main">
                    {mobileMap.map((data, index) => {
                      return (
                        <>
                          <div className="text-wrapper">
                            <div className="title">{data.title}</div>

                            <div className="line-bottom"></div>

                            <div className="subtitle">
                              <span>€</span>
                              <span>99.00</span>
                            </div>
                          </div>
                        </>
                      );
                    })}

                    {/* Discount */}
                    <div className="text-wrapper">
                      <div className="title title-light">(-%) Discount</div>
                      <div className="line-empty"></div>

                      <div className="subtitle">
                        <span></span>
                        <span>--</span>
                      </div>
                    </div>

                    {/* Vat */}
                    <div className="text-wrapper">
                      <div className="title title-light">+VAT</div>
                      <div className="line-empty"></div>

                      <div className="subtitle">
                        <span>€</span>
                        <span>99.00</span>
                      </div>
                    </div>

                    {/* divider */}
                    <div className="divider">
                      <span style={{ width: "50%" }}></span>
                      <span
                        style={{
                          width: "50%",
                          height: "1px",
                          backgroundColor: "#aebaca",
                          marginTop: "20px",
                        }}
                      ></span>
                    </div>

                    {/* total */}
                    <div className="text-wrapper pad-top">
                      <div className=" total-title">Total fee</div>
                      <div className="line-empty"></div>

                      <div className="subtitle total-subtitle">
                        <span>€</span>
                        <span>99.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* mobile Add input wrapper */}
              <div className="mobile-add-input-div">
                <AddButton />
              </div>

              {/* mobile complete payment */}
              <div
                className="mobile-complete-payment"
                onClick={() => {
                  setMobileQuestion(true);
                }}
              >
                Complete Payment
              </div>

              {/* mobile payment image */}
              <div className="payment-image">
                <img src={img2} alt="" />
              </div>

              {/* mobile text payment down */}
              <div className="mobile-text-down-payment">
                Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez
                ce vieux whisky au juge blond qui fume sur son île intérieure, à
                côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre,
                ce qui lui permet de.
              </div>

              {/* divider */}
              <div className="outer-divider"></div>

              {/* Questionare (Obligatoyry) */}
              <div className="question-wrapper">
                <div className="title-question">
                  Questionare (Obligatoyry) *
                </div>

                {/* q-b */}
                <div className="question-b">
                  <div className="ques">
                    b) What is your diet? Pick one or more.
                  </div>

                  <div className="answer-wrapper">
                    <FormControlLabel
                      label="VEGETARIAN"
                      control={<Checkbox />}
                    />

                    <FormControlLabel label="VEGAN" control={<Checkbox />} />

                    <FormControlLabel label="OTHER" control={<Checkbox />} />

                    <FormControlLabel label="CARNIVOR" control={<Checkbox />} />

                    <FormControlLabel label="CARNIVOR" control={<Checkbox />} />
                  </div>
                </div>

                {/* q-a */}
                <div className="question-b">
                  <div className="ques">a) Do you smoke? Pick one. </div>

                  <div className="answer-wrapper">
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="pick"
                        name="controlled-radio-buttons-group"
                        value={yesNo}
                        onChange={handleYesNo}
                      >
                        <FormControlLabel
                          value="YES"
                          control={<Radio />}
                          label="YES"
                        />
                        <FormControlLabel
                          value="NO"
                          control={<Radio />}
                          label="NO"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
              </div>

              {/* divider */}
              <div
                className="outer-divider"
                style={{ marginTop: "20px" }}
              ></div>

              {/* cancel */}
              {/* <div className="acco">
                Cancellation Policy <FaAngleDown />
              </div> */}

              {/* divider */}
              <div className="outer-divider"></div>

              {/* read studio */}
              {/* <div className="acco">
                Read Studio Corps & Forme Guidelines <FaAngleDown />
              </div> */}

              {/* btn-wrapper */}
              <div className="btn-wrapper">
                <div className="cancel-btn">Cancel Everyhing</div>
                <>
                  <div
                    className="confirm-btn"
                    onClick={() => {
                      onClose();
                      dispatch(setBookingConfirmation(true));
                    }}
                  >
                    Confirm Booking <AiOutlineShoppingCart className="icon" />
                  </div>
                  {/* <BookingConfirmation /> */}
                </>
              </div>

              {/* mobile question div */}
              <div
                className={
                  mobileQuestion ? "mobilequestion-wrapper" : "display-none"
                }
              >
                <div className="upper-half">
                  <TopNavbar />
                  <div className="title-question">
                    Please answer this questions to finish...{" "}
                  </div>

                  {/* q-b */}
                  <div className="question-b">
                    <div className="ques">
                      b) What is your diet? Pick one or more.
                    </div>

                    <div className="answer-wrapper">
                      <FormControlLabel
                        label="VEGETARIAN"
                        control={<Checkbox />}
                      />

                      <FormControlLabel label="VEGAN" control={<Checkbox />} />

                      <FormControlLabel label="OTHER" control={<Checkbox />} />

                      <FormControlLabel
                        label="CARNIVOR"
                        control={<Checkbox />}
                      />

                      <FormControlLabel
                        label="CARNIVOR"
                        control={<Checkbox />}
                      />
                    </div>
                  </div>

                  {/* q-a */}
                  <div className="question-b">
                    <div className="ques">a) Do you smoke? Pick one. </div>

                    <div className="answer-wrapper">
                      <FormControl component="fieldset">
                        <RadioGroup
                          row
                          aria-label="pick"
                          name="controlled-radio-buttons-group"
                          value={yesNo}
                          onChange={handleYesNo}
                        >
                          <FormControlLabel
                            value="YES"
                            control={<Radio />}
                            label="YES"
                          />
                          <FormControlLabel
                            value="NO"
                            control={<Radio />}
                            label="NO"
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </div>

                  {/* mobile complete payment */}
                  <div
                    className="mobile-complete-payment mobile-complete-extra"
                    onClick={() => {
                      dispatch(setBookingConfirmation(true));
                      setMobileQuestion(false);
                      onClose();
                    }}
                  >
                    Complete Payment
                  </div>
                </div>

                <div className="bottom-half"></div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default CheckOut;
