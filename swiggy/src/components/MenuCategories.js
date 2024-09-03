import { useState } from "react"
import ItemList from "./ItemList"

const MenuCategories = ({data, itemList, setShowIndex, dummy}) => {
    //console.log(data)

    //const [itemList, setItemList] = useState();

    const handleClick = () => {
        //console.log("header clicked")
        //setItemList()
        setShowIndex()
    }

    return (
        <div>
            <div className="accordion my-6">
                <div className="bg-white">
                    <div className="accordion-header w-full shadow-md p-4 flex justify-between items-center cursor-pointer" onClick={handleClick}>
                        <span className="text-xl">{data.title}({data.itemCards.length})</span>
                        <span className="font-bold">^</span>
                    </div>
                    <div className="accordion-body p-4">
                        {
                            itemList && <ItemList items={data.itemCards} dummy={dummy} />
                        }
                    </div>
                </div>
                {/* <div className="pt-4 bg-slate-200"></div> */}
            </div>
        </div>
    )
}

export default MenuCategories