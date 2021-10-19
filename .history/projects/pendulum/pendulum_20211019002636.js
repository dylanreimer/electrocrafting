class Pendulum {
    constructor(start, size, radius, color) {
        this.origin = {x: canvasWidth/2, y: 500};
        this.center = {x: canvasWidth/2, y: 500};
        this.lineStart = {x: canvasWidth/2, y: start};
        this.size = size;
        this.swingRadius = 200;
        this.color = color;
        this.angle = 0;
    };

    update() {
        this.center.x = sin(this.angle) + this.swingRadius + this.origin.x;
        this.center.y = sin(this.angle) + this.swingRadius + this.origin.y;
    };
    
    render() {

    };


} 