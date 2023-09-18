import React from "react";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { TbDimensions } from "react-icons/tb";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
const PropertyCard = (props) => {
  var [isLiked, setLiked] = React.useState(false);
  return (
    <div className="w-80 bg-secondary rounded-2xl shadow-md font-raleway">
      <div className="flex flex-col">
        <div className="flex flex-col justify-end ">
          <img src={props.imgUrl} alt="" className="rounded-t-2xl" />
          {props.isPopular && (
            <div className="bg-accentColor text-white p-0.5 w-16 flex items-center justify-center shadow-2xl absolute rounded-r-xl mb-2">
              Popular
            </div>
          )}
        </div>
        <div className="p-2">
          <div className="border-b-[1px] p-2">
            <div className="flex justify-between items-center">
              <div>

                <div>
                  <span className="text-accentColor font-bold">
                    ₹{props.cost}
                  </span>{" "}
                  <span className="text-textGrey">/month</span>
                </div>
                <div className="font-bold">{props.name}</div>
                <div className="text-textGrey text-sm">{props.address}</div>
              </div>
              <div
                className="rounded-full p-2 border-2"
                onClick={() => setLiked(!isLiked)}
              >
                {" "}
                {isLiked ? <FcLike /> : <FcLikePlaceholder />}
              </div>
            </div>
          </div>
          <div className="flex justify-between px-4 pt-2 text-sm">
            <div className="flex items-center">
              <FaBed className="mr-1" />
              <div> {props.beds} beds</div>
            </div>
            <div className="flex items-center">
              <FaBath className="mr-1" />
              <div> {props.baths} baths</div>
            </div>
            <div className="flex items-center">
              <TbDimensions className="mr-1" />
              <div>
                {" "}
                {props.area}
                <sup>2</sup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
