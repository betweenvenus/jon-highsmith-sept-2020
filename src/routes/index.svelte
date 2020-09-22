<script>
  import intro from "../content/intro.md";
  console.log(intro);
</script>

<style>
  .is-this-obnoxious\? {
    font-size: 5rem;
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

{@html intro.html}
