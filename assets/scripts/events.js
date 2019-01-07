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

// User sign in
const onSignIn = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
  $('form').trigger('reset')
}

// User sign Out
const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
  $('form').trigger('reset')
}

// User Change password
const onChangePassword = (event) => {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
  $('form').trigger('reset')
}

// array representing the moves in the game
const playerMoves = [null, null, null, null, null, null, null, null, null]

// variable that represents the last move made by either x or o
let lastMove = null

// players
const player1 = 'X'
const player2 = 'O'
let over = false
// game winning logic
const xWins = function () {
  if (playerMoves[0] === 'X' && playerMoves[1] === 'X' && playerMoves[2] === 'X') {
    $('#game-board .row .box').off()
    $('#user-message').text(`Game Over, X Wins!`)
    over = true
  } if (playerMoves[0] === 'X' && playerMoves[3] === 'X' && playerMoves[6] === 'X') {
    $('#game-board .row .box').off()
    $('#user-message').text(`Game Over, X Wins!`)
    over = true
  } if (playerMoves[0] === 'X' && playerMoves[4] === 'X' && playerMoves[8] === 'X') {
    $('#game-board .row .box').off()
    $('#user-message').text(`Game Over, X Wins!`)
    over = true
  } if (playerMoves[1] === 'X' && playerMoves[4] === 'X' && playerMoves[7] === 'X') {
    $('#game-board .row .box').off()
    $('#user-message').text(`Game Over, X Wins!`)
    over = true
  } if (playerMoves[2] === 'X' && playerMoves[4] === 'X' && playerMoves[6] === 'X') {
    $('#game-board .row .box').off()
    $('#user-message').text(`Game Over, X Wins!`)
    over = true
  } if (playerMoves[2] === 'X' && playerMoves[5] === 'X' && playerMoves[8] === 'X') {
    $('#game-board .row .box').off()
    $('#user-message').text(`Game Over, X Wins!`)
    over = true
  } if (playerMoves[3] === 'X' && playerMoves[4] === 'X' && playerMoves[5] === 'X') {
    $('#game-board .row .box').off()
    $('#user-message').text(`Game Over, X Wins!`)
    over = true
  } if (playerMoves[6] === 'X' && playerMoves[7] === 'X' && playerMoves[8] === 'X') {
    $('#game-board .row .box').off()
    $('#user-message').text(`Game Over, X Wins!`)
    over = true
  }
}

const oWins = function () {
  if (playerMoves[0] === 'O' && playerMoves[1] === 'O' && playerMoves[2] === 'O') {
    $('#game-board .row .box').off()
    $('#user-message').text(`Game Over, O Wins!`)
    over = true
  } if (playerMoves[0] === 'O' && playerMoves[3] === 'O' && playerMoves[6] === 'O') {
    $('#game-board .row .box').off()
    $('#user-message').text(`Game Over, O Wins!`)
    over = true
  } if (playerMoves[0] === 'O' && playerMoves[4] === 'O' && playerMoves[8] === 'O') {
    $('#game-board .row .box').off()
    $('#user-message').text(`Game Over, O Wins!`)
    over = true
  } if (playerMoves[1] === 'O' && playerMoves[4] === 'O' && playerMoves[7] === 'O') {
    $('#game-board .row .box').off()
    $('#user-message').text(`Game Over, O Wins!`)
    over = true
  } if (playerMoves[2] === 'O' && playerMoves[4] === 'O' && playerMoves[6] === 'O') {
    $('#game-board .row .box').off()
    $('#user-message').text(`Game Over, O Wins!`)
    over = true
  } if (playerMoves[2] === 'O' && playerMoves[5] === 'O' && playerMoves[8] === 'O') {
    $('#game-board .row .box').off()
    $('#user-message').text(`Game Over, O Wins!`)
    over = true
  } if (playerMoves[3] === 'O' && playerMoves[4] === 'O' && playerMoves[5] === 'O') {
    $('#game-board .row .box').off()
    $('#user-message').text(`Game Over, O Wins!`)
    over = true
  } if (playerMoves[6] === 'O' && playerMoves[7] === 'O' && playerMoves[8] === 'O') {
    $('#game-board .row .box').off()
    $('#user-message').text(`Game Over, O Wins!`)
    over = true
  }
}

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
  xWins()
  oWins()
  const preventDouble = function (event) {
    if (playerMoves[0] !== null) {
      $('#box1').off()
    }
  }
  if (playerMoves.every(valueExists)) {
    console.log('test to make sure this works')
    gameDraw()
  }
  preventDouble()
  console.log(playerMoves)
}

const playBox2 = function () {
  if ($('#box2').html() === '') {
    if (lastMove === player1) {
      $(event.target).text(player2)
      playerMoves[1] = player2
      lastMove = player2
    } else {
      $(event.target).text(player1)
      playerMoves[1] = player1
      lastMove = player1
    }
  }
  xWins()
  oWins()
  const preventDouble = function (event) {
    if (playerMoves[1] !== null) {
      $('#box2').off()
    }
  }
  if (playerMoves.every(valueExists)) {
    console.log('test to make sure this works')
    gameDraw()
  }
  preventDouble()
  console.log(playerMoves)
}

const playBox3 = function () {
  if ($('#box3').html() === '') {
    if (lastMove === player1) {
      $(event.target).text(player2)
      playerMoves[2] = player2
      lastMove = player2
    } else {
      $(event.target).text(player1)
      playerMoves[2] = player1
      lastMove = player1
    }
  }
  xWins()
  oWins()
  const preventDouble = function (event) {
    if (playerMoves[2] !== null) {
      $('#box3').off()
    }
  }
  if (playerMoves.every(valueExists)) {
    console.log('test to make sure this works')
    gameDraw()
  }
  preventDouble()
  console.log(playerMoves)
}

const playBox4 = function () {
  if ($('#box4').html() === '') {
    if (lastMove === player1) {
      $(event.target).text(player2)
      playerMoves[3] = player2
      lastMove = player2
    } else {
      $(event.target).text(player1)
      playerMoves[3] = player1
      lastMove = player1
    }
  }
  xWins()
  oWins()
  const preventDouble = function (event) {
    if (playerMoves[3] !== null) {
      $('#box4').off()
    }
  }
  if (playerMoves.every(valueExists)) {
    console.log('test to make sure this works')
    gameDraw()
  }
  preventDouble()
  console.log(playerMoves)
}
const playBox5 = function () {
  if ($('#box5').html() === '') {
    if (lastMove === player1) {
      $(event.target).text(player2)
      playerMoves[4] = player2
      lastMove = player2
    } else {
      $(event.target).text(player1)
      playerMoves[4] = player1
      lastMove = player1
    }
  }
  xWins()
  oWins()
  const preventDouble = function (event) {
    if (playerMoves[4] !== null) {
      $('#box5').off()
    }
  }
  if (playerMoves.every(valueExists)) {
    console.log('test to make sure this works')
    gameDraw()
  }
  preventDouble()
  console.log(playerMoves)
}
const playBox6 = function () {
  if ($('#box6').html() === '') {
    if (lastMove === player1) {
      $(event.target).text(player2)
      playerMoves[5] = player2
      lastMove = player2
    } else {
      $(event.target).text(player1)
      playerMoves[5] = player1
      lastMove = player1
    }
  }
  xWins()
  oWins()
  const preventDouble = function (event) {
    if (playerMoves[5] !== null) {
      $('#box6').off()
    }
  }
  if (playerMoves.every(valueExists)) {
    console.log('test to make sure this works')
    gameDraw()
  }
  preventDouble()
  console.log(playerMoves)
}
const playBox7 = function () {
  if ($('#box7').html() === '') {
    if (lastMove === player1) {
      $(event.target).text(player2)
      playerMoves[6] = player2
      lastMove = player2
    } else {
      $(event.target).text(player1)
      playerMoves[6] = player1
      lastMove = player1
    }
  }
  xWins()
  oWins()
  const preventDouble = function (event) {
    if (playerMoves[6] !== null) {
      $('#box7').off()
    }
  }
  if (playerMoves.every(valueExists)) {
    console.log('test to make sure this works')
    gameDraw()
  }
  preventDouble()
  console.log(playerMoves)
}
const playBox8 = function () {
  if ($('#box8').html() === '') {
    if (lastMove === player1) {
      $(event.target).text(player2)
      playerMoves[7] = player2
      lastMove = player2
    } else {
      $(event.target).text(player1)
      playerMoves[7] = player1
      lastMove = player1
    }
  }
  xWins()
  oWins()
  const preventDouble = function (event) {
    if (playerMoves[7] !== null) {
      $('#box8').off()
    }
  }
  if (playerMoves.every(valueExists)) {
    console.log('test to make sure this works')
    gameDraw()
  }
  preventDouble()
  console.log(playerMoves)
}
const playBox9 = function () {
  if ($('#box9').html() === '') {
    if (lastMove === player1) {
      $(event.target).text(player2)
      playerMoves[8] = player2
      lastMove = player2
    } else {
      $(event.target).text(player1)
      playerMoves[8] = player1
      lastMove = player1
    }
  }
  xWins()
  oWins()
  const preventDouble = function (event) {
    if (playerMoves[8] !== null) {
      $('#box9').off()
    }
  }
  if (playerMoves.every(valueExists)) {
    console.log('test to make sure this works')
    gameDraw()
  }
  preventDouble()
  console.log(playerMoves)
}

const gameDraw = function () {
  if (over === false) {
    $('#user-message').text(`Game Over, it's a Draw!`)
  }
}

function valueExists (currentValue) {
  if (currentValue) {
    return true
  } else {
    return false
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  playBox1,
  playBox2,
  playBox3,
  playBox4,
  playBox5,
  playBox6,
  playBox7,
  playBox8,
  playBox9,
  xWins,
  oWins,
  gameDraw
}
