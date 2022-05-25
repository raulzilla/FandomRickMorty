const quiz = [{
  img: './../assets/image/quiz-1.jpg',
  question: 'Qual nome completo do Rick?',
  answers: [{
    message: 'Rick Morty',
    id: 'answer0',
    valid: true
  },{
    message: 'Rick Morty',
    id: 'answer1',
    valid: false
  },{
    message: 'Rick Morty',
    id: 'answer2',
    valid: false
  },{
    message: 'Rick Morty',
    id: 'answer3',
    valid: false
  },{
    message: 'Rick Morty',
    id: 'answer4',
    valid: false
  }]
},{
  img: './../assets/image/quiz-1.jpg',
  question: 'Qual nome completo do Rick?',
  answers: [{
    message: 'Rick Morty',
    id: 'answer5',
    valid: true
  },{
    message: 'Rick Morty',
    id: 'answer6',
    valid: false
  },{
    message: 'Rick Morty',
    id: 'answer7',
    valid: false
  },{
    message: 'Rick Morty',
    id: 'answer8',
    valid: false
  },{
    message: 'Rick Morty',
    id: 'answer9',
    valid: false
  }]
}]

/* const clickAnswers = (id) => document.getElementById(id).className += ' active'

clickAnswers('answer9') */

document.getElementById('quiz').innerHTML = `${quiz.map(item =>
  `
    <img id="img" src=${item.img} class="img-fluid" alt="...">
    <p id="question" class="h1 text-align-center">${item.question}</p>
    <div class="list-group">
      ${item.answers.map((subitem) => `<button id="${subitem.id}" type="button" class="list-group-item list-group-item-action">${subitem.message}</button>`).join('')}
    </div>
  `
).join('')}`


