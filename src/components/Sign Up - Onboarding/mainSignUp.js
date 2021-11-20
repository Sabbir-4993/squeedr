import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import dots from "../../assets/dots.png";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import headerLogo from "../../assets/logInHeaderLogo.png";
import google from "../../assets/Google-Button.png";
import outlook from "../../assets/Group 2883.png";
import headingLogo from "../../assets/headingLogo.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
import headingMobileLogo from "../../assets/mobileViewHeader.png";
import { CgEye } from "react-icons/cg";
import dotsMobile from "../../assets/Group 3331.png";
import { GrFacebookOption } from "react-icons/gr";
import ScrollButton from "../Forgot Password - Onboarding/ScrollButton";
import "./mainSignUp.css";
import "../test/test.css";

const SignUp = () => {
  const [show, setShow] = React.useState(false);
  const [text, setText] = useState(1);

  useEffect(() => {
    function myFunction() {
      if (text < 4) {
        setText(text + 1);
      } else {
        setText(1);
      }
    }

    setTimeout(myFunction, 3000);
  }, [text]);
  return (
    <>
      <div className="contentWrapperSignup">
        <div className="mainContentSignup">
          <div className="logoTextSignup">
            <div className="logoHeadingSignup">Squeedr</div>
            <img
              style={{
                marginLeft: "3%",
                marginTop: "2%",
              }}
              src={headingLogo}
              alt=""
            />
          </div>
          <div className="teamBtnContentSignup">
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

          {/* <a style={{ textDecoration: 'none' }} href='/'> */}
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/"
          >
            <div className="goBackDivSignup">
              <ArrowLeftIcon
                style={{
                  color: "white",
                  fontSize: "30px",
                }}
              />
              <p className="goBackBtnTextSignup">Go Back</p>
            </div>
          </Link>
          {/* </a> */}

          <Box className="boxSignUp" sx={{ display: "flex" }}>
            <CssBaseline />

            <div className="mainContainerSignup">
              <div className="mainContentDivSignup">
                <div className="headerSignup">
                  <div className="headerMobileViewSignUp">
                    <div className="headerHeadingIconMobileView">
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
                    <div className="headerLogInButtonButton">
                      <p className="headerMobileViewLogInButton">
                        <Link
                          to="/login"
                          style={{ textDecoration: "none", color: "#AEBACA" }}
                        >
                          LOG IN
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="header2ndHeadingMainDiv">
                    <div className="headerLogoDivSignup">
                      <img
                        className="headerLogoSignup"
                        src={headerLogo}
                        alt=""
                      />
                    </div>
                    <div className="textDivSignup">
                      <p className="headingFirstSignup">Sign Up to </p>
                      <p className="headingSecondSignup">
                        Studio Corps & Forme
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mainContent-Signup">
                  <div className="textFieldsSignup">
                    <div className="passwordDivSignup">
                      <input
                        type={`${show ? "text" : "password"}`}
                        className="passwordInputSignup"
                        placeholder="Enter Your Email Address"
                      />
                      <input
                        type={`${show ? "text" : "password"}`}
                        className="passwordInputSignupMobileView"
                        placeholder="Enter email"
                      />
                      {/* <img className='emialInputEyeSignUpMobileView' src={emailInputEye} alt='' /> */}
                      <CgEye
                        className="emialInputEyeSignUpMobileView"
                        onClick={() => {
                          setShow(!show);
                        }}
                      />
                      <button className="goButtonSignup">
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "white",
                          }}
                          to="/confirmationNotice"
                        >
                          GO
                        </Link>
                      </button>
                    </div>
                  </div>
                  <div className="rememberForgotSignup">
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <p
                        className="loginClientMobileViewSignUp"
                        style={{
                          fontSize: "16px",
                          marginLeft: "5px",
                          marginBottom: "0rem",
                        }}
                      >
                        Already have an account?
                      </p>
                    </div>
                    <div className="forgotSignup">
                      <p
                        className="loginClientMobileViewSignUp"
                        style={{
                          fontSize: "16px",
                          marginBottom: "0rem",
                        }}
                      >
                        <Link
                          to="/login"
                          style={{
                            textDecoration: "none",
                            color: "#aebaca",
                            fontWeight: 600,
                          }}
                        >
                          Login for client
                        </Link>
                      </p>
                    </div>
                  </div>

                  <p
                    className="termsMobileViewSignUp"
                    style={{
                      color: "#29BDEF",
                      fontSize: "14px",
                      marginTop: "10px",
                      marginBottom: "2rem",
                    }}
                  >
                    Terms & Conditions
                  </p>
                  <div className="borderDivSignup"></div>

                  <div className="continueWithMobileViewSignUp">
                    <p
                      style={{
                        marginBottom: "0rem",
                      }}
                    >
                      Continue With
                    </p>
                  </div>

                  <div className="mainLogosSignup">
                    <div className="googleDivSignup">
                      <img className="googleLogoSignup" src={google} alt="" />
                    </div>
                    <div className="outlookDivSignup">
                      <img className="outlookLogoSignup" src={outlook} alt="" />
                    </div>
                    <div className="facebookDivSignup">
                      <GrFacebookOption className="facebookIconSignp" />
                    </div>
                  </div>

                  <div className="termsSecondMobileViewSignUp">
                    <p>Terms & Conditions</p>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </div>
        <div className="imageContainerSignup">
          <div className="opacitySignUp"></div>
          <div className="footerContentSignUp">
            <div className="carousel101">
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
            </div>

            {/* t1 */}
            <div className={text === 1 ? "caro-text" : "display-none"}>
              <h3
                style={{
                  marginLeft: "40%",
                  textAlign: "right",
                  color: "white",
                  marginTop: "2%",
                }}
              >
                Create your
                <span
                  style={{
                    color: "#29BDEF",
                    paddingLeft: "5px",
                  }}
                >
                  W
                </span>
                orkspace
              </h3>
              <p
                style={{
                  marginLeft: "40.5%",
                  color: "#AEBACA",
                  textAlign: "right",
                  marginTop: "1%",
                  marginBottom: "0rem",
                }}
              >
                Create a full costumizable workspace for your company, manage
                your team members, create events, have everything under control
                on just one place.
              </p>
              <p
                style={{
                  textAlign: "right",
                  marginLeft: "40%",
                  color: "#29BDEF",
                  marginTop: "2%",
                  marginBottom: "0rem",
                }}
              >
                Continue Reading
              </p>
            </div>

            {/* t2 */}

            <div className={text === 2 ? "caro-text" : "display-none"}>
              <h3
                style={{
                  marginLeft: "40%",
                  textAlign: "right",
                  color: "white",
                  marginTop: "2%",
                }}
              >
                Create your
                <span
                  style={{
                    color: "#29BDEF",
                    paddingLeft: "5px",
                  }}
                >
                  W
                </span>
                orkspace
              </h3>
              <p
                style={{
                  marginLeft: "40.5%",
                  color: "#AEBACA",
                  textAlign: "right",
                  marginTop: "1%",
                  marginBottom: "0rem",
                }}
              >
                Create a full costumizable workspace for your company, manage
                your team members, create events, have everything under control
                on just one place.
              </p>
              <p
                style={{
                  textAlign: "right",
                  marginLeft: "40%",
                  color: "#29BDEF",
                  marginTop: "2%",
                  marginBottom: "0rem",
                }}
              >
                Continue Reading
              </p>
            </div>

            {/* t3 */}

            <div className={text === 3 ? "caro-text" : "display-none"}>
              <h3
                style={{
                  marginLeft: "40%",
                  textAlign: "right",
                  color: "white",
                  marginTop: "2%",
                }}
              >
                Create your
                <span
                  style={{
                    color: "#29BDEF",
                    paddingLeft: "5px",
                  }}
                >
                  W
                </span>
                orkspace
              </h3>
              <p
                style={{
                  marginLeft: "40.5%",
                  color: "#AEBACA",
                  textAlign: "right",
                  marginTop: "1%",
                  marginBottom: "0rem",
                }}
              >
                Create a full costumizable workspace for your company, manage
                your team members, create events, have everything under control
                on just one place.
              </p>
              <p
                style={{
                  textAlign: "right",
                  marginLeft: "40%",
                  color: "#29BDEF",
                  marginTop: "2%",
                  marginBottom: "0rem",
                }}
              >
                Continue Reading
              </p>
            </div>

            {/* t4 */}

            <div className={text === 4 ? "caro-text" : "display-none"}>
              <h3
                style={{
                  marginLeft: "40%",
                  textAlign: "right",
                  color: "white",
                  marginTop: "2%",
                }}
              >
                Create your
                <span
                  style={{
                    color: "#29BDEF",
                    paddingLeft: "5px",
                  }}
                >
                  W
                </span>
                orkspace
              </h3>
              <p
                style={{
                  marginLeft: "40.5%",
                  color: "#AEBACA",
                  textAlign: "right",
                  marginTop: "1%",
                  marginBottom: "0rem",
                }}
              >
                Create a full costumizable workspace for your company, manage
                your team members, create events, have everything under control
                on just one place.
              </p>
              <p
                style={{
                  textAlign: "right",
                  marginLeft: "40%",
                  color: "#29BDEF",
                  marginTop: "2%",
                  marginBottom: "0rem",
                }}
              >
                Continue Reading
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lastSection">
        <div className="lastSection">
          <div className="color"></div>
        </div>
      </div>
      <div className="footerContent">
        <div className="" style={{ paddingLeft: "30px", paddingRight: "15px" }}>
          <div className="carousel101">
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
          </div>
          <div className={text === 1 ? "caro-text" : "display-none"}>
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
          <div className={text === 2 ? "caro-text" : "display-none"}>
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
          <div className={text === 3 ? "caro-text" : "display-none"}>
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
          <div className={text === 4 ? "caro-text" : "display-none"}>
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
        <ScrollButton />
      </div>
    </>
  );
};

export default withRouter(SignUp);
