<script lang="ts">
  import GuideCallout from "$lib/components/guide/GuideCallout.svelte";
</script>

<article
  class="prose prose-invert prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none"
>
  <p class="text-primary not-prose mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">Integrations</p>
  <h1 class="not-prose mb-2 text-3xl font-bold">iOS Shortcuts</h1>
  <p class="not-prose mb-8 text-base opacity-50">
    Record an expense in Flow automatically every time you tap to pay with Apple Pay — no typing, no opening the app.
  </p>

  <GuideCallout
    variant="info"
    title="Version"
  >
    This guide assumes Flow <strong>v0.19.3</strong> or later. The <em>Record an Expense</em> action and its field layout
    were finalized in that release.
  </GuideCallout>

  <h2>What you're building</h2>

  <p>
    Apple's <strong>Shortcuts</strong> app on iOS can react to system events. One of those events is "I just paid with a
    card in my Wallet". You'll wire that trigger to Flow's <em>Record an Expense</em> action, pre-filled with the transaction
    amount Apple Pay just charged. The result: every Apple Pay purchase becomes an automatic Flow expense.
  </p>

  <h2>Step 1 — Create the automation</h2>

  <p>
    Open the <strong>Shortcuts</strong> app and tap the <strong>Automation</strong> tab at the bottom. Tap the
    <strong>+</strong> button to start a new automation.
  </p>

  <h2>Step 2 — Choose the Wallet trigger</h2>

  <p>
    From the list of triggers, pick <strong>Wallet</strong>. This fires whenever a card transaction goes through Apple
    Pay.
  </p>

  <p>
    On the next screen you can <strong>add or remove specific cards</strong> (e.g. only your personal card, not the
    business one) and <strong>filter by merchant categories</strong>. Leave both at their defaults if you want every
    Apple Pay charge to be logged.
  </p>

  <h2>Step 3 — Run immediately (recommended)</h2>

  <p>
    Scroll down on the trigger setup and choose <strong>Run Immediately</strong>. Without this, you'd have to tap a
    notification to confirm each automation run, defeating the point. Optionally toggle <strong>Notify When Run</strong>
    if you want a small heads-up that Flow logged the expense.
  </p>

  <p>Tap <strong>Next</strong>, then choose <strong>Create New Shortcut</strong>.</p>

  <h2>Step 4 — Add Flow's "Record an Expense" action</h2>

  <p>
    In the new shortcut, search for <strong>Flow</strong> in the action picker. Pick the
    <strong>Record an Expense</strong> action.
  </p>

  <h2>Step 5 — Wire up the amount</h2>

  <p>
    Tap the <strong>Amount</strong> field on the action. Pick <strong>Shortcut Input</strong> as the source — this is
    the data the Wallet trigger passes in. From the field picker that follows, select <strong>Amount</strong> so Flow receives
    just the number, not the whole transaction blob.
  </p>

  <GuideCallout
    variant="warning"
    title="Older Flow versions"
  >
    On Flow <strong>older than v0.19.2</strong>, empty fields can prevent the action from running. Drop a placeholder (a
    single dash <code>-</code>) into anything you're leaving blank. v0.19.2 and later handle empty fields gracefully.
  </GuideCallout>

  <h2>Step 6 — Pick a destination account (optional)</h2>

  <p>
    Tap the <strong>Account</strong> field and type the account name. The match is exact — typos fall through. If you leave
    it empty or it doesn't match, the expense lands in your default account, which is usually what you want for a "card I
    always pay with" automation.
  </p>

  <h2>Step 7 — Save</h2>

  <p>
    Tap <strong>Next</strong>, review the automation summary, and tap <strong>Done</strong>. From this point, every
    Apple Pay charge that matches your trigger filters will quietly create a matching expense in Flow.
  </p>

  <GuideCallout
    variant="tip"
    title="Try it"
  >
    The fastest way to verify the automation is wired up: make a small Apple Pay purchase, then open Flow. The expense
    should be sitting in today's group, with the right amount, in your default account.
  </GuideCallout>
</article>
