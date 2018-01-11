var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + " Y: " + this.y);
    };
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0');
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2);
point.X = -1;
// console.log(point.getX())
point.draw();
