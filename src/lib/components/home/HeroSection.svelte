<script lang="ts">
  import DiscordLogo from "$lib/components/DiscordLogo.svelte";
  import FlexDownloadButtons from "$lib/components/FlexDownloadButtons.svelte";
  import { m } from "$lib/paraglide/messages";
</script>

<section class="trig-fade-up enable-trig flex flex-col items-center gap-8 px-4 text-center">
  <div class="h-0 md:h-24"></div>

  <div class="trig-target">
    <div
      class="border-primary/30 bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
    >
      <span>{m["home.hero.badge"]()}</span>
    </div>
  </div>

  <h1
    style="--trig-delay:60ms"
    class="trig-target max-w-2xl text-5xl font-bold leading-tight tracking-tight md:text-6xl"
  >
    {m["home.hero.heading_1"]()}<br /><span class="text-primary">{m["home.hero.heading_2"]()}</span>
  </h1>

  <p
    style="--trig-delay:120ms"
    class="trig-target max-w-md text-base opacity-60 md:text-lg"
  >
    {m["home.hero.description"]()}
  </p>

  <div
    class="trig-target"
    data-aos-delay="180"
  >
    <FlexDownloadButtons />
  </div>

  <a
    data-aos-delay="240"
    href="https://discord.gg/Ndh9VDeZa4"
    target="_blank"
    class="visited:text-text/50 text-text/50 hover:text-primary trig-target inline-flex items-center gap-2 text-sm transition-colors"
  >
    <DiscordLogo />
    {m["home.hero.discord_cta"]()}
  </a>

  <div class="h-20 md:h-28"></div>
</section>
