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
			console.log("******************** response **********************");
			console.log(response);
		});
	});
});
