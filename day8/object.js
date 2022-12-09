var user = function (firstname ,getCoursecount){
    this.firstname = firstname;
    this.coursecount = this.coursecount;
    this.getCoursecount = function (){
        console.log(`course count is:${this.coursecount}`);


    };

};
var silpi = new user ("silpi",2)
console.log(silpi);
var sulekha = new user ("sulekha",1)
console.log(sulekha)