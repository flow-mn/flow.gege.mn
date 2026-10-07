<script lang="ts">
  import { page } from "$app/state";
  import YoutubeEmbed from "$lib/components/guide/YoutubeEmbed.svelte";
  import { m } from "$lib/paraglide/messages";
  import clsx from "clsx";

  let { children, data } = $props();

  let { sections } = $derived(data);

  const articles = $derived(sections?.flatMap((section) => section.articles) ?? []);

  const selectedIndex = $derived(articles.findIndex((article) => article.href === page.url.pathname));
  const selectedArticle = $derived(articles[selectedIndex]);
  const previousArticle = $derived(selectedIndex > 0 ? articles[selectedIndex - 1] : undefined);
  const nextArticle = $derived(selectedIndex >= 0 ? articles[selectedIndex + 1] : undefined);

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

    {#if previousArticle || nextArticle}
      <nav
        aria-label="Guide pagination"
        class="mt-16 grid grid-cols-1 gap-3 border-t border-white/10 pt-6 sm:grid-cols-2"
      >
        {#if previousArticle}
          <a
            href={previousArticle.href}
            class="border-white/8 hover:border-primary/30 hover:bg-primary/5 bg-white/3 flex flex-col gap-1 rounded-xl border px-5 py-4 transition-colors"
          >
            <span class="text-text text-xs opacity-50">← Previous</span>
            <span class="text-sm font-semibold">{previousArticle.title}</span>
          </a>
        {/if}
        {#if nextArticle}
          <a
            href={nextArticle.href}
            class="border-white/8 hover:border-primary/30 hover:bg-primary/5 bg-white/3 flex flex-col gap-1 rounded-xl border px-5 py-4 text-right transition-colors sm:col-start-2"
          >
            <span class="text-text text-xs opacity-50">Next →</span>
            <span class="text-sm font-semibold">{nextArticle.title}</span>
          </a>
        {/if}
      </nav>
    {/if}
  </div>
</div>
