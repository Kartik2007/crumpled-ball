class Dustbin{
constuctor(x,y){

this.x = x
this.y = y
this.dbWidth = 200
this.dbheight = 100
this.wallthickness = 20
this.bottombody = Bodies.rectangle(this.x,this.y,this.dbWidth,this.wallthickness,{isStatic:true})
this.leftbody = Bodies.rectangle(this.x-this.dbWidth/2,this.y-this.dbheight,this.wallthickness,this.dbheight,{isStatic:true})
this.rightbody = Bodies.rectangle(this.x+this.dbWidth/2,this.y-this.dbheight/2,this.dbWidth,this.wallthickness,{isStatic:true})
 
World.add(world,this.bottombody)
World.add(world,this.leftbody)
World.add(world,this.rightbody)





}
display(){

var bottom = this.bottombody.position;
var left = this.leftbody.position;
var right = this.rightbody.position;
rectMode(CENTER)
rect(bottom.x,bottom.y,this.dbWidth,this.wallthickness)
rect(left.x,left.y,this.dbWidth,this.wallthickness)


}







}