import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import "./mainLogin.css";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import headingLogo from "../../assets/Group 1377.png";
import dots from "../../assets/dots.png";
import dotsMobile from "../../assets/Group 3331.png";
import headerLogo from "../../assets/logInHeaderLogo.png";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import hurry from "../../assets/hurry.png";
import hurry1 from "../../assets/hurry1.svg";
import google from "../../assets/google.png";
import outlook from "../../assets/outlookLogin.png";
import facebook from "../../assets/facebookLogin.png";
import { Link } from "react-router-dom";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import headerMobileLogo from "../../assets/mobileViewHeader.png";
import ScrollButton from "../Forgot Password - Onboarding/ScrollButton";
import Scrolltext from "../Forgot Password - Onboarding/Scrolltext";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const drawerWidth = 250;

const Login = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [show, setShow] = React.useState(false);
  const [text, setText] = React.useState(1);
  // for mobile state
  const [text1, setText1] = React.useState(1);

  useEffect(() => {
    function myFunction() {
      if (text < 5) {
        setText(text + 1);
      } else {
        setText(1);
      }
    }
    function myFunction1() {
      if (text1 < 4) {
        setText1(text1 + 1);
      } else {
        setText1(1);
      }
    }

    setTimeout(myFunction1, 3000);

    setTimeout(myFunction, 3000);
  }, [text, text1]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const drawer = (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <Toolbar className="toolbarLogin">
        <h2
          style={{
            color: "white",
          }}
        >
          Squeedr
          <img className="headingLogoLogin" src={headingLogo} alt="" />
        </h2>
      </Toolbar>

      <div className="drawerImageDivLogin">
        <div className="opacityLogin"></div>
      </div>
      <div className="lowerDrawerContentLogin" style={{ marignLeft: "20px" }}>
        <div className="carousel101" style={{ justifyContent: "flex-start" }}>
          <div
            className="dot101"
            style={{ background: text === 1 ? "#29BDEF" : "" }}
            onClick={() => {
              setText(1);
            }}
          ></div>
          <div
            className="dot101"
            style={{ background: text === 2 ? "#29BDEF" : "" }}
            onClick={() => {
              setText(2);
            }}
          ></div>
          <div
            className="dot101"
            style={{ background: text === 3 ? "#29BDEF" : "" }}
            onClick={() => {
              setText(3);
            }}
          ></div>
          <div
            className="dot101"
            style={{ background: text === 4 ? "#29BDEF" : "" }}
            onClick={() => {
              setText(4);
            }}
          ></div>
          <div
            className="dot101"
            style={{ background: text === 5 ? "#29BDEF" : "" }}
            onClick={() => {
              setText(4);
            }}
          ></div>
        </div>
        <div className={text === 1 ? "caro-text" : "display-none"}>
          <h4
            style={{
              // marginLeft: "40%",
              textAlign: "left",
              margin: "15px 0",
              color: "white",
            }}
          >
            Lorem Ipsum
          </h4>
          <p
            style={{
              // marginLeft: "40.5%",
              color: "#AEBACA",
              textAlign: "left",
              marginBottom: "0rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p
            style={{
              textAlign: "left",
              // marginLeft: "40%",
              color: "#29BDEF",
              marginBottom: "0rem",
              marginTop: "10px",
            }}
          >
            Continue Reading
          </p>
        </div>
        <div className={text === 2 ? "caro-text" : "display-none"}>
          <h4
            style={{
              // marginLeft: "40%",
              textAlign: "left",
              margin: "15px 0",
              color: "white",
            }}
          >
            Lorem Ipsum
          </h4>
          <p
            style={{
              // marginLeft: "40.5%",
              color: "#AEBACA",
              textAlign: "left",
              marginBottom: "0rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p
            style={{
              textAlign: "left",
              // marginLeft: "40%",
              color: "#29BDEF",
              marginBottom: "0rem",
              marginTop: "10px",
            }}
          >
            Continue Reading
          </p>
        </div>
        <div className={text === 3 ? "caro-text" : "display-none"}>
          <h4
            style={{
              // marginLeft: "40%",
              textAlign: "left",
              margin: "15px 0",
              color: "white",
            }}
          >
            Lorem Ipsum
          </h4>
          <p
            style={{
              // marginLeft: "40.5%",
              color: "#AEBACA",
              textAlign: "left",
              marginBottom: "0rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p
            style={{
              textAlign: "left",
              // marginLeft: "40%",
              color: "#29BDEF",
              marginBottom: "0rem",
              marginTop: "10px",
            }}
          >
            Continue Reading
          </p>
        </div>
        <div className={text === 4 ? "caro-text" : "display-none"}>
          <h4
            style={{
              // marginLeft: "40%",
              textAlign: "left",
              margin: "15px 0",
              color: "white",
            }}
          >
            Lorem Ipsum
          </h4>
          <p
            style={{
              // marginLeft: "40.5%",
              color: "#AEBACA",
              textAlign: "left",
              marginBottom: "0rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p
            style={{
              textAlign: "left",
              // marginLeft: "40%",
              color: "#29BDEF",
              marginBottom: "0rem",
              marginTop: "10px",
            }}
          >
            Continue Reading
          </p>
        </div>
        <div className={text === 5 ? "caro-text" : "display-none"}>
          <h4
            style={{
              // marginLeft: "40%",
              textAlign: "left",
              margin: "15px 0",
              color: "white",
            }}
          >
            Lorem Ipsum
          </h4>
          <p
            style={{
              // marginLeft: "40.5%",
              color: "#AEBACA",
              textAlign: "left",
              marginBottom: "0rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p
            style={{
              textAlign: "left",
              // marginLeft: "40%",
              color: "#29BDEF",
              marginBottom: "0rem",
              marginTop: "10px",
            }}
          >
            Continue Reading
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            className="mobileViewDrawerLogin"
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <div className="mainContainerLogin">
          <div className="mainContentDivLogin">
            <div className="logoHeader">
              {/* <img
                className="mobileViewHeaderLogo"
                src={headerMobileLogo}
                alt=""
              /> */}
              <h1
                style={{
                  color: "white",
                  fontSize: "40px",
                }}
              >
                Squeedr
                <img
                  className="headingLogoLogin"
                  src={headingLogo}
                  width="30px"
                  alt=""
                />
              </h1>
            </div>
            <div className="headerLogin">
              <div className="headerLogoDivLogin">
                <img className="headerLogoLogin" src={headerLogo} alt="" />
              </div>
              <div className="textDivLogin">
                <p className="headingFirstLogin">Connect to </p>
                <p className="headingSecondLogin">Studio Corps & Forme</p>
              </div>
            </div>
            <div className="mainContentLogin">
              <div className="textFieldsLogin">
                <div className="newHereLogin">
                  <p className="newHereTextLogin">
                    I'm New,
                    <Link
                      style={{
                        textDecoration: "none",
                      }}
                      to="/signUp"
                    >
                      <span
                        style={{
                          color: "#29BDEF",
                          fontWeight: "bold",
                        }}
                      >
                        {" Sign Up"}
                      </span>
                    </Link>
                  </p>
                </div>
                <input
                  className="emailInputLogin"
                  placeholder="maudblacn@hotmail.com"
                ></input>
                <div className="passwordDivLogin">
                  <input
                    type={`${show ? "text" : "password"}`}
                    className="passwordInputLogin"
                    placeholder="********"
                  />
                  <RemoveRedEyeOutlinedIcon
                    style={{ cursor: "pointer" }}
                    className="eyeLogoLogin"
                    onClick={() => {
                      setShow(!show);
                    }}
                  />
                  <Link
                    to="/dashboard"
                    style={{ display: "contents", textDecoration: "none" }}
                  >
                    <button className="goButtonLogin">GO</button>
                  </Link>
                </div>
              </div>
              <div className="remember-forgotLogin">
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <Radio
                    className="checkButtonLogin"
                    size="medium"
                    checked={selectedValue === "a"}
                    onChange={handleChange}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />
                  <p
                    className="rememberMeMobileView"
                    style={{
                      fontSize: "12px",
                      marginLeft: "5px",
                      marginBottom: "0rem",
                    }}
                  >
                    Remember me
                  </p>
                </div>
                <div class="forgotLogin">
                  <p
                    className="forgotLoginMobileView"
                    style={{
                      fontSize: "12px",
                      marginBottom: "0rem",
                    }}
                  >
                    <Link
                      to="/forgot-password"
                      style={{ textDecoration: "none", color: "#AEBACA" }}
                    >
                      Forgot your password?
                    </Link>
                  </p>
                </div>
              </div>
              <div className="borderDivLogin"></div>
              <p
                className="forgotLoginMobileView"
                style={{
                  color: "#AEBACA",
                  fontSize: "12px",
                  marginTop: "10px",
                  marginBottom: "0rem",
                }}
              >
                Continue with
              </p>
              <div className="mainLogosLogin">
                <div className="googleDivLogin" style={{ cursor: "pointer" }}>
                  <img className="googleLogoLogin" src={google} alt="" />
                </div>
                <div className="outlookDivLogin" style={{ cursor: "pointer" }}>
                  <img className="outlookLogoLogin" src={outlook} alt="" />
                </div>
                <div className="facebookDivLogin" style={{ cursor: "pointer" }}>
                  <img className="facebookLogin" src={facebook} alt="" />
                </div>
              </div>
              <p
                className="termsMobileView"
                style={{
                  color: "#29BDEF",
                  fontSize: "14px",
                  marginTop: "25px",
                  marginBottom: "0rem",
                }}
              >
                Terms & Conditions
              </p>
              <div className="guestweb12">
                <Button
                  style={{
                    // width: "60%",
                    height: "15%",
                    margin: "15px 0px",
                    fontSize: "20px",
                    color: "#303d53",
                    borderColor: "#303d53",
                  }}
                  variant="outlined"
                >
                  BOOK AS A GUEST
                  <img
                    style={{
                      marginLeft: "6px",
                    }}
                    src={hurry}
                    alt=""
                  />
                </Button>
              </div>
              <div className="loginbuttons12121">
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", display: "contents" }}
                >
                  <div className="mobileViewSignUpButton">SIGN UP</div>
                </Link>
                <div className="mobileViewSignUpButton padding112b">
                  BOOK AS A GUEST
                  <img
                    style={{
                      marginLeft: "6px",
                    }}
                    src={hurry1}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Scrolltext />
      </Box>
      <div className="lastSection" style={{ opacity: "1" }}>
        <div className="lastSection" style={{ opacity: "0.82" }}>
          <div className="color"></div>
        </div>
      </div>
      <div className="mobilescrollheader01">
        <div className="logoTextSignup" style={{ display: "flex" }}>
          <h2
            className="logoHeadingSignup"
            style={{
              fontSize: "28px",
              fontFamily: "Lato",
              fontWeight: "900",
            }}
          >
            Squeedr
          </h2>
          <img
            style={{
              marginLeft: "3%",
              marginTop: "2%",
            }}
            src={headingLogo}
            alt=""
          />
        </div>
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/"
        >
          <div className="teamBtnContentSignup" style={{ display: "flex" }}>
            <p className="textSignup">
              <ArrowCircleUpIcon
                style={{
                  color: "#c8c8c8",
                  fontSize: "medium",
                  // marginLeft: '27.5px',
                }}
              />
              <span
                style={{
                  marginLeft: "1.5%",
                  marginBottom: "0rem",
                }}
              >
                Log in for team members
              </span>
            </p>
          </div>
        </Link>

        {/* <a style={{ textDecoration: 'none' }} href='/'> */}
        <Link
          style={{
            textDecoration: "none",
            marginLeft: "-5px",
          }}
          to="/login"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo(0, 0);
          }}
        >
          <div className="goBackDivSignup" style={{ display: "flex" }}>
            <ArrowLeftIcon
              style={{
                color: "white",
                fontSize: "30px",
              }}
            />
            <p className="goBackBtnTextSignup">Go Back</p>
          </div>
        </Link>
      </div>

      <div className="footerContent">
        <div className="" style={{ paddingLeft: "30px", paddingRight: "15px" }}>
          <div className="carousel101">
            <div
              className="dot101"
              style={{ background: text1 === 1 ? "#29BDEF" : "" }}
              onClick={() => {
                setText1(1);
              }}
            ></div>
            <div
              className="dot101"
              style={{ background: text1 === 2 ? "#29BDEF" : "" }}
              onClick={() => {
                setText1(2);
              }}
            ></div>
            <div
              className="dot101"
              style={{ background: text1 === 3 ? "#29BDEF" : "" }}
              onClick={() => {
                setText1(3);
              }}
            ></div>
            <div
              className="dot101"
              style={{ background: text1 === 4 ? "#29BDEF" : "" }}
              onClick={() => {
                setText1(4);
              }}
            ></div>
          </div>
          <div className={text1 === 1 ? "caro-text" : "display-none"}>
            <h3
              style={{
                color: "white",
                lineHeight: 2,
                marginTop: "15px",
              }}
            >
              Create your{" "}
              <span style={{ color: "#29BDEF", fontWeight: 600 }}>W</span>
              orkspace
            </h3>
            <p
              style={{
                color: "#AEBACA",
                textAlign: "right",
                marginBottom: "0rem",
                lineHeight: 2,
              }}
            >
              Create a full costumizable workspace for your company, manage your
              team members, create events, have everything under control on just
              one place.
            </p>
            <p
              style={{
                textAlign: "left",
                marginLeft: "40%",
                color: "#29BDEF",
                marginBottom: "0rem",
              }}
            >
              Continue Reading
            </p>
          </div>
          <div className={text1 === 2 ? "caro-text" : "display-none"}>
            <h3
              style={{
                color: "white",
                lineHeight: 2,
                marginTop: "15px",
              }}
            >
              Create your{" "}
              <span style={{ color: "#29BDEF", fontWeight: 600 }}>W</span>
              orkspace
            </h3>
            <p
              style={{
                color: "#AEBACA",
                textAlign: "right",
                marginBottom: "0rem",
                lineHeight: 2,
              }}
            >
              Create a full costumizable workspace for your company, manage your
              team members, create events, have everything under control on just
              one place.
            </p>
            <p
              style={{
                textAlign: "left",
                marginLeft: "40%",
                color: "#29BDEF",
                marginBottom: "0rem",
              }}
            >
              Continue Reading
            </p>
          </div>
          <div className={text1 === 3 ? "caro-text" : "display-none"}>
            <h3
              style={{
                color: "white",
                lineHeight: 2,
                marginTop: "15px",
              }}
            >
              Create your{" "}
              <span style={{ color: "#29BDEF", fontWeight: 600 }}>W</span>
              orkspace
            </h3>
            <p
              style={{
                color: "#AEBACA",
                textAlign: "right",
                marginBottom: "0rem",
                lineHeight: 2,
              }}
            >
              Create a full costumizable workspace for your company, manage your
              team members, create events, have everything under control on just
              one place.
            </p>
            <p
              style={{
                textAlign: "left",
                marginLeft: "40%",
                color: "#29BDEF",
                marginBottom: "0rem",
              }}
            >
              Continue Reading
            </p>
          </div>
          <div className={text1 === 4 ? "caro-text" : "display-none"}>
            <h3
              style={{
                color: "white",
                lineHeight: 2,
                marginTop: "15px",
              }}
            >
              Create your{" "}
              <span style={{ color: "#29BDEF", fontWeight: 600 }}>W</span>
              orkspace
            </h3>
            <p
              style={{
                color: "#AEBACA",
                textAlign: "right",
                marginBottom: "0rem",
                lineHeight: 2,
              }}
            >
              Create a full costumizable workspace for your company, manage your
              team members, create events, have everything under control on just
              one place.
            </p>
            <p
              style={{
                textAlign: "left",
                marginLeft: "40%",
                color: "#29BDEF",
                marginBottom: "0rem",
              }}
            >
              Continue Reading
            </p>
          </div>
        </div>
      </div>
      <div className="scrollDown">
        {/* <ScrollButton
          behavior={"smooth"}
          buttonBackgroundColor={"red"}
          iconType={"arrow-down"}
          style={{ fontSize: "24px" }}
        /> */}

        {/* <ScrollButton /> */}
      </div>
    </>
  );
};

export default withRouter(Login);
