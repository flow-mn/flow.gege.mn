<script lang="ts">
  import GuideCallout from "$lib/components/guide/GuideCallout.svelte";
</script>

<article
  class="prose prose-invert prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none"
>
  <p class="text-primary not-prose mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">Integrations</p>
  <h1 class="not-prose mb-2 text-3xl font-bold">Eny — AI receipt scanner</h1>
  <p class="not-prose mb-8 text-base opacity-50">
    Snap a photo of a receipt, get a transaction in Flow. Eny does the parsing; Flow stores the result.
  </p>

  <h2>What Eny is</h2>

  <p>
    <a
      href="https://eny.gege.mn/"
      target="_blank"
      rel="noopener">Eny</a
    > is a separate, paid product made by the same team as Flow. It uses an AI vision model to read receipts you photograph
    or upload — line items, totals, dates — and turn them into Flow transactions via Flow's first-party integration.
  </p>

  <p>
    You get <strong>10 free scans</strong> when you sign up at
    <a
      href="https://eny.gege.mn/"
      target="_blank"
      rel="noopener">eny.gege.mn</a
    >. After that it's a paid service. Once you connect to Flow, the in-app Eny screen shows your remaining credits and
    the email/account the credits belong to.
  </p>

  <GuideCallout
    variant="info"
    title="Optional, never required"
  >
    Flow works fully without Eny. This integration exists for people who'd rather photograph a receipt than type. If you
    don't want it, ignore this article — nothing in Flow nags you to set it up.
  </GuideCallout>

  <h2>Connecting Flow to Eny</h2>

  <p>The connection is initiated from the Eny side, not Flow:</p>

  <ol>
    <li>
      Sign up or log in at <a
        href="https://eny.gege.mn/"
        target="_blank"
        rel="noopener">eny.gege.mn</a
      >.
    </li>
    <li>
      In the Eny dashboard, find the <strong>Connect with Flow</strong> button.
    </li>
    <li>
      <strong>On a phone</strong> with Flow installed, tapping the button deep-links straight into Flow and confirms the
      connection.
      <br />
      <strong>On a computer</strong>, the dashboard shows a QR code instead — open the camera on the phone where Flow is
      installed, scan the QR, and Flow opens to confirm.
    </li>
  </ol>

  <p>
    Behind the scenes, Eny generates an API key during the connection flow. Flow stores that key locally on the device
    and uses it to talk to Eny's API. The key never leaves your phone — it's not in your iCloud backup ZIP, not on a
    server somewhere.
  </p>

  <h2>Configuring it from Flow</h2>

  <p>
    Once connected, the integration's settings live at <strong>Profile → Preferences → Eny</strong>. The screen also
    surfaces your <strong>Connected</strong> status (with the Eny account email), <strong>Credits Remaining</strong>,
    and a link to the Eny Dashboard so you don't have to switch tabs to check.
  </p>

  <p>Two toggles control how parsed receipts land in Flow:</p>

  <ul>
    <li>
      <strong>Create a transaction per item</strong> — when <em>off</em> (the default behavior), each receipt becomes
      one Flow transaction whose total matches the receipt total, with the line items written into the
      <strong>notes</strong> field as a list. When <em>on</em>, every line item becomes its own Flow transaction. The
      toggle's own subtitle warns it can be <em>"chaotic for long receipts"</em> — set this based on whether you actually
      want per-item granularity.
    </li>
    <li>
      <strong>Mark transactions as pending</strong> — when on, parsed transactions land in the
      <a href="/guide/pending">Pending</a> group so you can sanity-check them before they hit your balance. Even when
      this is off, transactions whose parsed date is more than <strong>6 hours old</strong> still land as pending — a safety
      net so a forgotten old receipt doesn't quietly rewrite your past.
    </li>
  </ul>

  <h2>Privacy disclosure inside Flow</h2>

  <p>
    The Eny preferences screen reminds you that this is an external service: <em
      >"Flow does not send anything on your behalf, only the images/data you choose is sent."</em
    >
    The data you scan goes to <strong>Eny</strong> and
    <strong>Google</strong> (Eny's underlying vision provider). The page links out to Eny's Terms of Service and Privacy
    Policy — read them once before sending receipts that contain anything sensitive.
  </p>

  <h2>Scanning a receipt</h2>

  <p>
    After connecting, you can optionally add a <strong>scan button</strong> to the FAB menu (the <strong>+</strong>
    button at the bottom of the screen). Once enabled, opening the FAB shows a camera-icon entry alongside the normal transaction
    creation options.
  </p>

  <p>Tap that scan button and you can:</p>

  <ul>
    <li>Take a fresh photo of a receipt with the camera.</li>
    <li>Upload from your photo library — up to <strong>five images at a time</strong>.</li>
  </ul>

  <p>From there, parsing happens server-side at Eny:</p>

  <ul>
    <li>
      <strong>If you keep Flow open</strong>, a toast appears when parsing finishes and the transactions land
      immediately.
    </li>
    <li>
      <strong>If you close the app</strong>, Flow remembers what you sent. The next time you open Flow, the parsed
      transactions appear — there's no push notification, only the in-app toast.
    </li>
  </ul>

  <GuideCallout
    variant="warning"
    title="AI gets things wrong"
  >
    Eny is accurate often, not always. Faded thermal paper, glare, unusual receipt formats, languages it hasn't seen
    much — these can all produce wrong totals, wrong dates, or split items oddly. Treat new transactions from Eny as a
    rough draft and skim them before counting on the numbers.
  </GuideCallout>

  <h2>Disconnecting</h2>

  <p>
    Scroll to the bottom of <strong>Profile → Preferences → Eny</strong> and tap the red <strong>Disconnect Eny</strong>
    button. That wipes the locally-stored API key. Existing transactions Eny created stay in Flow exactly as they are — the
    integration only governs how new scans get in.
  </p>
</article>
