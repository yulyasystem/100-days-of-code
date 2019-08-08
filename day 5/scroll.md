scrolling -> event-> handle with listeners -> lots of scrolling -> optimization problems -> throttling

**throttling** means that function will call no more than once at a time, allow so many calls to given period of time 

For instance, if you are doing something related to animation, and you want your frame rate to be 60 fps, you don’t need to calculate more than once every 16ms (1000ms/60fps).

```
// regular call to function handleEvent
element.on('event', handleEvent);

// throttle handleEvent so it gets called only once every 2 seconds (2000 ms)

element.on('event', throttle(handleEvent, 2000)); 
```

**debouncing** wait until the end of string of events to call function

**sticky effect** : 

```
.element {
    position:sticky;
    top:50px;
}
```