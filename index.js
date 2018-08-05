let g = new Grid({ gs: 40, tc: 20 });
let c = new Canvas(g);
let a = new Apple({ x: 15, y: 15, c: c })
let s = new Snake({ x: 10, y: 10, g: g, c: c, tail: 5, a: a });

document.addEventListener("keydown", keyPress);
function keyPress(e) { s.moveDir(e.keyCode); }

setInterval(draw, 1000 / 15);

function draw() {
    c.drawBackground();
    s.drawSnake();
    a.drawApple();
}