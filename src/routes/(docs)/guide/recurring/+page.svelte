<script lang="ts">
  import GuideCallout from "$lib/components/guide/GuideCallout.svelte";
  import AnnotatedScreenshot from "$lib/components/guide/AnnotatedScreenshot.svelte";
  import Marker from "$lib/components/guide/Marker.svelte";
</script>

<article
  class="prose prose-invert prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none"
>
  <p class="text-primary not-prose mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">Scheduling</p>
  <h1 class="not-prose mb-2 text-3xl font-bold">Recurring transactions</h1>
  <p class="not-prose mb-8 text-base opacity-50">
    Set rent, salary, Netflix, and gym fees up once. Flow records them on schedule, every time.
  </p>

  <h2>Where it lives</h2>

  <p>
    Recurrence isn't a separate screen — it's a section <em>on the transaction itself</em>. Open any transaction (or
    create a new one), scroll down past the basic fields, and you'll see a <strong>Recurrence</strong> section. Tap
    <strong>Recurrence setup</strong> to open the schedule editor.
  </p>

  <p>The transaction you set this on becomes a template. Flow uses it to generate copies on the schedule you choose.</p>

  <h2>Picking a schedule</h2>

  <p>The setup sheet offers presets for the common cases:</p>

  <ul>
    <li>Every day</li>
    <li>Every week</li>
    <li>Every 2 weeks</li>
    <li>Every month</li>
    <li>Every year</li>
  </ul>

  <p>And three ways to end the rule:</p>

  <ul>
    <li><strong>Never</strong> — runs forever (until you turn it off).</li>
    <li><strong>On a date</strong> — the rule stops after that date.</li>
    <li><strong>After N occurrences</strong> — Flow shows you the total it'll generate.</li>
  </ul>

  <AnnotatedScreenshot
    src="/guide/recurring/setup.png"
    alt="Setup recurring transaction sheet with Recurrence, Starts on, and Ends on rows."
    aspect="9/16"
  >
    {#snippet overlay()}
      <Marker
        x={50}
        y={75}
        n={1}
      />
      <Marker
        x={50}
        y={82}
        n={2}
      />
      <Marker
        x={50}
        y={89}
        n={3}
      />
    {/snippet}
  </AnnotatedScreenshot>

  <h2>How generation works</h2>

  <p>
    Flow doesn't pre-generate every future occurrence. When you open the app, it walks the rule forward and creates
    transactions <strong>up through today, plus exactly one occurrence in the future</strong>. That single look-ahead is
    the same regardless of how far behind the rule is — whether it owes you 1 occurrence or 10, you only ever see at
    most one future-dated transaction at a time.
  </p>

  <p>
    The next future occurrence is generated only after the current future one moves into the past (i.e. its date
    arrives). So a monthly rule keeps exactly one upcoming occurrence visible at any given moment.
  </p>

  <p>
    What happens to those generated transactions depends on a setting in <strong
      >Profile → Preferences → Pending transactions</strong
    >:
  </p>

  <ul>
    <li>
      If <strong>Require confirmation</strong> is on, the future-dated look-ahead lands as a
      <a href="/guide/pending">pending transaction</a> you'll need to approve when its date comes.
    </li>
    <li>If it's off, the look-ahead is confirmed automatically as soon as its date arrives.</li>
  </ul>

  <p>
    Past and present occurrences (the catch-up backlog) follow the same rule — they're confirmed or pending depending on
    that setting.
  </p>

  <GuideCallout
    variant="info"
    title="Catch-up generation"
  >
    If you don't open Flow for a few weeks, every missed occurrence is back-dated to the right day on the next launch —
    plus one fresh look-ahead in the future. Your history stays correct without flooding you with future-dated rows.
  </GuideCallout>

  <h2>Editing the rule</h2>

  <p>
    Editing the recurring transaction changes the template for <em>future</em> occurrences only. Already-generated transactions
    in your history keep their original values, so a rent increase doesn't silently rewrite the past.
  </p>

  <h2>Stopping a rule</h2>

  <p>To stop a rule, open the source transaction and either:</p>

  <ul>
    <li>Set the recurrence end date to today (or a date in the past).</li>
    <li>Remove the recurrence entirely from the transaction.</li>
    <li>Delete the source transaction — past generations are kept; no new ones run.</li>
  </ul>

  <h2>Recurring transfers</h2>

  <p>
    Transfers can recur too. Set up a transfer between two of your accounts, then add a recurrence to it — Flow will
    duplicate the transfer on schedule. Useful for automatic monthly savings deposits.
  </p>
</article>
