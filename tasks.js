const sum = (a, b) => a + b;
const sum2 = (...args) => args.reduce((acc, curr) => acc + curr, 0);

const initSum = () => {
  const x = [];

  return {
    execute: () => sum2(...x),
    add: (y) => x.push(y),
  };
};

const randomNum = (timeout = 1000) =>
  new Promise((res) =>
    setTimeout(() => {
      res(Math.round(Math.random() * 10));
    }, timeout)
  );

const getMaxNumFromPromises = (...promises) =>
  Promise.all(promises).then((values) => Math.max(...values));

// randomNum(2000).then((num) => console.log(num)); // will console.log random number after 2s
// randomNum().then((num) => console.log(num)); // will console.log random number after 1s

// getMaxNumFromPromises(
//   randomNum(),
//   randomNum(2000),
//   randomNum(4000),
//   randomNum(),
//   randomNum(10000),
//   randomNum(3000),
//   randomNum(5000),
//   randomNum()
// ).then((num) => console.log("THE MAX", num));

const counter = (function () {
  let count = 0;
  function add() {
    count++;
    return count;
  }

  return add;
})();

counter();
counter();

// const sum = initSum();
// sum.add(5);
// sum.add(6);
// sum.add(10);

// console.log(sum.execute());

const obj = {
  foo: "bar",
  bar() {
    const self = this;
    console.log(this.foo);
    console.log(self.foo);

    (function () {
      console.log(this.foo);
      console.log(self.foo);
    })();
  },
};

async function f() {
  console.log("lorem");

  await new Promise((res) => {
    setTimeout(() => {
      console.log("dolor");
      res();
    }, 4000);
  });

  setTimeout(() => {
    console.log("something");
  }, 0);

  new Promise((res) => {
    setTimeout(() => {
      console.log("labs");
      res();
    }, 400);
  });

  console.log("REDIS");
}

f();
