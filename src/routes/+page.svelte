<script lang="ts">
  import FeatureCard from "$lib/components/FeatureCard.svelte";
  import Fna from "$lib/components/Fna.svelte";
  import HeroSection from "$lib/components/home/HeroSection.svelte";
  import { m } from "$lib/paraglide/messages";
  import { ParaglideMessage } from "@inlang/paraglide-js-svelte";
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
<HeroSection />

<!-- Features -->
<section class="trig-fade-up enable-trig flex flex-col items-center gap-10 px-4">
  <div class="trig-target text-center">
    <p class="text-primary mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">
      {m["home.features.label"]()}
    </p>
    <h2 class="text-3xl font-bold">{m["home.features.heading"]()}</h2>
  </div>

  <div class="trig-fade-up enable-trig grid w-full max-w-5xl grid-cols-1 gap-4 *:h-full sm:grid-cols-2 lg:grid-cols-3">
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
      {m["home.features.privacy.description_1"]()}<Fna n="1" />{m["home.features.privacy.description_2"]()}.
    </FeatureCard>

    <FeatureCard title={m["home.features.automation.title"]()}>
      {#snippet icon()}
        🤖
      {/snippet}
      <ParaglideMessage
        inputs={{}}
        message={m["home.features.automation.description"]}
      >
        {#snippet link({ children, options })}
          <a
            href={options.href}
            target={options.href.startsWith("/") ? "_self" : "_blank"}
          >
            {@render children?.()}
          </a>
        {/snippet}
      </ParaglideMessage>
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
        <span class="invert">💱</span>
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
    </div>
  </div>
</section>
