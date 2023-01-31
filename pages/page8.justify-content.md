# Justify-Content
This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

<img class="h-90" src="/assets/justify-content2.svg">

---

# Justify-Content
This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.

```css {3}
.container {
  display: flex;
  justify-content: center;
}
```

<v-clicks v-click-hide>

- `flex-start` (default): items are packed toward the start of the flex-direction.
- `flex-end`: items are packed toward the end of the flex-direction.
- `center`: items are centered along the line
</v-clicks>

<v-clicks at=4>

- `space-between`: items are evenly distributed in the line; first item is on the start line, last item on the end line

- `space-around`: items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.

- `space-evenly`: items are distributed so that the spacing between any two items (and the space to the edges) is equal.

</v-clicks>


<style>
.slidev-vclick-hidden{
    display: none;
}
</style>
