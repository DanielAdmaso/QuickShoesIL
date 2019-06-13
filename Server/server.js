const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
const CustomerRouter = require("./router/customer");
app.use("/customer", CustomerRouter);
const ShoesRouter = require("./router/shoes");
app.use("/shoes", ShoesRouter);
const CartRouter = require("./router/cart");
app.use("/cart", CartRouter);

mongoose
  .connect("mongodb://localhost:27017/QuickShoesDB", {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.listen(3000, () => {
  console.log("listen to port 3000!");
});
