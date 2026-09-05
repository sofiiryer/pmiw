function moverNaruto(x,velocidad){
  
  return x + velocidad;
  
}

 function dibujarNaruto(animacion,frame, x, y) {
   image(animacion[frame], x, y, 110, 110);
   
   
 }
 
 function llegaAlCentro(posX){
 return posX >= 345;
 
 
 }
 function avanzarSprite(sprite,cantidadFrames,velocidad ) {
   if (frameCount % velocidad == 0) {
     sprite++;
   }
   if(sprite >=cantidadFrames) {
     sprite = 0;
   }
   return sprite;
 }
 
function reiniciarEscena() {
posX = -90;
  posY = 380;

  estado = 0;
  contador = 0;
  sprite = 0;

  posFondo[0] = 0;
  posFondo[1] = anchoFondo;
  posFondo[2] = anchoFondo * 2;

  Pospiso[0] = 0;
  Pospiso[1] = width;
  Pospiso[2] = width * 2;
}
