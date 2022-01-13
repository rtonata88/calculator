import calculate from './logic/calculate'

describe('Test for Calculate library', () => {
  test.each([{
    mockObj: {
      total: '20',
      next: '10',
      operation: '+',
    },
    operation: '=',
    result: {
      total: '30',
      next: null,
      operation: null,
    },
  },

  {
    mockObj: {
      total: '20',
      next: '10',
      operation: '-',
    },
    operation: '=',
    result: {
      total: '10',
      next: null,
      operation: null,
    },
  },

  {
    mockObj: {
      total: '20',
      next: '10',
      operation: 'x',
    },
    operation: '=',
    result: {
      total: '200',
      next: null,
      operation: null,
    },
  },

  {
    mockObj: {
      total: '20',
      next: '10',
      operation: '+',
    },
    operation: 'AC',
    result: {
      total: null,
      next: null,
      operation: null,
    },
  },

  ])('Add both numbers', (({ mockObj, operation, result }) => expect(calculate(mockObj, operation)).toEqual(result)))
})
