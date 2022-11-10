const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./server/database/index");
const app = express();


const PORT = 3000;
dotenv.config({ path: "./config.env" });

// body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set("view engine", "ejs");

// database connection
connectDB();

app.use("/", require("./server/router/router"));

app.listen(PORT, () => {
  console.log(`Server is running is port : http://localhost:${PORT}`);
});
