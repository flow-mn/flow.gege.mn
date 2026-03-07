<script lang="ts">
  import clsx from "clsx";
  import type { Snippet } from "svelte";

  interface $Props {
    children: Snippet;
    fullHeight?: boolean;
    padMobile?: boolean;
  }

  let { children, fullHeight = false, padMobile = true }: $Props = $props();
</script>

<div class="row w-screen justify-center overflow-x-hidden">
  <section
    class:padMobile
    class={clsx("w-full max-w-7xl", {
      "max-xl:px-5": padMobile,
      "min-h-[80vh]": fullHeight,
    })}
  >
    {@render children()}
  </section>
</div>
