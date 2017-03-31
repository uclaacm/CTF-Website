var default_flags = 30;

if(window.innerWidth > 800){
	var s = skrollr.init();
}
else{
	default_flags /= 2;
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
generateRandomFlags('.flags-small', default_flags * 2);


$('.menu').click(function(e){

	$('body').addClass('sidebar-enabled');

});

$('.overlay, #close').click(function(e){

	if($('body').hasClass('sidebar-enabled')){
		$('body').removeClass('sidebar-enabled');
	}

});
/*
var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
context.drawImage('../assets/img/worldmap.jpg', 0, 0);
console.log(context.getImageData(0,0,1,1).data);
*/

