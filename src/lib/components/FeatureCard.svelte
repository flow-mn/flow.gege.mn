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
  <div class="text-sm opacity-60 leading-relaxed">
    {@render children()}
  </div>
</div>

<style>
  .gradient-border {
    background:
      linear-gradient(#1c1c1c, #1c1c1c) padding-box,
      linear-gradient(
          128deg,
          rgba(242, 192, 255, 0.5) 0%,
          rgba(255, 255, 255, 0.05) 30%,
          rgba(242, 192, 255, 0.2) 60%,
          rgba(255, 255, 255, 0.05) 80%,
          rgba(242, 192, 255, 0.5) 100%
        )
        border-box;
    border: 1px solid transparent;
  }
</style>
