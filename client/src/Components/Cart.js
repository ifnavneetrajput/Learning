import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <div className="flex justify-center mb-4">
          <button
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>

        {cartItems?.length === 0 && (
          <h1 className="text-gray-500 text-lg mt-6">
            Cart is empty. Add items to continue!
          </h1>
        )}

        <div className="mt-6">
          <ItemList items={cartItems} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
