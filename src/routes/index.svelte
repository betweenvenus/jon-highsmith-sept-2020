<script>
  import intro from "../content/intro.md";
  console.log(intro);
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

<h1 class="is-this-obnoxious?">Hi there :-)</h1>
<h2 class="probably, if i had to guess">I'm Jon!!!</h2>

{#if intro}
  {@html intro.html}
{/if}

<img src="/img/the_compact_disc(光盤).png" alt="">
