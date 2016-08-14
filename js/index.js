$(".navbar").show();

// navbar hide on scrollling Down
$(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
				$(".navbar").fadeOut();
		}else{
				$(".navbar").fadeIn();
		}
	});
});

// redirect to services section using navbar button
$(".services").click(function(){
	$("html,body").animate({scrollTop:
		$("#features").offset().top}, 1000);
})

// redirect to designs section using navbar button
$(".designs").click(function(){
	$("html,body").animate({scrollTop:
		$("#photos").offset().top}, 1000);
})

// redirect to community section using navbar button
$(".community").click(function(){
	$("html,body").animate({scrollTop:
		$("#community").offset().top}, 1000);
})

// redirect to social section using navbar button
$(".social").click(function(){
	$("html,body").animate({scrollTop:
		$("#find-us").offset().top}, 1000);
})