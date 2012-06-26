var canvas = document.getElementById('madCircles');
var context = canvas.getContext('2d');
circle.call(context, 250, 250, 250, '#FFF', '#000');
circle.call(context, 50, 50, 5, '#ccc');
circle.call(context, 100, 20, 10, '#bbb');
circle.call(context, 200, 150, 70, '#ddd');

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