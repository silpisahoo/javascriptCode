var marks = Array(6)
var marks=[20,30,40,12,32]
console.log(marks[3])
marks2=[45]
console.log(marks)
console.log(marks.length)
marks.push(66)
console.log(marks)
marks.pop()
marks.unshift(12)
console.log(marks)
console.log(marks.lastIndexOf(100))
console.log(marks.includes(120))
var sum=0
for(let i=0;i<marks.length;i++)
{
//console.log(marks[i])
sum= sum+marks[i]
}
console.log(sum)
let total =marks.reduce((sum,marks)=>sum+marks,0)
console.log(total)
var scroes= [12,13,14,15]
var evenscroes = []
for(i=0;i<scroes.length;i++)
{

    if(scroes[i] %2 == 0){
        evenscroes.push(scroes[i])
    }

}
console.log(evenscroes)
let newfilterEvenScroes= scroes.filter(scroes=>scroes%2==0)
console.log(newfilterEvenScroes)


//map array day3 practices
let mappedArray = newfilterEvenScroes.map(scroes=>scroes*3)
console.log(mappedArray)
let totalval = mappedArray.reduce((sum,val)=>sum+val,0)
console.log(totalval)