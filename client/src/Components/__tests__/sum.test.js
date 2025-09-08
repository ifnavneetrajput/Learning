import { sum } from "../sum";

test("calculate the sum of two numbers ", () => {
  const result = sum(2,3);

  //assertions 
  expect(result).toBe(5);
});