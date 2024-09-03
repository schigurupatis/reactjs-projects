import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import MenuCategories from "./MenuCategories"

const RestaurantMenu = () => {

    //const  [resInfo, setResInfo] = useState(null)

    const {resId} = useParams()

    const resInfo = useRestaurantMenu(resId)

    const [showIndex, setShowIndex] = useState(2);

    // useEffect(() => {
    //     fetchMenu();
    // }, [])
    // const fetchMenu = async () => {
    //     const data = await fetch( MENU_API + resId)
    //     const json = await data.json()
    //     console.log(json)
    //     setResInfo(json.data)
    // }


    if (resInfo === null) return <Shimmer />; 
    
    const {name, avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName, sla, feeDetails } = resInfo.cards[2]?.card?.card?.info
    // const { itemCards } = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0]?.itemCards[0]?.card?.info
    //console.log(itemCards)
    //console.log(resInfo.cards)

    // const categories = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c) => c.card.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(categories)
    const categories = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);

    

    return (
        <div>
            <div className="main-content res-menu">
                <div className="container w-[800px] mx-auto">
                    <h1 className="my-10 text-2xl font-bold text-slate-900">{name}</h1>
                    <div className="card-shadow shadow-slate-600 p-5 rounded-3xl bg-slate-100 mb-10">
                        <div className="card border p-5  bg-white rounded-2xl">
                            <div className="ratings flex content-start items-center gap-5 font-bold">
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
                                <a className="text-orange-500 font-medium underline">{cuisines.join(",")}</a>
                            </div>
                            <div className="outle-container">
                                <div className="list-dots">
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                                <ul>
                                    <li><b className="text-xs">Outlet:</b> {areaName}</li>
                                    <li><b className="text-xs">{sla.slaString}</b></li>
                                </ul>
                            </div>
                            <hr className="my-3" />
                            <div className="msg-box flex justify-start items-center gap-5">
                                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu" alt="DISTANCE_FEE_NON_FOOD_LM" aria-hidden="true" className="w-5 h-5" />
                                <p>{feeDetails.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className="menu-categories">
                        {
                            // Controlled Component(Parent)
                            categories.map((category, index) => <MenuCategories 
                                data={category?.card?.card} 
                                key={category?.card?.card.title} 
                                itemList={index === showIndex ? true : false}
                                setShowIndex={() => setShowIndex(index)}  
                            />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaurantMenu