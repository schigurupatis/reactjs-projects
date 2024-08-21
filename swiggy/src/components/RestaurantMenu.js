import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import { MENU_API } from "../utils/constants"

const RestaurantMenu = () => {

    const  [resInfo, setResInfo] = useState(null)

    const {resId} = useParams()
    //console.log(params)

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch( MENU_API + resId)
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
                    <h1 className="mb-1">{name}</h1>
                    <div className="card-shadow">
                        <div className="card">
                            <div className="ratings">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokecolor="rgba(2, 6, 12, 0.92)" fillcolor="rgba(2, 6, 12, 0.92)">
                                    <circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle>
                                    <path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path>
                                    <defs>
                                        <linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#21973B"></stop>
                                            <stop offset="1" stopColor="#128540"></stop>
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <h4>{avgRating}({totalRatingsString})</h4>
                                <h4>{costForTwoMessage}</h4>
                            </div>
                            <div className="cuisines">
                                <a>{cuisines.join(",")}</a>
                            </div>
                            <div className="outle-container">
                                <div className="list-dots">
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                                <ul>
                                    <li><b>Outlet:</b> {areaName}</li>
                                    <li><b>{sla.slaString}</b></li>
                                </ul>
                            </div>
                            <hr />
                            <div className="msg-box">
                                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu" alt="DISTANCE_FEE_NON_FOOD_LM" aria-hidden="true" className="sc-fKWMtX gJQjbk" />
                                <p>{feeDetails.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className="menu-items">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu