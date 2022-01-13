import operate from './logic/operate';

test('adds 1 + 2 to equal 3', () => {
  expect(operate('1', '2', '+')).toEqual("3");
});
