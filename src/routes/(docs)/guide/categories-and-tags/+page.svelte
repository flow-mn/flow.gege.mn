<script lang="ts">
  import GuideCallout from "$lib/components/guide/GuideCallout.svelte";
  import AnnotatedScreenshot from "$lib/components/guide/AnnotatedScreenshot.svelte";
  import Marker from "$lib/components/guide/Marker.svelte";
</script>

<article
  class="prose prose-invert prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none"
>
  <p class="text-primary not-prose mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">Basics</p>
  <h1 class="not-prose mb-2 text-3xl font-bold">Categories &amp; tags</h1>
  <p class="not-prose mb-8 text-base opacity-50">
    Two complementary tools for slicing your spending — one structured, one free-form.
  </p>

  <h2>Categories vs. tags</h2>

  <p>Flow gives you two ways to label a transaction. They're not the same thing:</p>

  <ul>
    <li>
      <strong>Category</strong> — at most one per transaction, optional. Categories are the backbone of reports: "Groceries",
      "Rent", "Coffee", "Salary".
    </li>
    <li>
      <strong>Tags</strong> — zero, one, or many per transaction. Free-form labels for extra context: "trip tokyo",
      "reimbursable", "gift". No <code>#</code> prefix needed — type whatever you want.
    </li>
  </ul>

  <GuideCallout
    variant="tip"
    title="Rule of thumb"
  >
    If you'd want a slice in your spending pie chart, it's a <em>category</em>. If you'd want to ask "show me everything
    related to X", it's a <em>tag</em>.
  </GuideCallout>

  <h2>Creating a category</h2>

  <ol>
    <li>Open the <strong>Profile</strong> tab and tap <strong>Categories</strong>.</li>
    <li>Tap the <strong>+</strong> button.</li>
    <li>
      Tap the icon to <strong>Change icon</strong>, type a <strong>Category name</strong>, and pick a color with
      <strong>Change color</strong>.
    </li>
    <li>Tap the <strong>✓</strong> at the top right to save.</li>
  </ol>

  <AnnotatedScreenshot
    src="/guide/categories/create.png"
    alt="Creating a new category, with name, icon, and color fields visible."
    aspect="9/16"
  >
    {#snippet overlay()}
      <Marker
        x={50}
        y={22}
        n={1}
      />
      <Marker
        x={50}
        y={38}
        n={2}
      />
      <Marker
        x={50}
        y={46}
        n={3}
      />
      <Marker
        x={92}
        y={10}
        n={4}
      />
    {/snippet}
  </AnnotatedScreenshot>

  <h2>Picking good categories</h2>

  <p>
    A common mistake is creating dozens of fine-grained categories on day one. Start small — 8-12 broad buckets that
    cover your real-life spending — and split them only when a single category gets uncomfortably large in your reports.
  </p>

  <h2>Tags</h2>

  <p>
    Tags appear on the transaction edit page below the category picker. Tap to add either an existing tag or type a new
    name. Tags are global: a tag created on one transaction is available everywhere.
  </p>

  <h3>The three tag types</h3>

  <ul>
    <li>
      <strong>Regular tag</strong> — a free-form label. The default. Use it for anything: <em>trip tokyo</em>,
      <em>reimbursable</em>, <em>gift</em>, <em>kid</em>, <em>partner</em>.
    </li>
    <li>
      <strong>Contact tag</strong> — a person. Useful for "who did I split this with" or "who owes me money".
    </li>
    <li>
      <strong>Location tag</strong> — a place. Flow suggests location tags automatically when you record a transaction near
      a place you've used before — proximity-based.
    </li>
  </ul>

  <GuideCallout
    variant="info"
    title="Location suggestions need geolocation on"
  >
    Proximity suggestions only work if you turn geolocation on under <strong
      >Profile → Preferences → Transaction location</strong
    > (and grant Flow location permission). Without it, location tags work like regular tags — you can still create and use
    them, you just won't get proximity-based suggestions.
  </GuideCallout>

  <h2>Using categories &amp; tags in reports</h2>

  <p>
    Both categories and tags become filters on the <a href="/guide/reports">Reports</a> screen and can be saved as
    <a href="/guide/filters">filter presets</a> for one-tap recall.
  </p>

  <GuideCallout
    variant="info"
    title="Renaming &amp; merging"
  >
    Editing a category or tag updates every transaction that uses it instantly. To merge two tags, edit each transaction
    with the old tag, swap it for the new one, and delete the old tag from the tags page.
  </GuideCallout>
</article>
