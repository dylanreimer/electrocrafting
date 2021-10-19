class Pendulum {
    constructor(center=500, start=300, size=100, radius=200, speed=0.01, color=[255, 0, 120]) {
        this.origin = {x: canvasWidth/2, y: center};
        this.center = {x: canvasWidth/2, y: center};
        this.lineStart = {x: canvasWidth/2, y: start};
        this.size = size;
        this.swingRadius = radius;
        this.color = color;
        this.angle = 0;
        this.speed = speed;
    };

    update() {
        this.angle += this.speed;
        this.center.x = sin(this.angle) + this.swingRadius + this.origin.x;
        this.center.y = sin(this.angle) + this.swingRadius + this.origin.y;
    };
    
    render() {
        stroke(255);
        line(this.center.x, this.center.y, this.lineStart.x, this.lineStart.y);

        fill(this.color);
        ellipse(this.center.x, this.center.y, this.size);
    };


} 