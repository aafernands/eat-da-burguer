// Dependencies
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const burgerControllerRoute = require("./controllers/burgers_controller");

const app = express();

// Set our port to 8080
const PORT = process.env.PORT || 8080;

// expose the static  asset folder
app.use(express.static("public"));
app.use(bodyParser.urlencoded()); // parse body for form data type
app.use(bodyParser.json()); // parse body for json data type

// app.set("views", "./views");
// app.set("view engine", "pug");

app.use(burgerControllerRoute);

// Starts our server
app.listen(PORT, function () {
	console.log("Server is listening on PORT: " + PORT);
});
