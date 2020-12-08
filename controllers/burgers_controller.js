var express = require("express");

var router = express.Router();
var burger = require("../models/burger");

router.get("/burgers", function (req, res) {
	burger.getAllBurger(function (burgers) {
		console.log(burgers);
	});
});

router.post("/burgers", function (req, res) {
	console.log("******************** req.body **********************");
	console.log(req.body);
	burger.addBurger(req.body.name, function () {
		res.sendStatus(200);
	});
});

module.exports = router;
