'use strict'
const events = require('./events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // click on box and add x or o
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
})
