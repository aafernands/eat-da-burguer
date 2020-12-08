var orm = require("../config/orm.js");

var burger = {
	getAllBurger: (cb) => {
		orm.selectAll("burgers", cb);
	},
	addBurger: (burgerName, cb) => {
		orm.insertOne("burgers", burgerName, cb);
	},
	devourBurger: (burgerId, cb) => {
		orm.updateOne("burgers", burgerId, cb);
	},
};

module.exports = burger;
