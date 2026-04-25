<script lang="ts">
  import GuideCallout from "$lib/components/guide/GuideCallout.svelte";
  import AnnotatedScreenshot from "$lib/components/guide/AnnotatedScreenshot.svelte";
  import Marker from "$lib/components/guide/Marker.svelte";
  import Highlight from "$lib/components/guide/Highlight.svelte";
</script>

<article
  class="prose prose-invert prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none"
>
  <p class="text-primary not-prose mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">Basics</p>
  <h1 class="not-prose mb-2 text-3xl font-bold">Recording transactions</h1>
  <p class="not-prose mb-8 text-base opacity-50">
    Expenses, income, and transfers — the three things every transaction in Flow can be.
  </p>

  <h2>The three transaction types</h2>

  <ul>
    <li>
      <strong>Expense</strong> — money leaving an account. Decreases the account balance.
    </li>
    <li>
      <strong>Income</strong> — money entering an account. Increases the balance.
    </li>
    <li>
      <strong>Transfer</strong> — money moving between two of <em>your</em> accounts. Doesn't count as either spending or
      earning.
    </li>
  </ul>

  <GuideCallout
    variant="tip"
    title="Why transfers are special"
  >
    If you record "ATM withdrawal" as an expense from your bank, then "lunch" as an expense from your wallet, you've
    counted the same money twice. Use a transfer to move it from bank → wallet, then expense the lunch from the wallet.
  </GuideCallout>

  <h2>Recording an expense</h2>

  <ol>
    <li>Tap the <strong>+</strong> button at the bottom of any tab.</li>
    <li>Pick <strong>Expense</strong> from the type chip at the top (it's the default).</li>
    <li>Type the amount with the numpad. Tap the calculator icon for arithmetic.</li>
    <li>
      Tap the <strong>✓</strong> on the numpad to commit the amount. Dismissing the numpad without tapping ✓ discards whatever
      you typed.
    </li>
    <li>Optionally type a title in the <strong>Untitled transaction</strong> field above.</li>
    <li>Tap the <strong>Account</strong> row to switch accounts; the category and tag rows are right below.</li>
    <li>Tap the <strong>✓</strong> at the top right to save.</li>
  </ol>

  <GuideCallout
    variant="tip"
    title="Customize the entry flow"
  >
    The order and presence of steps Flow walks you through is configurable at <strong
      >Profile → Preferences → Transaction Entry</strong
    >. Add, remove, or reorder them to match how you actually enter data.
  </GuideCallout>

  <AnnotatedScreenshot
    src="/guide/transactions/expense.png"
    alt="The expense entry screen — amount numpad, category, account, and title field visible."
    aspect="9/16"
  >
    {#snippet overlay()}
      <Marker
        x={50}
        y={10}
        n={2}
      />
      <Marker
        x={20}
        y={37}
        n={5}
      />
      <Marker
        x={92}
        y={10}
        n={6}
      />
      <Highlight
        x={5}
        y={50}
        w={90}
        h={45}
        label="Step 3 — Numpad"
      />
    {/snippet}
  </AnnotatedScreenshot>

  <h2>Recording income</h2>

  <p>
    Identical flow to an expense — tap <strong>+</strong>, choose <strong>Income</strong>, fill in amount, category, and
    account. Income transactions show in green and roll up separately from expenses in reports.
  </p>

  <h2>Recording a transfer</h2>

  <ol>
    <li>Tap <strong>+</strong>, then choose <strong>Transfer</strong>.</li>
    <li>Pick the <strong>From</strong> account and the <strong>To</strong> account.</li>
    <li>
      Enter the amount. If the two accounts use different currencies, Flow will ask for the converted amount as well.
    </li>
    <li>Tap <strong>Save</strong>.</li>
  </ol>

  <GuideCallout
    variant="info"
    title="Cross-currency transfers"
  >
    Flow records the exact amounts on each side, not the exchange rate. That way, if your bank gave you a slightly worse
    rate than the market, your books still match reality down to the cent.
  </GuideCallout>

  <h2>Editing &amp; deleting</h2>

  <p>
    Tap any transaction in the list to open it, then tap any field to edit. To delete, scroll to the bottom of the edit
    page and tap <strong>Delete</strong>. Deleted transactions go to a trash bin where they can be restored or purged —
    no surprise data loss.
  </p>

  <h2>Backdating &amp; future transactions</h2>

  <p>
    Tap the date field to change when a transaction happened. Backdating just sets the date and re-sorts the entry —
    nothing else changes.
  </p>

  <p>
    Future-dating is treated specially. As soon as you pick a date in the future, Flow silently flips the transaction to <a
      href="/guide/pending">pending</a
    >
    — it stays out of your balance until its date arrives, so you can't accidentally inflate today's totals with a paycheck
    that hasn't landed. The Pending toggle on the edit page reflects the change; you can switch it off manually if you want
    a future-dated transaction to count as
    <strong>Pre-approved</strong> (it'll show that label in the home list and skip the approval prompt when its date arrives).
  </p>

  <h2>Title vs. note</h2>

  <ul>
    <li>
      <strong>Title</strong> is short and shows in the transaction list. Use it like a label: "Coffee at Tim Hortons".
    </li>
    <li>
      <strong>Note</strong> is hidden until you open the transaction. Use it for the long stuff: "Split with Alex, they owe
      me 12,000".
    </li>
  </ul>

  <h2>Speed tips</h2>

  <ul>
    <li>
      <strong>Swipe to duplicate</strong> — swipe a transaction from left to right in the list. A gray panel slides in with
      a copy icon; tap it to duplicate the entry. (Long-press doesn't do this.)
    </li>
    <li>
      <strong>Recurring</strong> — for anything you record more than twice a month, set it up as a
      <a href="/guide/recurring">recurring transaction</a> instead.
    </li>
    <li>
      <strong>iOS Shortcut</strong> — automate Apple Pay purchases via the
      <a href="/guide/ios-shortcuts">Shortcuts integration</a>.
    </li>
  </ul>
</article>
