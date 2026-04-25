<script lang="ts">
  /**
   * Numbered circular marker positioned by percentage over an AnnotatedScreenshot.
   * `x` and `y` are percentages 0-100 from top-left of the image area.
   */
  interface $Props {
    x: number;
    y: number;
    n: number | string;
  }

  let { x, y, n }: $Props = $props();
</script>

<span
  class="bg-primary text-background absolute flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-xs font-bold shadow-lg shadow-black/50 ring-2 ring-white/80"
  style="left:{x}%;top:{y}%;"
>
  {n}
</span>
