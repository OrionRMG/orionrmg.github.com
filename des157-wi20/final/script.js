window.onload=function(){
    "use strict";

    const can = document.querySelector("canvas");
    const controls = document.getElementsByClassName("control");
    const colors = document.getElementsByClassName("color");
    let controlIndex = 0;

    function deactivate(c){
        c.getAttribute("src").replace("1", "0");
    }

    function activate(c){
        c.getAttribute("src").replace("0", "1");
    }
    
    controls[1].addEventListener("click", function(){
        if(controlIndex != 1){
            controls[1].src = "images/lineS1.png";
        }
    });

    const canvas = new fabric.Canvas('can');
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 5;
    canvas.freeDrawingBrush.color = "#000";
}