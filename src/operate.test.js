import operate from './logic/operate';
describe('operate', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(operate('1', '2', '+')).toEqual('3');
  });
  test('adds 5 - 4 to equal 1', () => {
    expect(operate('5', '4', '-')).toEqual('1');
  });
  test('adds 5 x 2 to equal 10', () => {
    expect(operate('5', '2', 'x')).toEqual('10');
  });
  test('adds 10 ÷ 2 to equal 5', () => {
    expect(operate('10', '2', '÷')).toEqual('5');
  });

  test('adds 10 ÷ 0 to generate error: Cannot divide by 0', () => {
    expect(operate('10', '0', '÷')).toEqual("Can't divide by 0.");
  });
});
