<script lang="ts">
  import GuideCallout from "$lib/components/guide/GuideCallout.svelte";
  import AnnotatedScreenshot from "$lib/components/guide/AnnotatedScreenshot.svelte";
  import Marker from "$lib/components/guide/Marker.svelte";
</script>

<article
  class="prose prose-invert prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none"
>
  <p class="text-primary not-prose mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">Scheduling</p>
  <h1 class="not-prose mb-2 text-3xl font-bold">Pending transactions</h1>
  <p class="not-prose mb-8 text-base opacity-50">
    A holding area for transactions that haven't hit your books yet — usually scheduled future occurrences from a
    <a href="/guide/recurring">recurring rule</a>.
  </p>

  <h2>What "pending" means</h2>

  <p>
    A pending transaction is a real transaction record that's been created but isn't yet counted toward your balances or
    totals. It's waiting for you to confirm it.
  </p>

  <p>How they show on the home feed:</p>

  <ul>
    <li>
      All pending transactions are gathered into a single <strong>Pending</strong> group at the top of the feed, regardless
      of their dates — they're not split by today / tomorrow / next week.
    </li>
    <li>
      A pending transaction that you've explicitly approved ahead of time shows a <strong>Pre-approved</strong> label inside
      its list tile. When its date arrives, it'll skip the approval prompt and confirm itself.
    </li>
  </ul>

  <p>Two situations create pending transactions:</p>

  <ul>
    <li>
      A <a href="/guide/recurring">recurring rule</a> generates a future-dated occurrence and you have
      <strong>Require confirmation</strong> turned on.
    </li>
    <li>
      You set a future date when creating or editing a transaction. Flow auto-toggles its Pending flag on so it can't
      silently inflate today's balance — the toggle on the edit page reflects the change, and you can switch it off
      manually to mark the entry Pre-approved.
    </li>
  </ul>

  <h2>Approving</h2>

  <p>
    When a pending transaction is in the past or close to due, a <strong>Confirm</strong> button appears under its list tile.
    Tap it to promote the transaction to a regular one — it'll start affecting balances immediately.
  </p>

  <p>
    Pending list tiles also support the same swipe gestures as any other transaction (duplicate, delete, etc.). The
    Confirm button is the only special action specific to pending.
  </p>

  <AnnotatedScreenshot
    src="/guide/pending/list.png"
    alt="Pending transactions screen with a list of upcoming transactions awaiting approval."
    aspect="9/16"
    placeholder
  >
    {#snippet overlay()}
      <Marker
        x={85}
        y={30}
        n={1}
      />
      <Marker
        x={50}
        y={70}
        n={2}
      />
    {/snippet}
  </AnnotatedScreenshot>

  <h2>Settings</h2>

  <p>
    Open <strong>Profile → Preferences → Pending transactions</strong> to control how pending behaves:
  </p>

  <ul>
    <li>
      <strong>Require confirmation</strong> — when on, future recurring occurrences land as pending. When off, they auto-confirm.
    </li>
    <li>
      <strong>Update date upon confirmation</strong> — when on, confirming uses today's date as the transaction date (instead
      of the originally scheduled date). Handy if you tend to confirm late.
    </li>
    <li>
      <strong>Notifications</strong> — get reminded before a pending transaction comes due. Pick how early: 5 minutes to
      a week ahead.
    </li>
    <li>
      <strong>Home feed window</strong> — how many days into the future Flow shows pending transactions on your home feed.
    </li>
  </ul>

  <GuideCallout
    variant="tip"
    title="A common workflow"
  >
    Turn on <em>Require confirmation</em> and notifications. Each scheduled bill now pings you the day before; one tap on
    the notification opens the transaction, one tap to confirm. Your history stays accurate to the day money actually moved.
  </GuideCallout>

  <h2>If you ignore them</h2>

  <p>
    Pending transactions don't expire and don't auto-confirm just because their date has passed. If you stop opening
    Flow, they pile up until you come back. They don't affect your balances until you confirm them.
  </p>
</article>
