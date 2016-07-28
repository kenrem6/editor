
/* Javascript file. */

$(document).ready(function(){
	
	/* Innholdsliste main:
	     1. Constants
	     2. Variables 
	     3. Screen objects
	     4. Game objects
	     5. Functions 
	     6. Event handlers
	     7. Game engine*/

	function main(){
		// Constants
		// 	Get the inner width and height from the window object. Docs @ http://www.w3schools.com/jsref/prop_win_innerheight.asp
		var CANVAS_width = window.innerWidth - (window.innerWidth/10); 		
		var CANVAS_height = window.innerHeight - (window.innerHeight/10);
		var FPS = 60.0;

		// Variables
		var currentKey;

		// Canvas objects
		var $c = $('#jonasCanvas');                      // jQuery canvas object
		var c = document.getElementById("jonasCanvas");  // javascript canvas object
		var ctx = c.getContext("2d");                    // draw object

		$c.attr('width', CANVAS_width);
		$c.attr('height', CANVAS_height);

		// Draw objects
		var arc1 = {                       // arc can create circles
			     x : 300,
			     y : 300,
		       rad : 50,
		       start : 0,
		       end : 2 * Math.PI,
		       speed : 5,
		       draw : function() {
		       		ctx.arc(arc1.x, arc1.y, arc1.rad, arc1.start, arc1.end);
		       }
		};

		// Functions
		function transformArc(arc, xdelt, ydelt){
			arc.x += xdelt * arc.speed;
			arc.y += ydelt * arc.speed;
		};
		
		function update(){

			switch(currentKey){
				case 37:
					transformArc(arc1, -1, 0)	// left
					break;
				case 38:
					transformArc(arc1, 0, -1)	// up
					break;
				case 39:
					transformArc(arc1, 1, 0)	// right
					break;
				case 40:
					transformArc(arc1, 0, 1)	// down
					break;
				case 32:
					arc1.speed += .1;			// space
					break;
				default:
					break;
			};
		};

		function draw(){
			/*  The draw function is more static than the update funciton.
				 Nothing should change here, and the variables that are used in the draw
				  funciton should only be modified somewhere else. */

			ctx.clearRect(0,0,CANVAS_width, CANVAS_height)   // Clear entire canvas before every loop.
			ctx.beginPath();
			arc1.draw();
			ctx.stroke();
		};

		// Events
		$(document).keydown(function(e){
			console.log(e.which);
			currentKey = e.which;
		}); 

		
		// Game engine loop
		setInterval(function(){
			update();
			draw();
		}, 1000/FPS);
	};

	main()

});