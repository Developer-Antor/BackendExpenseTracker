const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
dotenv.config({ path: "./config/config.env" });

const transactions = require("./routes/transaction");
const connectDB = require("./config/db");
const app = express();
app.use(express.json());
connectDB();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server Running ${process.env.NODE_ENV} on PORT ${PORT}`)
);
