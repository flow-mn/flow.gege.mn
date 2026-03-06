<script lang="ts">
  import type { Snippet } from "svelte";

  interface $Props {
    children: Snippet;
  }

  let { children }: $Props = $props();
</script>

<div class="border-primary bg-background text-text flex flex-col gap-2 rounded-lg border px-3 py-2">
  {@render children()}
</div>
