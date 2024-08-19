import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer";


const Body = () => {
  
    // const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => {
        //console.log("useEffect Called")
        fetchData();
    }, [])
    
    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.44840&lng=79.98880&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();
        //console.log(json)
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // if(listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="container p-20">
                <h1 className="mb-1">Top Restaurants Near to Your Location</h1>
                {/* Filtering Data Options */}
                <div className="filters">
                    <button className="btn" onClick={()=> {
                        let allRes = listOfRestaurants.filter((res) => (res))
                        //console.log(allRes)
                        setListOfRestaurants(allRes)
                    }}>All Restaurants</button>
                    <button className="btn" onClick={()=> {
                        let topRatings = listOfRestaurants.filter((res) => (res.info.avgRating > 4.2))
                        //console.log(topRatings)
                        setListOfRestaurants(topRatings)
                    }}>Ratings 4.0 +</button>
                    <button className="btn" onClick={()=> {
                        let fastDelivery = listOfRestaurants.filter((res) => (res.info.sla.deliveryTime < 30))
                        //console.log(fastDelivery)
                        setListOfRestaurants(fastDelivery)
                    }}>Fast Delivery</button>
                    <button className="btn" onClick={()=> {
                        let pureVeg = listOfRestaurants.filter((res) => (res.info.veg === true))
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