canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="pink";

ctx.beginPath();
ctx.strokeStyle - "blue";
ctx.lineWidth=1;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle - "yellow";
ctx.lineWidth=1;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle - "black";
ctx.lineWidth=1;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle - "green";
ctx.lineWidth=1;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle - "red";
ctx.lineWidth=1;
ctx.rect(150,143,430,200);
ctx.stroke();

canvas.addEventListener("mousedown",my_mouse_down);

function my_mouse_down(e){
    color = document.getElementById("color").value; 
    console.log(color);
    mouse_x = e.clientX-canvas.offsetLeft;
    mouse_y = e.clientY-canvas.offsetTop;
    console.log("x ="+mouse_x+"y= "+mouse_y);
    circle(mouse_x,mouse_y);
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

