<script lang="ts">
  import GuideCallout from "$lib/components/guide/GuideCallout.svelte";
  import AnnotatedScreenshot from "$lib/components/guide/AnnotatedScreenshot.svelte";
  import Marker from "$lib/components/guide/Marker.svelte";
  import Highlight from "$lib/components/guide/Highlight.svelte";
</script>

<article
  class="prose prose-invert prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none"
>
  <p class="text-primary not-prose mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">Insights</p>
  <h1 class="not-prose mb-2 text-3xl font-bold">Reports &amp; stats</h1>
  <p class="not-prose mb-8 text-base opacity-50">
    Where your money actually went over a chosen time period — totals, daily averages, and a trend chart you can drill
    into.
  </p>

  <h2>The Stats tab</h2>

  <p>
    The <strong>Stats</strong> tab is Flow's report room. At the top is a period picker and a granularity row (<strong
      >By month</strong
    >
    / <strong>More options</strong>). Below is the headline total, a trend chart for the selected period, and per-day
    averages. Everything is computed locally from your transactions — no server, no delay.
  </p>

  <AnnotatedScreenshot
    src="/guide/reports/stats.png"
    alt="The Stats tab — period picker, By month / More options row, headline total, trend chart, and per-day averages."
    aspect="9/16"
  >
    {#snippet overlay()}
      <Highlight
        x={5}
        y={6}
        w={90}
        h={8}
        label="Period"
      />
      <Marker
        x={50}
        y={17}
        n={1}
      />
      <Marker
        x={30}
        y={23}
        n={2}
      />
      <Marker
        x={50}
        y={45}
        n={3}
      />
      <Marker
        x={50}
        y={75}
        n={4}
      />
    {/snippet}
  </AnnotatedScreenshot>

  <ol>
    <li><strong>By month / More options</strong> — change how the chart is sliced and what it includes.</li>
    <li><strong>Headline total</strong> — total expense for the period, with a delta vs. the previous period.</li>
    <li><strong>Trend chart</strong> — current period overlaid on the previous one for comparison.</li>
    <li><strong>Averages, by day</strong> — Expense and Income cards summarizing the period's daily mean.</li>
  </ol>

  <h2>Picking a time period</h2>

  <p>
    The header shows the current period (e.g. <em>April</em>). Tap the <strong>‹ ›</strong> arrows on either side to
    step backward or forward — flick through every month of last year without re-picking dates. Tap the period name
    itself, or the <strong>More options</strong> link, to change granularity (week / month / year / custom range).
  </p>

  <h2>Drilling in</h2>

  <p>Tap a point on the trend chart, or one of the average cards, to drill down to:</p>

  <ul>
    <li>Just the transactions that contributed.</li>
    <li>A sub-breakdown by category or account.</li>
  </ul>

  <p>
    From there you can tap any individual transaction to inspect or edit it. Drill, drill, drill until you find the one
    outlier expense that warped the chart.
  </p>

  <h2>Income vs. expense</h2>

  <p>
    The <strong>Averages, by day</strong> section splits the period into Expense and Income cards. Transfers are excluded
    from both by design — moving money between your own accounts isn't spending or earning.
  </p>

  <h2>Currency in reports</h2>

  <p>
    Reports are always rendered in your <strong>primary currency</strong>. Transactions in other currencies are
    converted at the latest exchange rate Flow has cached. If you need to see raw figures in their original currencies,
    drill down to the transaction list — individual transactions show their native currency.
  </p>

  <GuideCallout
    variant="info"
    title="Stale rates"
  >
    Without internet, Flow uses the most recent rates it cached. The Stats tab shows the rate date at the bottom so you
    know how fresh the conversion is.
  </GuideCallout>
</article>
