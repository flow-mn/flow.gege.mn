<script lang="ts">
  import { afterNavigate } from "$app/navigation";
  import clsx from "clsx";
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    href: string;
    target?: HTMLAnchorElement["target"];
    selected?: boolean;
  }

  let { children, target, href }: Props = $props();

  let selected = $state(window.location.pathname === href);

  afterNavigate(() => {
    selected = window.location.pathname === href;
  });
</script>

<a
  class={clsx("text-text visited:text-text hover:text-primary focus-visible:text-primary", {
    "text-primary!": selected,
  })}
  {href}
  {target}
>
  {@render children()}
</a>
