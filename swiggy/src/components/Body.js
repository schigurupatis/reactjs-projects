import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  // console.log(searchText)
  const [pageNumber, setPageNumber] = useState(1); // New state for pagination
  const [hasMore, setHasMore] = useState(true); // New state for loading indicator

  const RestaurantCardDiscount = withDiscountLabel(RestaurantCard);

  console.log("body rendered", listOfRestaurants);
  // useEffect(() => {
  //     //console.log("useEffect Called")
  //     fetchData();
  // }, [])

  useEffect(() => {
    fetchData(pageNumber);
  }, [pageNumber]); // Fetch data on page change

  const fetchData = async (page) => {
    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.44840&lng=79.98880&page_type=DESKTOP_WEB_LISTING&offset=${
      (page - 1) * 20
    }`; // Updated URL with pagination logic

    try {
      const data = await fetch(url);
      const json = await data.json();

      if (json.statusCode === 1) {
        console.error("Error fetching data:", json.statusMessage);
        return; // Handle error gracefully (optional)
      }

      // setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      // setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      const newRestaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRestaurants((prevRestaurants) => [
        ...prevRestaurants,
        ...newRestaurants,
      ]);
      setFilteredRestaurants((prevFiltered) => [
        ...prevFiltered,
        ...newRestaurants,
      ]);
      setHasMore(newRestaurants.length === 20); // Check if more data exists
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // if(listOfRestaurants.length === 0) {
  //     return <Shimmer />
  // }

  const handleLoadMore = () => {
    if (hasMore) {
      setPageNumber(pageNumber + 1);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <div className="container mx-auto">
        <div className="">
          <h1>Looks like you are Offline</h1>
        </div>
      </div>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main-content">
      <div className="container mx-auto mb-5 w-[1024px]">
        <h1 className="text-2xl font-bold my-10">
          Top Restaurants Near to Your Location
        </h1>
        {/* Filtering Data Options */}
        <div className="filters-container container flex justify-between items-center">
          <div className="search-container">
            <div className="search-form flex justify-between items-center">
              <input
                type="text"
                id="search-text"
                className="px-5 py-2 block w-80 rounded-full border"
                value={searchText}
                onChange={(e) => {
                  //console.log("value from search field is:", e.target.value)
                  setsearchText(e.target.value);
                }}
                placeholder="Search for Restaurant and Food"
              />
              <button
                className="btn btn-search rounded-full bg-orange-600 text-white border px-5 py-2 font-medium"
                role="button"
                onClick={() => {
                  //console.log("value from button clicked is:", searchText)
                  if (searchText) {
                    // console.log(searchText)
                    const filteredRes = listOfRestaurants.filter((res) =>
                      res.info.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                    );
                    setFilteredRestaurants(filteredRes);
                  }
                }}
              >
                Search
              </button>
            </div>
          </div>
          <div className="filters flex justify-evenly items-center gap-5">
            <button
              className="rounded-full border px-5 py-2 font-medium hover:bg-slate-300"
              onClick={() => {
                let allRes = listOfRestaurants.filter((res) => res);
                //console.log(topRatings)
                setFilteredRestaurants(allRes);
              }}
            >
              All
            </button>
            <button
              className="rounded-full border px-3 py-2 font-medium hover:bg-slate-300"
              onClick={() => {
                let topRatings = listOfRestaurants.filter(
                  (res) => res.info.avgRating > 4.3
                );
                //console.log(topRatings)
                setFilteredRestaurants(topRatings);
              }}
            >
              Ratings 4.0 +
            </button>
            <button
              className="rounded-full border px-3 py-2 font-medium hover:bg-slate-300"
              onClick={() => {
                let fastDelivery = listOfRestaurants.filter(
                  (res) => res.info.sla.deliveryTime < 20
                );
                //console.log(fastDelivery)
                setFilteredRestaurants(fastDelivery);
              }}
            >
              Fast Delivery
            </button>
            <button
              className="rounded-full border px-3 py-2 font-medium hover:bg-slate-300"
              onClick={() => {
                let pureVeg = listOfRestaurants.filter(
                  (res) => res.info.veg === true
                );
                //console.log(pureVeg)
                setFilteredRestaurants(pureVeg);
              }}
            >
              Pure Veg
            </button>
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
        <div className="res-cards-container mt-10 flex justify-between gap-10 items-center flex-wrap">
          {filteredRestaurants.length === 0 && searchText !== "" ? (
            <h2 className="no-data-found">No Data Found for your Search</h2>
          ) : (
            //filteredRestaurants.map((restaurant) => ( console.log(restaurant.info.id) ))
            filteredRestaurants.map((restaurant) => (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                {/* Discount Restaurant Card */}
                {restaurant.info.aggregatedDiscountInfoV3 ? (
                  <RestaurantCardDiscount
                    resData={restaurant}
                    key={restaurant.info.id}
                  />
                ) : (
                  <RestaurantCard
                    resData={restaurant}
                    key={restaurant.info.id}
                  />
                )}
                {/* <RestaurantCard resData={restaurant} key={restaurant.info.id}  /> */}
              </Link>
            ))
          )}
        </div>

        {/* Load More Button (optional) */}
        {hasMore && (
          <div className="container w-[1024] mx-auto">
            <div className="load-more-container flex justify-center items-center my-16">
              <button
                className="btn btn-load-more bg-orange-600 text-white font-bold px-5 py-3 rounded-full"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
