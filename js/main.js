var s = skrollr.init();

function generateRandomFlags(selector, numberFlags){

	var myFlags = new FlagsController(selector);

	var maxX = document.querySelector(selector).offsetWidth;
	var maxY = document.querySelector(selector).offsetHeight;

	console.log('max x: ' + maxX + ', max y: ' + maxY);

	for(var i = 0; i < numberFlags; i++){
		var x = Math.floor(Math.random() * maxX);
		var y = Math.floor(Math.random() * maxY);
		console.log('adding ' + x + ', ' + y);
		myFlags.add(x, y);
	}
	
	myFlags.renderAll();
}


generateRandomFlags('.flags-inner', 30);



