require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

//get routes
const cardRoutes = require("./routes/cards");
const decksRoutes = require("./routes/decks");
const usersRoutes = require("./routes/users");

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api", cardRoutes);
app.use("/api", decksRoutes);
app.use("/api", usersRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
