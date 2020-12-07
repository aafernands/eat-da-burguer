var orm = require("../config//orm.js");

var burger = {
	getAllBurger: (cb) => {
		orm.selectAll("burgers", cb);
	},
};

module.exports = burger;
