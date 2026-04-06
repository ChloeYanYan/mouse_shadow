class Particle{
    constructor(x,y,img){
        this.pos = createVector(x,y);
        let vx = randomGaussian() * 0.3;
        let vy = randomGaussian() * 0.3 - 1.0;
        this.vel = createVector(vx,vy);//速度
        this.acc = createVector(0,0);//加速度
        this.lifespan = 100.0;
        this.img = img;
    }

    run(){
        this.update();
        this.show();
    }

    //apply a force vector to the Particle object
    applyForce(f){
        this.acc.add(f);
    }

    //update the position of particle
    update(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.lifespan -= 2.5;
        this.acc.mult(0);  //clear acceleration
    }

    //display
    show(){
        push();
        translate(this.pos.x, this.pos.y);
        noStroke();
        texture(this.img);
        // tint(255,100,255,this.lifespan);
        tint(0,80,255,this.lifespan);
        square(0,0,80);
        // circle(0,0,80);
        pop();
    }

    isDead(){
        if(this.lifespan <= 0.0){
            return true;
        }else{
            return false;
        }
    }

}

