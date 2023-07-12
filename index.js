// Your code here
 class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((acc, side) => acc + side, 0);
  }
}

class Triangle extends Polygon {
  constructor(sides) {
    super(sides);
  }

  get isValid() {
    if (this.sides.length === 3) {
      const [a, b, c] = this.sides;
      return a + b > c && b + c > a && c + a > b;
    }
    return false;
  }
}

class Square extends Polygon {
  constructor(sides) {
    super(sides);
  }

  get isValid() {
    if (this.sides.length === 4) {
      return new Set(this.sides).size === 1;
    }
    return false;
  }

  get area() {
    if (this.isValid) {
      return this.sides[0] ** 2;
    }
    return null;
  }
}
 const triangle = new Triangle([3, 4, 5]);
console.log(triangle.countSides);  // Output: 3
console.log(triangle.perimeter);  // Output: 12
console.log(triangle.isValid);  // Output: true

const square = new Square([4, 4, 4, 4]);
console.log(square.countSides);  // Output: 4
console.log(square.perimeter);  // Output: 16
console.log(square.isValid);  // Output: true
console.log(square.area);  // Output: 16

const invalidSquare = new Square([4, 4, 4, 5]);
console.log(invalidSquare.isValid);  // Output: false
console.log(invalidSquare.area);  // Output: null