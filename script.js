var renderTime;
var fpsAverage;

var canvas, notes, context;
var width, height;

var centerPlanet;
var mercury, venus, earth, moon, jupiter, io, europa, ganymede, callisto, sun;

var drawPath = false;

var speedRation = 1.0;

var zoom = 1.0;

function zoomIn() {
    drawBackground(context);
    zoom /= 2;
}

function zoomOut(){
    drawBackground(context);
    zoom *= 2;
}

function zoomDefault() {

}

function speedUp() {

}

function speedDown() {

}

function speedDefault() {

}

function Point (x,y) {
    this.x = x;
    this.y = y;
}

function setCenterPlanet (planet) {

}

function drawBackground (context) {
    context.clearRect(0, 0, width, height);
}

function reverseDrawPath() {

}

function getRandomColor() {
    
}