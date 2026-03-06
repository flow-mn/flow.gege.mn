<script lang="ts">
  import { m } from "$lib/paraglide/messages";
  import { copyBankAccNo } from "$lib/copyBankAccNo";
</script>

<svelte:head>
  <title>{m["donate.title"]()}</title>
</svelte:head>

<section class="flex flex-col items-center gap-12 px-4">
  <div class="w-full max-w-2xl">
    <div class="text-primary mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">
      {m["donate.label"]()}
    </div>
    <h1 class="mb-4 text-4xl font-bold">{m["donate.heading"]()}</h1>
    <p class="max-w-prose text-base leading-relaxed opacity-60">
      {m["donate.description"]()}
    </p>
  </div>

  <div class="flex w-full max-w-2xl flex-col gap-6">
    <div class="gradient-border flex flex-col gap-3 rounded-xl p-6">
      <div class="text-sm font-semibold uppercase tracking-wide opacity-50">{m["donate.bmac.label"]()}</div>
      <a
        aria-label={m["donate.bmac.label"]()}
        target="_blank"
        href="https://www.buymeacoffee.com/sadespresso"
        class="w-fit"
      >
        <img
          alt={m["donate.bmac.img_alt"]()}
          src="https://img.buymeacoffee.com/button-api/?text=Buy me an iced mocha&emoji=&slug=sadespresso&button_colour=BD5FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"
        />
      </a>
    </div>

    <div class="gradient-border flex flex-col gap-3 rounded-xl p-6">
      <div class="text-sm font-semibold uppercase tracking-wide opacity-50">{m["donate.github.label"]()}</div>
      <iframe
        src="https://github.com/sponsors/flow-mn/card"
        title={m["donate.github.iframe_title"]()}
        height="120"
        width="600"
        style="border: 0; max-width: 100%;"
      ></iframe>
    </div>

    <div class="gradient-border flex flex-col gap-3 rounded-xl p-6">
      <div class="text-sm font-semibold uppercase tracking-wide opacity-50">{m["donate.golomt.label"]()}</div>
      <div class="text-base">
        <button
          onclick={copyBankAccNo}
          class="text-primary cursor-pointer appearance-none font-bold transition-opacity hover:opacity-80"
          title={m["donate.golomt.copy_title"]()}
        >
          MN17 0015 0011 0541 5662
        </button>
        <span class="opacity-60"> — {m["donate.golomt.account_name"]()}</span>
      </div>
      <p class="text-xs opacity-40">{m["donate.golomt.copy_hint"]()}</p>
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
