import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
  
    // const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setsearchText] = useState("");
    // console.log(searchText)
    const [pageNumber, setPageNumber] = useState(1); // New state for pagination
    const [hasMore, setHasMore] = useState(true); // New state for loading indicator


    console.log("body rendered")
    // useEffect(() => {
    //     //console.log("useEffect Called")
    //     fetchData();
    // }, [])

    useEffect(() => {
        fetchData(pageNumber);
      }, [pageNumber]); // Fetch data on page change
    
    const fetchData = async (page) => {
        const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.44840&lng=79.98880&page_type=DESKTOP_WEB_LISTING&offset=${(page - 1) * 20}`; // Updated URL with pagination logic

        try {
            const data = await fetch(url)
            const json = await data.json();
            //console.log(json)

            if (json.statusCode === 1) {
                console.error("Error fetching data:", json.statusMessage);
                return; // Handle error gracefully (optional)
            }

            // setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            // setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            const newRestaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            
            setListOfRestaurants((prevRestaurants) => [...prevRestaurants, ...newRestaurants]);
            setFilteredRestaurants((prevFiltered) => [...prevFiltered, ...newRestaurants]);
            setHasMore(newRestaurants.length === 20); // Check if more data exists
        } 
        catch (error) {
            console.error("Error fetching data:", error);
        }

    }

    // if(listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // }

    const handleLoadMore = () => {
        if (hasMore) {
          setPageNumber(pageNumber + 1);
        }
      };

    

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
                                } 
                            }}>Search</button>
                        </div>
                    </div>
                    <div className="filters">
                        <button className="btn" onClick={()=> {
                            
                            let allRes = listOfRestaurants.filter((res) => (res))
                            //console.log(topRatings)
                            setFilteredRestaurants(allRes)
                        }}>All</button>
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
                        <Link to={"/restaurant/" + restaurant.info.id}>
                            <RestaurantCard resData={restaurant} key={restaurant.info.id} />
                        </Link>
                        ))
                    )}

                    
                </div>


                {/* Load More Button (optional) */}
                {hasMore && (
                    <div className="container">
                        <div className="load-more-container">
                            <button className="btn btn-load-more" onClick={handleLoadMore}>
                                Load More
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Body