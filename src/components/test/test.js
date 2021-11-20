import React from "react";
import "./test.css";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import headingLogo from "../../assets/headingLogo.png";
import dots from "../../assets/dots.png";
import headerLogo from "../../assets/logInHeaderLogo.png";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import Radio from "@mui/material/Radio";
import Button from "@mui/material/Button";
import hurry from "../../assets/hurry.png";
import google from "../../assets/google.png";
import outlook from "../../assets/outlookLogin.png";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const drawerWidth = 250;

const Test = () => {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <div className="mainContainerSignup">
          <div className="mainContentDivSignup">
            <div className="headerSignup">
              <div className="headerLogoDivSignup">
                <img className="headerLogoSignup" src={headerLogo} alt="" />
              </div>
              <div className="textDivSignup">
                <p className="headingFirstSignup">Sign Up to </p>
                <p className="headingSecondSignup">Studio Corps & Forme</p>
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
                  <button className="goButtonSignup">GO</button>
                </div>
              </div>
              <div className="rememberForgotSignup">
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                      marginLeft: "5px",
                    }}
                  >
                    Already have an account?
                  </p>
                </div>
                <div className="forgotSignup">
                  <p
                    style={{
                      fontSize: "16px",
                    }}
                  >
                    Login for client
                  </p>
                </div>
              </div>
              <p
                style={{
                  color: "#29BDEF",
                  fontSize: "14px",
                  marginTop: "10px",
                }}
              >
                Terms & Conditions
              </p>
              <div className="borderDivSignup"></div>

              <div className="mainLogosSignup">
                <div className="googleDivSignup">
                  <img className="googleLogoSignup" src={google} alt="" />
                </div>
                <div className="outlookDivSignup">
                  <img className="outlookLogoSignup" src={outlook} alt="" />
                </div>
                <div className="facebookDivSignup">
                  {/* <img src={facebook} alt='' /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Test;
