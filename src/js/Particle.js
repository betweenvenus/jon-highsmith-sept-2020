import Vector2 from "./Vector2.js";
import createVector from "./createVector.js";

/**
 * @param {Vector2} position
 * @param {Vector2} velocity
 * @param {number} mass
 */

class Particle {
    constructor(position, velocity, mass) {
        this.position = position;
        this.velocity = velocity;
        this.mass = mass;
    }
}

export default Particle;