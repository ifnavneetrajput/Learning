import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="divide-y divide-gray-200">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex flex-col sm:flex-row justify-between gap-4 py-4"
        >
          <div className="sm:w-9/12">
            <div className="flex justify-between sm:justify-start sm:gap-2 font-medium text-gray-800">
              <span>{item.card.info.name}</span>
              <span>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>

            <p className="text-sm text-gray-500 mt-1">
              {item.card.info.description}
            </p>
          </div>

          <div className="sm:w-3/12 flex items-center justify-end">
            <button
              className="px-5 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
