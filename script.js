// set date hour month and Everything needed

var now = dayjs().format('HH a')

var today = dayjs().format('dddd')
var month = dayjs().format('MMMM')
var day = dayjs().format('D')
var hour = dayjs().format('HH')
var minute = dayjs().format('mm a')

var button = $('button')
button.append('<img src="./floppy-disk.png">')

//to hour div text
var divOne = $('#one').text(dayjs().hour(8).format('HH a'))
console.log(divOne.text())
var divTwo = $('#two').text(dayjs().hour(9).format('HH a'))
console.log(divTwo.text())
var divThree = $('#three').text(dayjs().hour(10).format('HH a'))
console.log(divThree.text())
var divFour = $('#four').text(dayjs().hour(11).format('HH a'))
console.log(divFour.text())
var divFive = $('#five').text(dayjs().hour(12).format('HH a'))
console.log(divFive.text())
var divSix = $('#six').text(dayjs().hour(13).format('HH a'))
console.log(divSix.text())
var divSeven = $('#seven').text(dayjs().hour(14).format('HH a'))
console.log(divSeven.text())
var divEight = $('#eight').text(dayjs().hour(15).format('HH a'))
console.log(divEight.text())
var divNine = $('#nine').text(dayjs().hour(16).format('HH a'))
console.log(divNine.text())
var divTen = $('#ten').text(dayjs().hour(17).format('HH a'))
console.log(divTen.text())

var divArray = [divOne, divTwo, divThree, divFour, divFive, divSix, divSeven, divEight, divNine, divTen]

//Create function to display date at the top of the page
function displayDate () {
    var dateToDisplay = (today + ' ' + month + ' ' + day + ', ' + hour +':'+ minute)
    var todaysDate = $('#currentDay')
    todaysDate.text("Today is: " + dateToDisplay)
}
displayDate()
console.log(hour)
console.log(now)
divArray.forEach(element => {

  if(element.text() === now) {
    console.log(element.text())
    console.log(now)
    element.next().attr('class', 'col-md-9 present')
   }
   if(element.text() < now) {
    console.log(element.text())
    console.log(now)
    element.next().attr('class', 'col-md-9 past')
   }
   if(element.text() > now) {
    console.log(element.text())
    console.log(now)
    element.next().attr('class', 'col-md-9 future')
   }

})


  

  