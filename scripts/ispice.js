var scrolled = false;
$(document).scroll(function() {
  if(!scrolled){
	scrolled = true;
	console.log("scrolled!");
	$('#scrollrem').delay(500).slideUp(1000);
	$('#scrollrem-overlay').delay(500).slideUp(1000);
  }
});


var recentScroll = false;
$(document).scroll(function() {
  if(!recentScroll){
	recentScroll = true;
  };
});

function smoothScroll(elt){
	console.log($(elt).offset().top-80);
	$('html, body').animate({scrollTop: $(elt).offset().top-80}, 500);
}
