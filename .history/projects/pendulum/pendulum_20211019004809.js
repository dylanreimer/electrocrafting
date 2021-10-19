class Pendulum {
    constructor(ox, oy, size, radius, speed, color) {
        this.origin = {x: ox, y: oy};
        this.center = {x: ox, y: oy};
        this.lineStart = {x: ox, y: oy};
        this.size = size;
        this.swingRadius = radius;
        this.color = color;
        this.angle = 0;
        this.speed = speed;
    };

    update() {
        this.angle += this.speed;
        this.center.x = sin(this.angle) * this.swingRadius + this.origin.x;
        this.center.y = cos(this.angle) * this.swingRadius + this.origin.y;
    };
    
    render() {
        stroke(255);
        line(this.center.x, this.center.y, this.lineStart.x, this.lineStart.y);

        fill(this.color);
        ellipse(this.center.x, this.center.y, this.size);
    };


} 