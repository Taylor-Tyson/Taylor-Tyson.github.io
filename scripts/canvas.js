

let myCanvas = document.getElementById('canvas');
let ctx = myCanvas.getContext('2d');
let image = new Image();
image.src = "/media/smiley_150.jpg";

function smile() {
    //Code referenced: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    ctx.stroke();
}


function clearCan() {
    // ctx.clear();
    // ctx.beginPath();
    // ctx.clearRect(0, 0, ctx.width, ctx.height);
    // ctx.restore();
    console.log("Cleared");
    // ctx.rotate((20 * Math.PI / 180));
    ctx.save(); // save current state
    ctx.rotate(Math.PI); // rotate
    // ctx.drawImage(link,x,y,20,20); // draws a chain link or dagger
    ctx.restore(); // restore original states (no rotation etc)
}

function picture() {
    ctx.drawImage(image,12,12);
}

function loop() {
    let i;
    setTimeout(function() {
        ctx.clearRect(0, 0, 176, 176);
        rotateImg(image, 20, 40, 70, 70, i);
        loop();
        console.log("Called loop in loop.");
        i++;
        console.log(i);
    }, 1000/2)   
}  



function rotateImg(img, x, y, width, height, deg) {
    let rad = deg * Math.PI /180;
    ctx.translate(x + width / 2, y + height / 2);
    ctx.rotate(rad);
    ctx.drawImage(img, width / 2 + (-1), height / 2 * (-1), width, height);
    ctx.rotate(rad * (-1));
    ctx.translate((x + width / 2) * (-1), (y + height / 2) * (-1));
    console.log("Called rotate");
}