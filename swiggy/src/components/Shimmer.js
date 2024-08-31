const Shimmer = () => {
    return (
        <div className="container w-[1024px] mx-auto my-12">
            <div className="bg-slate-100 rounded-2xl h-8 w-[500px] mb-8"></div>
            <div className="flex justify-between items-center mb-8">
                <div className="bg-slate-100 rounded-2xl h-8 w-[450px] mb-5"></div>
                <div className="flex justify-end items-center h-8 mb-5 gap-4 mt-5">
                    <div className="bg-slate-100 rounded-2xl h-8 w-[100px] mb-5"></div>
                    <div className="bg-slate-100 rounded-2xl h-8 w-[100px] mb-5"></div>
                    <div className="bg-slate-100 rounded-2xl h-8 w-[100px] mb-5"></div>
                    <div className="bg-slate-100 rounded-2xl h-8 w-[100px] mb-5"></div>
                </div>
            </div>
            <div className="shimmer-container flex content-between items-center gap-10 flex-wrap">
                <div className="shimmer-card bg-slate-100 rounded-2xl h-[300px] w-[226px]"></div>
                <div className="shimmer-card bg-slate-100 rounded-2xl h-[300px] w-[226px]"></div>
                <div className="shimmer-card bg-slate-100 rounded-2xl h-[300px] w-[226px]"></div>
                <div className="shimmer-card bg-slate-100 rounded-2xl h-[300px] w-[226px]"></div>
                <div className="shimmer-card bg-slate-100 rounded-2xl h-[300px] w-[226px]"></div>
                <div className="shimmer-card bg-slate-100 rounded-2xl h-[300px] w-[226px]"></div>
                <div className="shimmer-card bg-slate-100 rounded-2xl h-[300px] w-[226px]"></div>
                <div className="shimmer-card bg-slate-100 rounded-2xl h-[300px] w-[226px]"></div>
            </div>
        </div>
    )
}

export default Shimmer;