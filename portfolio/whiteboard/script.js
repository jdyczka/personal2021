
var c = document.getElementById( 'my-canvas' );
var ctx = c.getContext( "2d" );

ctx.lineCap = 'round';

var activeColor = '#000000';
var activeStroke = 3;

document.getElementById( 'clear-canvas').addEventListener( 'click', function() {
	ctx.clearRect( 0, 0, c.width, c.height );
});

// ctx.clearTo = function(fillColor) {
//     ctx.fillStyle = fillColor;
//     ctx.fillRect(0, 0, width, height);
// };

var colors = document.querySelectorAll('.colors li');
for ( i = 0; i < colors.length; ++i ) {
	colors[i].onclick = function() {
		document.getElementById('color-picker').classList.remove('active');
		for ( i = 0; i < colors.length; ++i ) {
			colors[i].classList.remove('active');
		}
		this.classList.add('active');
		activeColor = this.style.backgroundColor;
	}
}
document.getElementById('color-picker').onclick = handleColorPicker;  
document.getElementById('color-picker').oninput = handleColorPicker;  

function handleColorPicker() {
	if ( document.querySelector('.colors li.active').lenght ) {
		document.querySelector('.colors li.active').classList.remove('active');
	}
	this.classList.add('active');
	activeColor = this.value;
};

var strokes = document.querySelectorAll('.strokes li');
for ( i = 0; i < strokes.length; ++i ) {
	strokes[i].onclick = function() {
		for ( i = 0; i < strokes.length; ++i ) {
			strokes[i].classList.remove('active');
		}
		this.classList.add('active');
		activeStroke = this.clientWidth / 3;
	}
}


var btnDraw = document.getElementById('draw');
var btnErase = document.getElementById('erase');
var rememberStroke = activeStroke;
btnDraw.onclick = function() {

	activeStroke = rememberStroke;
	ctx.globalCompositeOperation = 'source-over';
	
	this.classList.add('active');
	btnErase.classList.remove('active');
};
btnErase.onclick = function() {

	rememberStroke = activeStroke;
	activeStroke = 20;
	ctx.globalCompositeOperation = 'destination-out';

	this.classList.add('active');
	btnDraw.classList.remove('active');
};



line();
function line() {
	c.addEventListener('mousedown', function(ev) {

		console.log('start line');
		
		ctx.beginPath();
		ctx.arc( ev.clientX, ev.clientY, activeStroke / 2, 0, 2 * Math.PI, false );
		ctx.fillStyle = activeColor;
      	ctx.fill();
		
		ctx.beginPath();
		ctx.strokeStyle = activeColor;
		ctx.lineWidth = activeStroke;
		ctx.moveTo( ev.clientX, ev.clientY );
		
		c.addEventListener('mousemove', drawLine );
	});
	c.addEventListener( 'mouseup', function(ev) {
		c.removeEventListener('mousemove', drawLine );
	});
}
function drawLine(ev) {
	console.log('draw line');
	ctx.lineTo( ev.clientX, ev.clientY );
	ctx.stroke();
}
