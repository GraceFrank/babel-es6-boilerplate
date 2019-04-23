import { game, asyncGame } from "./es6";
import "babel-polyfill";

describe("testing synchronous game", () => {
  test("that it should add two numbers", () => {
    expect(game(2, 2)).toBe(4);
  });

  test("that it should add two numbers async ", async () => {
    let result = await asyncGame(2, 2);
    expect(result).toBe(4);
  });
});
