const fs = require('fs')
const answers = require('./answers')

const files = fs.readdirSync(`${__dirname}/../src/solutions`)

for (let i = 1; i <= files.length; i++) {
  describe(`Problem ${i}`, () => {
    const startTime = new Date()
    const fileName = `00${i}`.slice(-3)
    const answer = require(`../src/solutions/${fileName}/`).default
    const endTime = new Date()

    const elapsedTime = endTime - startTime

    test(`Your answer: ${answer} (${elapsedTime}ms)`, () => {
      const correctAnswer = answers[`problem${i}`]

      expect(answer).toBe(correctAnswer)
    })
  })
}
