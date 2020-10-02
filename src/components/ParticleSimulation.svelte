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

    const PARTICLE_COUNT = particleCount;
    const particles = [];
    // https://en.wikipedia.org/wiki/Gravity_of_Earth
    const GRAVITY = gravity;

    const initParticles = () => {
        const r = coefficient => Math.random() * coefficient;
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles[i] = new Particle();
            console.log(particles[i]);
            particles[i].position = createVector(r(50), r(50));
            particles[i].velocity = createVector(0, 0);
            particles[i].mass = 1;
        }
    };

    const printParticles = () => {
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const particle = particles[i];
            console.log(
                `particles[${i}]: (x: ${particle.position.x}, y: ${particle.position.y})`
            );
        }
    };

    const computeForce = particle => {
        return createVector(0, particle.mass * GRAVITY);
    }

    const run = async () => {
        const simulationTime = 1000;
        let currentTime = 0;
        const dt = 100;

        initParticles();
        printParticles();

        while(currentTime < simulationTime) {
            sleep(dt);
            for(let i = 0; i < PARTICLE_COUNT; i++) {
                let particle = particles[i];
                let force = computeForce(particle);
                let acceleration = createVector(force.x / particle.mass, force.y / particle.mass);
                particle.velocity.x += acceleration.x * dt;
                particle.velocity.y += acceleration.y * dt;
                particle.position.x += particle.velocity.x * dt;
                particle.position.y += particle.velocity.y * dt;
            }

            printParticles();
            currentTime += dt;
        }
    }

    run();
</script>