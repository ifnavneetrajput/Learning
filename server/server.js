
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); 

app.get("/api/menu", async (req, res) => {
  const { resId } = req.query;
  if (!resId)
    return res.status(400).json({ error: "resId query param required" });

  try {
    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6369411&lng=77.2056647&restaurantId=${encodeURIComponent(
      resId
    )}&catalog_qa=undefined&submitAction=ENTER`;
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; Node.js server)",
        Accept: "application/json, text/plain, */*",
      },
    });

    // forward status & json
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error("Menu error:", err);
    res.status(500).json({ error: "Failed to fetch menu API" });
  }
});

app.get("/api/search", async (req, res) => {
  try {
    const url =
      "https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.6369411&lng=77.2056647&str=restaurant&trackingId=cd63b699-640b-171c-996a-3ee2edb5525c&submitAction=ENTER&queryUniqueId=3178d00b-3a74-5eb9-3a32-ef07d01871df";
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; Node.js server)",
        Accept: "application/json, text/plain, */*",
      },
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error("Search error:", err);
    res.status(500).json({ error: "Failed to fetch search API" });
  }
});

app.get("/", (_req, res) => res.send("Swiggy-proxy server running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
