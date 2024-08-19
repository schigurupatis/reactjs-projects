import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useState } from "react"


const Body = () => {
  
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    
    return (
        <div className="body">
            <div className="container p-20">
                <h1 className="mb-1">Top Restaurants Near to Your Location</h1>
                {/* Filtering Data Options */}
                <div className="filters">
                    <button className="btn" onClick={()=> {
                        let allRes = resList.filter((res) => (res))
                        //console.log(allRes)
                        setListOfRestaurants(allRes)
                    }}>All Restaurants</button>
                    <button className="btn" onClick={()=> {
                        let topRatings = resList.filter((res) => (res.info.avgRating > 4.2))
                        //console.log(topRatings)
                        setListOfRestaurants(topRatings)
                    }}>Ratings 4.0 +</button>
                    <button className="btn" onClick={()=> {
                        let fastDelivery = resList.filter((res) => (res.info.sla.deliveryTime > 40))
                        //console.log(fastDelivery)
                        setListOfRestaurants(fastDelivery)
                    }}>Fast Delivery</button>
                    <button className="btn" onClick={()=> {
                        let pureVeg = resList.filter((res) => (res.info.veg === true))
                        //console.log(pureVeg)
                        setListOfRestaurants(pureVeg)
                    }}>Pure Veg</button>
                </div>

                {/*  Restaurant Cards Container */}
                <div className="res-cards-container">
                  
                    {
                        listOfRestaurants.map((restaurant) => (
                            <RestaurantCard resData={restaurant} key={restaurant.info.id} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Body