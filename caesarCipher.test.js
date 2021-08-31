import caesarCipher from "./caesarCipher";

test('Defend east wall of castle, 1 shift', ()=>{
  expect(caesarCipher('Defend east wall of castle',1)).toBe('Efgfoe fbtu xbmm pg dbtumf');
})

test('Punctuation, 2 shift', () => {
  expect(caesarCipher('@$#$#',2)).toBe('@$#$#');
})

test('No shift added', () => {
  expect(caesarCipher('hello')).toBe('hello');
})
