<script
  lang="ts"
  module
>
  export interface GuideArticle {
    title: string;
    description: string;
    href: string;
    emoji: string;
  }

  export interface GuideSection {
    title: string;
    articles: GuideArticle[];
  }
</script>

<script lang="ts">
  import { page } from "$app/state";
  import clsx from "clsx";

  let { children, data } = $props();

  let { sections } = $derived(data);
</script>

<div class="flex flex-row gap-8 px-4 xl:px-0">
  <!-- Sidebar -->
  <aside class="hidden w-52 shrink-0 md:block">
    <a
      href="/guide"
      class="mb-6 block text-sm font-semibold opacity-60 transition-opacity hover:opacity-100"
    >
      ← All guides
    </a>

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
                  "bg-primary/10 text-primary": page.url.pathname === article.href,
                  "text-text": page.url.pathname !== article.href,
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

  <!-- Content -->
  <div class="min-w-0 flex-1">
    {@render children()}
  </div>
</div>
