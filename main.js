var canvas= new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_image_width=20;
block_image_height=30;


var player_object = "";
var block_image_object = "";


function playerupdate(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({ top:player_y, left:player_x });
         canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
             top:player_y,
              left:player_x 
            });
         canvas.add(block_image_object);
    });   
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80'){
    console.log("shiftKey and p is pressed");
    block_image_width=block_image_width+10;
    block_image_height=block_image_height+10;
    document.getElementById("current width").innerHTML=block_image_width;
    document.getElementById("current height").innerHTML=block_image_height;

}

if(e.shiftKey == true && keyPressed == '77'){
    console.log("shiftKey and m is pressed");
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("current width").innerHTML=block_image_width;
    document.getElementById("current height").innerHTML=block_image_height;
    
}

if (keyPressed == '38'){
    console.log("up");
    upkey();

}
if (keyPressed == '40'){
    console.log("down");
    downkey();

}
if (keyPressed == '39'){
    console.log("right");
    rightkey();

}
if (keyPressed == '37'){
    console.log("left");
    leftkey();

}
if (keyPressed == '87'){
    console.log("w");
    new_image('wall.jpg');

}
if (keyPressed == '68'){
    console.log("d");
    new_image('dark_green.png');

}
if (keyPressed == '76'){
    console.log("l");
    new_image('light_green.png');
}
if (keyPressed == '67'){
    console.log("c");
    new_image('cloud.jpg');
}
if (keyPressed == '85'){
    console.log("u");
    new_image('unique.png');
}
if (keyPressed == '84'){
    console.log("t");
    new_image('trunk.jpg');
}



}
