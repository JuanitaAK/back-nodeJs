const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5050;

const app = express();

//this is a middleware that helps you treat all the data requests.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connecting to the DB

connectDB();

app.use("/post", require("./routes/post.routes"));

//initialize server le serveur
app.listen(port, () => console.log("Starting server at port " + port));

//
//exemple of the total request if files not divided in route and controllers
// app.get("/post", (req, res) => {
//   res.json({ message: "Here is your data" });
// });
