# Flex-Flow
This is a shorthand for the `flex-direction` and `flex-wrap` properties, which together define the flex container’s main and cross axes. The default value is `row nowrap`.

```css {3}
.container {
  display: flex;
  flex-flow: column wrap;
}
```

this will equals:
```css {3,4}
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
```