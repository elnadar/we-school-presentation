# Flex-Wrap

<div grid="~ cols-2 gap-2">
<div class="flex col" style="justify-content:center;">
    <img class="w-100" src="/assets/flex-wrap.svg">
</div>

<div>

By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.

```css {all|3}
.container {
  display: flex;
  flex-wrap: nowrap;
}
```

<v-clicks>

- nowrap (default): all flex items will be on one line
- wrap: flex items will wrap onto multiple lines, from top to bottom.
- wrap-reverse: flex items will wrap onto multiple lines from bottom to top.
</v-clicks>
</div>
</div>