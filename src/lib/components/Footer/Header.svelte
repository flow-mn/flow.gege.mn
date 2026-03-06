<script lang="ts">
  import type { Snippet } from "svelte";

  interface $Props {
    children: Snippet;
  }

  let { children }: $Props = $props();
</script>

<li class="mb-2 opacity-60">{@render children()}</li>
