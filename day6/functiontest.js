var getUserRole = function (name , role){
    switch(role){
        case"admin":
    return`${name} is adime with full access`;
break; //if we comment all the break the it will run one by one
case "subadmin":
    return `${name} is subadmin with acces to create and delete any course`;
break;
case "testprep":
    return`{name} is testprep with access to create and delete any test`;
break;
case"user":
    return`${name} is user with access to consume content`;
break;
     default:
    return`${name}is with Trail user`;
break;
    }
};
console.log(getUserRole("silpi", "testprep"));
//var getRole = getUserRoll("adya" , "user")
//console.log(getRole); 