import { useEffect, useState } from "react";

const API_BASE = "https://quickbites-gg47.onrender.com"; 


const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    if (resId) fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(`${API_BASE}/api/menu?resId=${resId}`);
      const json = await response.json();
      setResInfo(json.data);
    } catch (err) {
      console.log("Error fetching menu:", err);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
