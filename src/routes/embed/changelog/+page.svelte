<script lang="ts">
  import Changelog from "$lib/components/guide/Changelog.svelte";

  let { data } = $props();
</script>

<svelte:head>
  <title>What's new — Flow</title>
</svelte:head>

<Changelog
  releases={data.releases}
  embed
/>
