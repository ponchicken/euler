const fs = require('fs')
const answers = require('./answers')

const files = fs.readdirSync(`${__dirname}/../src/solutions`)

describe(`Problem ${files.length}`, () => {
  const startTime = new Date()
  const fileName = `00${files.length}`.slice(-3)
  const answer = require(`../src/solutions/${fileName}/`).default
  const endTime = new Date()

  const elapsedTime = endTime - startTime

  test(`Your answer: ${answer} (${elapsedTime}ms)`, () => {
    const correctAnswer = answers[`problem${files.length}`]

    expect(answer).toBe(correctAnswer)
  })
})
