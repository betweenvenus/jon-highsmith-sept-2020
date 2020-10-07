<script>
	// export let segment;
</script>

<style>
main {
  min-height: 100vh;
  background-color: white;
  padding: 0 10% 0 10%;
  position: relative;
  overflow: hidden; 
  z-index: 0;
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
  width: 150%;
  height: 150%;
  position: absolute;
  top: -75%;
  left: -75%;
  background-image: url('/img/the_compact_disc[光盤].png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  animation: read-only 16s linear infinite;
  z-index: -1;
}

/* :global(main *) {
  mix-blend-mode: exclusion;
} */
</style>

<main>
	<slot></slot>
</main>