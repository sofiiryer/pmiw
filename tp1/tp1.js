
// REINICIO AUTOMATICO!!!

let corriendo = [];
let quieto = [];
let jutsu = [];

let piso = [] ;
let Pospiso  = [];

let posX, posY, vel;


let fondo = [];
let posFondo = [];
let anchoFondo;

let estado;
let contador;
let sprite;
let velAnim;

function preload() {
  
  for(let i = 0; i< 3; i++) {
    fondo[i] = loadImage("data/BackgroundsSky.png");
  }
 
  for (let i = 1; i <=3; i++) {
    jutsu[i - 1] = loadImage("data/sprite-15-" + i + ".png");//jutsu principio
  }
  // tuve que agregarlos asi ya que los sprites no son consecutivos 
  jutsu[3] = loadImage("data/sprite-15-4.png");
  jutsu[4] = loadImage("data/sprite-14-1.png");
  jutsu[5] = loadImage("data/sprite-14-3.png");
   
  
 for (let i = 0; i < 3; i++) {
    piso[i] = loadImage("data/sprite-6-2.png");
 }
  for (let i = 1; i <= 6; i++) {
    corriendo[i - 1] = loadImage("data/sprite-3-" + i + ".png");
  }
  
  for (let i = 1; i <= 6; i++) {
    quieto[i - 1] = loadImage("data/sprite-1-" + i +".png");
  }
  
  
 
}
function setup() {
createCanvas(800,600);
// posicion afuera izq naruto
  posX= -90; 
  posY=380;

  vel = 4;
  estado = 0;
  contador = 0;
  sprite = 0;
  velAnim = 12;
  
 Pospiso[0] = 0;
Pospiso[1] = width;
Pospiso[2] = width * 2;

anchoFondo = fondo[0].width * (height / fondo[0].height);//calcular el ancho de la imagen del fondo
posFondo[0] = 0;
posFondo[1] = anchoFondo;
posFondo[2] = anchoFondo * 2;




}


function draw() {
  background(0);
  contador++;
  
  if(estado === 0) {
    
   if (llegaAlCentro(posX)){
     posX = 345;
     estado =1;
     contador = 0;
     sprite = 0;
      }
  }
  //corre en el lugar
  else if (estado === 1){
    if(contador > 400){
      estado = 2;
      contador = 0;
      sprite = 0;
    }
  }
  else if (estado === 2) {
    if (contador > 120) {
      estado = 3;
      contador = 0;
      sprite = 0;
    }
  }
  else if(estado === 3) {
    
  }
  
  if (estado === 0) {
  posX =  moverNaruto(posX,vel);
 sprite = avanzarSprite(sprite,6, velAnim);
    //posX += 4;
  
   // if (sprite >=6) {
   //   sprite = 0;
   // }
    
   
   }
   
   //corre en el lugar
  if (estado === 1) {
   sprite = avanzarSprite(sprite,6,velAnim);
    
  
  // Movimiento del fondo y piso
    for (let i = 0; i < 3; i++) {

      posFondo[i] -= 4;

      if (posFondo[i] <= -anchoFondo) {
        posFondo[i] += anchoFondo * 3;
      }


      Pospiso[i] -= 6;

      if (Pospiso[i] <= -800) {
        Pospiso[i] += 2400;
      }
    }    
  }
  
  if (estado === 2) {

    //animación de quieto
   sprite = avanzarSprite(sprite,6,velAnim);
  }
  
  
  if (estado === 3) {
    if(frameCount % velAnim === 0){
      sprite++;
    }
  if(sprite >= 6){
    estado = 4;
    contador = 0;
    sprite = 0;
  }
  }
  if (estado === 4) {
  if (contador > 60) {
    reiniciarEscena();
  }
}

  for (let i = 0; i < 3; i++) {

    image(fondo[i],posFondo[i],-60,anchoFondo,height);
  }
  
  for (let i = 0; i < 3; i++) {
    image(piso[i],Pospiso[i],400,800,200);
  }
  
  //naruto
  
  if (estado === 0 || estado === 1) {

    dibujarNaruto(corriendo, sprite, posX, posY);

  } else if (estado === 2) {

    dibujarNaruto(quieto, sprite, posX, posY);
  }
  
  else if(estado === 3) {
    dibujarNaruto(jutsu,sprite,posX,posY);
  }
  
  
  
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  
  
  
  
  
  
  
