var express = require("express");

var router = express.Router();
var burger = require("../models/burger");

router.get("/burgers", function (req, res) {
	burger.getAllBurger(function (burgers) {
		console.log(burgers);
		res.json(burgers);
	});
});

router.post("/burgers", function (req, res) {
	console.log("******************** req.body **********************");
	console.log(req.body);
	burger.addBurger(req.body.name, function () {
		res.sendStatus(200);
	});
});

router.put("/burgers/:id", function (req, res) {
	burger.devourBurger(req.params.id, function () {
		res.sendStatus(200);
	});
});

router.delete("/burgers/:id", function (req, res) {
	burger.deleteBurger(req.params.id, function () {
		res.sendStatus(200);
	});
});

router.get("*", function (req, res) {
	res.render("index");
});

module.exports = router;
