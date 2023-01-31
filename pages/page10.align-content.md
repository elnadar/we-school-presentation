# Align-Content
<div grid="~ cols-2 gap-2">
<div>

This aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.

<div v-click-hide="2" v-click=1 >

*__Note__: This property only takes effect on multi-line flexible containers, where flex-wrap is set to either wrap or wrap-reverse). A single-line flexible container (i.e. where flex-wrap is set to its default value, no-wrap) will not reflect align-content.*

</div>

<v-click at=2>

```css {3}
.container {
  display: flex;
  align-content: normal;
}
```
</v-click>

<v-clicks v-click-hide>

- normal (default): items are packed in their default position as if no value was set.
- flex-start / start: items packed to the start of the container. The (more supported) flex-start honors the flex-direction while start honors the writing-mode direction.
</v-clicks>
<v-clicks v-click-hide>

- flex-end / end: items packed to the end of the container. The (more support) flex-end honors the flex-direction while end honors the writing-mode direction.
- center: items centered in the container

</v-clicks>

<v-clicks  v-click-hide>

- space-between: items evenly distributed; the first line is at the start of the container while the last one is at the end
- space-around: items evenly distributed with equal space around each line
- space-evenly: items are evenly distributed with equal space around them
</v-clicks>

<v-clicks>

- stretch: lines stretch to take up the remaining space

</v-clicks>

</div>
<div>

<img class="h-100 m-auto" src="/assets/align-content.svg">

</div>
</div>

<style>
.slidev-vclick-hidden{
    display: none;
}
</style>
