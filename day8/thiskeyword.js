console.log(this);

var user ={
    firstname:"jhon",
    courseid : 4,
    getCoursecount: function(){
        console.log("LINE 7",this)
    },

};
user.getCoursecount();