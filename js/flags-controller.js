
var FlagsController = (function(){

	var Coord = function(x, y){
		this.x = x;
		this.y = y;
	}

	var Flag = function(coord, color, rotation){

		this.coord = coord;
		this.rotation = rotation;

		switch(color){
			case 0:
				this.color = 'black';
				break;
			case 1:
				this.color = 'blue';
				break;
			case 2:
				this.color = 'red';
				break;
			case 3:
				this.color = 'yellow';
				break;
			default:
				this.color = 'black';
		}
		
	}

	Flag.prototype.toHTMLString = function(){
		var imgsrc 	= 'assets/img/flag-' + this.color + '.png';

		var style 	= '';

		//apply rotation
			style 	+= '-webkit-transform: rotate(' + this.rotation + 'deg); transform: rotate(' + this.rotation + 'deg);';

		//apply position
			style	+= 'top: ' + this.coord.y + 'px; left: ' + this.coord.x + 'px;';

		return '<img src="' + imgsrc + '" style="' + style + '" />';
	}

	var FlagsGroup = function(containerSelector){

		this.flags = [];
		this.containerSelector = containerSelector;

	}

	FlagsGroup.prototype.add = function(x, y){

		var coord 			= new Coord(x, y);
		var randomColor 	= Math.floor(Math.random() * 4);
		var randomRotation 	= Math.floor(Math.random() * 360) - 180; //-180 to 180
		
		this.flags.push(new Flag(coord, randomColor, randomRotation));

	}

	FlagsGroup.prototype.render = function(flag){
		$(this.containerSelector).append(flag.toHTMLString());
	}

	FlagsGroup.prototype.renderAll = function(){

		for(var i = 0; i < this.flags.length; i++){
			var currentFlag = this.flags[i];
			this.render(currentFlag);
		}

	}

	return FlagsGroup;

})();