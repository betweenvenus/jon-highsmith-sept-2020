<script>
  import content from "../content/about-jon.md";
  const {
    metadata: { title },
    html: aboutMe,
  } = content;
</script>

<style>
  .rapper {
    padding: 5% 10%;
  }
  .is-this-obnoxious\? {
    font-size: 3rem;
    text-transform: uppercase;
    color: white;
  }

  .if.i.had.to.guess\,.the.answer.would.be.yes {
    font-size: 1.5rem;
  }
</style>

<svelte:head>
  <title>Jon Highsmith</title>
</svelte:head>
<div class="rapper">
  <h1 class="is-this-obnoxious?">{title}</h1>
  {#if content}
    <section class="if i had to guess, the answer would be yes">
      {@html aboutMe}
    </section>
  {/if}
</div>
