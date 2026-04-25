<script lang="ts">
  import GuideCallout from "$lib/components/guide/GuideCallout.svelte";
  import FlexDownloadButtons from "$lib/components/FlexDownloadButtons.svelte";
</script>

<svelte:head>
  <title>Getting Started — Flow Guide</title>
</svelte:head>

<article
  class="prose prose-invert prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none"
>
  <p class="text-primary not-prose mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">Basics</p>
  <h1 class="not-prose mb-2 text-3xl font-bold">Getting Started with Flow</h1>
  <p class="not-prose mb-8 text-base opacity-50">Set up Flow and record your first transaction in minutes.</p>

  <h2>1. Download Flow</h2>

  <p>Flow is available on iOS and Android. Download it from the App Store or Google Play to get started.</p>

  <div class="not-prose my-4">
    <FlexDownloadButtons />
  </div>

  <GuideCallout variant="info">Flow is completely free — no sign-up, no subscription, no ads.</GuideCallout>

  <h2>2. Create your first account</h2>

  <p>
    An <strong>account</strong> in Flow represents a real-world money container — your bank account, a wallet, a credit card,
    or any store of money you want to track.
  </p>

  <ol>
    <li>Open Flow and tap the <strong>Accounts</strong> tab.</li>
    <li>Tap the <strong>+</strong> button on that tab.</li>
    <li>
      Give it a name (e.g. "Checking"), pick a currency and account type, then tap <strong>Update balance</strong> to set
      today's balance.
    </li>
    <li>Tap the <strong>✓</strong> at the top right to save.</li>
  </ol>

  <GuideCallout
    variant="tip"
    title="Multiple accounts"
  >
    Create separate accounts for each real-world source of money — cash, bank, credit card — so your reports stay
    accurate.
  </GuideCallout>

  <h2>3. Record your first transaction</h2>

  <p>Transactions are the core of Flow. Every expense or income gets logged here.</p>

  <ol>
    <li>
      Tap the <strong>+</strong> button at the bottom of the screen — the FAB is dedicated to creating new transactions.
    </li>
    <li>
      Pick <strong>Expense</strong>, <strong>Income</strong>, or <strong>Transfer</strong> from the type chip at the top.
    </li>
    <li>Type the amount on the numpad and tap the <strong>✓</strong> on the numpad to commit it.</li>
    <li>
      Pick the account, category, and (optionally) a title, then tap the <strong>✓</strong> at the top right to save.
    </li>
  </ol>

  <GuideCallout
    variant="tip"
    title="Customize the order"
  >
    The questions Flow asks during transaction entry are configurable at <strong
      >Profile → Preferences → Transaction Entry</strong
    >. Add, remove, or reorder steps to match how you actually enter data.
  </GuideCallout>

  <GuideCallout
    variant="tip"
    title="Scan receipts"
  >
    Use the <a
      href="https://eny.gege.mn/"
      target="_blank">Eny</a
    > integration to parse receipts automatically instead of typing amounts manually.
  </GuideCallout>

  <h2>4. Explore your reports</h2>

  <p>
    After adding a few transactions, head to the <strong>Stats</strong> tab to see your spending trend over a chosen time
    period. From there you can drill down into any point on the chart for the underlying transactions.
  </p>

  <p>
    Reports are always displayed in your primary currency. If you use multiple currencies, Flow will convert using the
    latest exchange rates.
  </p>

  <GuideCallout
    variant="warning"
    title="Exchange rates"
  >
    Fetching exchange rates requires an internet connection. Flow is otherwise fully offline.
  </GuideCallout>
</article>
