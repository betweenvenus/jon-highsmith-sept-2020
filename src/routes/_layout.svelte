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
  overflow: hidden; 
}

@keyframes read-only {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

main::before {
  content: "";
  width: 300%;
  height: 300%;
  position: absolute;
  background-image: url('/img/the_compact_disc[光盤].png');
  background-repeat: no-repeat;
  background-size: cover;
  animation: read-only 8s linear infinite;
}

:global(main *) {
  mix-blend-mode: exclusion;
}
</style>

<main>
	<slot></slot>
</main>