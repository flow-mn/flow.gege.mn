<script lang="ts">
  let { data } = $props();

  let { sections } = $derived(data);
</script>

<svelte:head>
  <title>Guide — Flow</title>
</svelte:head>

<div class="flex flex-col gap-12">
  <div>
    <p class="text-primary mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">Documentation</p>
    <h1 class="mb-3 text-4xl font-bold">Flow Guide</h1>
    <p class="max-w-prose text-base opacity-60">Step-by-step guides to help you get the most out of Flow.</p>
  </div>

  <div class="flex flex-col gap-10">
    {#each sections as section}
      <div>
        <h2 class="mb-4 text-xs font-semibold uppercase tracking-widest opacity-40">
          {section.title}
        </h2>
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {#each section.articles as article}
            <a
              href={article.href}
              class="border-white/8 hover:border-primary/30 hover:bg-primary/5 bg-white/3 group flex flex-col gap-2 rounded-xl border p-5 transition-colors"
            >
              <span class="text-2xl">{article.emoji}</span>
              <h3 class="font-semibold">{article.title}</h3>
              <p class="text-sm opacity-50">{article.description}</p>
            </a>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
