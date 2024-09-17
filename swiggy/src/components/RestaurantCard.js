// import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
// import UserContext from "../utils/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

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
    locality,
  } = resData?.info;
  // const {loggedInUser} = useContext(UserContext)
  const truncatedName = name.length > 23 ? `${name.substring(0, 23)}...` : name;
  const combinedCuisinesLength = cuisines.join(", ").length;
  const truncatedCuisines =
    combinedCuisinesLength > 23
      ? `${cuisines.join(", ").substring(0, 23)}...`
      : cuisines.join(", ");

  return (
    <div className="res-card card  rounded-2xl w-[226px] h-72">
      <div className="res-img w-full h-[146px] rounded-2xl overflow-hidden relative">
        <img
          src={CDN_URL + resData.info.cloudinaryImageId}
          alt="RestaurantName"
          className="w-full h-full object-cover"
        />
        <div className="shadow-gradient"></div>
      </div>
      <div className="res-data px-4 py-3">
        <h3 className="name font-bold text-md text-slate-900">
          {truncatedName}
        </h3>
        <div className="flex justify-between items-center">
          <h4 className="ratings font-semibold text-slate-900 flex items-center gap-1">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                role="img"
                aria-hidden="true"
                strokecolor="rgba(2, 6, 12, 0.92)"
                fillcolor="rgba(2, 6, 12, 0.92)"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="9"
                  fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                ></circle>
                <path
                  d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                  fill="white"
                ></path>
                <defs>
                  <linearGradient
                    id="StoreRating20_svg__paint0_linear_32982_71567"
                    x1="10"
                    y1="1"
                    x2="10"
                    y2="19"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#21973B"></stop>
                    <stop offset="1" stopColor="#128540"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span> {avgRatingString}</span>
          </h4>
          <h4 className="delivery-time font-medium text-slate-900">
            {sla.deliveryTime} Mins
          </h4>
        </div>
        <h5 className="quisines text-gray-500 font-medium">
          {truncatedCuisines}
        </h5>
        <h5 className="quisines text-gray-500 font-medium">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="" />
          &nbsp;
          {locality}
        </h5>
      </div>
    </div>
  );
};

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-4 left-0 z-10 bg-black text-white px-3 py-1 rounded-e-2xl text-xs">
          Discount
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
