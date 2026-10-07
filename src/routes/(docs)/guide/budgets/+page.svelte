<script lang="ts">
  import GuideCallout from "$lib/components/guide/GuideCallout.svelte";
</script>

<article
  class="prose prose-invert prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none"
>
  <p class="text-primary not-prose mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">Planning</p>
  <h1 class="not-prose mb-2 text-3xl font-bold">Budgets</h1>
  <p class="not-prose mb-8 text-base opacity-50">
    Set a spending limit for a week, month, or year — for everything, or just a few categories — and see how you're
    pacing before you run over.
  </p>

  <h2>Where it lives</h2>

  <p>
    Go to <strong>Profile → Budgets</strong>. The page lists every budget as a card, in the order you created them. Tap
    <strong>New budget</strong> at the top to add one, or tap a card to open its details.
  </p>

  <p>
    The <strong>Stats</strong> tab also has a <strong>Budgets</strong> tile that sums things up at a glance —
    <em>All on track</em>, <em>2 over limit</em>, <em>1 nearing limit</em>. Tap it for the
    <strong>Budget overview</strong>: a status summary, recommendations, and your budgets side by side.
  </p>

  <GuideCallout
    variant="info"
    title="No grand total"
  >
    Budgets can overlap (a "Food" budget and an "Everything" budget both count the same grocery run), so Flow never adds
    them up into one number.
  </GuideCallout>

  <h2>Creating a budget</h2>

  <ol>
    <li>
      <strong>Amount</strong> — tap the big number to enter your limit. It must be more than zero. The currency chip underneath
      defaults to your primary currency.
    </li>
    <li><strong>Budget name</strong> — required, and unique across your budgets.</li>
    <li>
      <strong>Scope</strong> — pick the categories that count toward this budget. Leave it empty to count
      <strong>All spending</strong>.
    </li>
    <li>
      <strong>Period</strong> — defaults to this month. Choose <strong>By week</strong>, <strong>By month</strong>,
      <strong>By year</strong>, or a <strong>Custom range</strong> from <strong>More options</strong>.
    </li>
    <li>
      <strong>Renew automatically</strong> — on by default. When the period ends, the budget rolls over to the next one (a
      July budget becomes an August budget). Turn it off for a one-off budget, like a trip. Custom ranges never renew.
    </li>
  </ol>

  <p>Save with the <strong>✓</strong> at the top right.</p>

  <h2>What counts</h2>

  <ul>
    <li><strong>Expenses only.</strong> Income and transfers never count against a budget.</li>
    <li>
      Transactions dated inside the current period, in the budget's categories (or any category for All spending).
    </li>
    <li>
      <strong>Every account.</strong> Budgets are scoped by category, not by account — excluded-from-balance accounts count
      too.
    </li>
    <li>
      <strong>Pending transactions count</strong>, and show as a separate lighter segment on the progress bar so you can
      see what's already committed.
    </li>
    <li>
      Spending in other currencies is converted with Flow's cached exchange rates. If a rate is missing, Flow skips that
      amount and tells you so.
    </li>
  </ul>

  <h2>Reading a budget</h2>

  <p>
    A budget's page shows spent vs. limit with a percentage, a progress bar with a <strong>pace marker</strong> (where you'd
    be if you spent evenly through the period), and how many days are left. A budget is:
  </p>

  <ul>
    <li><strong>On track</strong> — under 90% of the limit.</li>
    <li><strong>Nearing limit</strong> — 90% or more.</li>
    <li><strong>Over budget</strong> — 100% or more.</li>
  </ul>

  <p>
    Under the bar, a one-line insight looks at your pace: "At this pace, Food will overshoot by $40", or, late in the
    period, "Food has plenty of room — $120 unspent."
  </p>

  <h2>Past periods</h2>

  <p>
    Renewing never overwrites the period that just ended. <strong>Recent periods</strong> on the budget's page shows up to
    the last six periods (never earlier than when you created the budget), so you can check how last month went. Past totals
    are recalculated from your transactions, so fixing an old transaction updates its period too.
  </p>

  <h2>Alerts and widgets</h2>

  <p>
    When a budget is over or close to its limit, Flow shows a card in the app with a <strong>Review</strong> button — at
    most once every three days, for the budget that needs attention most.
  </p>

  <p>There are home-screen widgets on both iOS and Android:</p>

  <ul>
    <li><strong>Budgets</strong> — how many budgets need attention, and the one that needs it most.</li>
    <li>
      <strong>Budget</strong> — one budget of your choice, or whichever is closest to its limit.
    </li>
  </ul>

  <p>
    Both have a <strong>Hide amounts</strong> option that shows progress and status only — no money on your home screen.
    Tapping a widget opens the budget in Flow.
  </p>

  <h2>Editing and deleting</h2>

  <p>
    Open a budget and tap the pencil. <strong>Delete budget</strong> is at the bottom of the editor — deleting a budget never
    touches your transactions. Budgets are included in backups.
  </p>
</article>
