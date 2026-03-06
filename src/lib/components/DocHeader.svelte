<script lang="ts">
  import type { Snippet } from "svelte";

  interface $Props {
    children?: Snippet;
    id: string;
  }

  let { id, children }: $Props = $props();
</script>

<h3
  {id}
  class="mt-8 scroll-mt-20 md:mt-12"
>
  <button
    class="text-inherit opacity-60"
    onclick={() => (location.hash = id)}>#</button
  >
  &nbsp;{@render children?.()}
</h3>
