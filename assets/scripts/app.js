'use strict'
const events = require('./events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$('#game-board').hide()
$('#games-index').hide()
$('#create-game').hide()
$('#change-password').hide()

$(() => {
  // $('#game-board').on('click', events.playBox)
  $('#box0').on('click', events.playBox)
  $('#box1').on('click', events.playBox)
  $('#box2').on('click', events.playBox)
  $('#box3').on('click', events.playBox)
  $('#box4').on('click', events.playBox)
  $('#box5').on('click', events.playBox)
  $('#box6').on('click', events.playBox)
  $('#box7').on('click', events.playBox)
  $('#box8').on('click', events.playBox)
  // user sign up
  $('#sign-up').on('submit', events.onSignUp)
  // user sign in
  $('#sign-in').on('submit', events.onSignIn)
  // user sign Out
  $('#sign-out').on('click', events.onSignOut)
  // user change password
  $('#change-password').on('submit', events.onChangePassword)
  // get index of games
  $('#games-index').on('click', events.onGetGames)
  // create a new game
  $('#create-game').on('click', events.onCreateGame)
})
