var express = require("express");

var router = express.Router();
var burger = require("../models/burger");

router.get("/burgers", function (req, res) {
	burger.getAllBurger(function (burgers) {
		console.log(burgers);
	});
});

module.exports = router;
