import capitalize from "./capitalize";

test('hello' , () => {
  expect(capitalize('hello')).toBe('HELLO');
})

test('a number', () => {
  expect(capitalize('123#.a')).toBe('123#.A')
})
