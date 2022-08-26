var renderTime;
var fpsAverage;

var canvas, notes, context;
var width, height;

var centerPlanet;
var mercury, venus, earth, moon, jupiter, io, europa, ganymede, callisto, sun;

var drawPath = false;

var speedRatio = 1.0;

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
    drawBackground(context);
    zoom = 1.0;
}

function speedUp() {
    drawBackground(context);
    speedRatio *= 2;
}

function speedDown() {
    drawBackground(context);
    speedRatio /= 2;
}

function speedDefault() {
    drawBackground(context);
    speedRatio = 1.0;
}

function Point (x,y) {
    this.x = x;
    this.y = y;
}

function setCenterPlanet (planet) {
    drawBackground(context);
    centerPlanet = planet;
}

function drawBackground (context) {
    context.clearRect(0, 0, width, height);
}

function reverseDrawPath() {
    drawBackground(context);
    drawPath = !drawPath;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

window.onload = function (){
    canvas = document.getElementById("area");
    notes =  document.getElementById("fps");
    context = canvas.getContext('2d');

    width = document.body.clientWidth;
    canvas.width = width;
    height = document.body.clientHeight;
    canvas.height = height;

    function normalizeOrbitRadius(r) {
        var radius = r * (width / 10.0 / zoom);
        return radius;
    };

    function normalizePlanetSize(r) {
        var size = Math.log(r + 1) * (width / 100.0 / zoom);
        return size;
    };





}