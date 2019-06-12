const LIMIT = 4000000

const isEven = num => num % 2 === 0

const solve = limit => {
  let fibo = [0, 1]
  let result = 0
  let cur = 1

  while (cur < limit) {
    fibo.push(cur)
    if (isEven(cur)) {
      result += cur
    }

    cur += fibo[fibo.length - 2]
  }

  return result
}

export default solve(LIMIT)
export { solve }
