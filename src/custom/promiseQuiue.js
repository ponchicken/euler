const KITTEN = 'https://placekitten.com/200/'
const RANDOM_CAT = 'http://aws.random.cat/meow'

const data = Array(100).fill('').map((_, i) => i)

const createImage = (blob) => {
  const image = document.createElement('img')
  const imageUrl = window.URL.createObjectURL(blob)
  image.src = imageUrl
  document.body.appendChild(image)
}


console.log('quiue', data)
const promiseQuiue = () => {
  const index = 0

  const quiue = index => {
    if (index < data.length) {
      console.log('...loading')
      fetch(`${KITTEN}${200 + index}`)
        .then(res => res.blob())
        .then(res => {
          console.log(res)
          createImage(res)
          quiue(index + 1)
        })
        .catch(error => console.error(error))
    }
  }

  return quiue(index)

  // return fetch(RANDOM_CAT)
  //   .then(res => res.json())
}

promiseQuiue()


