$(document).ready(function() {
  var storedEvents = JSON.parse(localStorage.getItem("savedEvents"))
  console.log("stored: " + storedEvents)
  var clicks = JSON.parse(localStorage.getItem("savedClicks"))
  console.log("clicks: " + clicks)
  var events = JSON.parse(localStorage.getItem('events'))
  console.log(events)
  var timeStamp = $('.hour')
  console.log(timeStamp)

  timeStamp.each(function(index) {
    if(index === clicks[index])
    console.log($(this).next())
    var savedText = $(this).next()
    savedText.text(events[index].value)
  })

})

// set date hour month and Everything needed
var now = dayjs().format('HH a')
var today = dayjs().format('dddd')
var month = dayjs().format('MMMM')
var day = dayjs().format('D')
var hour = dayjs().format('HH')
var minute = dayjs().format('mm a')
//grab save button
var saveButton = $('button')

//grab text divs
var textDiv = $('.col-md-9')

//to hour div text
var divOne = $('#one').text(dayjs().hour(8).format('HH a'))
var divTwo = $('#two').text(dayjs().hour(9).format('HH a'))
var divThree = $('#three').text(dayjs().hour(10).format('HH a'))
var divFour = $('#four').text(dayjs().hour(11).format('HH a'))
var divFive = $('#five').text(dayjs().hour(12).format('HH a'))
var divSix = $('#six').text(dayjs().hour(13).format('HH a'))
var divSeven = $('#seven').text(dayjs().hour(14).format('HH a'))
var divEight = $('#eight').text(dayjs().hour(15).format('HH a'))
var divNine = $('#nine').text(dayjs().hour(16).format('HH a'))
var divTen = $('#ten').text(dayjs().hour(17).format('HH a'))
var savedSaved =  []
var localClicks = []

var divArray = [divOne, divTwo, divThree, divFour, divFive, divSix, divSeven, divEight, divNine, divTen]

//Create function to display date at the top of the page
function displayDate () {
    var dateToDisplay = (today + ' ' + month + ' ' + day + ', ' + hour +':'+ minute)
    var todaysDate = $('#currentDay')
    todaysDate.text("Today is: " + dateToDisplay)
}
displayDate()

//Functionality to change color of div based on time
divArray.forEach(element => {

  if(element.text() === now) {
    element.next().attr('class', 'col-md-9 present')
   }
   if(element.text() < now) {
    element.next().attr('class', 'col-md-9 past')
   }
   if(element.text() > now) {
    element.next().attr('class', 'col-md-9 future')
   }
}),

function load() {
  $(document).ready(function() {
    var stored = localStorage.getItem('events')
    console.log(stored)
  })
}

saveButton.click(function(e) {
  e.preventDefault()

  var clickIndex = ($(saveButton).index(this))
  var eventsVal = $(this).prev().val()
  var textSaved = $(this).prev().attr('id')
  console.log(textSaved)
  var timeOfDay =  $(this).siblings('.hour').text()
  console.log(timeOfDay)
  
  var prevStore = JSON.parse(localStorage.getItem('events')) || []

  var events = {
    time: timeOfDay,
    value: eventsVal
  }

  prevStore.push(events)

  savedSaved.push(eventsVal)
  localClicks.push(clickIndex)
  console.log(eventsVal)
  console.log(clickIndex)
  localStorage.setItem('events',JSON.stringify(prevStore))
  localStorage.setItem("savedEvents", JSON.stringify(savedSaved))
  localStorage.setItem("savedClicks", JSON.stringify(localClicks))

  var storedEvents = JSON.parse(localStorage.getItem("savedEvents"))
    eventsVal = storedEvents
    console.log(storedEvents)  
})

