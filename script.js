// set date hour month and Everything needed

var now = dayjs().format('h a')

var today = dayjs().format('dddd')
var month = dayjs().format('MMMM')
var day = dayjs().format('D')
var hour = dayjs().format('h')
var minute = dayjs().format('mm a')



//to hour div text
var divOne = $('#one').text(dayjs().hour(08).format('h a'))
console.log(divOne.text())
var divTwo = $('#two').text(dayjs().hour(09).format('h a'))
console.log(divTwo.text())
var divThree = $('#three').text(dayjs().hour(10).format('h a'))
console.log(divThree.text())
var divFour = $('#four').text(dayjs().hour(11).format('h a'))
console.log(divFour.text())
var divFive = $('#five').text(dayjs().hour(12).format('h a'))
console.log(divFive.text())
var divSix = $('#six').text(dayjs().hour(13).format('h a'))
console.log(divSix.text())
var divSeven = $('#seven').text(dayjs().hour(14).format('h a'))
console.log(divSeven.text())
var divEight = $('#eight').text(dayjs().hour(15).format('h a'))
console.log(divEight.text())
var divNine = $('#nine').text(dayjs().hour(16).format('h a'))
console.log(divNine.text())
var divTen = $('#ten').text(dayjs().hour(17).format('h a'))
console.log(divTen.text())

var divArray = [divOne, divTwo, divThree, divFour, divFive, divSix, divSeven, divEight, divNine, divTen]
console.log(divArray)
console.log(divArray.length)
divArray.forEach(element => {
  if(element.text() < now) {
   element.next().attr('class', 'col-md-9 past')
  }
  else if(element.text() === now) {
    element.next().attr('class', 'col-md-9 present')
   }
  else if(element.text() > now) {
    element.next().attr('class', 'col-md-9 future')
   }
})


  

  function displayDate () {
    var dateToDisplay = (today + ' ' + month + ' ' + day + ', ' + hour +':'+ minute)
    var todaysDate = $('#currentDay')
    todaysDate.text("Today is: " + dateToDisplay)
}




displayDate()