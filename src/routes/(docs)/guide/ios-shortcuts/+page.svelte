<script lang="ts">
  import { ParaglideMessage } from "@inlang/paraglide-js-svelte";
  import { m } from "$lib/paraglide/messages";
  import GuideCallout from "$lib/components/guide/GuideCallout.svelte";
</script>

<svelte:head>
  <title>{m["guide.articles.ios_shortcuts.description"]()} - {m["guide.title"]()}</title>
</svelte:head>

<GuideCallout variant="info">
  <ParaglideMessage
    message={m["guide.app_version_notice"]}
    inputs={{ version: "v0.19.2" }}
  >
    {#snippet b({ children })}
      <b>{@render children?.()}</b>
    {/snippet}
  </ParaglideMessage>
</GuideCallout>

<h2>1. Open Shortucts app, and head to Automation</h2>
