import React from "react";
import { useHistory } from "react-router-dom";

// icons & UI
import { Modal, Box } from "@mui/material/";
import { makeStyles } from "@mui/styles";
import { IoMdClose } from "react-icons/io";
import { AiOutlinePoundCircle } from "react-icons/ai";

// component
import SearchSelect from "../search-select/SearchSelect";
import ViewMemberCard from "./ViewMemberCard";
import TopNavbar from "../../Mobile View Components/Top Navbar/TopNavbar";
import FooterNavRouter from "../../Mobile View Components/Footer Nav Router/FooterNavRouter";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  setOpenMembership,
  setMemberShipRightDrawer,
  setMemberShipRightDrawer2,
} from "../../../../Redux/HomeReducer";

// image
import img4 from "../../../../assets/home-page/view-member-img-4.png";
import img1 from "../../../../assets/home-page/view-member-comp.png";
import img2 from "../../../../assets/home-page/view-member-img-2.png";
import dots1 from "../../../../assets/squeed images/dots1.png";

// style
import "./viewMemberships.scss";

const number = [1, 2, 3, 4];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1100px",
  bgcolor: "#FFFFFF",
  boxShadow: "-3px 3px 6px #0000001F",
  borderRadius: "10px",
  p: 3,

  "@media (max-width: 1200px)": {
    width: "700px",
  },

  "@media (max-width: 850px)": {
    borderRadius: "0px",
    width: "100%",
    height: "100%",
    p: 0,
  },
};

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",

    "@media (max-width: 850px)": {
      display: "none",
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "1.5rem",
    "@media (max-width: 1200px)": {
      flexDirection: "column",
    },
  },
  side2: {
    display: "flex",
    justifyContent: "flex-end",
    "@media (max-width: 1200px)": {
      marginTop: "10px",
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
});

const active = [1];
const member = [1, 2, 3, 4, 5];

const ViewMemberships = () => {
  const history = useHistory();
  const classes = useStyles();

  // Redux
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  // Url Params
  const urlEvents = new URLSearchParams(history.location.search).get("events");
  const urlAppointments = new URLSearchParams(history.location.search).get(
    "appointments"
  );
  const urlSpaces = new URLSearchParams(history.location.search).get("spaces");
  const urlShop = new URLSearchParams(history.location.search).get("shop");

  const onClose = () => {
    if (urlEvents === "true") {
      dispatch(setOpenMembership(false));
      history.push("/dashboard?events=true");
    } else if (urlAppointments === "true") {
      dispatch(setOpenMembership(false));
      history.push("/dashboard?appointments=true");
    } else if (urlSpaces === "true") {
      dispatch(setOpenMembership(false));
      history.push("/dashboard?spaces=true");
    } else if (urlShop === "true") {
      dispatch(setOpenMembership(false));
      history.push("/dashboard?shop=true");
    }
  };

  return (
    <>
      <Modal
        open={store.home.openMemberShip}
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
            <div className="view-memberships-modal-body">
              <div className="card-div-wrapper">
                {active.map((data, index) => {
                  return (
                    <>
                      <ViewMemberCard active={true} />
                    </>
                  );
                })}

                {member.map((data, index) => {
                  return (
                    <>
                      <ViewMemberCard active={false} />
                    </>
                  );
                })}
              </div>

              <div className="divider"></div>

              <div className="work">
                <div className="title">How does it Works?</div>

                <div className="subtitle">
                  Select a Studio Corps & Forme location to book events, or tap
                  on any name to see it directly.
                </div>

                <div className="video-div">
                  <div className="video"></div>

                  <div className="content">
                    <div className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione ipsum dicta delectus praesentium quod aspernatur
                      culpa et. Corrupti inventore, repudiandae amet cupiditate
                      dolorum, officia distinctio delectus ullam molestias
                      placeat itaque.
                    </div>

                    <div className="read-more">Read more</div>

                    <div className="offer">How do offers work?</div>

                    <div className="coupons">
                      How do coupons and passes work?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="mobile-view-memberships-component">
            <TopNavbar />

            <div className="membership-title">Memberships</div>

            <div className="divider"></div>

            {/* Active Member */}
            <div className="active-card">
              <div className="personal-text">
                Your personal plans{" "}
                <span>
                  [this section only appears when a client has already bought a
                  plan]
                </span>
              </div>

              <div className="active-card-wrapper">
                <div
                  className="div-view-3"
                  onClick={() => {
                    dispatch(setMemberShipRightDrawer2(true));
                    dispatch(setOpenMembership(false));
                  }}
                >
                  <div className="top">
                    <div className="title">Anne Lorem Ipsun</div>
                    <div className="subtitle">Membership Name</div>
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

                  <div className="qr-image">
                    <img src={img4} alt="" />
                    <img src={dots1} alt="" />
                  </div>
                </div>

                <div className="chech-wrapper">
                  <div className="check-div">
                    <div className="dot"></div>
                  </div>

                  <div className="text">Use as Predetermined</div>
                </div>

                <div className="card-text-div">
                  <div className="para">
                    Voyez ce jeu exquis wallon, de graphie en kit mais bref.
                    Portez ce vieux whisky au juge blond qui fume sur son île
                  </div>

                  <div className="read">Continue Reading</div>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            {/* Company Information */}

            <div className="company-information-text">Company information</div>

            <div className="card-wrapper-main">
              {number.map(() => {
                return (
                  <>
                    <div
                      className="card-wrapper"
                      onClick={() => {
                        dispatch(setMemberShipRightDrawer(true));
                        dispatch(setOpenMembership(false));
                      }}
                    >
                      <div className="card-inner">
                        {/* Side 1  */}
                        <div className="text-side">
                          <div className="title">Membership's Name Here</div>

                          <div className="subtitle">Studio Corps & Forme</div>

                          <img src={img1} alt="" className="image-icon" />
                        </div>

                        {/* Side 2 */}
                        <div className="image-div">
                          <img src={img2} alt="" />
                        </div>
                      </div>

                      <div className="price">
                        <AiOutlinePoundCircle className="icon" />
                        199.00
                      </div>

                      <div className="card-text-div">
                        <div className="para">
                          Voyez ce jeu exquis wallon, de graphie en kit mais
                          bref. Portez ce vieux whisky au juge blond qui fume
                          sur son île
                        </div>

                        <div className="read">Continue Reading</div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            <div className="divider"></div>

            <div className="video-div">
              <div className="video"></div>

              <div className="content">
                <div className="title">
                  How does the membership system works?
                </div>

                <div className="para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione ipsum dicta delectus praesentium quod aspernatur culpa
                  et. Corrupti inventore, repudiandae amet cupiditate dolorum,
                  officia distinctio delectus ullam molestias placeat itaque.
                </div>

                <div className="read-more">Read more</div>

                <div className="offer">How do offers work?</div>

                <div className="coupons">How do coupons and passes work?</div>
              </div>
            </div>

            <FooterNavRouter />
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ViewMemberships;
