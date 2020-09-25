<script>
  import content from "../content/about-jon.md";
  const { metadata: { title }, html: aboutMe } = content;
  console.log(content);
</script>

<style>
  .is-this-obnoxious\? {
    font-size: 5rem;
    mix-blend-mode: difference;
    color: white;
  }

  .probably\,.if.i.had.to.guess {
    font-size: 3rem;
  }

</style>

<svelte:head>
  <title>Jon Highsmith</title>
</svelte:head>

<h1 class="is-this-obnoxious?">{title}</h1>
<h2 class="probably, if i had to guess">I'm Jon!!!</h2>

{#if content}
  {@html aboutMe}
{/if}

<img src="/img/the_compact_disc(光盤).png" alt="">
