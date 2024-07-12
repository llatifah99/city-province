const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get("/province", async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;
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
app.get("/city", async (req, res) => {
  try {
    const apiKey = process.env.API_KEY;
    const url = "https://api.rajaongkir.com/starter/city";
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
