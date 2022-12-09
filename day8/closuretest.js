function init() {
    var firstname = "silpi";
    console.log("i am init");
    function sayFirstname(){
        console.log(firstname)
    }
    return sayFirstname();
}
var value = init();
//value();