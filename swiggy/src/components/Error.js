import { useRouteError } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <Header />
            <div>
                <div className="main-content">
                    <div className="container p-20">
                        <div className="">
                            <h1>Oops!</h1>
                            <h2>Something Went Wrong!!</h2>
                            <h3>{err.status} {err.statusText}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Error;