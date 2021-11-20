import React, { useState, useEffect } from "react";
import { Modal, Box } from "@mui/material/";
import { IoMdClose } from "react-icons/io";
import { makeStyles } from "@mui/styles";
import SearchSelect from "../search-select/SearchSelect";
import { BiLink } from "react-icons/bi";
import copy from "copy-to-clipboard";
import { useHistory } from "react-router-dom";

// image
import per from "../../../../assets/home-page/per.png";
import black from "../../../../assets/home-page/black.png";

// style
import "./viewAllOffer.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  width: "1100px",
  bgcolor: "#FFFFFF",
  // border: "2px solid #000",
  boxShadow: "-3px 3px 6px #0000001F",
  borderRadius: "10px",
  p: 3,

  "@media (max-width: 1200px)": {
    width: "90%",
  },

  "@media (max-width: 1000px)": {
    width: "750px",
  },

  "@media (max-width: 850px)": {
    width: "100%",
    height: "100%",
    borderRadius: "0px",
  },
};

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "1.5rem",

    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
  closeText: {
    font: "normal normal normal 20px/24px Lato",
    color: "#000000",
  },
  icon: {
    cursor: "pointer",
    color: "#868E96",
    marginRight: "5px",
  },
  loc: {
    marginTop: "5px",
    font: "normal normal normal 16px/23px Lato",
    color: "#868E96",
  },
  bodyWrapper: {
    height: "60vh",
    overflowY: "scroll",
    "@media (max-width: 850px)": {
      height: "100vh",
    },
  },
  body: {
    marginTop: "40px",
  },
  card: {
    display: "flex",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
  image: {
    width: "450px",
    height: "311px",

    "@media (max-width: 1000px)": {
      width: "100%",
    },
  },
  data: {
    padding: "10px 0px 0px 30px",
    "@media (max-width: 1000px)": {
      padding: "10px 0px 0px 0px",
    },
  },
  title: {
    font: "normal normal normal 20px/22px Lato",
    letterSpacing: "0.38px",
    color: "#000000",
  },
  subtitle: {
    marginTop: "10px",
    font: "normal normal normal 16px/20px Lato",
    color: "#596066",
    display: "flex",
    gap: "20px",
  },
  subtitle2: {
    display: "flex",
    gap: "10px",
    cursor: "pointer",
  },

  para: {
    marginTop: "20px",
    font: "normal normal normal 14px/30px Lato",
    color: "#868E96",
  },
  valid: {
    marginTop: "40px",
    font: "normal normal normal 14px/30px Lato",
    color: "#29BDEF",
    "@media (max-width: 1000px)": {
      marginTop: "20px",
    },
  },
  divider: {
    marginTop: "30px",
    background: "#868E96",
    width: "100%",
    height: "1px",
  },
});

const Card = () => {
  const classes = useStyles();
  const [show1, setshow1] = useState(true);

  const handleClick = () => {
    var node = document.getElementById("pass").textContent;
    copy(node);
    console.log("copy", copy());
    console.log("fsd", node);
    if (show1 == true) {
      setshow1(false);
    } else setshow1(true);
  };

  return (
    <>
      <div className={classes.body}>
        <div className={classes.card}>
          <img src={black} alt="" className={classes.image} />

          <div className={classes.data}>
            <div className={classes.title}>
              Studio Corps Pernety Installations (only weekends)
            </div>
            <div className={classes.subtitle}>
              <div id="pass"> 12vCVR33 </div>{" "}
              <span style={{ color: "#29BDEF" }}>-10%</span>
              <div className={classes.subtitle2} onClick={handleClick}>
                <span
                  style={{
                    visibility: show1 ? "visible" : "hidden",
                    color: "#29BDEF",
                    fontSize: "11px",
                  }}
                >
                  copy code
                </span>

                <span
                  style={{
                    display: show1 ? "none" : "block",
                    fontSize: "11px",
                  }}
                >
                  code copied!
                </span>
                <div className="copy-link">
                  <BiLink size={16} style={{ color: show1 ? "#29BDEF" : "" }} />
                </div>
              </div>
            </div>
            <div className={classes.para}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
              consequatur illum atque a provident mollitia nemo. Impedit
              deserunt, aliquam labore molestias reiciendis inventore numquam
              nobis dolor sint atque dolores nesciunt!
            </div>

            <div className={classes.valid}>Valid until 22/07/2021</div>
          </div>
        </div>
      </div>

      <div className={classes.divider}></div>
    </>
  );
};

const ViewAllOffer = () => {
  const history = useHistory();
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Url Params
  const urlRecentOffer = new URLSearchParams(history.location.search).get(
    "offers"
  );
  const urlEvents = new URLSearchParams(history.location.search).get("events");
  const urlAppointments = new URLSearchParams(history.location.search).get(
    "appointments"
  );
  const urlSpaces = new URLSearchParams(history.location.search).get("spaces");
  const urlShop = new URLSearchParams(history.location.search).get("shop");
  const urlPernety = new URLSearchParams(history.location.search).get(
    "pernety"
  );
  const onClose = () => {
    if (urlEvents === "true") {
      handleClose();
      history.push("/dashboard?events=true");
    } else if (urlAppointments === "true") {
      handleClose();
      history.push("/dashboard?appointments=true");
    } else if (urlSpaces === "true") {
      handleClose();
      history.push("/dashboard?spaces=true");
    } else if (urlShop === "true") {
      handleClose();
      history.push("/dashboard?shop=true");
    } else if (urlPernety === "true") {
      handleClose();
      history.push("/dashboard?pernety=true");
    }
  };

  useEffect(() => {
    if (urlRecentOffer === "true") {
      handleOpen();
    }
  }, []);
  return (
    <>
      <div className="view-member-component">
        <div className="view-member-carousel">
          <img src={black} alt="" />
        </div>
        <div
          className="view-member-footer"
          onClick={() => {
            history.push(`/dashboard${history.location.search}&offers=true`);
            handleOpen();
          }}
        >
          <span>View all offers</span>
          <img src={per} alt="" />
        </div>

        <Modal
          open={open}
          onClose={onClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className={classes.wrapper}>
              {/* header */}
              <div className={classes.header}>
                {/* leftside */}
                <div className={classes.side1}>
                  <div className={classes.closeText}>
                    <IoMdClose
                      className={classes.icon}
                      size={20}
                      onClick={onClose}
                    />
                    Studio Corps & Forme Offers:{" "}
                  </div>

                  <div className={classes.loc}>3 locations in total.</div>
                </div>
                {/* right side */}
                <div className={classes.side2}>
                  <SearchSelect />
                </div>
              </div>

              {/* body */}
              <div className={classes.bodyWrapper}>
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default ViewAllOffer;
