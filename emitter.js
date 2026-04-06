
class Emitter {
    constructor(x, y, img) {
      this.particles = []; // 存储所有粒子
      this.origin = createVector(x, y); // 记录发射器的原点
      this.img = img;
    }
  
    run() {
      for (let particle of this.particles) {
        particle.run();
      }
      this.particles = this.particles.filter(particle => !particle.isDead());
    }
  
    applyForce(dir) {
      for (let particle of this.particles) {
        particle.applyForce(dir);
      }
    }
  
    addParticle() {
      this.particles.push(new Particle(this.origin.x, this.origin.y, this.img));
    }
  
    // **新增：更新Emitter的位置**
    updatePosition(x, y) {
      this.origin.set(x, y);
    }
  }