import Header from "./Header";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);
  // cartItems.forEach((item) => {
  //   console.log(
  //     `  - ${item.card.info.name}: Rs. ${item.card.info.price / 100}`
  //   );
  // });

  //const itemPrices = cartItems.map((item) => (item.card.info.price || 0) / 100);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + (item.card.info.price || 0) / 100, 0)
    .toFixed(2);

  const dispatch = useDispatch();
  const handleClear = () => {
    //console.log("clear clicked");
    dispatch(clearCart());
  };

  return (
    <div className="bg-slate-100">
      <div className="main-content res-menu">
        <div className="container w-[800px] mx-auto py-10">
          <h1 className="text-2xl font-bold text-slate-900 mb-5">
            Your Cart has{" "}
            <span className="text-orange-600">{cartItems.length}</span> items
          </h1>
          <div className="cartitems">
            <ItemList items={cartItems} />
          </div>
          {cartItems.length >= 1 && (
            <div className="total-amount bg-white px-3 py-2 mb-3">
              <h1 className="font-bold text-lg text-orange-600 text-end">
                Total: Rs. <span>{totalPrice}</span>
              </h1>
            </div>
          )}

          <div>
            {cartItems.length >= 1 && (
              <div className="flex justify-end gap-5">
                <button
                  className="btn bg-black text-white rounded px-5 py-3"
                  onClick={handleClear}
                >
                  Clear Cart
                </button>
                <button className="btn bg-orange-600 text-white rounded px-5 py-3">
                  Order Now
                </button>
              </div>
            )}

            {cartItems.length === 0 && (
              <div>
                Add Items to Cart &nbsp;
                <Link to="/home" className="text-orange-500 font-bold">
                  Home
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
