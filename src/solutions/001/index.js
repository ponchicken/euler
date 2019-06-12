const isDividable = num => num % 3 === 0 || num % 5 === 0

const solve = limit => {
  let result = 0
  for (let i = 0; i < limit; i++) {
    if (isDividable(i)) {
      result += i
    }
  }
  return result
}

export default solve(1000)
export { solve }
