import reverseString from "./reverseString";

test('hello' , () => {
  expect(reverseString('hello')).toBe('olleh');
})

test('a number', () => {
  expect(reverseString('123#.a')).toBe('a.#321')
})
