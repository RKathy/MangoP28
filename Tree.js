class Tree {
    constructor(x,y) {
      var options = {
          'restitution':0.5,
          'friction':1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20,height,options);
      this.body=loadImage("\tree.jpg")
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;  
      rectMode(CENTER);
      
    }
  };