'use strict'
const store = require('./store')

const onSignUpSuccess = (responseData) => {
  $('#user-message').text(`Successfully signed up as ${responseData.user.email}!`)
  $('#user-message').css('color', 'green')
}
const onSignUpFailure = () => {
  $('#user-message').text('Error on signup!')
  $('#user-message').css('color', 'red')
}

const onSignInSuccess = (responseData) => {
  $('#user-message').text(`Successfully signed in as ${responseData.user.email}!`)
  $('#user-message').css('color', 'green')
  store.user = responseData.user
}
const onSignInFailure = () => {
  $('#user-message').text('Error on sign in, try again!')
  $('#user-message').css('color', 'red')
}

const onSignOutSuccess = () => {
  $('#user-message').text(`Successfully signed out!`)
  $('#user-message').css('color', 'green')
  store.user = null
}
const onSignOutFailure = () => {
  $('#user-message').text('Error on signing out, try again!')
  $('#user-message').css('color', 'red')
}

const onChangePasswordSuccess = () => {
  $('#user-message').text(`Successfully changed password!`)
  $('#user-message').css('color', 'green')
}
const onChangePasswordFailure = () => {
  $('#user-message').text('Error on changing password, try again!')
  $('#user-message').css('color', 'red')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure
}
