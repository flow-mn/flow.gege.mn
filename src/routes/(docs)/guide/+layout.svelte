<script lang="ts">
  import { page } from "$app/state";
  import YoutubeEmbed from "$lib/components/guide/YoutubeEmbed.svelte";
  import { m } from "$lib/paraglide/messages";
  import clsx from "clsx";

  let { children, data } = $props();

  let { sections } = $derived(data);

  const selectedArticle = $derived(
    sections?.flatMap((section) => section.articles)?.find((article) => article.href === page.url.pathname)
  );

  const onIndexPage = $derived(page.url.pathname === "/guide");
</script>

<svelte:head>
  {#if selectedArticle}
    <title>
      {selectedArticle.emoji}
      {selectedArticle.title} - {m["guide.title"]()}
    </title>
    <meta
      name="description"
      content={selectedArticle.description}
    />
  {:else}
    <title>
      {m["guide.title"]()}
    </title>
  {/if}
</svelte:head>

{#snippet backToIndex()}
  <a
    href="/guide"
    class={clsx("mb-6 block text-sm font-semibold transition-opacity hover:opacity-100", {
      "opacity-60": !onIndexPage,
      "opacity-100": onIndexPage,
    })}
  >
    {#if !onIndexPage}
      ←
    {/if}
    All guides
  </a>
{/snippet}

<div class="col md:row gap-8 px-4 xl:px-0">
  <!-- Sidebar -->
  <aside class="hidden w-52 shrink-0 md:block">
    {@render backToIndex()}

    {#each sections as section}
      <div class="mb-5">
        <p class="mb-2 text-xs font-semibold uppercase tracking-widest opacity-30">
          {section.title}
        </p>
        <ul class="flex flex-col gap-0.5">
          {#each section.articles as article}
            <li>
              <a
                href={article.href}
                class={clsx("block rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-white/5", {
                  "bg-primary/10 text-primary": article.href === selectedArticle?.href,
                  "text-text": article.href !== selectedArticle?.href,
                })}
              >
                {article.emoji}
                {article.title}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </aside>

  <nav class="md:hidden">
    {@render backToIndex()}
  </nav>

  <!-- Content -->
  <div class="min-w-0 flex-1">
    {#if selectedArticle?.youtube?.id}
      <YoutubeEmbed id={selectedArticle!.youtube!.id} />
      <div class="h-2"></div>
    {/if}
    {@render children()}
  </div>
</div>
