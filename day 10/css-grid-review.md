## CSS GRID

Items that spill outside grid container will apear on new auto-generated row unless `grid-auto-flow:column` 

`grid-auto-flow` defines how auto-generated elements are positioned in grid.
* `row` says to fill each row and add new rows if needed (default value)
* `column` says to fill each column and add new if needed 
* `dense` says to fill free space of grid, do not gurantee the order of elements