class Rope {
    constructor(A, B) {
        var options = {
            bodyA: A,
            pointB: B,
            stiffness: 0.09,
            length: 400
        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope)
        this.pointB = B
    }

    display() {
        var pointA= this.rope.bodyA.position;
        var pointB= this.pointB;
        push()
        strokeWeight(3)
        stroke("white")
        line(pointA.x,pointA.y,pointB.x,pointB.y)
        pop();
    }

}