const box = document.getElementById("box");
const cube = document.getElementById("cube");
let width = box.clientWidth;
let height = box.clientHeight;
let moveLeft = 0;
let moveDown = 0;
let x=0;
let y=0;
function moveCube(e) {
    if (e.key == "ArrowRight") {
        x = moveLeft + cube.clientWidth*2;
        if (x < width){
            moveLeft += cube.clientWidth;
            cube.style.left = moveLeft + "px";
        }
        
    } else if (e.key == "ArrowLeft") {
        x= moveLeft;
        if (x > 0) {
            moveLeft -= cube.clientWidth;
            cube.style.left = moveLeft + "px";
        }
    } else if (e.key == "ArrowDown") {
        y= moveDown + cube.clientWidth*2;
        if(y <= height){
            moveDown += cube.clientHeight;
            cube.style.top = moveDown + "px";
        }
    }  else if (e.key == "ArrowUp") {
        y = moveDown;
        if (y >0) {
            moveDown -= cube.clientHeight;
            cube.style.top = moveDown + "px"
        }
    }
}

document.addEventListener("keydown", moveCube);
