// /api/search.js
export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.6369411&lng=77.2056647&str=restaurant&trackingId=cd63b699-640b-171c-996a-3ee2edb5525c&submitAction=ENTER&queryUniqueId=3178d00b-3a74-5eb9-3a32-ef07d01871df"
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch search API" });
  }
}
