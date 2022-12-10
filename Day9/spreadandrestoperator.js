function sumOne (a,b){
    return a+b;

}
var myA = [5,4];
console.log(sumOne(5 , 4 , 1)); // spread operator

function sumTwo(...args){
    let sum = 0;
    for(const arg of args){
        sum +=arg;

    }
    return sum;
}
console.log(sumTwo(2,3,1.5,7)); // rest op

function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // expected output: 6
  
  console.log(sum.apply(null, numbers));
  // expected output: 6