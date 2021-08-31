import { expect } from "@jest/globals";
import arrayAnalysis from "./arrayAnalysis";

test('', () => {
  expect(arrayAnalysis([2,4,6,2,1])).toStrictEqual({average:3,min:1,max:6,length:5})
})
