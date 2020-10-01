<script>
    export let name;
    const random = Math.random();
</script>

<div class="skill">
    {#if random <= 0}
        &lt;{name}&gt;
    {:else}
        &lt;/{name}&gt;
    {/if}
</div>

