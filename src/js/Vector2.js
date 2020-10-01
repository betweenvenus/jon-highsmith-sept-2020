/**
 * Two-dimensional vector type.
 */
class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.magnitude = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    }
}

export default Vector2;