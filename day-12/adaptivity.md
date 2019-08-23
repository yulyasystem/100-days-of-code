## ADAPTIVITY

`@include_1170` in selector's body, directive is looking for content of mixin and performs it. @media rule is created in tag selector.

to use :

```css
@import "media-mixin.scss";
.header {
  background-color: red;

  @include _768 {
    background-color: purple;
  }

  @include _480 {
    background-color: black;
  }
}
```

**if mixin has outside wrapper, @content wraps the code with selctor of current class** like in example above

#### sass fluid font

```css
@mixin fluid-type(
  $min-font-size: 12px,
  $max-font-size: 21px,
  $lower-range: 420px,
  $upper-range: 900px
) {
  font-size: calc(
    #{$min-font-size} + #{(
        ($max-font-size / ($max-font-size * 0 + 1)) - ($min-font-size /
              ($min-font-size * 0 + 1))
      )} *
      (
        (100vw - #{$lower-range}) / #{(
            ($upper-range / ($upper-range * 0 + 1)) - ($lower-range /
                  ($lower-range * 0 + 1))
          )}
      )
  );

  @media screen and (max-width: $lower-range) {
    font-size: $min-font-size;
  }
  @media screen and (min-width: $upper-range) {
    font-size: $max-font-size;
  }
}

p {
  @include fluid-type(14px, 20px);
  font-weight: normal;
}

h1 {
  @include fluid-type(28px, 52px);
  font-weight: 100;
}
```

#### flex

**flex-grow** proportional increase. if we apply `display:flex`to the paren element and don't change anything else, the child elements will be stacked horizontally, if there is no space, it will shrink, but if there is enough space they will not grow in size. `flex-grow` defines how remaining space will be distributed among flex elements.

**flex-basis** defines initial size of element. **when use with flex-grow, flex-grow does not use its initial width anymore, but the value of its flex-basis property**. With box-sizing flex-basis behaves like width, so if border-box work only with flex-basis and margin :)
