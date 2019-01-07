const api = require('./api')
const getFormFields = require('../../lib/get-form-fields.js')
const ui = require('./ui')

// User sign up
const onSignUp = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
  $('form').trigger('reset')
}

// array representing the moves in the game
const playerMoves = [null, null, null, null, null, null, null, null, null]

// variable that represents the last move made by either x or o
let lastMove = null

// players
const player1 = 'X'
const player2 = 'O'

// printing either X or O on click
const playBox1 = function () {
  if ($('#box1').html() === '') {
    if (lastMove === player1) {
      $(event.target).text(player2)
      playerMoves[0] = player2
      lastMove = player2
    } else {
      $(event.target).text(player1)
      playerMoves[0] = player1
      lastMove = player1
    }
  }
}
const playBox2 = function () {
  if ($('#box2').html() === '') {
    if (lastMove === player1) {
      $(event.target).text(player2)
      playerMoves[0] = player2
      lastMove = player2
    } else {
      $(event.target).text(player1)
      playerMoves[0] = player1
      lastMove = player1
    }
  }
}
const playBox3 = function () {
  if ($('#box3').html() === '') {
    if (lastMove === player1) {
      $(event.target).text(player2)
      playerMoves[0] = player2
      lastMove = player2
    } else {
      $(event.target).text(player1)
      playerMoves[0] = player1
      lastMove = player1
    }
  }
}
const playBox4 = function () {
  if ($('#box4').html() === '') {
    if (lastMove === player1) {
      $(event.target).text(player2)
      playerMoves[0] = player2
      lastMove = player2
    } else {
      $(event.target).text(player1)
      playerMoves[0] = player1
      lastMove = player1
    }
  }
}
const playBox5 = function () {
  if ($('#box5').html() === '') {
    if (lastMove === player1) {
      $(event.target).text(player2)
      playerMoves[0] = player2
      lastMove = player2
    } else {
      $(event.target).text(player1)
      playerMoves[0] = player1
      lastMove = player1
    }
  }
}
const playBox6 = function () {
  if ($('#box6').html() === '') {
    if (lastMove === player1) {
      $(event.target).text(player2)
      playerMoves[0] = player2
      lastMove = player2
    } else {
      $(event.target).text(player1)
      playerMoves[0] = player1
      lastMove = player1
    }
  }
}
const playBox7 = function () {
  if ($('#box7').html() === '') {
    if (lastMove === player1) {
      $(event.target).text(player2)
      playerMoves[0] = player2
      lastMove = player2
    } else {
      $(event.target).text(player1)
      playerMoves[0] = player1
      lastMove = player1
    }
  }
}
const playBox8 = function () {
  if ($('#box8').html() === '') {
    if (lastMove === player1) {
      $(event.target).text(player2)
      playerMoves[0] = player2
      lastMove = player2
    } else {
      $(event.target).text(player1)
      playerMoves[0] = player1
      lastMove = player1
    }
  }
}
const playBox9 = function () {
  if ($('#box9').html() === '') {
    if (lastMove === player1) {
      $(event.target).text(player2)
      playerMoves[0] = player2
      lastMove = player2
    } else {
      $(event.target).text(player1)
      playerMoves[0] = player1
      lastMove = player1
    }
  }
}

const gameOver = function () {
  for (let i = 0; i < playerMoves.length; i++) {
    let result = false
    if (playerMoves[i] !== null) {
      result = true
    }
    if (result === true) {
      alert('game over')
    }
  }
}

module.exports = {
  onSignUp,
  playBox1,
  playBox2,
  playBox3,
  playBox4,
  playBox5,
  playBox6,
  playBox7,
  playBox8,
  playBox9,
  gameOver
}
