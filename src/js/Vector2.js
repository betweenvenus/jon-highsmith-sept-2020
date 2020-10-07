/**
 * Two-dimensional vector type.
 * @returns Vector2
 */
class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.magnitude = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }

    // static add();
    // static subtract();
    // static multiply();
    // static divide();
}

export default Vector2;