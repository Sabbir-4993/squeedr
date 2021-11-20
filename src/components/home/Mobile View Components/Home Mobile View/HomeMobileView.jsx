import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// icons
import { AiOutlineBars, AiOutlineShopping } from "react-icons/ai";
import { FaRegClone } from "react-icons/fa";

// components
import HeadTitleLogo from "./components/Head Title Logo/HeadTitleLogo";
import SearchSection from "./components/Search Section/SearchSection";
import RecentOffersSection from "./components/Recent Offers Section/RecentOfferSection";
import ShopCard from "../../components/shop-component/components/shop-card/ShopCard";
import SpacesMobileCard from "./components/Home Body Section/Spaces Mobile Card/SpacesMobileCard";
import EventMobileCard from "./components/Home Body Section/Event Mobile Card/EventMobileCard";
import AppointementMobileCard from "./components/Home Body Section/Appointement Mobile Card/AppointementMobileCard";
// style
import "./home-mobile-view.scss";
import EventMobileCalendar from "./components/Home Body Section/Event Mobile Calendar/components/EventMobileCalendarCard";
//images
import eventLogo from "../../../../assets/iconEvent.png";
import eventLogo1 from "../../../../assets/Group 5681.png";
import event from "../../../../assets/mpeople1.png";
import event1 from "../../../../assets/mpeople2.png";

const Shop = () => {
  const number = [1, 2, 3, 4, 5, 6, 7];
  const data = {
    title: "Items available at",
    subTitle: "Studio Corps & Forme",
    viewInfo: true,
  };

  return (
    <>
      <HeadTitleLogo
        title={data.title}
        subTitle={data.subTitle}
        view={data.viewInfo}
      />

      <SearchSection btnName="Search Shop" dateTime={true} button={true} />

      <RecentOffersSection />

      <div className="shop-card-mobile-wrapper ">
        {number.map((data, index) => {
          return (
            <>
              <div className="shop-card">
                <ShopCard />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

const Space = () => {
  const data = { title: "Welcome back to", subTitle: "Studio Corps & Forme" };

  return (
    <>
      <HeadTitleLogo title={data.title} subTitle={data.subTitle} />

      <SearchSection btnName="Search Spaces" button={true} />

      <SpacesMobileCard />
    </>
  );
};

const Appointments = () => {
  const data = { title: "Welcome back to", subTitle: "Studio Corps & Forme" };

  return (
    <>
      <HeadTitleLogo title={data.title} subTitle={data.subTitle} />

      <SearchSection btnName="Search Appointments" />

      <AppointementMobileCard full={false} />
    </>
  );
};

const Events = () => {
  const data = { title: "Welcome back to", subTitle: "Studio Corps & Forme" };
  return (
    <>
      <HeadTitleLogo title={data.title} subTitle={data.subTitle} />

      <SearchSection btnName="Search Events" />

      <RecentOffersSection />

      <EventMobileCard full={true} />
    </>
  );
};

const HomeMobileView = () => {
  const history = useHistory();
  const [state, setState] = useState(1);

  // Url Params
  const urlPernety = new URLSearchParams(history.location.search).get(
    "pernety"
  );
  const urlEvents = new URLSearchParams(history.location.search).get("events");
  const urlAppointments = new URLSearchParams(history.location.search).get(
    "appointments"
  );
  const urlSpaces = new URLSearchParams(history.location.search).get("spaces");
  const urlShop = new URLSearchParams(history.location.search).get("shop");

  useEffect(() => {
    if (urlEvents === "true") {
      setState(1);
    } else if (urlAppointments === "true") {
      setState(2);
    } else if (urlSpaces === "true") {
      setState(3);
    } else if (urlShop === "true") {
      setState(4);
    }
  }, [history.location.search]);

  return (
    <>
      <div className="home-mobile-view">
        <div className="page-render">
          <div
            className={
              state === 1 ? "display-center- active" : "display-center-"
            }
            onClick={() => {
              history.push("/dashboard?events=true");
              setState(1);
            }}
          >
            {state === 1 ? (
              <img alt="" src={event} />
            ) : (
              <img alt="" src={event1} />
            )}{" "}
            Events
          </div>

          <div
            className={
              state === 2 ? "display-center- active" : "display-center-"
            }
            onClick={() => {
              history.push("/dashboard?appointments=true");

              setState(2);
            }}
          >
            {state === 2 ? (
              <img alt="" src={eventLogo} />
            ) : (
              <img alt="" src={eventLogo1} />
            )}{" "}
            Appointments
          </div>

          <div
            className={
              state === 3 ? "display-center- active" : "display-center-"
            }
            onClick={() => {
              history.push("/dashboard?spaces=true");

              setState(3);
            }}
          >
            <FaRegClone size={18} className="icon" />
            Spaces
          </div>

          <div
            className={
              state === 4 ? "display-center- active" : "display-center-"
            }
            onClick={() => {
              history.push("/dashboard?shop=true");

              setState(4);
            }}
          >
            <AiOutlineShopping size={18} className="icon" />
            Shop
          </div>
        </div>

        {state === 1 && urlEvents ? (
          <Events />
        ) : state === 2 && urlAppointments ? (
          <Appointments />
        ) : state === 3 && urlSpaces ? (
          <Space />
        ) : state === 4 && urlShop ? (
          <Shop />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default HomeMobileView;
