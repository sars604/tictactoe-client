'use strict'
// const store = require('../store')

const onSignUpSuccess = (responseData) => {
  $('#user-message').text(`Successfully signed up as ${responseData.user.email}!`)
  $('#user-message').css('color', 'green')
}
const onSignUpFailure = () => {
  $('#user-message').text('Error on signup!')
  $('#user-message').css('color', 'red')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure
}
