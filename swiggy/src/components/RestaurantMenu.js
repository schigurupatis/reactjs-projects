import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"

const RestaurantMenu = () => {

    const  [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=14.44840&lng=79.98880&restaurantId=386133&catalog_qa=undefined&submitAction=ENTER')
        const json = await data.json()
        //console.log(json)

        setResInfo(json.data)
        
    }

    console.log(resInfo)
    if (resInfo === null) return <Shimmer />; 
    
    const {name, avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName, sla, feeDetails } = resInfo.cards[2]?.card?.card?.info

    return (
        <div>
            <div className="main-content res-menu">
                <div className="container p-20">
                    <div className="card">
                        <h1>{name}</h1>
                        <h2>{avgRating}({totalRatingsString})</h2>
                        <h2>{costForTwoMessage}</h2>
                        <h6>{cuisines.join(", ")}</h6>
                        <p>{areaName}</p>
                        <p>{sla.slaString}</p>
                        <p>{feeDetails.message}</p>
                        <div className="menu">
                            <ul>
                                <li>Biryani</li>
                                <li>Burgers</li>
                                <li>Pizza</li>
                                <li>Parota</li>
                                <li>Diet Coke</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu