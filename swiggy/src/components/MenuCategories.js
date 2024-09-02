const MenuCategories = ({data}) => {
    console.log(data)
    return (
        <div>
            <div className="accordion my-6">
                <div className="bg-white">
                    <div className="accordion-header w-full shadow-md p-4 flex justify-between items-center cursor-pointer">
                        <span className="text-xl">{data.title}({data.itemCards.length})</span>
                        <span className="font-bold">^</span>
                    </div>
                    <div className="accordion-body p-4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, minus?</p>
                    </div>
                </div>
                <div className="pt-4 bg-slate-200"></div>
            </div>
        </div>
    )
}

export default MenuCategories