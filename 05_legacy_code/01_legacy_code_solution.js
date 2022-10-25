import { PI, } from "./shapes-lib";
function getCircleArea(circle) {
    const { radius } = circle;
    return radius * radius * PI;
}
function getRectangleArea(rectangle) {
    const { length, width } = rectangle;
    return length * width;
}
function getSquareArea(square) {
    const { width } = square;
    return width * width;
    return getRectangleArea({ width, length: width, type: "rectangle" });
}
function getRightTriangleArea(triangle) {
    const { base, height } = triangle;
    return (base * height) / 2;
}
export const getArea = (shape) => {
    switch (shape.type) {
        case "circle":
            shape.area = getCircleArea(shape);
            break;
        case "rectangle":
            shape.area = getRectangleArea(shape);
            break;
        case "square":
            shape.area = getSquareArea(shape);
            break;
        case "rightTriangle":
            shape.area = getRightTriangleArea(shape);
            break;
    }
};
