<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
main {
  min-height: 100vh;
  background-color: white;
  padding: 0 10% 0 10%;
  position: relative;
}

.main::before {
  position: absolute;
  top: 0;
  left: 0;
  background-image: url('/img/the_compact_disc[光盤].png');
  background-repeat: no-repeat;
  background-size: 2000px;
}

:global(main *) {
  mix-blend-mode: exclusion;
}
</style>

<main>
	<slot></slot>
</main>