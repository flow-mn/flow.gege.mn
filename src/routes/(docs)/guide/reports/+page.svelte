<script lang="ts">
  import GuideCallout from "$lib/components/guide/GuideCallout.svelte";
</script>

<article
  class="prose prose-invert prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none"
>
  <p class="text-primary not-prose mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">Insights</p>
  <h1 class="not-prose mb-2 text-3xl font-bold">Reports &amp; stats</h1>
  <p class="not-prose mb-8 text-base opacity-50">
    Where your money actually went — cash flow, pace, top categories, and on-device observations about what changed.
  </p>

  <h2>The Stats tab</h2>

  <p>
    The <strong>Stats</strong> tab is Flow's report room. Everything is computed locally from your transactions — no
    server, no delay. It has two parts: cards that follow the time range you pick, and <strong>Insights</strong> tiles that
    each look at their own window.
  </p>

  <h2>Picking a time period</h2>

  <p>
    The Stats tab opens on the current month. Tap the <strong>‹ ›</strong> arrows (or swipe) to step backward or
    forward, and tap the month or year to jump straight to one. <strong>More options</strong> offers quick picks —
    <strong>This week</strong>, <strong>This month</strong>, <strong>This year</strong>, <strong>Last 30 days</strong>,
    <strong>All time</strong> — and the <strong>By week</strong>, <strong>By month</strong>,
    <strong>By year</strong>, and <strong>Custom range</strong> modes.
  </p>

  <p>
    The Stats tab has only a time control. It doesn't follow the home feed's filters, and there's no account or currency
    filter.
  </p>

  <h2>For the selected range</h2>

  <ul>
    <li>
      <strong>Worth knowing</strong> — short observations about the month (see below). Shown when a single month is selected.
    </li>
    <li><strong>Cash flow</strong> — money in and money out.</li>
    <li>
      <strong>Pace</strong> — a <strong>Projected</strong> end-of-period total while the range includes today (<strong
        >Total spent</strong
      > otherwise), your average per day, and the trend vs. the previous period.
    </li>
    <li>
      <strong>Top categories</strong> — your three biggest expense categories, in their own colors. Tap it for the full ranked
      list.
    </li>
  </ul>

  <p>Transfers never count as income or spending — moving money between your own accounts isn't either.</p>

  <h2>Categories, ranked</h2>

  <p>
    Tapping <strong>Top categories</strong> opens every category as a ranked list for the same range, with
    <strong>Expense</strong> / <strong>Income</strong> tabs. Each row shows the category's amount, its share of the total,
    and a share bar. A summary on top shows the total and how many categories and transactions it covers. Tap a category
    to open it with the same range.
  </p>

  <p>
    Switch from <strong>List</strong> to <strong>Chart</strong> for a pie chart. Slices use your category colors, and the
    middle shows the total — or the selected slice's name and amount. Tap a selected slice again to open that category.
  </p>

  <h2 id="worth-knowing">Worth knowing</h2>

  <p>
    <strong>Worth knowing</strong> points out a few things in the selected month that stand out compared to your usual —
    at most three at a time:
  </p>

  <ul>
    <li><strong>Month comparisons</strong> — this month is well above or below your usual by the same day.</li>
    <li><strong>Category spikes</strong> — a category is running at 1.5× its usual or more.</li>
    <li><strong>Category drops</strong> — a regular category is way down.</li>
    <li><strong>New categories</strong> — first spending in a category for months.</li>
    <li>
      <strong>Subscription suggestions</strong> — the same charge repeating on a weekly, monthly, or yearly schedule
      that isn't set up as recurring yet. Bills that vary, like utilities, are suggested too once there are at least
      four charges. Tap <strong>Track as recurring</strong> to set it up in one step.
    </li>
    <li><strong>Price changes</strong> — a regular charge went up or down, with what that means over a year.</li>
  </ul>

  <p>
    Tap an observation to see its history, what moved it, and the transactions behind it. "Usual" means the median of
    your previous six complete months, so Flow needs a few months of history (at least three months with ten or more
    expenses) before it says anything. Small changes are ignored, the same observation won't repeat for four weeks
    unless it grows, and — for the current month — most observations wait until the 7th.
  </p>

  <p>
    Transfers, pending transactions, and matched refunds are left out. Don't care about one kind of observation? Open it
    and choose <strong>Don't show…</strong>. Bring it back from the eye icon in the Worth knowing header.
  </p>

  <GuideCallout
    variant="info"
    title="Worked out on your device"
  >
    Worth knowing runs entirely on your phone. Nothing about your transactions is sent anywhere to produce it.
  </GuideCallout>

  <h2>Insights</h2>

  <p>
    Below the range cards, the <strong>Insights</strong> tiles each cover their own time window, whatever range is
    selected above. They're also on their own page from the <strong>Profile</strong> tab.
  </p>

  <ul>
    <li><strong>Wrapped</strong> — your month in review: biggest expense, most frequent entry, typical purchase.</li>
    <li><strong>Net worth</strong> — your balance over time, with a breakdown by account.</li>
    <li><strong>Budgets</strong> — how your <a href="/guide/budgets">budgets</a> are tracking.</li>
    <li><strong>Calendar</strong> — spending per day, including your priciest day.</li>
    <li><strong>Recurring</strong> — upcoming recurring charges and what's already committed.</li>
    <li><strong>Spending map</strong> — where you spent, for transactions with a location.</li>
  </ul>

  <h2>Currency in reports</h2>

  <p>
    Reports are always shown in your <strong>primary currency</strong>. Transactions in other currencies are converted
    at the latest exchange rates Flow has cached. If a rate is missing, Flow skips those amounts and tells you. Tap
    through to the transaction list to see individual transactions in their original currency.
  </p>

  <GuideCallout
    variant="info"
    title="Stale rates"
  >
    Without internet, Flow uses the most recent rates it cached.
  </GuideCallout>
</article>
