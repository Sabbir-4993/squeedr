import React, { useState } from "react";
import { Drawer } from "antd";
import { MdClose } from "react-icons/md";
import { useHistory } from "react-router-dom";

import Button from "@mui/material/Button";
import clock from "../../../../../assets/membership-drawer/clock.png";
import eventsLogo from "../../../../../assets/membership-drawer/cal111.png";
import ButtonFilter from "../../button-filter/ButtonFilter";
import { CgMenuGridO } from "react-icons/cg";
import ShowMoreText from "react-show-more-text";
import { FiCheck } from "react-icons/fi";
import { BiChevronsDown } from "react-icons/bi";
import TopNavbar from "../../../Mobile View Components/Top Navbar/TopNavbar";
import { useSelector, useDispatch } from "react-redux";
import {
  setMemberShipRightDrawer,
  setOpenMembership,
} from "../../../../../Redux/HomeReducer";

// style
import "./membershipRightDrawer.scss";

const item = [1, 2];

const MemberShipRightDrawer = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
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

  const history = useHistory();

  // Url Params
  const urlEvents = new URLSearchParams(history.location.search).get("events");
  const urlAppointments = new URLSearchParams(history.location.search).get(
    "appointments"
  );
  const urlSpaces = new URLSearchParams(history.location.search).get("spaces");
  const urlShop = new URLSearchParams(history.location.search).get("shop");

  const closeMembershipInfo = () => {
    if (urlEvents === "true") {
      history.push("/dashboard?events=true&membership=true");
    } else if (urlAppointments === "true") {
      history.push("/dashboard?appointments=true&membership=true");
    } else if (urlSpaces === "true") {
      history.push("/dashboard?spaces=true&membership=true");
    } else if (urlShop === "true") {
      history.push("/dashboard?shop=true&membership=true");
    }
    dispatch(setMemberShipRightDrawer(false));
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
        visible={store.home.openMemberShipRightDrawer}
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
                  onClick={closeMembershipInfo}
                />

                <div className="title">Anne Lorem's Membership Name</div>
              </div>

              {/* Thumbnail Image */}

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
                    <div className="main-btns-div">
                      <Button
                        className="present-button"
                        variant="outlined"
                        size="large"
                      >
                        Give as a Present
                      </Button>
                      <Button
                        className="purchase-button"
                        variant="contained"
                        size="large"
                      >
                        Purchase €
                      </Button>
                    </div>
                  </div>
                  <div className="backgrond-texture-div">
                    <div className="background-texture"></div>
                  </div>
                </div>
              </div>

              {/* Content Info  */}

              <div className="content-information-div">
                <div className="first-line">
                  <p className="heading-no-1">Rating</p>
                  <p className="ans-no-1">€ 49.00</p>
                </div>
                <div className="second-line">
                  <p className="heading-no-2">Waiting list</p>
                  <p className="ans-no-2">Top priority</p>
                </div>
                <div className="third-line">
                  <CgMenuGridO
                    style={{
                      fontSize: "larger",
                      color: "#aebaca",
                      marginLeft: "5px",
                    }}
                  />
                  <p className="heading-no-3">Passes</p>
                  <p className="ans-no-3">United (Full Access)</p>
                </div>
                <div className="forth-line">
                  <img className="clock-logo" src={clock} alt="" />
                  <p className="heading-no-4">Life span:</p>
                  <p className="ans-no-4">12 months</p>
                </div>
                <div className="fifth-line">
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <img className="events-logo" src={eventsLogo} alt="" />
                    <p className="heading-no-5">Events</p>
                  </div>

                  <div className="buttons-fifth-line">
                    <div className="buttons-first-line">
                      <ButtonFilter text={"Crossfit"} color={"#FD65A7"} />
                      <ButtonFilter
                        text={"Muscular Reinforcement"}
                        color={"#FDCF65"}
                      />
                    </div>
                    <div className="service-name-button">
                      <ButtonFilter text={"Service Name"} color={"#FD65FD"} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-text">
                {/* <p className='content-p' >
                                    Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la cænogenèse de l"être dont il est question dans la cause ambiguë entendue à Moÿ, dans un capharnaüm qui, pense-t-il, diminue çà et là la qualité den œuvre… . Dès Noël où un zéphyr haï me vêt de glaçons würmiens, je dîne d’exquis rôtis de bœuf au kir à l’aÿ d’âge mûr & cætera ! Fougueux, j"enivre la squaw au pack de beau zythum. Ketch, yawl, jonque flambant neuve… jugez des prix ! Voyez le brick géant que j"examine près du wharf. Portez ce vieux whisky au juge blond qui fume. Bâchez la queue du wagon-taxi avec les pyjamas du fakir. Voix ambiguë d"un cœur…
                                </p> */}
                <ShowMoreText
                  /* Default options */
                  lines={7}
                  more="Continue Reading"
                  less="Show less"
                  className="content-p"
                  anchorClass="my-anchor-css-class"
                  onClick={executeOnClick}
                  expanded={false}
                  width={430}
                  truncatedEndingComponent={"... "}
                >
                  Voyez ce jeu exquis wallon, de graphie en kit mais bref.
                  Portez ce vieux whisky au juge blond qui fume sur son île
                  intérieure, à côté de l"alcôve ovoïde, où les bûches se
                  consument dans l"âtre, ce qui lui permet de penser à la
                  cænogenèse de l"être dont il est question dans la cause
                  ambiguë entendue à Moÿ, dans un capharnaüm qui, pense-t-il,
                  diminue çà et là la qualité den œuvre… . Dès Noël où un zéphyr
                  haï me vêt de glaçons würmiens, je dîne d’exquis rôtis de bœuf
                  au kir à l’aÿ d’âge mûr & cætera ! Fougueux, j"enivre la squaw
                  au pack de beau zythum. Ketch, yawl, jonque flambant neuve…
                  jugez des prix ! Voyez le brick géant que j"examine près du
                  wharf. Portez ce vieux whisky au juge blond qui fume. Bâchez
                  la queue du wagon-taxi avec les pyjamas du fakir. Voix ambiguë
                  d"un cœur…
                </ShowMoreText>
              </div>

              <div className="other-benefits">
                <div className="other-benefits-title-div">
                  <p className="other-benefits-text">Other Benefits</p>
                </div>
                <div className="other-benefits-main-content">
                  <div className="first-line-others">
                    <div className="first-line-others-logo-div">
                      <FiCheck className="check-logo-first-line" />
                    </div>
                    <div className="first-line-others-text-div">
                      <p className="first-line-text">
                        Voyez ce jeu exquis wallon, de graphie en kit mais bref.
                      </p>
                    </div>
                  </div>
                  <div className="first-line-others">
                    <div className="first-line-others-logo-div">
                      <FiCheck className="check-logo-first-line" />
                    </div>
                    <div className="first-line-others-text-div">
                      <p className="first-line-text">
                        Voyez ce jeu exquis wallon, de graphie en kit mais bref.
                      </p>
                    </div>
                  </div>
                  <div className="first-line-others">
                    <div className="first-line-others-logo-div">
                      <FiCheck className="check-logo-first-line" />
                    </div>
                    <div className="first-line-others-text-div">
                      <p className="first-line-text">
                        Voyez ce jeu exquis wallon, de graphie en kit mais bref.
                      </p>
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
        visible={store.home.openMemberShipRightDrawer}
        className="membership-mobile-123"
      >
        <TopNavbar />
        <div className="membership-right-drawer-mobile">
          {/* Close Drawer */}
          <div className="close-btn" onClick={onClose}>
            <BiChevronsDown
              size={40}
              onClick={() => {
                dispatch(setMemberShipRightDrawer(false));
                dispatch(setOpenMembership(true));
              }}
            />
          </div>

          <div className="wrapper">
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
                  <div className="main-btns-div">
                    <Button
                      className="present-button"
                      variant="outlined"
                      size="large"
                    >
                      Give as a Present
                    </Button>
                    <Button
                      className="purchase-button"
                      variant="contained"
                      size="large"
                    >
                      Purchase €
                    </Button>
                  </div>
                </div>
                <div className="backgrond-texture-div">
                  <div className="background-texture"></div>
                </div>
              </div>
            </div>

            {/* Content Info  */}

            <div className="content-information-div">
              <div className="first-line">
                <p className="heading-no-1">Rating</p>
                <p className="ans-no-1">€ 49.00</p>
              </div>
              <div className="second-line">
                <p className="heading-no-2">Waiting list</p>
                <p className="ans-no-2">Top priority</p>
              </div>
              <div className="third-line">
                <CgMenuGridO
                  style={{
                    color: "#aebaca",
                    marginLeft: "-2px",
                  }}
                />
                <p className="heading-no-3">Passes</p>
                <p className="ans-no-3">United (Full Access)</p>
              </div>
              <div className="forth-line">
                <img className="clock-logo" src={clock} alt="" />
                <p className="heading-no-4">Life span:</p>
                <p className="ans-no-4">12 months</p>
              </div>
              <div className="fifth-line">
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <img className="events-logo" src={eventsLogo} alt="" />
                  <p className="heading-no-5">Events</p>
                </div>

                <div className="buttons-fifth-line">
                  <div className="buttons-first-line">
                    <ButtonFilter
                      font={"normal normal normal 10px/12px Lato"}
                      text={"Crossfit"}
                      color={"#FD65A7"}
                    />
                    <ButtonFilter
                      font={"normal normal normal 10px/12px Lato"}
                      text={"Muscular Reinforcement"}
                      color={"#FDCF65"}
                    />
                  </div>
                  <div className="service-name-button">
                    <ButtonFilter
                      font={"normal normal normal 10px/12px Lato"}
                      text={"Service Name"}
                      color={"#FD65FD"}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="content-text">
              {/* <p className='content-p' >
                                    Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la cænogenèse de l"être dont il est question dans la cause ambiguë entendue à Moÿ, dans un capharnaüm qui, pense-t-il, diminue çà et là la qualité den œuvre… . Dès Noël où un zéphyr haï me vêt de glaçons würmiens, je dîne d’exquis rôtis de bœuf au kir à l’aÿ d’âge mûr & cætera ! Fougueux, j"enivre la squaw au pack de beau zythum. Ketch, yawl, jonque flambant neuve… jugez des prix ! Voyez le brick géant que j"examine près du wharf. Portez ce vieux whisky au juge blond qui fume. Bâchez la queue du wagon-taxi avec les pyjamas du fakir. Voix ambiguë d"un cœur…
                                </p> */}
              <ShowMoreText
                /* Default options */
                lines={7}
                more="Continue Reading"
                less="Show less"
                className="content-p"
                anchorClass="my-anchor-css-class"
                onClick={executeOnClick}
                expanded={false}
                width={430}
                truncatedEndingComponent={"... "}
              >
                Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez
                ce vieux whisky au juge blond qui fume sur son île intérieure, à
                côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre,
                ce qui lui permet de penser à la cænogenèse de l"être dont il
                est question dans la cause ambiguë entendue à Moÿ, dans un
                capharnaüm qui, pense-t-il, diminue çà et là la qualité den
                œuvre… . Dès Noël où un zéphyr haï me vêt de glaçons würmiens,
                je dîne d’exquis rôtis de bœuf au kir à l’aÿ d’âge mûr & cætera
                ! Fougueux, j"enivre la squaw au pack de beau zythum. Ketch,
                yawl, jonque flambant neuve… jugez des prix ! Voyez le brick
                géant que j"examine près du wharf. Portez ce vieux whisky au
                juge blond qui fume. Bâchez la queue du wagon-taxi avec les
                pyjamas du fakir. Voix ambiguë d"un cœur…
              </ShowMoreText>
            </div>

            <div className="other-benefits">
              <div className="other-benefits-title-div">
                <p className="other-benefits-text">Other Benefits</p>
              </div>
              <div className="other-benefits-main-content">
                <div className="first-line-others">
                  <div className="first-line-others-logo-div">
                    <FiCheck className="check-logo-first-line" />
                  </div>
                  <div className="first-line-others-text-div">
                    <p className="first-line-text">
                      Voyez ce jeu exquis wallon, de graphie en kit mais bref.
                    </p>
                  </div>
                </div>
                <div className="first-line-others">
                  <div className="first-line-others-logo-div">
                    <FiCheck className="check-logo-first-line" />
                  </div>
                  <div className="first-line-others-text-div">
                    <p className="first-line-text">
                      Voyez ce jeu exquis wallon, de graphie en kit mais bref.
                    </p>
                  </div>
                </div>
                <div className="first-line-others">
                  <div className="first-line-others-logo-div">
                    <FiCheck className="check-logo-first-line" />
                  </div>
                  <div className="first-line-others-text-div">
                    <p className="first-line-text">
                      Voyez ce jeu exquis wallon, de graphie en kit mais bref.
                    </p>
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

export default MemberShipRightDrawer;
