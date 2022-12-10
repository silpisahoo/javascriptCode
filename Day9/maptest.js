var myMap = new Map();

myMap.set(0 , "uno");
myMap.set(0 , "dos");
myMap.set(0 , "tres");
myMap.set(0 , "cuatro");

console.log("myMap");

for(let key of myMap.keys()){
    console.log(`key is ${key}`);
}
for(let value of myMap.values()){
    console.log(`value is ${value}`);
}
for(let [key , value] of myMap){
    console.log(`key is : ${key} and value is ${value}`);
}