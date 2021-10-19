class Pendulum {
    constructor(start=300, size=100, radius=200, speed=0.01, color=[255, 255, 255]) {
        this.origin = {x: canvasWidth/2, y: 500};
        this.center = {x: canvasWidth/2, y: 500};
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

    };


} 