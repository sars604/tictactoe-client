const api = require('./api')
const getFormFields = require('../../lib/get-form-fields.js')
const ui = require('./ui')
const store = require('./store')

// array representing the moves in the game
let playerMoves = ['', '', '', '', '', '', '', '', '']

// variable that represents the last move made by either x or o
let lastMove = null

// players
const player1 = 'X'
const player2 = 'O'
let currentMove = null
let over = false

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
  $('#change-password-form').trigger('reset')
}

// Get Index of Games
const onGetGames = function () {
  // make API call for index of books
  api.index()
  // when API call is successful
    .then(ui.onGetGamesSuccess)
  // when API call fails
    .catch(ui.onGetGamesFailure)
}

// Create a Game
const onCreateGame = function (event) {
  event.preventDefault()
  $('.box').html('')
  playerMoves = ['', '', '', '', '', '', '', '', '']
  lastMove = null
  over = false
  currentMove = null
  gameWinner = false
  // const data = getFormFields(event.target)
  api.create()
  // when API call is successful
    .then(ui.onCreateGameSuccess)
  // when API call fails
    .catch(ui.onCreateGameFailure)
}

// Show a Game
const onGetGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.game.id
  // console.log(data.game.id)
  // make API call for index of books
  api.show(id)
  // when API call is successful
    .then(ui.onGetGameSuccess)
  // when API call fails
    .catch(ui.onGetGameFailure)
}

const onUpdateGame = (box, currentMove, over) => {
  const data =
  {
    'game': {
      'cell': {
        'index': box[3],
        'value': currentMove
      },
      'over': over
    }
  }
  api.updateGame(data)
    .then(ui.onUpdateGameSuccess)
    .catch(ui.onUpdateGameFailure)
}

let gameWinner = false

// game winning logic for X
const xWins = function () {
  if ((playerMoves[0] === 'X' && playerMoves[1] === 'X' && playerMoves[2] === 'X') ||
(playerMoves[0] === 'X' && playerMoves[3] === 'X' && playerMoves[6] === 'X') ||
(playerMoves[0] === 'X' && playerMoves[4] === 'X' && playerMoves[8] === 'X') ||
(playerMoves[1] === 'X' && playerMoves[4] === 'X' && playerMoves[7] === 'X') ||
(playerMoves[2] === 'X' && playerMoves[4] === 'X' && playerMoves[6] === 'X') ||
(playerMoves[2] === 'X' && playerMoves[5] === 'X' && playerMoves[8] === 'X') ||
(playerMoves[3] === 'X' && playerMoves[4] === 'X' && playerMoves[5] === 'X') ||
(playerMoves[6] === 'X' && playerMoves[7] === 'X' && playerMoves[8] === 'X')) {
    $('#user-message').text(`Game Over, X Wins!`)
    api.gameOver(store.game.id)
    gameWinner = true
  }
}

// game winning logic for O
const oWins = function () {
  if ((playerMoves[0] === 'O' && playerMoves[1] === 'O' && playerMoves[2] === 'O') ||
(playerMoves[0] === 'O' && playerMoves[3] === 'O' && playerMoves[6] === 'O') ||
(playerMoves[0] === 'O' && playerMoves[4] === 'O' && playerMoves[8] === 'O') ||
(playerMoves[1] === 'O' && playerMoves[4] === 'O' && playerMoves[7] === 'O') ||
(playerMoves[2] === 'O' && playerMoves[4] === 'O' && playerMoves[6] === 'O') ||
(playerMoves[2] === 'O' && playerMoves[5] === 'O' && playerMoves[8] === 'O') ||
(playerMoves[3] === 'O' && playerMoves[4] === 'O' && playerMoves[5] === 'O') ||
(playerMoves[6] === 'O' && playerMoves[7] === 'O' && playerMoves[8] === 'O')) {
    gameWinner = true
    $('#user-message').text(`Game Over, O Wins!`)
    api.gameOver(store.game.id)
  }
}

// printing either X or O on click
const playBox = function () {
  if (gameWinner === false) {
    const boxNum = event.target.id[3]
    if ($(event.target).text() === '') {
      if (lastMove === player1) {
        $(event.target).text(player2)
        playerMoves[boxNum] = player2
        lastMove = player2
        currentMove = player2
        $('#user-message').text(`Player X, it's your turn!`)
        onUpdateGame(boxNum, currentMove, over)
      } else {
        $(event.target).text(player1)
        playerMoves[boxNum] = player1
        lastMove = player1
        currentMove = player1
        $('#user-message').text(`Player O, it's your turn!`)
        onUpdateGame(boxNum, currentMove, over)
      }
    }
    xWins()
    oWins()
    const preventDouble = function (event) {
      if (playerMoves[boxNum] !== '') {
      }
    }
    if (playerMoves.every(valueExists)) {
      gameDraw()
    }
    preventDouble()
    // console.log(playerMoves)
  }
}
const gameDraw = function () {
  if (gameWinner === false) {
    $('#user-message').text(`Game Over, it's a Draw!`)
    api.gameOver(store.game.id)
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
  onGetGames,
  onCreateGame,
  onGetGame,
  onUpdateGame,
  playBox,
  xWins,
  oWins,
  gameDraw
}
