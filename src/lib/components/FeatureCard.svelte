<script lang="ts">
  import type { Snippet } from "svelte";

  interface $Props {
    title: string;
    icon: Snippet;
    children: Snippet;
  }

  let { title, children, icon }: $Props = $props();
</script>

<div
  data-aos="fade-up"
  class="gradient-border flex flex-col gap-3 rounded-xl p-5"
>
  <div class="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg text-xl">
    {@render icon?.()}
  </div>
  <div class="font-semibold">{title}</div>
  <div class="text-sm leading-relaxed opacity-60">
    {@render children()}
  </div>
</div>
