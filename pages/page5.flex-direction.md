# Flex-Direction

<div grid="~ cols-2 gap-2">
<div>

This property establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.


```css {all|3}
.container {
  display: flex;
  flex-direction: row;
}
```

<v-clicks>

- `row` (default): left to right in ltr; right to left in rtl
- `row-reverse`: right to left in ltr; left to right in rtl
- `column`: same as row but top to bottom
- `column`-reverse: same as row-reverse but bottom to top
</v-clicks>

</div>
<div class="flex col" style="justify-content:center;">
    <img class="w-100 transform rotate-90" src="/assets/flex-direction.svg">
</div>
</div>


---

# Flex-Direction
## Real life Examples

If we want to create responsive navigation bar we can use:

<div v-click=1>

- `flex-direction: row;` in desktop case:
</div>
<br>
<img v-click-hide=2 v-click=1 src="/assets/navbar-desktop.png">

<div v-click=2>

- `flex-direction: column;` in mobile case:
</div>
<br>
<img class="absolute right-0 top-20 h-100" v-click=2 src="/assets/navbar-mobile.png">


<style>
img.slidev-vclick-hidden{
    display: none;
}
</style>
