class Box{
    constructor(x,y,width,height){
        var opt={
            isStatic: true
        }

        this.body=Bodies.rectangle(x,y,width,height,opt);
        this.body.width=width;
        this.body.height=height;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
    
        push();
        rectMode(CENTER);
        translate(pos.x,pos.y);
        fill("red");
        rect(0,0,this.body.width,this.body.height);
        pop();
    }
}