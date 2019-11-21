let myCanvas = document.getElementById('canvas');
let ctx = myCanvas.getContext('2d');
let grd = ctx.createRadialGradient(200, 50, 5, 200, 60, 120);

function picture() {
    grd.addColorStop(0, "white");
    grd.addColorStop(1, "blue");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 400, 100);
    ctx.font = '30pt Calibri';
    ctx.fillStyle = '#ff1a48';
    ctx.fillText('I am in a canvas!', 60, 60);
}

function clearCan() {
    ctx.clearRect(0, 0, 400, 100);
}




