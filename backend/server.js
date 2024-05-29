const express = require("express");
const connectDb = require("./config/db");
const cors = require("cors");
require("colors");
require("dotenv").config();

const portfolioRoute = require("./routes/portfolioRoute");
connectDb();
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/portfolio", portfolioRoute);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
