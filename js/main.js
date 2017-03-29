var s = skrollr.init();

// const CONTAINER_ID = 'splash-container';

// var canvas;
// var containerWidth = document.querySelector('#' + CONTAINER_ID).offsetWidth;
// var containerHeight = document.querySelector('#' + CONTAINER_ID).offsetHeight;


// function setup(){
//   canvas = createCanvas(containerWidth, containerHeight, WEBGL);
//   canvas.parent(CONTAINER_ID);
// }

// function draw(){
// 	background(250);
// 	rotateY(frameCount * 0.01);

// 	for(var j = 0; j < 5; j++){

// 		push();

// 		for(var i = 0; i < 200; i++){
// 			var x = sin(frameCount * 0.001 + j);
// 			var y = sin(frameCount * 0.001 + j);

// 			translate(x * 100, y * 100, i * 0.1);
// 			rotateZ(frameCount * 0.002);
// 			push();

// 			//if(within(x * containerWidth, mouseX, 20) || within(y * containerHeight, mouseY, 20))
// 			//	sphere(20, 4, 4); 
// 			//else
// 				sphere(3, 2, 4); 

// 			pop();
// 		}

// 		pop();
// 	}
// }

// function within(value, target, range){
// 	return value < target + range && value > target - range;
// }


// function mousePressed() {

// }

// function mouseReleased() {

// }

// function mouseClicked() {

// }

// function mouseDragged() {

// }

// //adjusts canvas according to window resize
// window.addEventListener('resize', function() {
// 	containerWidth = document.querySelector('#' + CONTAINER_ID).offsetWidth;
// 	containerHeight = document.querySelector('#' + CONTAINER_ID).offsetHeight;
// 	setup();
// });