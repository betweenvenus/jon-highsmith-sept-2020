<script>
  import content from "../content/about-jon.md";
  const {
    metadata: { title },
    html: aboutMe,
  } = content;

  import createVector from "../js/createVector.js";

  const myVector = createVector(2, 5);

  import ParticleSimulation from "../components/ParticleSimulation.svelte";
</script>

<style>
  .rapper {
    padding: 5% 10%;
  }

  .is-this-obnoxious\? {
    font-size: 3rem;
    text-transform: uppercase;
    color: black;
  }

  .if.i.had.to.guess\,.the.answer.would.be.yes {
    font-size: 1.5rem;
    color: white;
    mix-blend-mode: difference;
  }
</style>

<svelte:head>
  <title>Jon Highsmith</title>
</svelte:head>
<div class="rapper">
  <h1 class="is-this-obnoxious?">{title}</h1>
  <ParticleSimulation particleCount={1} gravity={-9.81} />
  {#if content}
    <section class="if i had to guess, the answer would be yes">
      {@html aboutMe}
    </section>
  {/if}
</div>
