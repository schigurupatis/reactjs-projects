import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
const {resData} = props;
//console.log(props);
//console.log(resData)
const {name, avgRatingString, sla, cuisines, veg} = resData?.info

return(
<div className="res-card card  rounded-2xl shadow-lg border w-52 h-72">
  <div className="res-img w-full h-[146px] rounded-2xl overflow-hidden">
      <img src={CDN_URL+ resData.info.cloudinaryImageId} alt="RestaurantName" className="w-full h-full object-cover" />
  </div>
  <div className="res-data p-3">
      <h3 className="name font-bold text-md text-slate-900">{name}</h3>
      <div className="flex justify-between items-center">
          <h4 className="ratings font-medium text-slate-800">{avgRatingString} Stars</h4>
          <h4 className="delivery-time font-medium text-slate-800">{sla.deliveryTime} Mins</h4>
      </div>
      <h5 className="quisines">{cuisines.join(", ")}</h5>
      <h5 className="quisines">{veg}</h5>
  </div>
</div>
)
}

export default RestaurantCard