class Paper{
    constructor(x,y){
        var opt={
            restitution: 0.5,
            density: 1.2,
            friction: 1
        }
        this.body = Bodies.circle(x,y,20,opt);
        this.body.x = x;
        this.body.y = y;

        this.image=loadImage("crumbledBall.png");
        this.image.scale=0.2;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("white");
        circle(0,0,20);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        
        
        pop();
    }
}