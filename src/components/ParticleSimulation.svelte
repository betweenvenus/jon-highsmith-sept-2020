<script>
    /**
     * All credit must go to this amazing article: 
     * https://www.toptal.com/game/video-game-physics-part-i-an-introduction-to-rigid-body-dynamics
     * 
     */

    import createVector from "../js/createVector.js";
    import Particle from "../js/Particle.js";
    import { sleep } from "../js/helpers.js";

    // props
    export let particleCount = 1;
    export let gravity = -9.81;

    const PARTICLE_COUNT = parseFloat(particleCount);
    const particles = [];
    // https://en.wikipedia.org/wiki/Gravity_of_Earth
    const GRAVITY = parseFloat(gravity);

    const initParticles = () => {
        const r = coefficient => Math.random() * coefficient;
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles[i] = new Particle();
            // console.log(particles[i]);
            particles[i].position = createVector(r(50), r(50));
            particles[i].velocity = createVector(0, 0);
            particles[i].mass = 1;
        }
    };

    const printParticles = () => {
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const particle = particles[i];
            console.log(
                `particles[${i}].velocity.y: ${particle.velocity.y} \n`,
                `particles[${i}]: (x: ${particle.position.x}, y: ${particle.position.y})`
            );
        }
    };

    const computeForce = particle => {
        return createVector(0, particle.mass * GRAVITY);
    }

    const run = async () => {
        const simulationTime = 10000;
        let currentTime = 0;
        const dt = 1000;

        initParticles();
        printParticles();

        /**
         * TODO: when it's time to actually paint the screen, i'm guessing
         * i'll need to create better loop patterns, probably with
         * requestAnimationFrame() and some kind of stateful
         * deltaTime function that keeps track of draw time
         */

        while(currentTime < simulationTime) {
            await sleep(dt);
            for(let i = 0; i < PARTICLE_COUNT; i++) {
                let particle = particles[i];
                let force = computeForce(particle);
                let acceleration = createVector(force.x / particle.mass, force.y / particle.mass);
                particle.velocity.x += acceleration.x * (dt / 1000);
                particle.velocity.y += acceleration.y * (dt / 1000);
                particle.position.x += particle.velocity.x * (dt / 1000);
                particle.position.y += particle.velocity.y * (dt / 1000);
            }

            printParticles();
            currentTime += dt;
        }
    }

    run();
</script>