<script lang="ts">
  import { m } from "$lib/paraglide/messages";
  import clsx from "clsx";
  import type { Snippet } from "svelte";

  type Variant = "tip" | "warning" | "info";

  interface $Props {
    children: Snippet;
    variant?: Variant;
    title?: string;
  }

  let { children, variant = "tip", title }: $Props = $props();

  const icons: Record<Variant, string> = {
    tip: "💡",
    warning: "⚠️",
    info: "ℹ️",
  };

  const defaultTitles: Record<Variant, () => string> = {
    tip: m["guide.callout.tip"],
    warning: m["guide.callout.warning"],
    info: m["guide.callout.note"],
  };
</script>

<div
  class={clsx("my-4 rounded-lg border-l-4 px-4 py-3", {
    "border-primary/60 bg-primary/10 text-primary": variant === "tip",
    "border-rose/60 bg-rose/10 text-rose": variant === "warning",
    "text-text border-white/20 bg-white/5": variant === "info",
  })}
>
  <p class="not-prose mb-3 flex items-center gap-2 text-sm font-semibold">
    <span>{icons[variant]}</span>
    {title ?? defaultTitles[variant]()}
  </p>
  <div class="text-sm opacity-80">
    {@render children()}
  </div>
</div>
