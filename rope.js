class Rope {
    constructor (body1, body2, offsetx, offsetY) {
        this.offsetx =offsetx
        this.offsetY =offsetY
        var options={
        bodyA: roof.body,
        bodyB: constraintBob.body,
        stiffness:0.04,
        pointB:{x: this.offsetx, y:this.offsetY}
        
        }
        this.rope = Constraint.create(options)
        World.add(world,this.rope)
    }
    display(){
        var pointA=bobObj.body.position
        var pointB=constraintRoof.body.position
        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    
    }
    }