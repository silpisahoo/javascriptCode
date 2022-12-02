//object in javascript

let person={
    firstname : "tim",
    lastname :'joe',
    age:24,
    fullname: function(){
        console.log(this.firstname+this.lastname)

    }

}
console.log(person.fullname)
console.log(person.lastname)
console.log(person['lastname'])
person.firstname= 'tim dane'
console.log(person.firstname)
person.gender='male'
console.log(person)
delete person.gender
console.log(person)
