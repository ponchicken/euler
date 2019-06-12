import { solve } from './001'

describe('Problem 001', () => {
  test('sum of all the multiples of 3 or 5 below 1000 is 233168', () => {
    expect(solve(1000)).toBe(233168)
  })
})
