<script lang="ts">
  import { browser } from "$app/environment";
  import { afterNavigate } from "$app/navigation";
  import clsx from "clsx";
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    href: string;
    target?: HTMLAnchorElement["target"];
    selected?: boolean;
    class?: string;
  }

  let { children, target, href, class: className }: Props = $props();

  let selected = $state(browser && window.location.pathname === href);

  afterNavigate(() => {
    if (browser) {
      selected = window.location.pathname === href;
    }
  });
</script>

<a
  class={clsx("text-text visited:text-text hover:text-primary focus-visible:text-primary", className, {
    "text-primary!": selected,
  })}
  {href}
  {target}
>
  {@render children()}
</a>
