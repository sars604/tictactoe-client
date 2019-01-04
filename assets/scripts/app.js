'use strict'
const events = require('./events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // click on box and add x or o
  $('#box1').on('click', events.playBox1)
  $('#box2').on('click', events.playBox2)
  $('#box3').on('click', events.playBox3)
  $('#box4').on('click', events.playBox4)
  $('#box5').on('click', events.playBox5)
  $('#box6').on('click', events.playBox6)
  $('#box7').on('click', events.playBox7)
  $('#box8').on('click', events.playBox8)
  $('#box9').on('click', events.playBox9)
})
