/**
 * This will, somehow, provide a type for a Rigidbody physics element. 
 * Or at least until I get bored of this and just bring in a proper physics engine!!!
 */

 class Rigidbody {
     constructor({body}) {
         if(body) {
            this.position = body.position;
            this.linearVelocity = body.linearVelocity;
            this.angle = body.angle;
            this.angularVelocity = body.angularVelocity;
            this.force = body.force;
            this.torque = body.torque;
            this.torque = body.torque;
            this.shape = body.shape; // shape should be of type BoxShape
         }
     }
 }