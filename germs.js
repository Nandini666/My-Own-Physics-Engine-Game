class germs
{
	constructor(x,y,r)
	{
            var options = {
                'restitution':0.8,
                'friction':1.0,
                'density':1.0,
            this.image = loadImage("germs.png")
		}
		
		this.body=Bodies.circle(x,y, r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var angle=this.body.angle;
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rotate (angle);
			//strokeWeight(4);
			fill(255,0,255)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			pop()
			
	}

}