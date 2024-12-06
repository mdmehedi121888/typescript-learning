{
  class Counter {
    constructor() {}
    static count: number = 0;

    static increment() {
      return (Counter.count += 1);
    }
  }

  const obj = new Counter();
  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());

  const obj2 = new Counter();
  console.log(Counter.increment());
}
