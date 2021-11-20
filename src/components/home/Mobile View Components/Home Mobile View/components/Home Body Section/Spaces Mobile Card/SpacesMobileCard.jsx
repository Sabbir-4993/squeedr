import React from "react";
import { useHistory } from "react-router-dom";

// redux
import { useSelector, useDispatch } from "react-redux";
import { setSpacesMobileCardDrawer } from "../../../../../../../Redux/HomeReducer";

// image
import img1 from "../../../../../../../assets/mobileView/home/6.png";

// style
import "./spacesMobileCard.scss";

const SpacesMobileCard = () => {
  const history = useHistory();

  // redux
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const number = [1, 2, 3, 4];

  return (
    <>
      <div className="spaces-mobile-card">
        {number.map(() => {
          return (
            <>
              <div
                className="card-inner"
                onClick={() => {
                  history.push("/dashboard?spaces=true&spaces-info=true");
                  dispatch(setSpacesMobileCardDrawer(true));
                }}
              >
                <div className="image">
                  <img src={img1} alt="" />
                </div>

                <div className="content">
                  <div className="up">
                    {/* <div className="full">FULL</div>
                    <div className="time">14:30 hrs</div> */}
                  </div>

                  <div className="down">
                    <div className="title">
                      Crossfit at #Pernety (11 on waiting list)
                    </div>

                    <div className="price">
                      € 49.00 <span>(per hour)</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default SpacesMobileCard;
