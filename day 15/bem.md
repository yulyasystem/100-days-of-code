## bem

```css
.parent-block display: flex &__text-element align-self: center &--modificator
  bg-color: pink;
```

**&-current place(selector)**

- naming convention
- maintainable css
- idea of independent blocks,
- block can be placed anywhere

**elements** - children of blocks, can have only 1 parent block, cant be used outside of block
**modifiers** represents state or styles of classes, used both for blocks and elements

### why not use?

- id's are unique, can't reuse in interface
- tags, markup is unstable, change of markup will break styles
- css reset or normalise, it affects all layout nodes
- universal selector \* can make project code unpredictable
- nested selectors increase code coupling and make it difficult to reuse
- combined selectors are more specific than single, which makes it difficult to redifine block
- don't combine tag and class in same selector, it makes CSS rules more specific
- attribute selector are less informative than class selector
