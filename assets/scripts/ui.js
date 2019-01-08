'use strict'
const store = require('./store')

const onSignUpSuccess = (responseData) => {
  $('#user-message').text(`Successfully signed up as ${responseData.user.email}!`)
  $('#user-message').css('color', 'green')
  $('#game-board').show()
  $('#games-index').show()
  $('#create-game').show()
  $('#change-password').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
}
const onSignUpFailure = () => {
  $('#user-message').text('Error on signup, please try again!')
  $('#user-message').css('color', 'red')
}

const onSignInSuccess = (responseData) => {
  $('#user-message').text(`Successfully signed in as ${responseData.user.email}!`)
  $('#user-message').css('color', 'green')
  store.user = responseData.user
  $('#game-board').show()
  $('#games-index').show()
  $('#create-game').show()
  $('#change-password').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
}

const onSignInFailure = () => {
  $('#user-message').text('Error on sign in, please try again!')
  $('#user-message').css('color', 'red')
}

const onSignOutSuccess = () => {
  $('#user-message').text(`Successfully signed out!`)
  $('#user-message').css('color', 'green')
  store.user = null
  $('#game-board').hide()
  $('#games-index').hide()
  $('#create-game').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
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

const onGetGamesSuccess = function (response) {
  const games = response.games
  // clear content to make room for book list
  $('#user-message').html('Here are all your games')
  games.forEach(function (games) {
    const gamesHTML = (`
      <h4>${games.id}</h4>
      <p>${games.cells}</p>
      <p>${games.over}</p>
      `)
    $('#user-message').append(gamesHTML)
  })
}

const onGetGamesFailure = function () {
  $('#user-message').html('Can not grab list of games, please try again')
}

const onCreateGameSuccess = function (response) {
  store.game = response.game
  $('#user-message').html('Game Created, Have Fun!')
}

const onCreateGameFailure = function () {
  $('#user-message').html('Request failed, please try again')
}

// const onGetGameSuccess = function () {
//   $('#user-message').html('Here is the game you requested')
//
// }
//
// const onGetGameFailure = function () {
//   $('#content').html('Request failed, please try again')
//   // $('#book-show input').val('')
// }

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onGetGamesSuccess,
  onGetGamesFailure,
  onCreateGameSuccess,
  onCreateGameFailure
}
