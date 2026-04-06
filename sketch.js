// //	1.	创建一个发射器（Emitter），它是粒子的源头。
// // 	2.	创建粒子（Particle），每个粒子有独立的生命周期和行为。
// // 	3.	使用物理引擎中的加速度、速度来控制粒子的运动。
// // 	4.	根据需要添加外力（如风）来影响粒子的运动方向。
// // 	5.	显示粒子，应用图像（纹理）来渲染粒子外观。
// // 	6.	在每一帧更新时，添加新粒子、更新粒子的状态，逐步产生烟雾效果。


// // 1.	先完成 Particle.js，测试一个单独的粒子是否能正确移动和消失。
// // 2.	再写 Emitter.js，确保它可以生成多个粒子，并管理它们的生命周期。
// // 3.	最后写 sketch.js，让 Emitter 持续运行并添加外部影响（如风）。



let emitter;
let img;
let column=[];
let b=0;

function preload(){
  img = loadImage("texture.png");
}
function setup() {
  
  createCanvas(windowWidth, windowHeight,WEBGL);
  emitter = new Emitter(0,75,img);

}

function draw() {
  blendMode(ADD);
  background(0);

  let dx = map(mouseX, 0, width, -0.2, 0.2);
  let wind = createVector(dx, 0);
  emitter.applyForce(wind);

  emitter.updatePosition(mouseX - width / 2, mouseY - height / 2);

  emitter.run();
  for (let i = 0; i < 3; i++) {
    emitter.addParticle();
  }

  orbitControl();
}

