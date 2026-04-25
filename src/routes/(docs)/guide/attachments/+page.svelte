<script lang="ts">
  import GuideCallout from "$lib/components/guide/GuideCallout.svelte";
  import AnnotatedScreenshot from "$lib/components/guide/AnnotatedScreenshot.svelte";
  import Marker from "$lib/components/guide/Marker.svelte";
</script>

<article
  class="prose prose-invert prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none"
>
  <p class="text-primary not-prose mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">Basics</p>
  <h1 class="not-prose mb-2 text-3xl font-bold">Attachments</h1>
  <p class="not-prose mb-8 text-base opacity-50">
    Pin a receipt, photo, or PDF to any transaction so the paper trail lives with the record.
  </p>

  <p>
    Every transaction in Flow can hold one or more files. Receipts are the obvious use, but the same feature works for
    invoices, contracts, screenshots of confirmation pages, anything you might want to find again.
  </p>

  <h2>Adding an attachment</h2>

  <ol>
    <li>Open the transaction (or start a new one).</li>
    <li>Scroll to the <strong>Attachments</strong> section.</li>
    <li>
      Tap <strong>+ Add</strong>, then pick from <strong>Camera</strong>, <strong>Photo Library</strong>, or
      <strong>Files</strong>.
    </li>
    <li>The file is copied into Flow's local storage and linked to the transaction.</li>
  </ol>

  <AnnotatedScreenshot
    src="/guide/attachments/add.png"
    alt="The attachments section of the transaction page with an add-photo button."
    aspect="9/16"
  >
    {#snippet overlay()}
      <Marker
        x={50}
        y={70}
        n={1}
      />
    {/snippet}
  </AnnotatedScreenshot>

  <GuideCallout
    variant="info"
    title="Attachments stay on-device"
  >
    Like everything else in Flow, attachments are stored locally. They're included in your full backup ZIP and travel
    with you to a new device when you restore.
  </GuideCallout>

  <h2>Viewing &amp; sharing</h2>

  <p>
    Tap any attached file to view it full-screen. From there you can share, save back to the system Files app, or delete
    the attachment. Deleting the attachment doesn't delete the transaction.
  </p>

  <h2>Storage considerations</h2>

  <p>
    Photos can be large. Each attachment is copied into Flow's local storage when you attach it (originals on your
    camera roll or Files app are untouched), and from then on it's part of every backup — manual or iCloud — until you
    delete it. If you keep a receipt for every transaction, expect your Flow data folder and backup ZIPs to grow
    accordingly.
  </p>

  <GuideCallout
    variant="tip"
    title="Receipts you can read in five years"
  >
    Thermal-printed receipts fade. A photo of the receipt taken when you record the transaction is permanent.
  </GuideCallout>
</article>
