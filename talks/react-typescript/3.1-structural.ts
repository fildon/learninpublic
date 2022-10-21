interface Cat {
  legs: number;
}

function getLegCount(cat: Cat): number {
  return cat.legs;
}

const ursula: Cat = {
  legs: 4,
};

const legCount = getLegCount(ursula);

legCount.toString();

interface Table {
  legs: number;
  varnish: string;
}

const woodenTable: Table = {
  legs: 4,
  varnish: "Rupert's home made table varnish",
};

getLegCount(woodenTable);

interface Empty {}

const foo = (input: Empty) => {
  //
};

const input = "";

foo(input);
