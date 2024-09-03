import { useState } from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {

    return <div>
        {
            items.map(item => <div key={item.card.info.id} className="mb-10 flex justify-between items-center gap-5">
                <div className="w-9/12">
                    <h4 className="font-bold text-lg">{item.card.info.name}</h4>
                    <h6 className="font-semibold">Rs. {item.card.info.price  / 100}</h6>
                    <p className="m-0 text-slate-400">{item.card.info.description}</p>
                </div>
                <div className="flex flex-col items-center w-3/12">
                    {
                        item.card.info.imageId ? <img src={CDN_URL + item.card.info.imageId} alt='' className='w-[156px] h-[144px] min-w-[156px] min-h-[144px] max-w-[156px] max-h-[144px] rounded-lg' /> : ""
                    }
                    <button className="bg-slate-200 border shadow-md font-bold rounded-lg px-5 py-2 text-green-600 w-3/5 -mt-6">ADD</button>
                </div>
            </div>)
        }
    </div>
}

export default ItemList;