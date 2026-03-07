<script lang="ts">
  interface Props {
    aspectRatio?: number;
    id: string;
    title?: string;
  }

  let { title, aspectRatio = 16 / 9, id }: Props = $props();
</script>

<div
  class="relative"
  style="aspect-ratio: {aspectRatio};"
>
  <iframe
    {title}
    src="https://www.youtube.com/embed/{id}"
    frameborder="0"
    allowfullscreen
    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
  ></iframe>
</div>
