import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer";


const Body = () => {
  
    // const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setsearchText] = useState("");
    // console.log(searchText)


    console.log("body rendered")
    useEffect(() => {
        //console.log("useEffect Called")
        fetchData();
    }, [])

    //console.log(a, b)
    
    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.44840&lng=79.98880&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();
        //console.log(json)
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // if(listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // }

    

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="main-content">
            <div className="container p-20">
                <h1 className="mb-1">Top Restaurants Near to Your Location</h1>
                {/* Filtering Data Options */}
                <div className="filters-container">
                    <div className="search-container">
                        <div className="search-form">
                            <input type="text" id="search-text" className="search-text" value={searchText} onChange={(e) => {
                                //console.log("value from search field is:", e.target.value)
                                setsearchText(e.target.value);
                            }} placeholder="Search for Restaurant and Food" />
                            <button className="btn btn-search" onClick={()=> {
                                //console.log("value from button clicked is:", searchText)
                                if(searchText) {
                                    // console.log(searchText)
                                    const filteredRes = listOfRestaurants.filter((res) => (res.info.name.toLowerCase().includes(searchText.toLowerCase())))
                                    setFilteredRestaurants(filteredRes)
                                } else {
                                    console.log("please enter search keyword")
                                }
                                
                                
                            }}>Search</button>
                        </div>
                    </div>
                    <div className="filters">
                        <button className="btn" onClick={()=> {
                            
                            let topRatings = listOfRestaurants.filter((res) => (res.info.avgRating > 4.3))
                            //console.log(topRatings)
                            setFilteredRestaurants(topRatings)
                        }}>Ratings 4.0 +</button>
                        <button className="btn" onClick={()=> {
                            
                            let fastDelivery = listOfRestaurants.filter((res) => (res.info.sla.deliveryTime < 20))
                            //console.log(fastDelivery)
                            setFilteredRestaurants(fastDelivery)
                        }}>Fast Delivery</button>
                        <button className="btn" onClick={()=> {
                            
                            let pureVeg = listOfRestaurants.filter((res) => (res.info.veg === true))
                            //console.log(pureVeg)
                            setFilteredRestaurants(pureVeg)
                        }}>Pure Veg</button>
                    </div>
                </div>

                {/*  Restaurant Cards Container */}
                {/* <div className="res-cards-container">
                    {
                        filteredRestaurants.map((restaurant) => (
                            <RestaurantCard resData={restaurant} key={restaurant.info.id} />
                        ))
                    }
                </div> */}
                {/* Restaurant Cards Container */}
                <div className="res-cards-container">
                    {filteredRestaurants.length === 0 && searchText !== "" ? (
                        <h2 className="no-data-found">
                            No Data Found for your Search
                        </h2>
                    ) : (
                        filteredRestaurants.map((restaurant) => (
                        <RestaurantCard resData={restaurant} key={restaurant.info.id} />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Body