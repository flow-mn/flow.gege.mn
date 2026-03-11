<script lang="ts">
  import "../app.css";

  import { page } from "$app/state";
  import Footer from "$lib/components/Footer.svelte";
  import Frame from "$lib/components/Frame.svelte";
  import NavBar from "$lib/components/NavBar.svelte";
  import { locales, localizeHref } from "$lib/paraglide/runtime";
  import type { Snippet } from "svelte";

  let { children }: { children: Snippet } = $props();
</script>

<NavBar />

<Frame fullHeight>
  <main class="mt-(--navbar-height,0px) col w-full pb-16 pt-8">
    {@render children()}
  </main>
</Frame>

<Footer />

<div style="display:none">
  {#each locales as locale}
    <a href={localizeHref(page.url.pathname, { locale })}>{locale}</a>
  {/each}
</div>

<style>
  :global(html) {
    background-size: 64px 64px;
    background-repeat: repeat;
    background-image:
      linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  }
</style>
