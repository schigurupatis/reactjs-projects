import { Children, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const navEl = document.querySelector("nav");
  const [toggleMenuIcon, setToggleMenuIcon] = useState(false);
  const handleToggleMenuIcon = () => {
    setToggleMenuIcon(!toggleMenuIcon);
    if (toggleMenuIcon) {
      navEl.style.top = "-100%";
    } else {
      navEl.style.top = "31%";
    }
  };

  const [btnNameReact, setbtnNameReact] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  //console.log(loggedInUser)

  const onlineStatus = useOnlineStatus();

  //Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  const [openDropDownMenu, setOpenDropDownMenu] = useState(false);

  const FlyoutLink = ({ children, to, FlyoutContent }) => {
    const showFlyout = openDropDownMenu && FlyoutContent;

    return (
      <Link to={to} className="relative">
        {children}
        {showFlyout && (
          <div className="absolute left-1/2 top-12 -translate-x-1/2 border-t-2 border-orange-500">
            <div className="absolute -top-10 left-0 right-0 h-10 bg-transparent"></div>
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white z-10 border-t-2 border-l-2 border-orange-500"></div>
            <FlyoutContent />
          </div>
        )}
      </Link>
    );
  };

  const UserProfileMenu = () => {
    return (
      <div className="w-48 h-48 bg-white text-black px-6 py-3 shadow-xl">
        <ul>
          <li className="py-1">Profile</li>
          <li className="py-1">Orders</li>
          <li className="py-1">Favourites</li>
          <li className="py-1">Payments</li>
          <li className="py-1">
            <button
              onClick={() => {
                btnNameReact === "Login"
                  ? setbtnNameReact("Logout")
                  : setbtnNameReact("Login");
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <header className="bg-white shadow-lg p-4 z-20">
      <div className="flex justify-between items-center container mx-auto w-[92%]">
        <div className="">
          <Link to="/" className="flex justify-between items-center">
            {/* <img src={LOGO_URL} alt="" className="w-56" /> */}
            <svg
              className="_8pSp-"
              viewBox="0 0 559 825"
              height="49"
              width="34"
              fill="#ff5200"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z"
                fill="url(#paint0_linear_19447_66107)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_19447_66107"
                  x1="445.629"
                  y1="63.8626"
                  x2="160.773"
                  y2="537.598"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF993A"></stop>
                  <stop offset="1" stopColor="#FF5200"></stop>
                </linearGradient>
              </defs>
            </svg>
            <b className="ms-6 min-w-[200px]">Food Delivery App</b>
          </Link>
        </div>
        <nav className="lg:static absolute lg:bg-white lg:text-black bg-orange-600 text-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] w-full lg:p-0 p-5">
          <ul className="flex justify-end md:flex-row flex-col md:gap-3 lg:gap-6 font-semibold">
            <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contactus">ContactUs</Link>
            </li>
            <li>
              <button
                onClick={() => {
                  btnNameReact === "Login"
                    ? setbtnNameReact("Logout")
                    : setbtnNameReact("Login");
                }}
              >
                {btnNameReact}
              </button>
            </li>
            <li>
              <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} className="mr-1" />
                Cart - ({cartItems.length} Items)
              </Link>
            </li>
            <li
              onMouseEnter={() => setOpenDropDownMenu(true)}
              onMouseLeave={() => setOpenDropDownMenu(false)}
            >
              <FlyoutLink
                className="text-black"
                to="/user-profile"
                FlyoutContent={UserProfileMenu}
              >
                <FontAwesomeIcon icon={faUser} className="mr-1" />
                {loggedInUser}
              </FlyoutLink>
            </li>
          </ul>
        </nav>
        <FontAwesomeIcon
          icon={toggleMenuIcon ? faClose : faBars}
          className="cursor-pointer lg:hidden"
          onClick={handleToggleMenuIcon}
        />
      </div>
    </header>
  );
};

export default Header;
