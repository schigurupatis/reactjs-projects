import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
const {resData} = props;
//console.log(props);
//console.log(resData)
const {name, avgRatingString, sla, cuisines, veg} = resData?.info

return(
<div className="res-card">
  <div className="res-img">
      <img src={CDN_URL+ resData.info.cloudinaryImageId} alt="RestaurantName" />
  </div>
  <div className="res-data">
      <h3 className="name">{name}</h3>
      <div>
          <h4 className="ratings">{avgRatingString} Stars</h4>
          <h4 className="delivery-time">{sla.deliveryTime} Mins</h4>
      </div>
      <h5 className="quisines">{cuisines.join(", ")}</h5>
      <h5 className="quisines">{veg}</h5>
  </div>
</div>
)
}

export default RestaurantCard