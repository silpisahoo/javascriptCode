var user = function (firstname ,getCoursecount){
    this.firstname = firstname;
    this.courseCount = getCoursecount;
    this.getCoursecount = function (){
        console.log(`course count is:${this.coursecount}`);
 };
};
user.prototype.getfirstname = function(){
    console.log(`your firstname is :${this.firstname}`)
};
var silpi = new user ("silpi",2)
silpi.getCoursecount()
silpi.getfirstname()

var sulekha = new user ("sulekha",1)
sulekha.getCoursecount()
sulekha.getfirstname()