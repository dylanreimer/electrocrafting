class Pendulum {
    constructor(x, y, size, radius, speed, color) {
        this.origin = {x: x, y: y};
        this.center = {x: x, y: y};
        this.lineStart = {x: x, y: y};
        this.size = size;
        this.swingRadius = radius;
        this.color = color;
        this.speed = speed;
        this.angle = PI/2;
        this.gravity = 0.9;
        this.damping = 0.9995;
        this.accel = 0;
        this.velocity = 0;
    };

    update() {
        this.updateAngle();
        this.updatePosition();
    };

    render() {
        this.renderArm();
        this.renderWeight();
    };

    static updateAngle() {
        this.angle += this.speed;
    };

    static updatePosition() {
        this.center.x = sin(this.angle) * this.swingRadius + this.origin.x;
        this.center.y = cos(this.angle) * this.swingRadius + this.origin.y;
    };

    renderArm() {
        stroke(255);
        line(this.center.x, this.center.y, this.lineStart.x, this.lineStart.y);
    }

    static renderWeight() {
        fill(this.color);
        ellipse(this.center.x, this.center.y, this.size);
    }


} 