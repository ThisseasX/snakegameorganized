function Apple(bundle) {
    let x = bundle.x;
    let y = bundle.y;
    let c = bundle.c;

    function drawApple() {
        c.ctx.fillStyle = "red";
        c.ctx.fillRect(x * c.g.gs + 2, y * c.g.gs + 2, c.g.gs - 2, c.g.gs - 2);
    }

    function getX() { return x }
    function getY() { return y }
    function setX(newX) { x = newX; }
    function setY(newY) { y = newY; }

    return Object.create({ getX, getY, setX, setY, drawApple })
}