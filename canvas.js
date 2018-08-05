function Canvas(bundle) {
    let cvs = document.getElementById("cvs");
    let ctx = cvs.getContext("2d");
    let g = bundle;
    cvs.width = cvs.height = g.gs * g.tc + 2;

    drawBackground = function () {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, cvs.width, cvs.height);
    }

    return Object.create({ cvs, ctx, g, drawBackground })
}