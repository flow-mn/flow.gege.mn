<script lang="ts">
  import { m } from "$lib/paraglide/messages";
  import DiscordLogo from "$lib/components/DiscordLogo.svelte";
  import FeatureCard from "$lib/components/FeatureCard.svelte";
  import FlexDownloadButtons from "$lib/components/FlexDownloadButtons.svelte";
  import Fna from "$lib/components/Fna.svelte";
</script>

<svelte:head>
  <title>{m["home.title"]()}</title>
</svelte:head>

<!-- Blob decorations -->
<div class="pointer-events-none relative z-0">
  <div class="babalo animate-move-around-a left-[20vw] top-[20vh] hidden md:block"></div>
  <div class="babalo animate-move-around-b right-[15vw] top-[5vh] hidden md:block"></div>
  <div class="babalo animate-move-around-c right-[10vw] top-[75vh] hidden md:block"></div>
  <div class="babalo animate-move-around-a left-[-5vw] top-[8vh] md:hidden"></div>
  <div class="babalo animate-move-around-c right-[5vw] top-[75vh] md:hidden"></div>
</div>

<!-- Hero -->
<section class="flex flex-col items-center gap-8 px-4 text-center">
  <div class="h-0 md:h-24"></div>

  <div
    data-aos="fade-up"
    class="border-primary/30 bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
  >
    <span>{m["home.hero.badge"]()}</span>
  </div>

  <h1
    data-aos="fade-up"
    data-aos-delay="60"
    class="max-w-2xl text-5xl font-bold leading-tight tracking-tight md:text-6xl"
  >
    {m["home.hero.heading_1"]()}<br /><span class="text-primary">{m["home.hero.heading_2"]()}</span>
  </h1>

  <p
    data-aos="fade-up"
    data-aos-delay="120"
    class="max-w-md text-base opacity-60 md:text-lg"
  >
    {m["home.hero.description"]()}
  </p>

  <div
    data-aos="fade-up"
    data-aos-delay="180"
  >
    <FlexDownloadButtons />
  </div>

  <a
    data-aos="fade-up"
    data-aos-delay="240"
    href="https://discord.gg/Ndh9VDeZa4"
    target="_blank"
    class="visited:text-text/50 text-text/50 hover:text-primary inline-flex items-center gap-2 text-sm transition-colors"
  >
    <DiscordLogo />
    {m["home.hero.discord_cta"]()}
  </a>

  <div class="h-20 md:h-28"></div>
</section>

<!-- Features -->
<section class="flex flex-col items-center gap-10 px-4">
  <div
    data-aos="fade-up"
    class="text-center"
  >
    <p class="text-primary mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">
      {m["home.features.label"]()}
    </p>
    <h2 class="text-3xl font-bold">{m["home.features.heading"]()}</h2>
  </div>

  <div class="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    <FeatureCard title={m["home.features.foss.title"]()}>
      {#snippet icon()}
        🌐
      {/snippet}
      {m["home.features.foss.description"]()}
    </FeatureCard>

    <FeatureCard title={m["home.features.privacy.title"]()}>
      {#snippet icon()}
        🔐
      {/snippet}
      {m["home.features.privacy.description_1"]()}<Fna n="1" />{m["home.features.privacy.description_2"]()}<Fna
        n="2"
      />.
    </FeatureCard>

    <FeatureCard title={m["home.features.automation.title"]()}>
      {#snippet icon()}
        🤖
      {/snippet}
      {m["home.features.automation.description_before"]()}
      <a
        href="https://eny.gege.mn/"
        target="_blank">Eny</a
      >{m["home.features.automation.description_after"]()}
    </FeatureCard>

    <FeatureCard title={m["home.features.icloud.title"]()}>
      {#snippet icon()}
        ☁️
      {/snippet}
      {m["home.features.icloud.description"]()}
    </FeatureCard>

    <FeatureCard title={m["home.features.ux.title"]()}>
      {#snippet icon()}
        ✨
      {/snippet}
      {m["home.features.ux.description"]()}
    </FeatureCard>

    <FeatureCard title={m["home.features.currency.title"]()}>
      {#snippet icon()}
        💱
      {/snippet}
      {m["home.features.currency.description"]()}<Fna n="1" />
    </FeatureCard>
  </div>

  <div class="h-20 md:h-28"></div>
</section>

<!-- Footnotes -->
<section class="flex flex-col items-center px-4">
  <div class="w-full max-w-5xl">
    <div class="border-t border-white/10 pt-6 text-xs opacity-50">
      <p id="fna1">
        <span class="font-mono">[1]</span>
        {m["home.footnotes.fna_1"]()}
      </p>
      <br />
      <p id="fna2">
        <span class="font-mono">[2]</span>
        {m["home.footnotes.fna_2"]()}
      </p>
    </div>
  </div>
</section>
