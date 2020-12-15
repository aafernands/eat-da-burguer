$(function () {
	const $notDevouredList = $("#not_devoured");
	const $devouredList = $("#devoured");
	$("#burger-form").on("submit", function (event) {
		event.preventDefault();
		console.log("submit");
		const burgerName = $(this).children("input").val();

		$.ajax({
			method: "POST",
			url: "/burgers",
			data: {
				name: burgerName,
			},
		}).then(function (response) {
			location.reload();
		});
	});

	$("#not_devoured").on("click", "button", function (event) {
		const id = $(this).data("id");
		console.log(id);
		$.ajax({
			method: "PUT",
			url: "/burgers/" + id,
		}).then(function (response) {
			location.reload();
		});
	});

	$("#devoured").on("click", "button", function (event) {
		const id = $(this).data("id");
		console.log(id);
		$.ajax({
			method: "DELETE",
			url: "/burgers/" + id,
		}).then(function (response) {
			location.reload();
		});
	});

	function getAllBurger() {
		$.ajax({
			method: "GET",
			url: "/burgers",
		}).then(function (response) {
			console.log(response);

			renderNotDevoured(response.filter((burger) => burger.devoured === 0));
			renderDevoured(response.filter((burger) => burger.devoured === 1));
		});
	}

	function renderNotDevoured(burgers) {
		console.log("not de", burgers);
		let html = "";
		burgers.forEach((burger) => {
			html += `
			<div class="row burger-row">
                <div class="col-md-9 text-center">${burger.id} ${burger.burger_name}</div>
                <div class="col-md-3">
                    <button class="btn btn-primary devour" type="button" data-id="${burger.id}">Devour</button>
                </div>
			</div>
			`;
		});

		$notDevouredList.html(html);
	}

	function renderDevoured(burgers) {
		console.log("de", burgers);
		let html = "";
		burgers.forEach((burger) => {
			html += `
			<div class="row burger-row">
                <div class="col-md-9 text-center">${burger.id} ${burger.burger_name}</div>
                <div class="col-md-3">
                    <button class="btn btn-danger devour" type="button" data-id="${burger.id}">Delete</button>
                </div>
			</div>
			`;
		});

		$devouredList.html(html);
	}

	function start() {
		getAllBurger();
	}

	start();
});
