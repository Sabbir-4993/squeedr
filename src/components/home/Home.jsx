import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

// icons
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { BsStar } from "react-icons/bs";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  setNavRoute,
  setViewinfo,
  setCalender,
  setCheckOut,
  setShop,
  setReceiveItemDrawer,
  setOpenMembership,
} from "../../Redux/HomeReducer";

// import components
import Events from "./components/events-component/Events";
import Appointments from "./components/appointments-component/Appointments";
import Spaces from "./components/spaces-component/Spaces";
import Shop from "./components/shop-component/Shop";
import ContactAccordion from "./components/contact-accordion/ContactAccordion";
import HomeFooter from "./components/home-footer/HomeFooter";
import ViewAllOffer from "./components/view-all-offer/ViewAllOffer";
import Search from "../../components/Calendar Pop Up - 3/search";
import Notifications from "../../components/Notifications/Notifications";
import PernetyAvailability from "./components/Pernety Availability/PernetyAvailability";
import PernetyPage from "./components/Pernety Page/PernetyPage";
import SearchComponent from "../Search Component/SearchComponent";

// mobile view components
import TopNavbar from "./Mobile View Components/Top Navbar/TopNavbar";
import HomeMobileView from "./Mobile View Components/Home Mobile View/HomeMobileView";
import FooterNavRouter from "./Mobile View Components/Footer Nav Router/FooterNavRouter";

// import style
import "./home.scss";

const Home = () => {
  const history = useHistory();

  // Redux
  const store = useSelector((state) => state);
  const nav = store.home.navCount;
  const dispatch = useDispatch();

  const [displaySearch, setDisplaySearch] = useState(false);
  const [displayNotifications, setDisplayNotifications] = useState(false);

  const [youAreAllow, setYouAreAllow] = useState(null);

  const handleNext = () => {
    dispatch(setNavRoute());
  };

  // Url Params
  const urlPernety = new URLSearchParams(history.location.search).get(
    "pernety"
  );
  const urlEvents = new URLSearchParams(history.location.search).get("events");
  const urlEventInfo = new URLSearchParams(history.location.search).get(
    "event-info"
  );
  const urlEventCal = new URLSearchParams(history.location.search).get(
    "event-calendar"
  );
  const urlcheckout = new URLSearchParams(history.location.search).get(
    "checkout"
  );

  // appointment
  const urlAppointments = new URLSearchParams(history.location.search).get(
    "appointments"
  );
  const urlAppointmentCal = new URLSearchParams(history.location.search).get(
    "appointment-calendar"
  );
  const urlAppointInfo = new URLSearchParams(history.location.search).get(
    "appointments-info"
  );

  // spaces
  const urlSpaces = new URLSearchParams(history.location.search).get("spaces");
  const urlSpacesInfo = new URLSearchParams(history.location.search).get(
    "spaces-info"
  );
  const urlSpacesCal = new URLSearchParams(history.location.search).get(
    "spaces-calendar"
  );

  // shop
  const urlShop = new URLSearchParams(history.location.search).get("shop");
  const urlShopInfo = new URLSearchParams(history.location.search).get(
    "shop-info"
  );
  const urlShopCal = new URLSearchParams(history.location.search).get(
    "shop-calendar"
  );
  const urlShopBuyItem = new URLSearchParams(history.location.search).get(
    "buy-item"
  );

  // body side 2
  const urlCompanyInfo = new URLSearchParams(history.location.search).get(
    "company-info"
  );
  const urlMembership = new URLSearchParams(history.location.search).get(
    "membership"
  );
  const urlRecentOffer = new URLSearchParams(history.location.search).get(
    "offers"
  );
  const urlProfile = new URLSearchParams(history.location.search).get(
    "profile"
  );

  useEffect(() => {
    setYouAreAllow(true);

    // pernety
    if (urlPernety === "true") {
      dispatch(setNavRoute(1));
    }

    // events
    else if (urlEvents === "true") {
      dispatch(setNavRoute(2));

      if (urlEventInfo === "true") {
        dispatch(setViewinfo(true));
        history.push("/dashboard?events=true&event-info=true");
      } else if (urlEventCal === "true") {
        dispatch(setCalender(true));
        history.push("/dashboard?events=true&event-calendar=true");
      }

      // event checkout
      else if (urlcheckout === "true") {
        dispatch(setCheckOut(true));
        history.push("/dashboard?events=true&checkout=true");
      }

      // Company info
      else if (urlCompanyInfo === "true") {
        history.push(`/dashboard?events=true&company-info=true`);
      }

      // membership
      else if (urlMembership === "true") {
        dispatch(setOpenMembership(true));
        history.push(`/dashboard?events=true&membership=true`);
      }

      // offer
      else if (urlRecentOffer === "true") {
        history.push(`/dashboard?events=true&offers=true`);
      }
    }

    // appointment
    else if (urlAppointments === "true") {
      dispatch(setNavRoute(3));

      // calendar
      if (urlAppointmentCal === "true") {
        dispatch(setCalender(true));
        history.push("/dashboard?appointments=true&appointment-calendar=true");
      }

      // info drawer
      else if (urlAppointInfo === "true") {
        history.push("/dashboard?appointments=true&appointments-info=true");
      }

      // appointment checkout
      else if (urlcheckout === "true") {
        dispatch(setCheckOut(true));
        history.push("/dashboard?appointments=true&checkout=true");
      }

      // Company info
      else if (urlCompanyInfo === "true") {
        history.push(`/dashboard?appointments=true&company-info=true`);
      }
      // membership
      else if (urlMembership === "true") {
        dispatch(setOpenMembership(true));
        history.push(`/dashboard?appointments=true&membership=true`);
      }
      // offer
      else if (urlRecentOffer === "true") {
        history.push(`/dashboard?appointments=true&offers=true`);
      }
    }

    // Spaces
    else if (urlSpaces === "true") {
      dispatch(setNavRoute(4));

      // calendar
      if (urlSpacesCal === "true") {
        dispatch(setCalender(true));
        history.push("/dashboard?spaces=true&spaces-calendar=true");
      }

      // spaces checkout
      else if (urlcheckout === "true") {
        dispatch(setCheckOut(true));
        history.push("/dashboard?spaces=true&checkout=true");
      }

      // spaces info
      if (urlSpacesInfo === "true") {
        history.push(`/dashboard?spaces=true&spaces-info=true`);
      }

      // Company info
      else if (urlCompanyInfo === "true") {
        history.push(`/dashboard?spaces=true&company-info=true`);
      }
      // membership
      else if (urlMembership === "true") {
        dispatch(setOpenMembership(true));
        history.push(`/dashboard?spaces=true&membership=true`);
      }
      // offer
      else if (urlRecentOffer === "true") {
        history.push(`/dashboard?spaces=true&offers=true`);
      }
    }

    // Shop
    else if (urlShop === "true") {
      dispatch(setNavRoute(5));

      // shop info
      if (urlShopInfo === "true") {
        dispatch(setShop(true));
        history.push("/dashboard?shop=true&shop-info=true");
      }

      // shop item
      else if (urlShopBuyItem === "true") {
        dispatch(setReceiveItemDrawer(true));
        history.push("/dashboard?shop=true&buy-item=true");
      }

      // shop-calendar
      else if (urlShopCal === "true") {
        dispatch(setCalender(true));
        history.push("/dashboard?shop=true&shop-calendar=true");
      }

      // shop checkout
      else if (urlcheckout === "true") {
        dispatch(setCheckOut(true));
        history.push("/dashboard?shop=true&checkout=true");
      }

      // Company info
      else if (urlCompanyInfo === "true") {
        history.push(`/dashboard?shop=true&company-info=true`);
      }

      // membership
      else if (urlMembership === "true") {
        dispatch(setOpenMembership(true));
        history.push(`/dashboard?shop=true&membership=true`);
      }

      // offer
      else if (urlRecentOffer === "true") {
        history.push(`/dashboard?shop=true&offers=true`);
      }

      //
    }

    // default dashboard
    else if (history.location.pathname === "/dashboard") {
      dispatch(setNavRoute(2));
      history.push(`dashboard?events=true`);
    }
  }, [history.location.search]);

  useEffect(() => {
    // pernety
    if (youAreAllow == true) {
      if (nav === 1) {
        history.push("/dashboard?pernety=true");
      }

      // event
      else if (nav === 2) {
        if (urlEventInfo === "true") {
          history.push("/dashboard?events=true&event-info=true");
        } else if (urlEventCal === "true") {
          history.push("/dashboard?events=true&event-calendar=true");
        } else if (urlcheckout === "true") {
          history.push("/dashboard?events=true&checkout=true");
        } else if (urlCompanyInfo === "true") {
          history.push(`/dashboard?events=true&company-info=true`);
        } else if (urlMembership === "true") {
          history.push(`/dashboard?events=true&membership=true`);
        } else if (urlRecentOffer === "true") {
          history.push(`/dashboard?events=true&offers=true`);
        } else {
          history.push("/dashboard?events=true");
        }
      }

      // appointment
      else if (nav === 3) {
        if (urlCompanyInfo === "true") {
          history.push(`/dashboard?appointments=true&company-info=true`);
        } else if (urlAppointmentCal === "true") {
          history.push(
            "/dashboard?appointments=true&appointments-calendar=true"
          );
        } else if (urlAppointInfo === "true") {
          history.push("/dashboard?appointments=true&appointments-info=true");
        } else if (urlcheckout === "true") {
          history.push("/dashboard?appointments=true&checkout=true");
        } else if (urlMembership === "true") {
          history.push(`/dashboard?appointments=true&membership=true`);
        } else if (urlRecentOffer === "true") {
          history.push(`/dashboard?appointments=true&offers=true`);
        } else {
          history.push("/dashboard?appointments=true");
        }
      }

      // spaces
      else if (nav === 4) {
        // spaces info

        if (urlSpacesInfo === "true") {
          // history.push(`/dashboard?spaces=true&spaces-info=true`);
        } else if (urlSpacesCal === "true") {
          history.push("/dashboard?spaces=true&spaces-calendar=true");
        } else if (urlcheckout === "true") {
          history.push("/dashboard?spaces=true&checkout=true");
        } else if (urlCompanyInfo === "true") {
          history.push(`/dashboard?spaces=true&company-info=true`);
        } else if (urlMembership === "true") {
          history.push(`/dashboard?spaces=true&membership=true`);
        } else if (urlRecentOffer === "true") {
          history.push(`/dashboard?spaces=true&offers=true`);
        } else {
          history.push("/dashboard?spaces=true");
        }
      }

      // shop
      else if (nav === 5) {
        // shop-info
        if (urlShopInfo === "true") {
          history.push("/dashboard?shop=true&shop-info=true");
        }

        // shop item
        else if (urlShopBuyItem === "true") {
          history.push("/dashboard?shop=true&buy-item=true");
        }

        // shop-calendar
        else if (urlShopCal === "true") {
          history.push("/dashboard?shop=true&shop-calendar=true");
        }

        // shop checkout
        else if (urlcheckout === "true") {
          history.push("/dashboard?shop=true&checkout=true");
        }

        // Company info
        else if (urlCompanyInfo === "true") {
          history.push(`/dashboard?shop=true&company-info=true`);
        }

        // membership
        else if (urlMembership === "true") {
          history.push(`/dashboard?shop=true&membership=true`);
        }

        // offers
        else if (urlRecentOffer === "true") {
          history.push(`/dashboard?shop=true&offers=true`);
        }

        // shop page
        else {
          history.push("/dashboard?shop=true");
        }
      }
    }
  }, [nav]);

  return (
    <>
      {/* Web View */}
      <div className="home-page">
        <div className="home-wrapper">
          <div className="home-navbar">
            <div className="Navlinks">
              <div
                className={nav === 2 ? "event event-active" : " event"}
                onClick={() => {
                  history.push("/dashboard?events=true");
                  dispatch(setNavRoute(2));
                }}
              >
                Events
              </div>

              <div
                className={
                  nav === 3 ? "appoint appoint-active mar" : "appoint mar"
                }
                onClick={() => {
                  history.push("/dashboard?appointments=true");
                  dispatch(setNavRoute(3));
                }}
              >
                Appointments
              </div>

              <div
                className={
                  nav === 4 ? "spaces spaces-active mar" : "spaces mar"
                }
                onClick={() => {
                  history.push("/dashboard?spaces=true");
                  dispatch(setNavRoute(4));
                }}
              >
                Spaces
              </div>

              <div
                className={nav === 5 ? "shop shop-active mar" : "shop mar"}
                onClick={() => {
                  history.push("/dashboard?shop=true");
                  dispatch(setNavRoute(5));
                }}
              >
                Shop
              </div>
            </div>

            <div
              className="icons-div"
              style={{ alignItems: "center", paddingRight: "15px" }}
            >
              <Link to="/dashboard?calendar=true">
                <BiCalendar
                  style={{
                    fontSize: "30px",
                    color: "#29bdef",
                  }}
                />
              </Link>

              <SearchComponent />

              <Notifications />
            </div>
          </div>

          <div className="home-body">
            <div className="body-side1">
              {urlPernety && nav === 1 ? (
                <PernetyPage />
              ) : urlEvents && nav === 2 ? (
                <Events />
              ) : urlAppointments && nav === 3 ? (
                <Appointments />
              ) : urlSpaces && nav === 4 ? (
                <Spaces />
              ) : urlShop && nav === 5 ? (
                <Shop />
              ) : (
                <></>
              )}
            </div>

            <div className="body-side2">
              <div className="arrow-div">
                <div className="extra"></div>

                <div className="dot-wrapper">
                  <div
                    className={nav === 1 ? "dot color-29BDEF" : "dot"}
                    style={{
                      display: store.home.openPernetyPage.open
                        ? "block"
                        : "none",
                    }}
                  ></div>
                  <div className={nav === 2 ? "dot color-29BDEF" : "dot"}></div>
                  <div className={nav === 3 ? "dot color-29BDEF" : "dot"}></div>
                  <div className={nav === 4 ? "dot color-29BDEF" : "dot"}></div>
                  <div className={nav === 5 ? "dot color-29BDEF" : "dot"}></div>
                </div>

                <div className="icon-wrapper" onClick={handleNext}>
                  <IoIosArrowForward size={20} />
                </div>
              </div>

              <div className="contact-div">
                <div
                  className={
                    store.home.openPernetyPage.open ? "" : "display-none"
                  }
                >
                  <PernetyAvailability />
                </div>

                <ContactAccordion />

                {/* View Membership */}
                <div
                  className={
                    store.home.openPernetyPage.open
                      ? "display-none"
                      : "view-memberships-component"
                  }
                >
                  <div
                    className="view-memberships-div"
                    onClick={() => {
                      history.push(
                        `/dashboard${history.location.search}&membership=true`
                      );
                      dispatch(setOpenMembership(true));
                    }}
                  >
                    View Memberships
                    <BsStar size={24} />
                  </div>
                </div>

                {/* View All Offer */}
                <ViewAllOffer />
              </div>
            </div>
          </div>

          <HomeFooter />
        </div>
      </div>

      {/* Mobile View */}
      <div className="mobile-home-page">
        <TopNavbar />
        <HomeMobileView />
        <FooterNavRouter />
      </div>
    </>
  );
};

export default Home;
