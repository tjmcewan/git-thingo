(function() {
var canvas = document.getElementById('madCircles');
var context = canvas.getContext('2d');
circle.call(context, 250, 250, 250, '#FFF', {'colour':'#000', ''});

function circle(x, y, radius, colour, border) {
	this.beginPath(); 
	this.arc(x, y, radius, 0, 360);
	this.closePath();
	if (border) {
		this.strokeStyle = border;
		this.stroke();
	}
	if (colour) {
		this.fillStyle = colour;
		this.fill();
	}
}
}())