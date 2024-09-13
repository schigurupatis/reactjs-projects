// import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
// import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  //console.log(props);
  //console.log(resData)
  const {
    name,
    avgRatingString,
    sla,
    cuisines,
    veg,
    aggregatedDiscountInfoV3,
  } = resData?.info;
  // const {loggedInUser} = useContext(UserContext)
  return (
    <div className="res-card card  rounded-2xl w-[226px] h-72">
      <div className="res-img w-full h-[146px] rounded-2xl overflow-hidden">
        <img
          src={CDN_URL + resData.info.cloudinaryImageId}
          alt="RestaurantName"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="res-data px-4 py-3">
        <h3 className="name font-bold text-md text-slate-900">{name}</h3>
        <div className="flex justify-between items-center">
          <h4 className="ratings font-semibold text-slate-900">
            {avgRatingString} Stars
          </h4>
          <h4 className="delivery-time font-medium text-slate-900">
            {sla.deliveryTime} Mins
          </h4>
        </div>
        <h5 className="quisines">{cuisines.join(", ")}</h5>
        <h5 className="quisines">{veg}</h5>
        {/* <hr />
      <h6>UserName is: {loggedInUser}</h6> */}
      </div>
    </div>
  );
};

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-4 bg-black text-white px-3 py-1 rounded-e-2xl text-xs">
          Discount
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
