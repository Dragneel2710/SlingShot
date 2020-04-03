class Box {
    constructor (x,y,width,height){
        var options ={
            'restitution' : 0.8,
            'friction' : 1,
            'density' : 1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        Push();
        translate(this.body.position.x, this.body.podition.y);
        rotate(angle);
        rectMode(CENTER);
        rectangle(0,0,this.width,this.height);
        pop();
    }
};