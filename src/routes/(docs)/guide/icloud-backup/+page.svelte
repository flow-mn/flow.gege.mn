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
  <h1 class="not-prose mb-2 text-3xl font-bold">Auto-backup to iCloud</h1>
  <p class="not-prose mb-8 text-base opacity-50">
    Set it once. Flow drops a fresh backup into your iCloud Drive on a schedule — no taps required.
  </p>

  <GuideCallout
    variant="info"
    title="iOS / macOS only"
  >
    Auto-backup uses Apple's iCloud Drive APIs, so it's available on iPhone, iPad, and Mac. On Android, use a manual
    export to your cloud storage of choice — see <a href="/guide/backup">Backup &amp; restore</a>.
  </GuideCallout>

  <h2>What gets uploaded</h2>

  <p>
    The same full-backup ZIP described in <a href="/guide/backup">Backup &amp; restore</a> — every transaction, account,
    category, tag, and attachment, in one file. Each backup is stamped with the date and version of Flow that created it.
  </p>

  <h2>1. Make sure iCloud Drive is on</h2>

  <ol>
    <li>Open the iOS <strong>Settings</strong> app.</li>
    <li>Tap your name at the top → <strong>iCloud</strong>.</li>
    <li>Confirm <strong>iCloud Drive</strong> is on.</li>
    <li>Scroll to apps that use iCloud and confirm <strong>Flow</strong> is enabled.</li>
  </ol>

  <h2>2. Enable iCloud sync in Flow</h2>

  <p>Open <strong>Profile</strong> → <strong>Preferences</strong> → <strong>Sync</strong>. Three controls:</p>

  <ol>
    <li>
      <strong>Backup interval</strong> — chips:
      <em>Disable, 12 hours, a day, 2 days, 3 days, 7 days, 14 days, 30 days</em>. Backups are created automatically
      when you open the app, as long as the interval has elapsed since the last backup.
    </li>
    <li>
      <strong>Sync to iCloud</strong> — the toggle that actually pushes backups up to iCloud Drive.
    </li>
    <li>
      <strong>Number of backups to keep</strong> — chips: <em>3, 5, 10, 20, 30, 100, Infinite backups</em>. Older
      backups beyond that count are deleted at startup.
    </li>
  </ol>

  <AnnotatedScreenshot
    src="/guide/icloud-backup/settings.png"
    alt="The Sync preferences page with the backup-interval chips, the Sync to iCloud toggle, and the keep-count chips."
    aspect="9/16"
  >
    {#snippet overlay()}
      <Marker
        x={20}
        y={22}
        n={1}
      />
      <Marker
        x={20}
        y={40}
        n={2}
      />
      <Marker
        x={20}
        y={62}
        n={3}
      />
    {/snippet}
  </AnnotatedScreenshot>

  <h2>3. Verify it ran</h2>

  <p>
    Open the iOS <strong>Files</strong> app → <strong>iCloud Drive</strong> → <strong>Flow</strong>. You should see
    timestamped ZIP files. The Sync page also shows the last successful sync time.
  </p>

  <h2>Restoring from an iCloud backup</h2>

  <ol>
    <li>Install Flow on the new device, signed in to the same Apple ID.</li>
    <li>Open <strong>Profile</strong> → <strong>Import</strong>.</li>
    <li>Pick a ZIP from your iCloud Drive's Flow folder using the file picker.</li>
  </ol>

  <GuideCallout
    variant="warning"
    title="iCloud quota"
  >
    Each backup is a few MB to tens of MB depending on attachments. If you keep, say, 90 daily backups with lots of
    receipt photos, your Flow folder can grow into the hundreds of MB. Tune the keep-count if you're tight on iCloud
    space.
  </GuideCallout>

  <h2>Who can read the file</h2>

  <p>
    Flow doesn't add any protection to the backup ZIP — it's a plain archive of your data. Anyone with access to your
    iCloud Drive can open it. If that matters to you, store backups somewhere with stricter access instead, and handle
    that protection yourself.
  </p>
</article>
