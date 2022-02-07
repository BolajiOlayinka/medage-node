const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8000;
const dotenv = require('dotenv');
dotenv.config();

// create express app
const app = express();
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(upload.array());
app.use(express.static("public"));
app.use(
  cors({
    origin: "*",
  })
);

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose
  .connect(
    `mongodb+srv://Bolaji:12345@cluster0.p3avd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Successfully Connected to mongodb");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now ...", err);
    process.exit();
  });

// define a simple route
app.get("/", (req, res) => {
  res.json({
    message:
      "Welcome to Medage application Created with Node, Express and MongoDB",
  });
});

require("./app/routes/product.routes.js")(app);
require("./app/routes/category.routes.js")(app);
require("./app/routes/subcategory.routes.js")(app);
require("./app/routes/measurement.routes.js")(app);
require("./app/routes/cart.routes.js")(app);
require("./app/routes/auth.routes.js")(app);
require("./app/routes/admin/auth.routes.js")(app);
require('./docs.js')(app,port);

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
