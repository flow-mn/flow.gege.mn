<script lang="ts">
  /**
   * Rectangular highlight box positioned by percentage over an AnnotatedScreenshot.
   * All values are percentages 0-100.
   */
  interface $Props {
    x: number;
    y: number;
    w: number;
    h: number;
    label?: string;
  }

  let { x, y, w, h, label }: $Props = $props();
</script>

<span
  class="border-primary absolute rounded-lg border-2 shadow-[0_0_0_9999px_rgba(0,0,0,0.35)]"
  style="left:{x}%;top:{y}%;width:{w}%;height:{h}%;"
>
  {#if label}
    <span class="bg-primary text-background absolute -top-3 left-2 rounded px-1.5 py-0.5 text-[10px] font-bold">
      {label}
    </span>
  {/if}
</span>
