<script lang="ts">
  import GuideCallout from "$lib/components/guide/GuideCallout.svelte";
</script>

<article
  class="prose prose-invert prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none"
>
  <p class="text-primary not-prose mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">Insights</p>
  <h1 class="not-prose mb-2 text-3xl font-bold">Filters &amp; presets</h1>
  <p class="not-prose mb-8 text-base opacity-50">
    Narrow the home feed down to the transactions you care about, then save the combination as a preset for one-tap
    recall.
  </p>

  <GuideCallout
    variant="info"
    title="Home only"
  >
    Filters apply to the <strong>home feed only</strong>. The <a href="/guide/reports">Stats</a> tab has just a time-period
    control and is unaffected by whichever filter you have active.
  </GuideCallout>

  <h2>The filter row</h2>

  <p>
    The chips at the top of the home tab — <strong>Search</strong>, <strong>This month</strong>,
    <strong>Attachments</strong>, and so on — are individual filters. Tap any of them to refine the list.
  </p>

  <p>
    On the leftmost side of that row is a <strong>funnel icon</strong> with a number next to it (it shows
    <strong>0</strong> when nothing is filtered, otherwise the count of active filters). Tapping the funnel opens the
    <strong>filter presets</strong> sheet — your saved combinations, plus the default.
  </p>

  <h2>Saving a preset</h2>

  <p>Presets work a little differently from "save the current settings". To create one:</p>

  <ol>
    <li>Close the presets sheet if it's open.</li>
    <li>
      Adjust the chips so the active filter is <em>different</em> from the default preset. (If your current filters match
      the default, the button to save won't appear.)
    </li>
    <li>
      Open the funnel sheet again — at the bottom you'll see <strong>Save as new</strong>. Tap it and give it a name.
    </li>
  </ol>

  <p>The new preset shows up in the sheet next time you open it, ready to apply with one tap.</p>

  <h2>Editing &amp; deleting presets</h2>

  <p>
    Presets aren't editable in place — to change one, create a new preset with the filters you want and delete the old
    one. Both actions live behind swipe gestures on the preset row in the sheet:
  </p>

  <ul>
    <li><strong>Swipe left</strong> on a preset to reveal the delete action.</li>
    <li><strong>Swipe right</strong> to set it as the default.</li>
  </ul>

  <GuideCallout
    variant="info"
    title="Swipe gestures across Flow"
  >
    Most list rows in Flow — transactions, presets, accounts — use the same pattern: swipe in one direction for the
    primary action, the other for the secondary. The exact actions per row are pre-configured (not user-customizable),
    but the gesture pattern is consistent.
  </GuideCallout>

  <h2>Useful preset ideas</h2>

  <ul>
    <li>
      <strong>Reimbursable</strong> — tag <em>reimbursable</em>, last 90 days. A quick "what does my employer owe me?"
      view.
    </li>
    <li>
      <strong>Big spending</strong> — amount above some threshold, last 90 days. Catch the unusual.
    </li>
    <li>
      <strong>Trip Tokyo 2026</strong> — tag <em>trip tokyo</em>, custom date range covering the trip. Resurface it
      months later to settle a shared cost.
    </li>
  </ul>
</article>
