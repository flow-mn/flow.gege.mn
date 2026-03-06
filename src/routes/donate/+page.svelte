<script lang="ts">
  import copyBankAccountNumber from "$lib/copyBankAccountNumber";
</script>

<svelte:head>
  <title>Donate Flow</title>
</svelte:head>

<p class="mb-8 max-w-prose">
  Flow is a totally free project, and will stay that way. As Flow doesn't generate any revenue, it'd mean so much to
  support the project 🤩
</p>

<div class="flex flex-col gap-4">
  <div class="flex flex-col gap-2">
    <h4>Buy me a coffee:</h4>
    <a
      aria-label="Buy me a coffee"
      target="_blank"
      href="https://www.buymeacoffee.com/sadespresso"
    >
      <img
        alt="Buy me a coffee button"
        src="https://img.buymeacoffee.com/button-api/?text=Buy me an iced mocha&emoji=&slug=sadespresso&button_colour=BD5FFF&font_colour=ffffff&font_family=Poppins&outline_colour=000000&coffee_colour=FFDD00"
      />
    </a>
  </div>
  <div class="flex flex-col gap-2">
    <h4>Sponsor on GitHub:</h4>
    <iframe
      src="https://github.com/sponsors/flow-mn/card"
      title="Sponsor flow-mn"
      height="120"
      width="600"
      style="border: 0;"
    ></iframe>
  </div>
  <div class="flex flex-col gap-0">
    <h4>Golomt Bank of Mongolia:</h4>
    <div>
      <button
        onclick={copyBankAccountNumber}
        class="appearance-none font-bold"
      >
        MN17 0015 0011 0541 5662
      </button> (Batmend Ganbaatar)
    </div>
  </div>
</div>
