# Align-Items

<div grid="~ cols-2 gap-2">
<div>

<img class="h-100 m-auto" src="/assets/align-items.svg">

</div>
<div>

<div v-click-hide=1>

This defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).
</div>
```css {3}
.container {
  display: flex;
  align-items: stretch;
}
```

<v-clicks v-click-hide>

- stretch (default): stretch to fill the container (still respect min-width/max-width)
- flex-start / start / self-start: items are placed at the start of the cross axis. The difference between these is subtle, and is about respecting the flex-direction rules or the writing-mode rules.
- flex-end / end / self-end: items are placed at the end of the cross axis. The difference again is subtle and is about respecting flex-direction rules vs. writing-mode rules.

</v-clicks>

<v-clicks>

- center: items are centered in the cross-axis
    baseline: items are aligned such as their baselines align

</v-clicks>

</div>
</div>


<style>
.slidev-vclick-hidden{
    display: none;
}
</style>
