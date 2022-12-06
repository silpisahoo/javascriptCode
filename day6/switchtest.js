var user = "admin";
switch(user){
    case"admin":
    console.log("you get full access");
//break; //if we comment all the break the it will run one by one
case "subadmin":
    console.log("you have acces to create and delete any course");
//break;
case "testprep":
    console.log("get access to create and delete any test");
//break;
case"user":
    console.log("get access to consume content")
//break;
default:
    console.log("Trail user")
break;

}