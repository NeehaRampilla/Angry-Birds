class Slingshot{
    constructor(body1,body2){
        var opition= {
            bodyA:body1,
            bodyB:body2,
            length:10,
            stiffness:0.04,
        }
    this.sling=Constraint.create(opition);
    World.add (world, this.sling);

            }
    display(){
        var point1 = this.sling.bodyA.position;
        var point2 = this.sling.bodyB.position;
        push ();
        strokeWeight(4);
        line (point1.x, point1.y, point2.x, point2.y);
        pop ();

    }

}