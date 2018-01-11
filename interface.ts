interface Point {
    x: number,
    y: number
}
/*
let drawPoint = (point: { x: number, y: number }) => {
    // ...
}
*/
let drawPoint = (point: Point) => {
    // ...
}

drawPoint({
    x: 3,
    y: 2
})