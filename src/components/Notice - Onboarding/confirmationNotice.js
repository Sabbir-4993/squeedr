import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import dots from "../../assets/dots.png";
import email from "../../assets/Path 417.png";
import { TiSocialTwitter } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import headingLogo from "../../assets/Group 1377.png";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import headerLogo from "../../assets/logInHeaderLogo.png";
import google from "../../assets/google.png";
import outlook from "../../assets/outlookLogin.png";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "./confirmationNotice.css";

const ConfirmationNotice = () => {
  return (
    <>
      <div className="contentWrapperNotice">
        <div className="mainContentNotice">
          <div className="headerNotice" style={{ alignItems: "center" }}>
            <div className="logoTextNotice">
              <h2 className="logoHeadingNotice">Squeedr</h2>
              <img
                className="headingLogoMobileNotice"
                style={{
                  marginLeft: "3%",
                }}
                src={headingLogo}
                alt=""
              />
            </div>
            <div className="mobileViewHamburger">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#29BDEF" }}
              >
                <CloseIcon className="mobileViewHamburgerIcon" />
              </Link>
            </div>
          </div>

          <div className="teamBtnContentNotice">
            <p className="textNotice">
              <ArrowCircleUpIcon
                style={{
                  color: "#c8c8c8",
                  fontSize: "medium",
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
          <div className="goBackDivNotice">
            <ArrowLeftIcon
              style={{
                color: "white",
                fontSize: "30px",
                marginLeft: "-10px",
              }}
            />
            <p className="goBackBtnTextNotice">Go Back</p>
          </div>
          <div className="infoContainingContainer">
            <div className="infoContainer">
              <div
                style={{
                  alignSelf: "center",
                }}
              >
                <img
                  className="emailMobileViewNotice"
                  style={{
                    width: "60px",
                    height: "41.72px",
                    alignSelf: "center",
                  }}
                  src={email}
                  alt=""
                />
              </div>
              <p
                className="firstHeadingMobileViewNotice"
                style={{
                  color: "white",
                  fontSize: "22px",
                  marginTop: "9%",
                  marginBottom: "0rem",
                }}
              >
                Time to check your email
              </p>
              <p className="forthLineMobileViewNotice">
                We have sent the details to
              </p>
              <p className="fivthLineMobileViewNotice">
                useremailaccount@gmail.com to verify your email
              </p>
              <p className="sixthLineMobileViewNotice">
                address. Shortly, you will be able to access Studio
              </p>
              <p className="seventhLineMobileViewNotice">
                Corps & Forme space on Squeedr.
              </p>
              <p className="eighthLineMobileViewNotice">
                (You can close this window now)
              </p>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "#29BDEF" }}
              >
                <p
                  className="ninthLineMobileViewNotice"
                  style={{ fontWeight: "700" }}
                >
                  TRY A DIFFERENT EMAIL
                </p>
              </Link>
              <p
                className="secondLineMobileViewNotice"
                style={{
                  color: "#AEBACA",
                  fontSize: "16px",
                  marginTop: "5%",
                  marginBottom: "0rem",
                }}
              >
                We have sent you a link
              </p>
              <p
                className="thirdLineMobileViewNotice"
                style={{
                  color: "#AEBACA",
                  fontSize: "16px",
                  marginTop: "2%",
                  marginBottom: "0rem",
                }}
              >
                to verify your identity and register.
              </p>
              <div className="infoContainerLogos">
                <div className="instagramIconDiv">
                  <AiOutlineInstagram
                    style={{
                      color: "#aebaca",
                    }}
                  />
                </div>
                <div className="facebookIconDiv">
                  <RiFacebookFill
                    style={{
                      color: "#aebaca",
                    }}
                  />
                </div>
                <div className="twitterIconDiv">
                  <TiSocialTwitter
                    style={{
                      color: "#aebaca",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="imageContainerNotice">
          <div className="opacityNotice" style={{ zIndex: "0" }}></div>
          <div
            className="footerContentNotice"
            style={{ position: "relative", top: "-231px" }}
          >
            <img
              style={{
                float: "right",
                marginTop: "-30px",
              }}
              src={dots}
              alt=""
            />
            <h3
              style={{
                marginLeft: "40%",
                textAlign: "right",
                color: "rgba(255,255,255,1)",
                marginTop: "2%",
                zIndex: 99999999,
              }}
            >
              Create your
              <span
                style={{
                  color: "#29BDEF",
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
              Create a full costumizable workspace for your company, manage your
              team members, create events, have everything under control on just
              one place.
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
    </>
  );
};

export default withRouter(ConfirmationNotice);
