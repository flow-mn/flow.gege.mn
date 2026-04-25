<script lang="ts">
  import GuideCallout from "$lib/components/guide/GuideCallout.svelte";
  import AnnotatedScreenshot from "$lib/components/guide/AnnotatedScreenshot.svelte";
  import Marker from "$lib/components/guide/Marker.svelte";
</script>

<article
  class="prose prose-invert prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none"
>
  <p class="text-primary not-prose mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">Basics</p>
  <h1 class="not-prose mb-2 text-3xl font-bold">Accounts &amp; currencies</h1>
  <p class="not-prose mb-8 text-base opacity-50">
    Track every place you keep money — cash, cards, savings, loans — in any currency.
  </p>

  <p>
    An <strong>account</strong> in Flow represents a real-world container of money: a bank account, a wallet, a credit card,
    a savings jar, even a friend who owes you money. Every transaction you record belongs to exactly one account.
  </p>

  <h2>Account types</h2>

  <p>Flow supports six account types, each tuned for the way that container behaves:</p>

  <ul>
    <li><strong>Checking</strong> — a regular bank or wallet balance you spend down. The default.</li>
    <li><strong>Savings</strong> — a balance you mostly grow.</li>
    <li><strong>Credit (e.g., card)</strong> — a credit card or other credit line.</li>
    <li><strong>Loan</strong> — money you owe or are owed.</li>
    <li><strong>Asset</strong> — a non-liquid store of value, like an investment account.</li>
    <li><strong>Other</strong> — anything that doesn't fit the above.</li>
  </ul>

  <GuideCallout
    variant="info"
    title="Why the type matters"
  >
    Flow uses the account type to decide whether to include it in your total balance, how to display the running
    balance, and how to color debt vs. assets in reports. You can change the type at any time from the account's edit
    page.
  </GuideCallout>

  <h2>1. Create an account</h2>

  <ol>
    <li>Open the <strong>Accounts</strong> tab and tap the <strong>+</strong> button.</li>
    <li>Type an <strong>Account name</strong>. Tap the wallet icon above to pick a different one.</li>
    <li>Tap <strong>Update balance</strong> to set today's balance — leave at $0.00 if you'd rather start fresh.</li>
    <li>
      Set the <strong>Currency</strong>, <strong>Account type</strong>, and (optionally) <strong>Change color</strong>.
    </li>
    <li>Tap the <strong>✓</strong> at the top right to save.</li>
  </ol>

  <AnnotatedScreenshot
    src="/guide/accounts/create.png"
    alt="The new-account form, with fields for name, icon, balance, currency, type and color."
    aspect="9/16"
    caption="Creating a new account."
  >
    {#snippet overlay()}
      <Marker
        x={50}
        y={33}
        n={1}
      />
      <Marker
        x={50}
        y={50}
        n={2}
      />
      <Marker
        x={50}
        y={66}
        n={3}
      />
      <Marker
        x={92}
        y={10}
        n={4}
      />
    {/snippet}
  </AnnotatedScreenshot>

  <h2>2. There is no "current balance" field</h2>

  <p>
    An account's balance isn't a number Flow stores anywhere — it's the running sum of every transaction in that
    account. There's nothing to keep in sync because there's nothing to drift.
  </p>

  <p>
    That's why <strong>Update balance</strong> doesn't ask "what is the new balance" and overwrite a field. Instead, you
    enter what the balance <em>should</em> be, Flow computes the difference between that target and the current running sum,
    and inserts a single income or expense transaction for the delta. The books still add up afterwards.
  </p>

  <GuideCallout
    variant="tip"
    title="Add what you have today"
  >
    Don't try to back-fill years of history. Open <strong>Update balance</strong>, enter today's number, and start
    logging from now. You can always add older transactions later if you want a full picture.
  </GuideCallout>

  <h2>3. Re-syncing after drift</h2>

  <p>
    Real life drifts: ATM withdrawals you forgot, fees, rounding. To resync an account without recreating it, open the
    account and tap <strong>Update balance</strong> again. Same mechanism — Flow inserts the corrective transaction for whatever
    the difference is, and you can choose the date the correction lands on.
  </p>

  <h2>Multi-currency</h2>

  <p>
    Each account holds <em>one</em> currency. If you keep money in MNT, USD, and EUR, you create three accounts. Flow
    stores transactions in the account's native currency and converts to your <strong>primary currency</strong> on the fly
    for reports.
  </p>

  <GuideCallout
    variant="info"
    title="Exchange rates"
  >
    Flow downloads up-to-date exchange rates when you have an internet connection and caches them. Conversion happens
    locally; no transaction data ever leaves your device.
  </GuideCallout>

  <h2>Transfers</h2>

  <p>
    Moving money between two of your accounts isn't an expense — it's a <strong>transfer</strong>. Flow has a dedicated
    transaction type for this so transfers don't pollute your spending reports. See
    <a href="/guide/transactions">Recording transactions</a> for the full flow.
  </p>

  <h2>Excluding from total balance</h2>

  <p>
    On the edit page, toggle <strong>Exclude from balance</strong> if an account shouldn't roll up into your home screen
    total — useful for shared accounts, business accounts, or test accounts.
  </p>

  <h2>Archiving an account</h2>

  <p>
    Closing an account in real life? Set its balance to zero (transferring out the remainder if needed), then archive
    it. Archived accounts hide from picker lists but keep their history intact for reports.
  </p>
</article>
