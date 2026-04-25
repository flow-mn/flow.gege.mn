<script lang="ts">
  import clsx from "clsx";
  import type { Snippet } from "svelte";

  interface $Props {
    src: string;
    alt: string;
    /** Aspect ratio used to reserve layout space, e.g. "9/16", "3/2". Recommended for portrait phone screenshots. */
    aspect?: string;
    /** Optional caption shown below the image. */
    caption?: string;
    /** Overlay snippet — Arrow, Marker, Highlight components positioned via percentages. */
    overlay?: Snippet;
    /** Limit max width — useful for tall portrait screenshots. */
    maxWidth?: string;
    /** Render a dashed placeholder instead of the image (used until the asset is captured). */
    placeholder?: boolean;
  }

  let { src, alt, aspect, caption, overlay, maxWidth = "320px", placeholder = false }: $Props = $props();
</script>

<figure class={clsx("not-prose my-6 flex flex-col items-center")}>
  <div
    class="relative w-full overflow-hidden rounded-xl border border-white/10 bg-white/5"
    style={[aspect ? `aspect-ratio:${aspect}` : "", maxWidth ? `max-width:${maxWidth}` : ""].filter(Boolean).join(";")}
  >
    {#if placeholder}
      <div
        class="absolute inset-0 flex items-center justify-center bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.04)_0_10px,transparent_10px_20px)] p-6 text-center"
      >
        <div class="flex flex-col items-center gap-2 opacity-60">
          <span class="text-2xl">📷</span>
          <p class="text-sm font-semibold">Screenshot pending</p>
          <code class="text-text/60 text-xs opacity-80">{src}</code>
          <p class="max-w-xs text-xs opacity-60">{alt}</p>
        </div>
      </div>
    {:else}
      <img
        {src}
        {alt}
        loading="lazy"
        class="block h-full w-full object-contain"
      />
    {/if}

    {#if overlay}
      <div class="pointer-events-none absolute inset-0">
        {@render overlay()}
      </div>
    {/if}
  </div>

  {#if caption}
    <figcaption class="mt-3 text-center text-xs opacity-60">{caption}</figcaption>
  {/if}
</figure>
