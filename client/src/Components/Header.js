import { useContext, useState } from "react";
import LOGO_URL from "../../utils/constant";
import { Link } from "react-router-dom";
import userContext from "../../utils/useContext";
import useonlineStatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const { loggedInUser } = useContext(userContext);
  const onlineStatus = useonlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center">
          <img className="w-40 object-contain" src={LOGO_URL} />
        </div>

        <ul className="flex items-center gap-6 text-gray-700 font-medium">
          <li className="text-sm">
            {onlineStatus ? "🟢 Online" : "🔴 Offline"}
          </li>

          <li className="hover:text-green-600 transition">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:text-green-600 transition">
            <Link to="/about">About</Link>
          </li>

          <li className="hover:text-green-600 transition">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="hover:text-green-600 transition">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="font-semibold hover:text-green-600 transition">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>

          <button
            className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            onClick={() => {
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>

          <li className="font-semibold text-gray-800">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
