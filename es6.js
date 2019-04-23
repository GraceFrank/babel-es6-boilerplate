let game = (a, b) => {
  return a + b;
};

let asyncGame = (a, b) => {
  return Promise.resolve(a + b);
};

export { game, asyncGame };
