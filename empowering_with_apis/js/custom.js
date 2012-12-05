$(document).ready(function() {
	
	var fadeinBox = $("#scrollinglist1");
	var fadeoutBox = $("#scrollinglist2");
	
	function fade() {
		setTimeout(function(){
			$(fadeinBox).fadeIn(500);
		  	$(fadeoutBox).fadeOut(500, function () {
		        var temp = fadeinBox;
		        fadeinBox = fadeoutBox;
		        fadeoutBox = temp;
				setTimeout(fade, 2000);
		    });
		}, 2000);
	}
	fade();
});