function Snake(bundle) {
    let x = bundle.x;
    let y = bundle.y;
    let c = bundle.c;
    let tail = bundle.tail;
    let trail = [];
    let vx = 0;
    let vy = 0;
    let a = bundle.a;
    let dir, prevDir;

    function drawSnake() {
        changeDir();
        move();
        eat();
        drawTail();
    }

    function moveDir(keyCode) {
        if (keyCode >= 37 && keyCode <= 40) {
            dir = keyCode % 37;
        }
    }

    function changeDir() {
        if (prevDir === undefined
            || (prevDir !== dir
                && prevDir !== (dir + 2) % 4)) {

            const values = [0, -1, 0, 1];

            prevDir = dir;

            vx = values[(dir + 1) % 4];
            vy = values[dir];
        }
    }

    function move() {
        if (vx !== undefined && vy !== undefined) {
            x += vx;
            y += vy;
            wrap();
        }
    }

    function wrap() {
        if (x < 0) x = c.g.tc - 1;
        if (x > c.g.tc - 1) x = 0;
        if (y < 0) y = c.g.tc - 1;
        if (y > c.g.tc - 1) y = 0;
    }

    function eat() {
        if (x === a.getX() && y === a.getY()) {
            a.setX(Math.floor((Math.random() * c.g.tc)));
            a.setY(Math.floor((Math.random() * c.g.tc)));
            tail++;
        }
    }

    function drawTail() {
        c.ctx.fillStyle = "lime";
        for (let i = 0; i < trail.length; i++) {
            c.ctx.fillRect(
                trail[i].x * c.g.gs + 2,
                trail[i].y * c.g.gs + 2,
                c.g.gs - 2,
                c.g.gs - 2
            );
            if (x === trail[i].x
                && y === trail[i].y) {
                tail = 5;
            }
        }
        trail.push({ x: x, y: y });

        while (trail.length > tail) {
            trail.shift();
        }
    }

    function getX() { return x; }
    function getY() { return y; }

    return Object.create({ getX, getY, drawSnake, moveDir })
}