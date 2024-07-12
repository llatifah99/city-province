// import
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3001;
app.use(cors());

app.get("/province", async (req, res) => {
  try {
    const apiKey = "f69624e6337923046e8530fab4f2e814";
    const url = "https://api.rajaongkir.com/starter/province";
    const response = await axios.get(url, {
      headers: {
        key: apiKey,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
