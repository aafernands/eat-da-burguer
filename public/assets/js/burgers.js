console.log("burger file");
$(function () {
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

	$("#not_devoured button").on("click", function (event) {
		const id = $(this).data("id");
		console.log(id);
		$.ajax({
			method: "PUT",
			url: "/burgers/" + id,
		}).then(function (response) {
			location.reload();
		});
	});

	$("#devoured button").on("click", function (event) {
		const id = $(this).data("id");
		console.log(id);
		$.ajax({
			method: "DELETE",
			url: "/burgers/" + id,
		}).then(function (response) {
			location.reload();
		});
	});
});
