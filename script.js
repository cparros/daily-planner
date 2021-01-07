
  
var today = dayjs().format('dddd')

  var month = dayjs().format('MMMM')

  var day = dayjs().format('D')

  var hour = dayjs().format('h')

  var minute = dayjs().format('mm')

  function displayDate () {
    var dateToDisplay = (today + ' ' + month + ' ' + day + ' ' + hour +':'+ minute)
    var todaysDate = $('#currentDay')
    todaysDate.text(dateToDisplay)
}
displayDate()