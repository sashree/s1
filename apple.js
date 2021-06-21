class apple {
    constructor(x,y,r){
        var options= {restitution:0.5}
this.r=r
this.image=loadImage("apple.png")
this.body=Bodies.circle(x,y,this.r,options)
World.add(world,this.body)
    }
    display(){
       var  pos=this.body.position
       var  angle=this.body.angle
       push ()
       translate (pos.x,pos.y)
       rotate (angle)
       image(this.image,0,0,this.r,this.r)
       pop ()
    }
}