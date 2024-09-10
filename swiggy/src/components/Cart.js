import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="bg-slate-100">
      <div className="main-content res-menu">
        <div className="container w-[800px] mx-auto py-10">
          <h1 className="text-2xl font-bold text-slate-900">
            Your Cart has{" "}
            <span className="text-orange-600">{cartItems.length}</span> items
          </h1>
          <ItemList items={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
