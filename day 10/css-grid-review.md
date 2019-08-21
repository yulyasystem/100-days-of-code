## CSS GRID

Items that spill outside grid container will apear on new auto-generated row unless `grid-auto-flow:column` 

`grid-auto-flow` defines how auto-generated elements are positioned in grid.
* `row` says to fill each row and add new rows if needed (default value)
* `column` says to fill each column and add new if needed 
* `dense` says to fill free space of grid, do not gurantee the order of elements
  
  % relative to the parent element's value for that property 
  em relative to the current font-size of the element
  rem relative to he font-size of the root, rem = root em
  ch number of chars 
  vh relative to the height of the viewport(window size) 1vh = 1/100 of of the viewport height
  vw relative to the width of viewpor
  ex relative to the height of the current font's lovercase 'x'

  example : 
  * `em` you wan the font of child element to be half of the size of its parent font-size 
    ```css
    .child{
        font-size:0.5em;
    }
    ```
* `rem` font size should be twice the size as the root element font  
    ```css
    .header{
        font-size:2rem;
    }
    ```