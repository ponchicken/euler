import { solve } from './index'

describe('Problem 001', () => {
  test('Even Fibonacci numbers', () => {
    expect(solve(10)).toBe(10)
    expect(solve(20)).toBe(10)
    expect(solve(100)).toBe(44)
    expect(solve(4000000)).toBe(4613732)
  })
})
