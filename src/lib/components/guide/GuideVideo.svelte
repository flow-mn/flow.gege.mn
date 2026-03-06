<script lang="ts">
  interface $Props {
    youtubeId?: string;
    src?: string;
    title: string;
  }

  let { youtubeId, src, title }: $Props = $props();

  const embedSrc = $derived(youtubeId ? `https://www.youtube.com/embed/${youtubeId}` : src);
</script>

<div class="my-6 aspect-video w-full overflow-hidden rounded-xl bg-white/5">
  {#if embedSrc}
    <iframe
      {title}
      src={embedSrc}
      class="h-full w-full"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  {:else}
    <div class="flex h-full items-center justify-center opacity-30">
      <span class="text-sm">No video source provided</span>
    </div>
  {/if}
</div>
