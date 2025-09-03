// /api/menu.js
export default async function handler(req, res) {
  const { resId } = req.query;

  try {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6369411&lng=77.2056647&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch menu API" });
  }
}
