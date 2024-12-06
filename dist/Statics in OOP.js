"use strict";
{
    class Counter {
        constructor() { }
        static increment() {
            return (Counter.count += 1);
        }
    }
    Counter.count = 0;
    const obj = new Counter();
    console.log(Counter.increment());
    console.log(Counter.increment());
    console.log(Counter.increment());
    const obj2 = new Counter();
    console.log(Counter.increment());
}
