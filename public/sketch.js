// INTERACCION 
var tamano = 400;
var distancia = 40;
var max_distance = 100;
// NOISE MOUSE 
var increment = 0.01; 
var zincrement = 0.02;
var zoff = 0.0;
var tam = 0; 
// FORM 


function setup() {
    // create canvas
    createCanvas(windowWidth, windowHeight, WEBGL);
    //ortho(0, width*2, height/2, -height/2, 0.1, 100);
    //noCursor();
    //ortho();
}

function draw() {
    background(0);
    //pointLight(150, 100, 0, 500, 0, 200);
    // Blue directional light from the left
    //directionalLight(0, 102, 255, -1, 0, 0);
    // Yellow spotlight from the front
    //pointLight(255, 255, 109, 0, 0, 300);
    // Trasladando cordenadas a 0, 0 Processing style
    //translate(-width/2,-height/2,-100);
    //orbitControl(); 
    colorMode(RGB);
    for(var y = -height; y < height+distancia; y+=distancia){
        for(var x = -width; x < width; x+=distancia){


// Scaling Hue gradient to width and Brightness to height 
var b1 = color(255);
var b2 = color(138);
var c = lerpColor(b1, b2, map(x, -width, width/1.5, 0, 1));
fill(c);
push();
//rotate(PI/4, [1,1,0]);
translate(x,y,-100 * noise((frameCount * 0.02),0,1,0,-1000));

rotateX(radians(map(mouseY,0,width,0,360)));
rotateY(radians(map(mouseX,0,width,0,360)));

    
    if(y%3 === 0){
    	sphere(distancia/3); 
        //cone(distancia/3,distancia);
    }else{
        box(distancia/3);
    }

pop();  

} 
}
colorMode(RGB,255);



}

function windowResized() {
    // Responsive sketch by resizing canvas
    resizeCanvas(windowWidth, windowHeight);
}

   /// for(var y = 0; y < height+distancia; y+=distancia){
     //for(var x = 0; x < width; x+=distancia){   
/*
line(0, 0, x2, y2);
line(width, 0, x2, y2);
line(width, height, x2, y2); 
line(0, height, x2, y2);
*/


//       line(x, y, x2, y2);
//       ellipse(x, y, 7, 7);
//       ellipse(x2, y2, 7, 7);

//   // d is the length of the line
//   // the distance from point 1 to point 2.
//   var d = int(dist(x, y, x2, y2));
//   // Let's write d along the line we are drawing!
//   push();
//   translate( (x+x2)/2, (y+y2)/2 );
//   rotate( atan2(y2-y,x2-x) );
//   pop();
//         //ellipse(0, 0, distancia/2, distancia/2);
//     }
// }