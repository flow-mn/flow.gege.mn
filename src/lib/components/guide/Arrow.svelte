<script lang="ts">
  /**
   * Arrow drawn between two percentage points over an AnnotatedScreenshot.
   * `from` and `to` are [x, y] percentage tuples.
   */
  interface $Props {
    from: [number, number];
    to: [number, number];
    /** Curve control as a perpendicular offset percentage (negative curves the other way). 0 = straight. */
    curve?: number;
  }

  let { from, to, curve = 0 }: $Props = $props();

  const path = $derived.by(() => {
    const [x1, y1] = from;
    const [x2, y2] = to;
    if (!curve) return `M ${x1} ${y1} L ${x2} ${y2}`;
    const mx = (x1 + x2) / 2;
    const my = (y1 + y2) / 2;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.hypot(dx, dy) || 1;
    const cx = mx + (-dy / len) * curve;
    const cy = my + (dx / len) * curve;
    return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
  });
</script>

<svg
  class="text-primary absolute inset-0 h-full w-full overflow-visible"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
  aria-hidden="true"
>
  <defs>
    <marker
      id="guide-arrowhead"
      viewBox="0 0 10 10"
      refX="9"
      refY="5"
      markerWidth="5"
      markerHeight="5"
      orient="auto-start-reverse"
      markerUnits="userSpaceOnUse"
    >
      <path
        d="M 0 0 L 10 5 L 0 10 z"
        fill="currentColor"
      />
    </marker>
  </defs>
  <path
    d={path}
    fill="none"
    stroke="currentColor"
    stroke-width="0.6"
    stroke-linecap="round"
    vector-effect="non-scaling-stroke"
    style="stroke-width:2.5px;"
    marker-end="url(#guide-arrowhead)"
  />
</svg>
