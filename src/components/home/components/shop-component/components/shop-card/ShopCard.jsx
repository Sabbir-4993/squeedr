import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import { useHistory } from "react-router-dom";

// icons
import { AiFillHeart, AiOutlineInfoCircle } from "react-icons/ai";

// redux
import { setShop } from "../../../../../../Redux/HomeReducer";
import { useDispatch } from "react-redux";

// import images
import shop from "../../../../../../assets/home-page/shop.png";

const ShopCard = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const image = [
    {
      original: shop,
    },
    {
      original: shop,
    },
    {
      original: shop,
    },
  ];

  return (
    <>
      <div className="shop-card-inner-new">
        <div
          className="shop-card-image"
          onClick={() => {
            history.push("/dashboard?shop=true&shop-info=true");
            dispatch(setShop(true));
          }}
        >
          <div className="carousel-image">
            <ImageGallery
              items={image}
              infinite={true}
              showThumbnails={false}
              autoPlay={true}
              showFullscreenButton={false}
              showPlayButton={false}
              showNav={false}
              showBullets={true}
            />
          </div>

          <AiFillHeart className="icon" />
          <AiOutlineInfoCircle className="icon2" />
        </div>

        <div className="shop-card-content-new">
          <div className="left">
            <div className="title">
              Yoga Mat <span>(#Pernety)</span>
            </div>

            <div className="para">SALE</div>
          </div>

          <div className="right">
            <div className="price">€19.00 /hour</div>
            <div className="time">€ 49.00+vat</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopCard;
