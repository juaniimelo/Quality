$(document).on("scroll", function() {

	if($(document).scrollTop()>100) {
		$("header").removeClass("achicado").addClass("small");
	} else {
		$("header").removeClass("small").addClass("achicado");
	}
	
});