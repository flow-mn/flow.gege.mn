<script lang="ts">
  import { ParaglideMessage } from "@inlang/paraglide-js-svelte";
  import { m } from "$lib/paraglide/messages";
  import GuideCallout from "$lib/components/guide/GuideCallout.svelte";

  // shortcuts_create_shortcut.webp
  // https://cdn.gege.mn/flow/2026-03-07/cc8531af-9f5d-409a-9daa-f6ad01928f25/shortcuts_create_shortcut.webp
  // shortcuts_shortcut_search_action.webp
  // https://cdn.gege.mn/flow/2026-03-07/cc8531af-9f5d-409a-9daa-f6ad01928f25/shortcuts_shortcut_search_action.webp
  // shorcuts_shortcut_flow_expense.webp
  // https://cdn.gege.mn/flow/2026-03-07/cc8531af-9f5d-409a-9daa-f6ad01928f25/shorcuts_shortcut_flow_expense.webp
  // shortcuts_shortcut_fill_amount.webp
  // https://cdn.gege.mn/flow/2026-03-07/cc8531af-9f5d-409a-9daa-f6ad01928f25/shortcuts_shortcut_fill_amount.webp
  // shortcuts_shortcut_select_var.webp
  // https://cdn.gege.mn/flow/2026-03-07/cc8531af-9f5d-409a-9daa-f6ad01928f25/shortcuts_shortcut_select_var.webp
  // shortcuts_shortcut_var_sub_amount.webp
  // https://cdn.gege.mn/flow/2026-03-07/cc8531af-9f5d-409a-9daa-f6ad01928f25/shortcuts_shortcut_var_sub_amount.webp
  // shortcuts_good_to_go.webp
  // https://cdn.gege.mn/flow/2026-03-07/cc8531af-9f5d-409a-9daa-f6ad01928f25/shortcuts_good_to_go.webp
  // shortcuts_shortcut_select_flow.webp
  // https://cdn.gege.mn/flow/2026-03-07/cc8531af-9f5d-409a-9daa-f6ad01928f25/shortcuts_shortcut_select_flow.webp
  // shortcuts_configure_immediately.webp
  // https://cdn.gege.mn/flow/2026-03-07/cc8531af-9f5d-409a-9daa-f6ad01928f25/shortcuts_configure_immediately.webp
  // shortcuts_automation_wallet.webp
  // https://cdn.gege.mn/flow/2026-03-07/cc8531af-9f5d-409a-9daa-f6ad01928f25/shortcuts_automation_wallet.webp
  // shortcuts_automations.webp
  // https://cdn.gege.mn/flow/2026-03-07/cc8531af-9f5d-409a-9daa-f6ad01928f25/shortcuts_automations.webp
</script>

<GuideCallout variant="info">
  <ParaglideMessage
    message={m["guide.app_version_notice"]}
    inputs={{ version: "v0.19.3" }}
  >
    {#snippet b({ children })}
      <b>{@render children?.()}</b>
    {/snippet}
  </ParaglideMessage>
</GuideCallout>

<ol class="list-inside list-decimal space-y-2">
  <li>
    {m["guide.articles.ios_shortcuts.steps.1"]()}
  </li>
  <li>
    {m["guide.articles.ios_shortcuts.steps.2"]()}
  </li>
  <li>
    {m["guide.articles.ios_shortcuts.steps.3"]()}
  </li>
  <li>
    {m["guide.articles.ios_shortcuts.steps.4"]()}
  </li>
  <li>
    {m["guide.articles.ios_shortcuts.steps.5"]()}
  </li>
  <li>
    {m["guide.articles.ios_shortcuts.steps.6"]()}
  </li>
  <li>
    {m["guide.articles.ios_shortcuts.steps.7"]()}
  </li>
  <li>
    {m["guide.articles.ios_shortcuts.steps.8"]()}
  </li>
  <li>
    {m["guide.articles.ios_shortcuts.steps.9"]()}
  </li>
  <li>
    {m["guide.articles.ios_shortcuts.steps.10"]()}
  </li>
</ol>
