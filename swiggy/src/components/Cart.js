import Header from "./Header";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);

  const dispatch = useDispatch();
  const handleClear = () => {
    //console.log("clear clicked");
    dispatch(clearCart());
  };

  return (
    <div className="bg-slate-100">
      <div className="main-content res-menu">
        <div className="container w-[800px] mx-auto py-10">
          <h1 className="text-2xl font-bold text-slate-900">
            Your Cart has{" "}
            <span className="text-orange-600">{cartItems.length}</span> items
          </h1>
          <ItemList items={cartItems} />
          <div>
            <button
              className="btn bg-black text-white rounded px-5 py-3"
              onClick={handleClear}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
