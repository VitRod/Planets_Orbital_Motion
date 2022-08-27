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

    function Planet (name, color, bodySize, orbitRadius, orbitPeriod) {
        this.addPlanet = function (planet) {
            this.planets.push(planet);
        };

    drawBackground(context);
         this.calculatePos = function (p) {
            if(drawPath)
                this.bodySize = 1 / zoom;
            else
                this.bodySize = normalizePlanetSize(bodySize);

            this.orbitRadius = normalizeOrbitRadius(orbitRadius);

            if(this.orbitSpeed == 0.0){
                return p;
            }

            this.orbitSpeed = this.calculateSpeed(orbitPeriod);
            var angle = renderTime * this.orbitSpeed;
            var point = new Point(this.orbitRadius * Math.cos(angle) + p.x, this.orbitRadius * Math.sin(angle) + p.y);

            return point;
         };

         this.drawSelf = function (context, p) {
            if (p.x + this.bodySize < 0 || p.x - this.bodySize >= context.canvas.width) return;
            if (p.y + this.bodySize < 0 || p.y - this.bodySize >= context.canvas.height) return;

            context.lineWidth = 0.5;
            context.fillStyle = this.color;
            context.strokeStyle = this.color;

            if(this.bodySize >= 2.0){ 
                
            }

        }

    };


    



            function draw() {
                var time = (new Date()).getTime();
                // if (renderTime != null) showFps(1000 / (time - renderTime));
                renderTime = time;
        
                if (!drawPath)
                    drawBackground(context);
        
                drawPlanets(context);
        
                requestRedraw();
            }
        
            function drawBackground(context) {
                context.clearRect(0, 0, width, height);
            }
        
            function drawPlanets(context) {
                sun.draw(context, new Point(width / 2, height / 2));
            }
        
            function requestRedraw() {
                window.requestAnimationFrame(draw);
            }
        
            setCenterPlanet(sun);
            requestRedraw();
    
}