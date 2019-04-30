$(document).ready(function() {
	var animals = ["bird", "crab", "penguin", "koala"];
	const distanceToNextImage = -478;
	let currentImageNumber = 0;
	$("#b1, #b2, #b3").css("opacity", 0.5);

	$("#add").click(function() {
		$("#lightbox").show(400);
		$("#filter").animate({'opacity': '0.4'}, 'slow');
		$("#filter").css("z-index", 1);
		$(".animal-icon, #left, #right, #home").css("z-index", 0);
	})

	$("#close").click(function() {
		$("#lightbox").hide(400);
		$("#filter").animate({'opacity': '0.0'}, 'slow');
		$("#filter").animate({"z-index": 0}, 'slow');
		$(".animal-icon, #left, #right, #home").animate({"z-index": 3}, 'slow');
	})

	$(".mini, .a-icon").click(function() {
		$('html,body').animate({
        	scrollTop: $("#carousel-container").offset().top}, 'slow');
		var id_num = (this.id)[1];
		currentImageNumber = id_num;
		$("#carousel-strip").css("left", id_num * distanceToNextImage);
		for (var i = 0; i < id_num; i++) {
			$("#b" + i).animate({"opacity": 0.5}, 'slow');
		}
		for (var i = id_num + 1; i < 4; i++) {
			$("#b" + i).animate({"opacity": 0.5}, 'slow');
		}
		$("#b" + id_num).animate({"opacity": 1.0}, 'fast');
	})

	// $("#right").click(function() {
	// 	if (currentImageNumber + 1 > 3) {
	// 		currentImageNumber = 0;
	// 	} else {
	// 		currentImageNumber += 1;
	// 	}
	// 	$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage);
	// 	$("#animal").remove();
	// 	$("#name").append('<div id="animal">' + animals[currentImageNumber] + '</div>');
	// })
	// $("#left").click(function() {
	// 	if (currentImageNumber - 1 < 0) {
	// 		currentImageNumber = 3;
	// 	} else {
	// 		currentImageNumber -= 1;
	// 	}
	// 	$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage);
	// 	$("#animal").remove();
	// 	$("#name").append('<div id="animal">' + animals[currentImageNumber] + '</div>');
	// })

	// $(".a-icon").click(function() {
 //    	$('html,body').animate({
 //        	scrollTop: $("#carousel-container").offset().top}, 'slow');
 //    	var id_number = (this.id)[1];
 //    	currentImageNumber = id_number;
	// 	$("#animal").remove();
	// 	$("#name").append('<div id="animal">' + animals[currentImageNumber] + '</div>');
	// 	$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage);
	// })

	$("#home").click(function() {
		$('html,body').animate({
        	scrollTop: 0}, 'slow');
	})
});