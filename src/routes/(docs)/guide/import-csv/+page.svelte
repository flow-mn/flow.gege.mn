<script lang="ts">
  import GuideCallout from "$lib/components/guide/GuideCallout.svelte";
  import AnnotatedScreenshot from "$lib/components/guide/AnnotatedScreenshot.svelte";
  import Marker from "$lib/components/guide/Marker.svelte";
</script>

<article
  class="prose prose-invert prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none"
>
  <p class="text-primary not-prose mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">
    Import &amp; Export
  </p>
  <h1 class="not-prose mb-2 text-3xl font-bold">Importing data</h1>
  <p class="not-prose mb-8 text-base opacity-50">Pull transactions and full backups into Flow from a file.</p>

  <h2>What the Import screen offers</h2>

  <p>
    Open <strong>Profile</strong> → <strong>Import</strong>. You get one big <strong>Select a file</strong> card and an
    <strong>Other options</strong> section underneath.
  </p>

  <ul>
    <li>
      <strong>Select a file</strong> (ZIP / JSON / CSV) — Flow auto-detects which of the three you handed it. ZIP and JSON
      are full backups produced by another Flow install; CSV is Flow's own shape (see template below).
    </li>
    <li>
      <strong>Ivy Wallet (CSV)</strong> — a dedicated path for migrating from Ivy Wallet. Pick this if your CSV came from
      Ivy, since its column shape differs from Flow's.
    </li>
    <li>
      <strong>Get CSV template</strong> — saves an empty CSV with the columns Flow expects. Fill it in (in a spreadsheet
      app or by script), then bring it back via <strong>Select a file</strong>.
    </li>
  </ul>

  <h2>How to import</h2>

  <ol>
    <li>Open <strong>Profile</strong> → <strong>Import</strong>.</li>
    <li>For a Flow backup or a Flow-shaped CSV, tap <strong>Select a file</strong>.</li>
    <li>For an Ivy Wallet export, tap <strong>Ivy Wallet (CSV)</strong> instead.</li>
    <li>Confirm. Flow tells you what it found before applying anything.</li>
  </ol>

  <AnnotatedScreenshot
    src="/guide/import-csv/picker.png"
    alt="The Import screen with a Select a file area and Other options for Ivy Wallet and Get CSV template."
    aspect="9/16"
  >
    {#snippet overlay()}
      <Marker
        x={50}
        y={28}
        n={1}
      />
      <Marker
        x={50}
        y={46}
        n={2}
      />
      <Marker
        x={50}
        y={53}
        n={3}
      />
    {/snippet}
  </AnnotatedScreenshot>

  <GuideCallout
    variant="warning"
    title="Replace, not merge"
  >
    Importing a ZIP or JSON <em>replaces</em> your current data. Back up first if you might want to roll back. There is no
    deduplicating merge.
  </GuideCallout>

  <h2>Moving between devices</h2>

  <p>
    Use ZIP. On the source device: <strong>Profile → Backup → As backup (zip)</strong>. Save the file somewhere you can
    reach from the new device — iCloud Drive, Google Drive, AirDrop, email. On the destination device:
    <strong>Profile → Import</strong>. ZIP carries accounts, categories, tags, transactions, recurring rules, and
    attachments. CSV does not.
  </p>

  <h2>What if the import fails?</h2>

  <ul>
    <li>Wrong file format — Flow only accepts ZIP, JSON, or its own CSV shape.</li>
    <li>CSV columns don't match the template — easiest fix is to re-export the template and copy your data into it.</li>
  </ul>

  <p>
    If you've got a file Flow can't parse and you think it should be able to, open an issue on GitHub with a sample.
  </p>
</article>
