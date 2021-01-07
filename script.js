var todaysDate = $('#currentDay')

function today () {
  console.log(dayjs())
  var today = dayjs().format('dddd')
  console.log(today)
  var hour = dayjs().format('h')
  console.log(hour)
}
today()