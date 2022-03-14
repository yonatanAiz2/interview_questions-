// Q1 - what will be printed
let obja = { a: 1 };
let objb = { a: 1 };

if ({ a: 1 } === { a: 1 }) {
  console.log("Sunday");
} else if ({ a: 1 } == { a: 1 }) {
  console.log("Monday");
} else if (obja === objb) {
  console.log("Tuesday");
} else if (Object.is(obja, objb)) {
  console.log("Wednesday");
} else {
  console.log("Thursday");
}

// Q2 - What is the output?
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
    return count;
  }

  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }

  return [increment, log, count];
}

const [increment, log, count] = createIncrement();
increment();
increment();
const c = increment();
log();
console.log(count);
console.log(c);

// Q3
// Whats happening here? how much time will take to the console.log to log, and how to improve
const foo = (t = 1000) =>
  new Promise((res) =>
    setTimeout(() => {
      res(Math.round(Math.random() * 10));
    }, t)
  );

async function bar(...args) {
  const arr = [];
  for (const a of args) {
    const res = await foo(a);
    arr.push(res);
  }

  return Math.max(...arr);
}

bar(10000, 1000, undefined, 3000).then((res) => console.log(res));

// Q4 - What is the output of each console.log and if there is a problem, how to fix it?
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

obj.bar();

// Q5 - What is the order of the output
async function f() {
  console.log("1");

  await new Promise((res) => {
    setTimeout(() => {
      console.log("2");
      res();
    }, 4000);
  });

  console.log("3");
  setTimeout(() => {
    console.log("4");
  }, 0);

  console.log("5");
  new Promise((res) => {
    setTimeout(() => {
      console.log("6");
      res();
    }, 400);
  });

  console.log("7");
}

f();

// Q6
// How can we improve getDbsAndSubscriptions function
const getDatabases = async () => {
  // Fetching list of databases
} 
const getSubscriptions = async () => {
  // Fetching list of subscriptions
} 

const normalizeDbsAndSubscription = () => {
}


const getDbsAndSubscriptions = async() => {
  try {
    const databases = await getDatabases();
    const subscriptions = await getSubscriptions();
    return normalizeDbsAndSubscription(databases, subscriptions)
  } catch (error) {
    console.log(error)
  }


}

getDbsAndSubscriptions()
