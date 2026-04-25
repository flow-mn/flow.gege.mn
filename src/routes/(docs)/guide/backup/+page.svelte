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
  <h1 class="not-prose mb-2 text-3xl font-bold">Backup &amp; restore</h1>
  <p class="not-prose mb-8 text-base opacity-50">
    Export everything you've recorded into a single file — and pull it back into Flow on any device.
  </p>

  <h2>Where to find it</h2>

  <p>
    Open <strong>Profile</strong> → <strong>Backup</strong>. You'll land on a screen titled <strong>Export</strong> — a stack
    of cards, one per format.
  </p>

  <h2>The export formats</h2>

  <ul>
    <li>
      <strong>As CSV</strong> — a flat, spreadsheet-friendly dump. The card itself warns:
      <em>"Cannot be used for restore/import! Ideal for opening in software like Google Sheets"</em>. Read-only.
    </li>
    <li>
      <strong>As backup (zip)</strong> — the full safety net. Includes everything from JSON <em>plus</em> your attached files
      (receipts, photos). Use this for moving devices.
    </li>
    <li>
      <strong>As backup (json)</strong> — only essential data. No images or attached files. Restorable into Flow.
    </li>
    <li>
      <strong>Statements (PDF)</strong> — a printable statement view. Not an official statement and not restorable. Useful
      for sharing with an accountant.
    </li>
    <li>
      <strong>Backup history</strong> — a list of past exports with timestamps, so you can re-share or compare.
    </li>
  </ul>

  <GuideCallout
    variant="warning"
    title="CSV and PDF are one-way"
  >
    Neither is a true backup. If your phone dies, only <strong>ZIP</strong> or <strong>JSON</strong> will bring your
    data back — and only ZIP preserves attachments. The Export screen's CSV is for spreadsheets, not for re-importing
    into Flow. (For an importable CSV, see <strong>Get CSV template</strong> on the Import screen.)
  </GuideCallout>

  <h2>Exporting</h2>

  <ol>
    <li>Open <strong>Profile</strong> → <strong>Backup</strong>.</li>
    <li>Pick <strong>As backup (zip)</strong> (recommended) or <strong>As backup (json)</strong>.</li>
    <li>
      The system share sheet appears. Save the file somewhere durable — iCloud Drive, Google Drive, AirDrop to another
      device, email it to yourself.
    </li>
  </ol>

  <AnnotatedScreenshot
    src="/guide/backup/export.png"
    alt="The Export screen with format cards: As CSV, As backup (zip), As backup (json), and more below the fold."
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
        y={51}
        n={2}
      />
      <Marker
        x={50}
        y={76}
        n={3}
      />
    {/snippet}
  </AnnotatedScreenshot>

  <h2>Restoring</h2>

  <p>To restore — on a new phone, after a reinstall, or to roll back a mistake:</p>

  <ol>
    <li>Install Flow on the device.</li>
    <li>Go to <strong>Profile</strong> → <strong>Import</strong>.</li>
    <li>Tap <strong>Select a file</strong> and pick the ZIP or JSON. Flow auto-detects the format.</li>
    <li>Confirm. <strong>Restoring replaces your current data.</strong></li>
  </ol>

  <p>
    See <a href="/guide/import-csv">Importing data</a> for the full Import screen, including Ivy Wallet migration and the
    importable CSV template.
  </p>

  <GuideCallout
    variant="info"
    title="Replace, not merge"
  >
    Restore is destructive on purpose. There is no deduplicating merge mode — if you want to combine two devices, you'll
    need to do it manually before restoring.
  </GuideCallout>

  <h2>How often should I back up?</h2>

  <p>
    If you've enabled <a href="/guide/icloud-backup">auto-backup to iCloud</a>, Flow does it for you. Otherwise: any
    time you're about to switch phones, reinstall, or experiment with risky imports. A monthly manual ZIP export to a
    cloud drive is a sensible floor.
  </p>
</article>
