import calculator from "./calculator";

test('1 + 2', ()=>{
  expect(calculator.add(1,2)).toBe(3)
})

test('2-1', ()=>{
  expect(calculator.subtract(2,1)).toBe(1)
})

test('3 x 2', ()=>{
  expect(calculator.multiply(3,2)).toBe(6)
})

test('10 / 2', ()=>{
  expect(calculator.divide(10,2)).toBeCloseTo(5)
})
