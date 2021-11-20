import React, {useRef, useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import drawerToolbarHeader from "../../assets/mobileViewHeader.png";
import { BiPlus } from "react-icons/bi";
import TimezoneSelect from "react-timezone-select";
import { BsEye } from "react-icons/bs";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import "./emptyForm.css";
import Dropzone from "react-dropzone-uploader";
import { Delete } from "@material-ui/icons";

const drawerWidth = 300;

const EmptyForm = () => {
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
 
  const [img, setimage] = useState(null);
  const [pic, setpic] = useState(false);

  const imguploader = useRef(null);

  const handleChange1 = (event) => {
    const i = URL.createObjectURL(event.target.files[0]);
    setimage(i);
    setpic(true);
    console.log("agh", img);
  };
  const uploadImg = (event) => {
    imguploader.current.click();
  };
  const drawer = () => (
    <div>
      <Toolbar className="drawerHeaderForm">
        <img
          className="drawerHeaderLogoForm"
          src={drawerToolbarHeader}
          alt=""
        />
      </Toolbar>

      <div className="drawerForm"></div>
    </div>
  );
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("xs"));

  //img uploader


  const handleChangeStatus = ({ meta }, status) => {
    console.log(status, meta);
  };

  // const handleSubmit = (files, allFiles) => {
  //   console.log(files.map((f) => f.meta));
  //   allFiles.forEach((f) => f.remove());
  // };
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          className="mainDrawerFormMobileView"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          <Drawer
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
        <div className="mainComponentForm">
          <div className="headerDialogFormMobileView">
            <img
              className="headerDialogIconFormMobileView"
              src={drawerToolbarHeader}
              alt=""
            />
          </div>
          <Grid
            container
            xs={12}
            className="wrapper"
            style={{ justifyContent: "center" }}
          >
            <Grid
              item
              lg={8}
              xs={11}
              className="formDialog"
              style={{ justifyContent: "center" }}
            >
              <Grid container xs={11}>
                <Grid item xs={12} className="headingDialogForm">
                  <p
                    className="headingdialogPMobileView"
                    style={{
                      fontSize: "22px",
                      marginBottom: "0rem",
                      fontWeight: "bold",
                    }}
                  >
                    Fill up your Personal Information
                  </p>
                </Grid>
                <Grid container xs={12} className="firstLineForm">
                  <Grid
                    item
                    lg={2}
                    xs={12}
                    style={{
                      alignSelf: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      className="dropImageForm"
                      style={{ cursor: "pointer" }}
                      style={{ display: pic ? "none" : "flex" }}
                    >
                     <input
              type="file"
              ref={imguploader}
              accept="image/png , image/jpeg"
              id="forimg"
              style={{ display: "none" }}
              onChange={handleChange1}
            />
            <label>
              {" "}
              <div className="uploadimage">
                Drop
                <BiPlus
                  onClick={uploadImg}
                  style={{ font: "normal normal normal 26px/20px Lato" }}
                />
              </div>
            </label>
          </div>
          <div
            className="imagecircle1"
            style={{ display: pic ? "block" : "none" }}
          >
            <img alt="img" src={img} className="profileimg01" />
            <div class="deleteprofile01">
              <Delete
                style={{ color: "#AEBACA ", fontSize: "26px" }}
                onClick={() => setpic(false)}
              />
            </div>
          </div>
                    
                  </Grid>
                  <Grid container lg={10} xs={12} spacing={xs ? 0 : 2}>
                    <Grid item lg={6} xs={12} className="firstNameDivForm">
                      <div>
                        <p
                          className="firstNameDivPMobileView"
                          style={{
                            marginBottom: ".5rem",
                            fontSize: "15px",
                            color: "#868E96",
                          }}
                        >
                          First Name *
                        </p>
                      </div>
                      <div
                        style={{
                          width: "100%",
                        }}
                      >
                        <input
                          className="firstNameInputForm"
                          palceholder="none"
                        />
                      </div>
                    </Grid>
                    <Grid item lg={6} xs={12} className="LastNameDivForm">
                      <div>
                        <p
                          className="lastNameDivPMobileView"
                          style={{
                            marginBottom: ".5rem",
                            fontSize: "15px",
                            color: "#868E96",
                          }}
                        >
                          Last Name *
                        </p>
                      </div>
                      <div
                        style={{
                          width: "100%",
                        }}
                      >
                        <input
                          className="lastNameInputForm"
                          palceholder="none"
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} className="secondLineForm">
                  <div
                    style={{
                      width: "100%",
                      marginTop: "20px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <p
                        className="emailPMobileView"
                        style={{
                          marginBottom: ".5rem",
                          fontSize: "15px",
                          color: "#868E96",
                        }}
                      >
                        Email *
                      </p>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        jusitfyContent: "center",
                      }}
                    >
                      <input className="emailInputForm" palceholder="none" />
                    </div>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  className="thirdLineForm"
                  style={{ marginTop: "20px" }}
                >
                  <div
                    style={{
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <p
                        className="passwordPMobileViewForm"
                        style={{
                          marginBottom: ".5rem",
                          fontSize: "15px",
                          color: "#868E96",
                        }}
                      >
                        Password *
                      </p>
                    </div>
                    <div className="passwordInputForm">
                      <input
                        type={`${showPassword ? "text" : "password"}`}
                        className="passwordMainInputForm"
                        palceholder="none"
                      />
                      <BsEye
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                        className="eyePasswordMobileViewForm"
                        style={{
                          fontSize: "30px",
                          color: "#AEBACA",
                          marginRight: "10px",
                          marginBotton: "0rem",
                          marginTop: "2px",
                        }}
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} className="fourthLineForm">
                  <div
                    style={{
                      width: "100%",
                      marginTop: "20px",
                    }}
                  >
                    <div>
                      <p
                        className="confirmPasswordPMobileView"
                        style={{
                          marginBottom: ".5rem",
                          fontSize: "15px",
                          color: "#868E96",
                        }}
                      >
                        Confirm Password *
                      </p>
                    </div>
                    <div className="passwordInputForm">
                      <input
                        type={`${showConfirmPassword ? "text" : "password"}`}
                        className="passwordMainInputForm"
                        palceholder="none"
                      />
                      <BsEye
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setShowConfirmPassword(!showConfirmPassword);
                        }}
                        className="eyePasswordMobileViewForm"
                        style={{
                          fontSize: "30px",
                          color: "#AEBACA",
                          marginRight: "10px",
                          marginBotton: "0rem",
                          marginTop: "2px",
                        }}
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} className="fifthLineForm">
                  <div
                    style={{
                      width: "100%",
                      marginTop: "20px",
                    }}
                  >
                    <div>
                      <p
                        className="selectContryPMobileView"
                        style={{
                          marginBottom: "0rem",
                          fontSize: "15px",
                          color: "#868E96",
                          //   marginLeft: "10px",
                        }}
                      >
                        Select Your Country (timezone)
                      </p>
                    </div>
                    <div className="timezone--wrapper">
                      <TimezoneSelect
                        style={{ backgroundColor: "white" }}
                        className="timeSelectForm"
                        value={selectedTimezone}
                        onChange={setSelectedTimezone}
                      />
                    </div>
                  </div>
                </Grid>
                <Grid
                  container
                  xs={12}
                  spacing={xs ? 0 : 2}
                  className="sixthLineForm"
                  style={{ marginTop: "20px" }}
                >
                  <Grid item lg={6} xs={12} className="contactPhoneDivForm">
                    <div>
                      <p
                        className="firstNameDivPMobileView"
                        style={{
                          marginBottom: ".5rem",
                          fontSize: "15px",
                          color: "#868E96",
                        }}
                      >
                        Contact Phone
                      </p>
                    </div>
                    <div>
                      <input
                        className="contactPhoneInputForm"
                        palceholder="none"
                      />
                    </div>
                  </Grid>
                  <Grid item lg={6} xs={12} className="contactPhone2DivForm">
                    <div>
                      <p
                        className="lastNameDivPMobileView"
                        style={{
                          marginBottom: ".5rem",
                          fontSize: "15px",
                          color: "#868E96",
                        }}
                      >
                        Contact Phone 2
                      </p>
                    </div>
                    <div>
                      <input
                        className="contactPhone2InputForm"
                        palceholder="none"
                      />
                    </div>
                  </Grid>
                </Grid>
                <Grid item xs={12} style={{ textAlign: "center" }}>
                  <Button
                    className="displayNoneMobileView"
                    style={{
                      backgroundColor: "#29bdef",
                      color: "white",
                      width: "300px",
                      height: "50px",
                      marginTop: "25px",
                      borderRadius: "10px",
                    }}
                    variant="contained"
                  >
                    Save and Continue
                  </Button>
                </Grid>
                <Grid item xs={12} align="center" style={{ marginTop: "15px" }}>
                  <p
                    className="displayNoneMobileView"
                    style={{
                      color: "#aebaca",
                      fontSize: "13px",
                    }}
                  >
                    By continuing,you are agreeing to our
                    <span
                      style={{
                        color: "#29BDEF",
                        fontWeight: "bold",
                      }}
                    >
                      {" Terms and Conditions"}
                    </span>
                  </p>
                </Grid>
                <Grid item xs={12} align="center">
                  <Button
                    className="saveButtonMobileView"
                    style={{
                      backgroundColor: "#29bdef",
                      color: "white",
                      width: "300px",
                      height: "50px",
                      marginTop: "25px",
                    }}
                    variant="contained"
                  >
                    Save and Continue
                  </Button>
                  <p
                    className="termsFormMobileView"
                    style={{
                      marginTop: "5px",
                    }}
                  >
                    By continuing,you are agreeing to our
                    <span
                      style={{
                        color: "#29BDEF",
                        fontWeight: "bold",
                      }}
                    >
                      {" Terms and Conditions"}
                    </span>
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
};

export default EmptyForm;
