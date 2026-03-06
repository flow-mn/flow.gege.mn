<script lang="ts">
  import { copyBankAccNo } from "$lib/copyBankAccNo";
</script>

<svelte:head>
  <title>Donate — Flow</title>
</svelte:head>

<section class="flex flex-col items-center gap-12 px-4">
  <div class="w-full max-w-2xl">
    <div class="mb-2 text-xs font-semibold uppercase tracking-widest text-primary opacity-80">Support the project</div>
    <h1 class="mb-4 text-4xl font-bold">Donate to Flow</h1>
    <p class="max-w-prose text-base opacity-60 leading-relaxed">
      Flow is completely free and will always stay that way. As Flow doesn't generate any revenue, your
      support means the world and helps keep the project alive.
    </p>
  </div>

  <div class="flex w-full max-w-2xl flex-col gap-6">
    <div class="gradient-border flex flex-col gap-3 rounded-xl p-6">
      <div class="text-sm font-semibold uppercase tracking-wide opacity-50">Buy me a coffee</div>
      <a
        aria-label="Buy me a coffee"
        target="_blank"
        href="https://www.buymeacoffee.com/sadespresso"
        class="w-fit"
      >
        <img
          alt="Buy me a coffee button"
          src="https://img.buymeacoffee.com/button-api/?text=Buy me an iced mocha&emoji=&slug=sadespresso&button_colour=BD5FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"
        />
      </a>
    </div>

    <div class="gradient-border flex flex-col gap-3 rounded-xl p-6">
      <div class="text-sm font-semibold uppercase tracking-wide opacity-50">Sponsor on GitHub</div>
      <iframe
        src="https://github.com/sponsors/flow-mn/card"
        title="Sponsor flow-mn"
        height="120"
        width="600"
        style="border: 0; max-width: 100%;"
      ></iframe>
    </div>

    <div class="gradient-border flex flex-col gap-3 rounded-xl p-6">
      <div class="text-sm font-semibold uppercase tracking-wide opacity-50">Golomt Bank of Mongolia</div>
      <div class="text-base">
        <button
          onclick={copyBankAccNo}
          class="text-primary hover:opacity-80 cursor-pointer font-bold transition-opacity appearance-none"
          title="Click to copy IBAN"
        >
          MN17 0015 0011 0541 5662
        </button>
        <span class="opacity-60"> — Batmend Ganbaatar</span>
      </div>
      <p class="text-xs opacity-40">Click the account number to copy it</p>
    </div>
  </div>
</section>

<style>
  .gradient-border {
    background:
      linear-gradient(#1c1c1c, #1c1c1c) padding-box,
      linear-gradient(
          128deg,
          rgba(242, 192, 255, 0.5) 0%,
          rgba(255, 255, 255, 0.05) 30%,
          rgba(242, 192, 255, 0.2) 60%,
          rgba(255, 255, 255, 0.05) 80%,
          rgba(242, 192, 255, 0.5) 100%
        )
        border-box;
    border: 1px solid transparent;
  }
</style>
