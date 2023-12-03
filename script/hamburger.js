$(document).ready(function () {
	$("#hamburgerButton").click(function () {
		$(".header ul").slideToggle(300);
	});

	$(window).resize(function () {
		if ($(window).width() > 768) {
			$(".header ul").removeAttr("style");
		}
	});
});
