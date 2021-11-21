class Connection {
    constructor(x,y) {
        var properties = {
            pointA : x,
            bodyB : y,
            stiffness : 0.04,
            length : 10
        }
        this.connection = Constraint.create(properties);
        World.add(world, this.connection);
    }
    display() {
        var a = this.connection.pointA;
        var b = this.connection.bodyB.position;
        line (a.x,a.y,b.x,b.y);
    }
    constraintBreak() {
        
    }
}