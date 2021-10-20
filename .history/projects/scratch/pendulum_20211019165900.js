class Pendulum {
    constructor(x, y, size, color=[255, 255, 255], angle=PI/2, radius=40, velocity=0.001) {
        this.origin = {x: x, y: y};
        this.center = {x: x, y: y};
        this.lineStart = {x: x, y: y};
        this.size = size;
        this.swingRadius = radius;
        this.color = color;
        this.angle = angle;
        this.gravity = 0.5;
        this.damping = 0.9995;
        this.accel = 0;
        this.velocity = velocity;
    };

    update() {
        this.updateAngle();
        this.updatePosition();
    };

    render() {
        this.renderArm();
        this.renderWeight();
    };

    updateAngle() {
        this.accel = (-1 * this.gravity/this.size) * sin(this.angle);
        this.velocity += this.accel;
        this.velocity *= this.damping;
        this.angle += this.velocity;

        this.damping -= 0.00001;
    };

    updatePosition() {
        this.center.x = sin(this.angle) * this.swingRadius + this.origin.x;
        this.center.y = cos(this.angle) * this.swingRadius + this.origin.y;
    };

    renderArm() {
        stroke(255);
        line(this.center.x, this.center.y, this.lineStart.x, this.lineStart.y);
    }

    renderWeight() {
        noStroke();
        fill(this.color);
        ellipse(this.center.x, this.center.y, this.size);
    }


} 