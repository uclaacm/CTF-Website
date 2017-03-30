var default_flags = 30;

if(window.innerWidth > 800){
	var s = skrollr.init();
}
else{
	default_flags = 20;
}

function generateRandomFlags(selector, numberFlags){

	var myFlags = new FlagsController(selector);

	var maxX = document.querySelector(selector).offsetWidth;
	var maxY = document.querySelector(selector).offsetHeight;

	for(var i = 0; i < numberFlags; i++){
		var x = Math.floor(Math.random() * maxX);
		var y = Math.floor(Math.random() * maxY);
		myFlags.add(x, y);
	}
	
	myFlags.renderAll();
}


generateRandomFlags('.flags-inner', default_flags);


$('.menu').click(function(e){

	$('body').addClass('sidebar-enabled');

});

$('.overlay, #close').click(function(e){

	if($('body').hasClass('sidebar-enabled')){
		$('body').removeClass('sidebar-enabled');
	}

})



