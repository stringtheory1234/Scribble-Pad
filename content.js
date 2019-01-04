
var s = function( sketch ) {

  sketch.setup = function() {
  	let h=document.body.clientHeight;
  	document.body.style['userSelect']='none';
    let c=sketch.createCanvas(sketch.windowWidth, h);
    c.position(0, 0);
    c.style('pointer-events', 'none');
    sketch.clear();
  };

  sketch.draw = function() {
    sketch.stroke(0);
	sketch.strokeWeight(4);
	sketch.rect(10, 45, 30, 40);
	sketch.fill(255, 0, 255);
		if(sketch.mouseIsPressed){
		sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
	}
  };
};

var myp5 = new p5(s);








