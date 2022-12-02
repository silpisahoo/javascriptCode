let day = 'tuesday'
console.log(day.length)
let subday = day.slice(0.4)
console.log(subday)
console.log(subday[1])

//split method (tus   day)
let splitday = day.split("s")
console.log(splitday)
console.log(splitday[1].length)
console.log(splitday[1].trim().length)// here used trim method

//to find the gap between 2 dates used parseint method

let date = '23'
let nextdate = '27'
let diif = parseInt(nextdate) - parseInt(date)
console.log(diif)
diif.toString()

let newQuote =day+"is funday"
console.log(newQuote)
let val = newQuote.indexOf("day",5)
console.log(val)

//how may times day is repeated
let count=0
let value=newQuote.indexOf("day")
while(value == -1){
    count++
    value=newQuote.indexOf("day",val+1)
}
console.log(count)
