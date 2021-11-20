import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";

// import style
import "./homefooter.scss";

const HomeFooter = () => {
  return (
    <>
      <div className="home-footer">
        <div className="divider"></div>

        <div className="data ">
          <div className="contact ">
            <div className="title">Contact Info</div>

            <div className="subittle">
              <span className="contact-h4">Address</span>
              <span>
                Street Name 12, District/área
                <br /> #3423 City, Country
              </span>
            </div>

            <div className="subittle">
              <span className="contact-h4">Email</span>
              <span>studiocorpsetforme@gmail.com</span>
            </div>

            <div className="subittle">
              <span className="contact-h4">Cellphone</span>
              <span>+330783905438</span>
            </div>
          </div>

          <div className="web ">
            <div className="title">Web</div>
            <div className="address">www.studiocorpsandforme.com</div>

            <div className="link">
              <RiFacebookCircleLine className="icon" size={22} />
              <span>facebook.com/studiocorpsetforme</span>
            </div>

            <div className="link">
              <TiSocialLinkedinCircular className="icon" size={24} />
              <span>Linkedin.com/studiocorpsetforme</span>
            </div>

            <div className="link">
              <TiSocialTwitterCircular className="icon" size={24} />
              <span>@studiocorpsetforme</span>
            </div>
          </div>

          <div className="item ">
            <div className="title">Items</div>

            <ul>
              <li>#Pernety ítem list </li>
              <li>#Parodi ítem list </li>
              <li>#Plaza ítem list</li>
            </ul>
          </div>

          <div className="pay ">
            <div className="title">Payment Method</div>
            <div className="text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
              distinctio laboriosam adipisci
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFooter;
