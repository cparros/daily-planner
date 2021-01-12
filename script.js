// create a document ready function to run when page is loaded and check local storage
$(document).ready(function() {
  //defne events
  var storedEvents = JSON.parse(localStorage.getItem("savedEvents"))
  console.log("stored: " + storedEvents)
  //define index of clicks that were saved
  var clicks = JSON.parse(localStorage.getItem("savedClicks"))
  console.log("clicks: " + clicks)
  //get saved text values
  var events = JSON.parse(localStorage.getItem('events'))
  console.log(events)
  //get all hour divs
  var timeStamp = $('.hour')
  console.log(timeStamp)
  //on each time see if the index of time div matches the index of the save button clicked. If it does populate their text sibling with the events saved value
  timeStamp.each(function(index) {
    if(index === clicks[index])
    console.log($(this).next())
    var savedText = $(this).next()
    savedText.text(events[index].value)
  })

})

// set now, today, month, day, hour, minute 
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

//set hour divs text to correct times
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

//create an array of all time divs
var divArray = [divOne, divTwo, divThree, divFour, divFive, divSix, divSeven, divEight, divNine, divTen]

//Create function to display date at the top of the page
function displayDate () {
    var dateToDisplay = (today + ' ' + month + ' ' + day + ', ' + hour +':'+ minute)
    var todaysDate = $('#currentDay')
    todaysDate.text("Today is: " + dateToDisplay)
}
displayDate()

//Functionality to change color of div based on time by comparing div.text() to time
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

//Create functionality for save button
saveButton.click(function(e) {
  e.preventDefault()
//Define  index of button clicked
  var clickIndex = ($(saveButton).index(this))
//Define the text Value
  var eventsVal = $(this).prev().val()
//Define hour text of sibling ofclicked save button
  var timeOfDay =  $(this).siblings('.hour').text()
//Define previously stored data OR if no data set to empty array
  var prevStore = JSON.parse(localStorage.getItem('events')) || []


//Empty arrays needed for save button
var savedSaved =  []
var localClicks = []

//Define events object to save time and value to
  var events = {
    time: timeOfDay,
    value: eventsVal
  }

// Push previous data, event text value and click index to their arrays
  prevStore.push(events)
  savedSaved.push(eventsVal)
  localClicks.push(clickIndex)

  //set them in local storage
  localStorage.setItem('events',JSON.stringify(prevStore))
  localStorage.setItem("savedEvents", JSON.stringify(savedSaved))
  localStorage.setItem("savedClicks", JSON.stringify(localClicks))

  
  var storedEvents = JSON.parse(localStorage.getItem("savedEvents"))
    eventsVal = storedEvents
})

