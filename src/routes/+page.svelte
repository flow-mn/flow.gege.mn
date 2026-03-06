<script lang="ts">
  import DiscordLogo from "$lib/components/DiscordLogo.svelte";
  import FeatureCard from "$lib/components/FeatureCard.svelte";
  import FlexDownloadButtons from "$lib/components/FlexDownloadButtons.svelte";
  import Fna from "$lib/components/Fna.svelte";
</script>

<svelte:head>
  <title>Flow - FOSS expense tracker</title>
</svelte:head>

<!-- md+ -->
<div class="babalo animate-move-around-a left-[25vw] top-[25vh] hidden md:block"></div>
<div class="babalo animate-move-around-b right-[20vw] top-[10vh] hidden md:block"></div>
<div class="babalo animate-move-around-c right-[15vw] top-[80vh] hidden md:block"></div>
<!-- mobile -->
<div class="babalo animate-move-around-a left-[-1vw] top-[10vh] md:hidden"></div>
<div class="babalo animate-move-around-c right-[8vw] top-[80vh] md:hidden"></div>

<section class="flex flex-col items-center gap-10">
  <div class="h-28"></div>

  <div
    data-aos="fade-right"
    class="text-3xl font-semibold max-md:text-center"
  >
    Start tracking your finances.
  </div>

  <a
    data-aos="fade-right"
    href="https://discord.gg/Ndh9VDeZa4"
    target="_blank"
    class="bg-primary text-background visited:text-background inline-block w-fit rounded-lg px-3 py-2 text-lg font-semibold"
  >
    <DiscordLogo></DiscordLogo>
    Join Discord for updates
  </a>

  <FlexDownloadButtons />

  <div class="h-28"></div>

  <div class="grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
      Easily manage your subscriptions, paychecks, and bills
    </FeatureCard>

    <FeatureCard title="iCloud backup">
      {#snippet icon()}
        ☁️
      {/snippet}
      Your can periodically backup your data to iCloud
    </FeatureCard>

    <FeatureCard title="Seamless UX">
      {#snippet icon()}
        💯
      {/snippet}
      Flow tries to be as user-friendly as possible, with a clean and simple UI.
    </FeatureCard>

    <FeatureCard title="Multi-currency">
      {#snippet icon()}
        💱
      {/snippet}
      Flow supports multiple currencies, and can convert between them.
      <Fna n="1" />
    </FeatureCard>
  </div>

  <div class="h-28"></div>

  <div class="text-xs opacity-75">
    <p id="fna1">
      <span class="font-mono">[1]</span> - Flow may need internet to fetch exchange rates if you use more than one currency.
    </p>
    <br />
    <p id="fna2">
      <span class="font-mono">[2]</span> - If you use older Android devices, or devices with Windows, or Linux-based operating
      systems, Flow may store your data, and backups in a easily accessible place. Make sure your device and system supports
      containerized storage, or other type of external access protection as you are responsible for your financial data.
    </p>
  </div>
</section>
