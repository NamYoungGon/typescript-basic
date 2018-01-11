class Point {
    constructor(private x?: number, private y?: number) {
        
    }

    draw() {
        console.log(`X: ${this.x} Y: ${this.y}`)
    }

    set X(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0')

        this.x = value
    }

    get X() {
        return this.x
    }
}

let point = new Point(1, 2)
point.X = -1
console.log(point.X)
point.draw()