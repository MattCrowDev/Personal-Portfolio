



var canvas = document.getElementById("canvas"),
ctx = canvas.getContext("2d");

var useWidth = window.innerWidth
var useHeight = window.innerHeight

canvas.width =  useWidth
canvas.height = useHeight

var x = useWidth / 2,  //initial x
y = useHeight /2,  // initial y
velY = 0,
velX = 0,
speed = 7, // max speed
friction = 0.98, // friction
keys = [];

function update() {
requestAnimationFrame(update);

// check the keys and do the movement.
if (keys[38]) {
    if (velY > -speed) {
        velY--;
    }
}

if (keys[40]) {
    if (velY < speed) {
        velY++;
    }
}
if (keys[39]) {
    if (velX < speed) {
        velX++;
    }
}
if (keys[37]) {
    if (velX > -speed) {
        velX--;
    }
}

// apply some friction to y velocity.
velY *= friction;
y += velY;

// apply some friction to x velocity.
velX *= friction;
x += velX;

// bounds checking
if (x >= useWidth- 20) {
    x = useWidth - 20;
} else if (x <= 0) {
    x = 0;
}

if (y > useHeight - 20) {
    y = useHeight - 20;
} else if (y <= 0) {
    y = 0;
}

// do the drawing
ctx.clearRect(0, 0, useWidth, useHeight);

var img = document.getElementById("player");
ctx.drawImage(img, x, y, 20, 20);
}

update();

// key events
document.body.addEventListener("keydown", function (e) {
keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
keys[e.keyCode] = false;
});