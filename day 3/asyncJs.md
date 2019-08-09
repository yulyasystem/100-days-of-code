## async js

**call stack** keeps track where functions are in the execution of program.
**event queue** - list of functions in FIFO order
**event loop** waits for and dispatches functions in the event queue to the call stack

webapis like threads. timers are provided by browser(webapis). when webapi finish its work it comes to event queue, if stack is empty, event loop pushes it :)

**promises**

then() function that receives function to be executed(callback) when it has been _fulfilled_
catch() receives a function to be executed when it has been _rejected_

**async** defines async function, returns AsyncFunction object,returns Promise after call. can contain await which stops function execution and waits for promise response

**fetch ()** API only rejects a promise when the user is offline or some networking errors occur -> not
