## Memory Managment

Each process in multi-tasking OS runs in its on memory memor sandbox. It is **virual address space**, in 32-bit mode is alswas 4gb block of memory addresses. These addressed are mapped to physical memory by page tables.

The topmost segment in the process address space is the stack, which stores local variables and function parameters. Calling a method or function pushes a new stack frame onto the stack. The stack frame is destroyed when the function returns.
