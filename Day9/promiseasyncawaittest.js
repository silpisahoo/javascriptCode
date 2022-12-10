//Promise async and await in javascript

const uno = () => {
    console.log("i am one");
}

const dos = () => {
    return new Promise((resolve , reject) =>{
        setTimeout ( () =>{
            resolve("i am two");
    }, 3000 );
});
};



const tres = () => {
    console.log("i am one");
}

const callMe = async () =>{
    let valueOne = uno ();
        console.log(valueOne)


    let valueTwo = await dos ();
        console.log(valueTwo)

        let valueThree = tres ();
        console.log(valueThree)
}
callMe();