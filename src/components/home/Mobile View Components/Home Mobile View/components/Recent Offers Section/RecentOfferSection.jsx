import React from "react";

// icons
import { AiOutlinePercentage } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

// image
import img1 from "../../../../../../assets/mobileView/home/4.png";

// style
import "./recentOfferSection.scss";

const number = [
  {
    title: "Black Firfay",
  },
  {
    title: "Silver Expro",
  },

  {
    title: "Silver Expro",
  },
];

const RecentOfferSection = () => {
  return (
    <>
      <div className="recent-offer-section-compnent">
        <div className="recent-text-wrapper">
          <div className="left">
            <div className="text">Recent Offers</div>

            <div className="percent">
              <AiOutlinePercentage />
            </div>
          </div>

          <IoMdClose className="close" />
        </div>

        <div className="recent-offer-carousel">
          {number.map((data, index) => {
            return (
              <>
                <div className="offer-wrapper" key={index}>
                  <img src={img1} alt="" />

                  <div className="content">{data.title}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RecentOfferSection;
