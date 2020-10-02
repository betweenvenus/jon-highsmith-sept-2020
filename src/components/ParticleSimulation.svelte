<script>
    import createVector from "../js/createVector.js";
    import Particle from "../js/Particle.js";
    import sleep from "../js/helpers.js";

    export let particleCount;
    const PARTICLE_COUNT = particleCount;
    const particles = [];

    export let gravity;
    // https://en.wikipedia.org/wiki/Gravity_of_Earth
    const GRAVITY = gravity;

    const initParticles = () => {
        const r = (coefficient) => Math.random * coefficient;
        for (i = 0; i < PARTICLE_COUNT; i++) {
            particles[i] = new Particle();
            particles[i].position = createVector(r(50), r(50));
            particles[i].velocity = createVector(0, 0);
            particles[i].mass = 1;
        }
    };

    const printParticles = () => {
        for (i = 0; i < PARTICLE_COUNT; i++) {
            const particle = particles[i];
            console.log(
                `particles[${i}]: (x: ${particle.position.x}, y: ${particle.position.y})`
            );
        }
    };

    const computeForce = particle => {
        createVector(0, particle.mass * GRAVITY);
    }

    const run = async () => {
        const simulationTime = 10;
        let currentTime = 0;
        const dt = 1;

        initParticles();
        printParticles();

        while(currentTime < simulationTime) {

        }
    }
</script>

<div />
