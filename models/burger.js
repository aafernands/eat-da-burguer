var orm = require("../config/orm.js");

var burger = {
	getAllBurger: (cb) => {
		orm.selectAll("burgers", cb);
	},
	addBurger: (burgerName, cb) => {
		orm.insertOne("burgers", burgerName, cb);
	},
};

module.exports = burger;
