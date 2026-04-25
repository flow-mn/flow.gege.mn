<script lang="ts">
  import { marked, Renderer } from "marked";

  const REPO_BASE = "https://github.com/flow-mn/flow/blob/main/";

  function absolutize(href: string | null | undefined): string {
    if (!href) return "#";
    if (/^(https?:|mailto:|#)/i.test(href)) return href;
    return REPO_BASE + href.replace(/^\.?\//, "");
  }

  const renderer = new Renderer();
  const origLink = renderer.link.bind(renderer);
  renderer.link = (token) => {
    const html = origLink({ ...token, href: absolutize(token.href) });
    return html.replace(/^<a /, '<a target="_blank" rel="noopener" ');
  };
  const origImage = renderer.image.bind(renderer);
  renderer.image = (token) => origImage({ ...token, href: absolutize(token.href) });

  interface Release {
    tag_name: string;
    name: string;
    published_at: string;
    html_url: string;
    body: string;
    prerelease: boolean;
    draft: boolean;
  }

  interface $Props {
    releases: Release[];
    /** When true, suppress decorative chrome (used inside the in-app iframe). */
    embed?: boolean;
  }

  let { releases, embed = false }: $Props = $props();

  const dateFmt = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  function fmtDate(iso: string) {
    try {
      return dateFmt.format(new Date(iso));
    } catch {
      return iso.slice(0, 10);
    }
  }
</script>

<div class={embed ? "px-4 py-6" : ""}>
  {#if !embed}
    <p class="text-primary not-prose mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">Updates</p>
    <h1 class="not-prose mb-2 text-3xl font-bold">What's new</h1>
    <p class="not-prose mb-8 text-base opacity-50">
      Release notes for every Flow version, pulled from
      <a
        class="text-primary hover:underline"
        href="https://github.com/flow-mn/flow/releases"
        target="_blank">GitHub Releases</a
      >.
    </p>
  {/if}

  <ol class="flex list-none flex-col gap-12 p-0">
    {#each releases as r (r.tag_name)}
      <li class="border-l-2 border-white/10 pl-5">
        <header class="row mb-4 flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 class="text-xl font-bold">
            {r.name || r.tag_name}
          </h2>
          {#if r.prerelease}
            <span class="bg-primary/15 text-primary rounded px-1.5 py-0.5 text-[10px] font-bold uppercase">
              Pre-release
            </span>
          {/if}
          <time
            datetime={r.published_at}
            class="text-xs opacity-50"
          >
            {fmtDate(r.published_at)}
          </time>
          <a
            href={r.html_url}
            target="_blank"
            class="text-primary ml-auto text-xs hover:underline"
          >
            View on GitHub →
          </a>
        </header>

        <div
          class="prose prose-invert prose-headings:font-semibold prose-headings:mt-8 prose-headings:mb-3 prose-p:my-3 prose-ul:my-3 prose-li:my-1 prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none"
        >
          {#if r.body?.trim()}
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            {@html marked.parse(r.body, { gfm: true, breaks: false, renderer })}
          {:else}
            <p class="opacity-50"><em>No release notes.</em></p>
          {/if}
        </div>
      </li>
    {/each}
  </ol>
</div>
