<script lang="ts">
  import DiscordLogo from "$lib/components/DiscordLogo.svelte";
  import FeatureCard from "$lib/components/FeatureCard.svelte";
  import FlexDownloadButtons from "$lib/components/FlexDownloadButtons.svelte";
  import Fna from "$lib/components/Fna.svelte";
</script>

<svelte:head>
  <title>Flow - FOSS expense tracker</title>
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
  <div class="h-20 md:h-28"></div>

  <div
    data-aos="fade-up"
    class="border-primary/30 bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
  >
    <span>Free &amp; Open Source</span>
  </div>

  <h1
    data-aos="fade-up"
    data-aos-delay="60"
    class="max-w-2xl text-5xl font-bold leading-tight tracking-tight md:text-6xl"
  >
    Track your finances,<br /><span class="text-primary">your way.</span>
  </h1>

  <p
    data-aos="fade-up"
    data-aos-delay="120"
    class="max-w-md text-base opacity-60 md:text-lg"
  >
    Flow is a free, offline, privacy-first expense tracker. You control your data — always.
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
    Join Discord for updates
  </a>

  <div class="h-20 md:h-28"></div>
</section>

<!-- Features -->
<section class="flex flex-col items-center gap-10 px-4">
  <div
    data-aos="fade-up"
    class="text-center"
  >
    <p class="text-primary mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">Features</p>
    <h2 class="text-3xl font-bold">Everything you need</h2>
  </div>

  <div class="grid w-full max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    <FeatureCard title="Free and open-source">
      {#snippet icon()}
        🌐
      {/snippet}
      Flow is a GPL v3.0 licensed, free, and open-source project.
    </FeatureCard>

    <FeatureCard title="Privacy-focused">
      {#snippet icon()}
        🔐
      {/snippet}
      Flow is offline<Fna n="1" />, and you control where your data goes<Fna n="2" />.
    </FeatureCard>

    <FeatureCard title="Recurring transactions">
      {#snippet icon()}
        🔁
      {/snippet}
      Easily manage your subscriptions, paychecks, and bills.
    </FeatureCard>

    <FeatureCard title="iCloud backup">
      {#snippet icon()}
        ☁️
      {/snippet}
      Periodically back up your data to iCloud for safe-keeping.
    </FeatureCard>

    <FeatureCard title="Seamless UX">
      {#snippet icon()}
        ✨
      {/snippet}
      Flow is built to be as user-friendly as possible, with a clean and simple UI.
    </FeatureCard>

    <FeatureCard title="Multi-currency">
      {#snippet icon()}
        💱
      {/snippet}
      Flow supports multiple currencies and can convert between them.<Fna n="1" />
    </FeatureCard>
  </div>

  <div class="h-20 md:h-28"></div>
</section>

<!-- Footnotes -->
<section class="flex flex-col items-center px-4">
  <div class="w-full max-w-5xl">
    <div class="border-t border-white/10 pt-6 text-xs opacity-50">
      <p id="fna1">
        <span class="font-mono">[1]</span> Flow may need internet to fetch exchange rates if you use more than one currency.
      </p>
      <br />
      <p id="fna2">
        <span class="font-mono">[2]</span> If you use older Android devices, or devices with Windows or Linux-based operating
        systems, Flow may store your data and backups in an easily accessible place. Make sure your device supports containerized
        storage or other external access protection, as you are responsible for your financial data.
      </p>
    </div>
  </div>
</section>
