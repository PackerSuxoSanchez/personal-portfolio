import { films } from '../data/films.js'

console.log('Hello there!  Welcome to my page!')

console.log(document.querySelector('.greeting'))

const greetingDiv = document.querySelector('.greeting')

greetingDiv.textContent = 'I just inserted text into a DOM element using my new JavaScript Skills!'

console.log(greetingDiv.textContent)

console.log(films)

greetingDiv.textContent = films[0].opening_crawl