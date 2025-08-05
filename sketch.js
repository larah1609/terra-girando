function setup() {
  createCanvas(1920, 1080, WEBGL); //plano 3D
  terra=loadImage('terra.jpg')
}

function draw() {
  background(300, 119, 80); //cor de fundo
  rotateY(millis()/1000); // rotação da terra
  texture(terra); //textura da terra, imagem.
  sphere(120, 140); //esfera 3D
  
  
}
