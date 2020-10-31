class Stone{
    constructor(x,y,width,height){

        var options={
            'isStatic':false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.image=loadImage("sprites/stone.png");
        World.add(world, this.body);
    }
    display(){
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
        var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
}
}